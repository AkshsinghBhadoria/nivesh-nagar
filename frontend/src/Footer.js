import React from 'react';
function Footer() {
    return (
        <div className='container mt-5'>
            <div className='row mb-4'>
                <div className='col'>
                    <img src="/media/images/images/nivesh_nagar_logo.svg" alt="nivesh_nagar" height="65" />
                    <p>&copy; 2026 Nivesh Nagar. All rights reserved.</p>
                </div>
                <div className='col'>
                    <p><strong>Company</strong></p>
                    <a href="/about">About</a><br />
                    <a href="/products">Products</a><br />
                    <a href="/pricing">Pricing</a><br />
                    <a href="/referral">Referral Programme</a><br />
                    <a href="/careers">Careers</a><br />
                    <a href="/tech">Nivesh.Tech</a><br />
                    <a href="/press">Press & Media</a><br />
                    <a href="/csr">Nivesh Cares (CSR)</a><br />
                </div>
                <div className='col'>
                    <p><strong>Support</strong></p>
                    <a href="/contact">Contact</a><br />
                    <a href="/support">Support Portal</a><br />
                    <a href="/blog">N-Connect Blog</a><br />
                    <a href="/charges">List of Charges</a><br />
                    <a href="/downloads">Downloads & Resources</a><br />
                </div>
                <div className='col'>
                    <p><strong>Account</strong></p>
                    <a href="/signup">Open an Account</a><br />
                    <a href="/fund-transfer">Fund Transfer</a><br />
                    <a href="/60-day-challenge">60 Day Challenge</a><br />
                </div>
            </div>

            <hr />

            <div className='row'>
                <div className='col-12'>
                    <p style={{ fontSize: "12px", color: "#666" }}>
                        Nivesh Nagar is a paper trading and investment learning platform. 
                        This platform is for educational purposes only and does not offer real 
                        securities broking services. All trades on this platform are simulated 
                        and do not involve real money.
                    </p>
                    <p style={{ fontSize: "12px", color: "#666" }}>
                        Investments in securities market are subject to market risks; read all 
                        the related documents carefully before investing. Nivesh Nagar does not 
                        provide any stock tips or advisory services. Past performance is not 
                        indicative of future results.
                    </p>
                    <p style={{ fontSize: "12px", color: "#666" }}>
                        Attention investors: 1) Always verify information from official sources 
                        before making any investment decisions. 2) Be aware of fraudulent schemes 
                        promising guaranteed returns. 3) Check your securities regularly and keep 
                        your contact details updated with your broker.
                    </p>
                    <p style={{ fontSize: "12px", color: "#666" }}>
                        &copy; 2026 Nivesh Nagar. Built for learning purposes by Aksh Singh Bhadoria. 
                        Inspired by Zerodha Kite. All product names and logos are property of their 
                        respective owners.
                    </p>
                </div>
            </div>

            <hr />

            <div className='row mb-3'>
                <div className='col-12 d-flex flex-wrap gap-3' style={{ fontSize: "12px" }}>
                    <a href="/terms">Terms & Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/disclosure">Disclosure</a>
                    <a href="/investor-attention">For Investor's Attention</a>
                    <a href="/sitemap">Sitemap</a>
                </div>
            </div>
        </div>
    );
}
export default Footer;