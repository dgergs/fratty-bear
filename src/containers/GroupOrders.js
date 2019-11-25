import React from 'react';
import '../css/style.css';
import '../css/groupOrders.css';
import ImageSeries from '../components/ImageSeries';

const images = [require('../images/stock_1.jpg'), require('../images/stock_2.jpg'), require('../images/stock_3.jpg'), require('../images/stock_4.jpg')];

class GroupOrders extends React.Component {
  render() {
    let link = <a href='https://dreygerger.typeform.com/to/CTpPof'>here</a>;
    return (
      <div>
          <h1>Group Orders</h1>
          <div class="section">
            <div class="left">
              <h1>What's Included</h1>
            </div>
            <div class="right">
              <h2>Free Design Services</h2>
              <p>Just give our graphic artist some basic details to go off of and we’ll take care of the rest. We’ll go back and forth with you until your completely satisfied with your design! Contact us {link} or email us at <a href="mailto:contact@frattybear.com">contact@frattybear.com</a>.</p>
              <h2>Philanthropy Donation</h2>
              <p>For every philanthropy shirt order with our organization, we donate 5% of profits to the non-profit of your choice!</p>
            </div>
          </div>
          <ImageSeries images={images} />
          <div class="section">
            <div class="left">
              <h1>Loyalty Program</h1>
            </div>
            <div class="right">
              <p>Welcome to the Fratty Bear Family! Our loyalty program is simple:</p>
              <div class="loyaltySection">
                <p class="loyaltyNumber">2</p>
                <p>On just your second order, your house will receive <strong>free customized rush cards</strong> for your next rush season.</p>
              </div>
              <div class="loyaltySection">
                <p class="loyaltyNumber">5</p>
                <p>On your fifth order, your house will receive a free 6 x 2 foot <strong>vinyl banner</strong>.</p>
              </div>
              <div class="loyaltySection">
                <p class="loyaltyNumber">7</p>
                <p>On your seventh order, you get <strong>free polos</strong> for your executive board.</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default GroupOrders;