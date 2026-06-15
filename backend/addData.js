require('dotenv').config();
const mongoose = require("mongoose");
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

const MY_USER_ID = "6a2eb6e4b5b6eb94e1b3aeed";

mongoose.connect(process.env.MONGO_URL).then(async () => {
  console.log("DB connected for seeding!");

  const userId = new mongoose.Types.ObjectId(MY_USER_ID);

  const tempHoldings = [
    { userId, name: "RELIANCE", qty: 10, avg: 2800, price: 2950, net: "+5.2%", day: "+1.2%" },
    { userId, name: "TCS", qty: 5, avg: 3600, price: 3850, net: "+6.9%", day: "-0.5%" },
    { userId, name: "INFY", qty: 8, avg: 1500, price: 1620, net: "+8.0%", day: "+0.8%" },
    { userId, name: "HDFCBANK", qty: 3, avg: 1700, price: 1780, net: "+4.7%", day: "+0.3%" },
  ];

  const tempPositions = [
    { userId, product: "MIS", name: "RELIANCE", qty: 5, avg: 2900, price: 2950, net: "+1.7%", day: "+0.8%", isLoss: false },
    { userId, product: "CNC", name: "INFY", qty: 10, avg: 1580, price: 1620, net: "+2.5%", day: "+0.8%", isLoss: false },
  ];

  const tempOrders = [
    { userId, name: "RELIANCE", qty: 10, price: 2800, mode: "BUY" },
    { userId, name: "TCS", qty: 2, price: 3850, mode: "SELL" },
  ];

  await HoldingsModel.deleteMany({});
  await HoldingsModel.insertMany(tempHoldings);

  await PositionsModel.deleteMany({});
  await PositionsModel.insertMany(tempPositions);

  await OrdersModel.deleteMany({});
  await OrdersModel.insertMany(tempOrders);

  console.log("✅ Data seeding done!");
  process.exit();
});