import React from 'react';

function Education () {
    return (
       <div className="container mt-5">
      <div className="row">
         <div className="col-6">
            <img src='media/images/images/education.svg' style= {{ width:"90%" }} alt='Education' className='img-fluid' />
            </div>
        <div className="col-6">
          
          <h1 className="mb-3">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education platform in India, is now available on Nivesh Nagar. Access comprehensive courses, expert insights, and interactive tools to master the markets at your own pace.
          </p>

          <a
            href="/dashboard"
            className="text-decoration-none"
          >
            Versity{" "}
            <i className="fa-solid fa-angle-right"></i>
          </a>
          <p className="mt-5">TradingQ&A, the most active trading community in India, is now part of Nivesh Nagar. Join the conversation, ask questions, and learn from experienced traders to enhance your market knowledge and trading skills.</p>
          <a
            href="/dashboard"
            className="text-decoration-none"
          >
            TradingQ&A{" "}
            <i className="fa-solid fa-angle-right"></i>
          </a>

        </div>


          </div>
        </div>
    
  );
}

     
 export default  Education;