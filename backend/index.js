require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "niveshnagar_secret";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(URL)
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log("DB connection error:", err));

// ── MIDDLEWARE ──
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).send("Access denied — login required");
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Invalid or expired token");
  }
};

// ── HOLDINGS ──
app.get("/allHoldings", verifyToken, async (req, res) => {
  let allHoldings = await HoldingsModel.find({ userId: req.user.id });
  res.json(allHoldings);
});

// ── POSITIONS ──
app.get("/allPositions", verifyToken, async (req, res) => {
  let allPositions = await PositionsModel.find({ userId: req.user.id });
  res.json(allPositions);
});

// ── ORDERS ──
app.get("/allOrders", verifyToken, async (req, res) => {
  let allOrders = await OrdersModel.find({ userId: req.user.id });
  res.json(allOrders);
});

// ── NEW ORDER + HOLDINGS + POSITIONS UPDATE ──
app.post("/newOrder", verifyToken, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const userId = req.user.id;

    // Order save karo
    let newOrder = new OrdersModel({ userId, name, qty, price, mode });
    await newOrder.save();

    // ── Holdings update ──
    const existingHolding = await HoldingsModel.findOne({ userId, name });

    if (mode === "BUY") {
      if (existingHolding) {
        const totalQty = existingHolding.qty + qty;
        const newAvg = ((existingHolding.avg * existingHolding.qty) + (price * qty)) / totalQty;
        existingHolding.qty = totalQty;
        existingHolding.avg = Math.round(newAvg);
        existingHolding.price = price;
        await existingHolding.save();
      } else {
        await new HoldingsModel({
          userId, name, qty,
          avg: price, price,
          net: "0%", day: "0%",
        }).save();
      }
    } else if (mode === "SELL") {
      if (existingHolding) {
        existingHolding.qty -= qty;
        if (existingHolding.qty <= 0) {
          await HoldingsModel.deleteOne({ userId, name });
        } else {
          await existingHolding.save();
        }
      }
    }

    // ── Positions update ──
    const existingPosition = await PositionsModel.findOne({ userId, name });

    if (mode === "BUY") {
      if (existingPosition) {
        const totalQty = existingPosition.qty + qty;
        const newAvg = ((existingPosition.avg * existingPosition.qty) + (price * qty)) / totalQty;
        existingPosition.qty = totalQty;
        existingPosition.avg = Math.round(newAvg);
        existingPosition.price = price;
        existingPosition.isLoss = price < existingPosition.avg;
        await existingPosition.save();
      } else {
        await new PositionsModel({
          userId, name, qty,
          avg: price, price,
          product: "CNC",
          net: "0%", day: "0%",
          isLoss: false,
        }).save();
      }
    } else if (mode === "SELL") {
      if (existingPosition) {
        existingPosition.qty -= qty;
        if (existingPosition.qty <= 0) {
          await PositionsModel.deleteOne({ userId, name });
        } else {
          existingPosition.price = price;
          existingPosition.isLoss = price < existingPosition.avg;
          await existingPosition.save();
        }
      }
    }

    res.send("Order placed!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Order failed");
  }
});

// ── SIGNUP ──
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).send("Email already registered");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();
    res.send("Signup successful!");
  } catch (err) {
    res.status(500).send("Signup failed");
  }
});

// ── LOGIN ──
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(401).send("Invalid email or password");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid email or password");
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({ message: "Login successful!", name: user.name, token });
  } catch (err) {
    res.status(500).send("Login failed");
  }
});

app.listen(PORT, () => {
  console.log("App started!");
});