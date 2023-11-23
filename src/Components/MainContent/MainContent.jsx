// MainContent.js
import React from 'react';
import './MainContent.css';
import { Person, Box, Envelope, Check2 } from 'react-bootstrap-icons';

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Choose a plan that's just right for you!</h1>
      <div className="plan-options">
        <div className="options-container">
          <div className="monthly-option">Monthly</div>
          <div className="annual-option">Annually</div>
        </div>
      </div>

      {/* Card 1 */}
      <div className="card-container">
        <div className="card">
          <h1>Basic</h1>
          <p className='text'>$89.99/mo</p>
          <h4>$9.99/mo</h4>
          <button className='button1'>Get Started</button>
          <hr />
          <h5>What you'll get:</h5>
          <div className="feature">
            <Person size={20} />
            <h4>Upto 25 users.</h4>
          </div>
          <div className="feature">
            <Box size={20} />
            <h4>Upto 25gb storage.</h4>
          </div>
          <div className="feature">
            <Envelope size={20} />
            <h4>Email support.</h4>
          </div>
          <div className="explore-features">
            <p>Explore Features<span>&gt;</span></p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <h1>Standard</h1>
          <p className='text'>$189.99/mo</p>
          <h4>$99.99/mo</h4>
          <button className='button2'>Get Started</button>
          <hr />
          <h5>What you'll get:</h5>
          <div className="feature">
            <Person size={20} />
            <h4>Upto 50 users.</h4>
          </div>
          <div className="feature">
            <Box size={20} />
            <h4>Upto 60gb storage.</h4>
          </div>
          <div className="feature">
            <Envelope size={20} />
            <h4>Email support+Chat</h4>
          </div>
          <div className="explore-features">
            <p>Explore Features<span>&gt;</span></p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <h1>Premium</h1>
          <p className='text'>$389.99/mo</p>
          <h4>$199.99/mo</h4>
          <button className='button3'>Get Started</button>
          <hr />
          <h5>What you'll get:</h5>
          <div className="feature">
            <Person size={20} />
            <h4>Upto 75 users.</h4>
          </div>
          <div className="feature">
            <Box size={20} />
            <h4>Upto 100gb storage.</h4>
          </div>
          <div className="feature">
            <Envelope size={20} />
            <h4>Email support+Chat+Whatsapp Support</h4>
          </div>
          <div className="explore-features">
            <p>Explore Features<span>&gt;</span></p>
          </div>
        </div>
      </div>
      <div className='Main'>

      <div className=" row d-flex">
  {/* First Column */}
  <div className="column col-lg-2 flex-column">
    <div className="text-box">
      <p>Free Forever</p>
    </div>
    <h1>FREE STARTER</h1>
    <p>The quickest and easiest way to try Protocols with basic functionalities.</p>
    <button className="green-button">Get Started</button>
  </div>

  {/* Second Column */}
  <div className="column col-lg-2 flex-column">
    <div className="features">
      <p>What you'll get:</p>
      <div className="feature">
        <Person size={20} />
        <p>Upto 8 users.</p>
      </div>
      <div className="feature">
        <Box size={20} />
        <p>Upto 3gb storage.</p>
      </div>
      <div className="feature">
        <Envelope size={20} />
        <p>Email support.</p>
      </div>
      <div className="feature">
        <Check2 size={60} />
        <p>Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director, and Team Management included.</p>
      </div>
    </div>
  </div>
</div>
 <div className='row d-flex'>
 {/* First Column */} 
   <div className="column col-lg-2 d-flex">
    <div className="box">
      <p>Free Forever</p>
    </div>
    <h1>Enterprise Plan</h1>
    <p>Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success</p>
    <button className="blue-button">Contact Us</button>
  </div> 

  {/* Second Column */}
  <div className="column col-lg-2 d-flex">
    <div className="features">
      <p>What you'll get:</p>
      <div className="feature">
        <Person size={20} />
        <p>Upto 8 users.</p>
      </div>
      <div className="feature">
        <Check2 size={60} />
        <p>Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director, and Team Management included.</p>
      </div>
    </div>
  </div>
  </div>
</div>   



      </div>

  );
};

export default MainContent;
