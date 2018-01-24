import React from 'react';

class DashboardPage extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      submitted: false
    }
  }
  handleFormSubmit = () => {
    localStorage.setItem('submitted', true);
  }
  handleReset = () => {
    localStorage.clear();
    this.setState(() => ({
      submitted: false
    }));
  }
  componentWillMount () {
    const check = localStorage.getItem('submitted');
    if (check) {
      this.setState(() => ({
        submitted: true
      }));
    }
  }
  render () {
    return (
      <div>
        <div className="landing">
          <div className="landing__left">
            <h1>
              <span id="landing__rick">RICK'S</span>
              <span className="fa-stack fa-lg">
              <i className="fa fa-leaf fa-stack-2x"></i>
              <i className="fa fa-gavel fa-stack-1x"></i>
            </span><br />
              
              LAWN CARE<br />
              AND CARPENTRY
            </h1>
          </div>
          <div className="landing__right">
            <p className="landing__desc">Lawn care, remodeling and carpentry.</p>
            <p className="landing__geo"><i>Services in and around Hyden, Kentucky.</i></p>
          </div>
        </div>
        {
          //begin form section
        }
        <div className="form-section">
          <div className="form-section__left">
          </div>
          <div className="form-section__right">
            <div className="form-section__form-container">
              <h3>Get Estimate</h3>
             
              {this.state.submitted ? 
                <div id="submitted__container">
                  <p className="flash">Your request for an estimate has been submitted.</p>
                  <button 
                    onClick={this.handleReset}
                  id="request--button" className="form-section--submit">Get another estimate</button>
                </div>
                : 
                <form action="https://contact-e-mail-forward-er.herokuapp.com/rick"
                onSubmit={this.handleFormSubmit}
                method="POST">          
                <input type="text" name="name" placeholder="Your name"/><br />
                <input type="email" name="email" placeholder="Email" /><br />
                <input type="text" name="phone" placeholder="Phone number" /><br />
                <textarea name="message" placeholder="Your message"></textarea><br />
                <input className="form-section--submit" type="submit" value="Send" />
                </form>
              }
              
            </div>
          </div>
        </div>
        {
          //begin footer
        }
        <footer>
          <div className="footer-container">
            <div className="footer-container__left">
              <p>Design by <a href="http://www.travisturner.io" target="_blank">Travis Turner</a></p>
            </div>
            <div className="footer-container__right">
    
            </div>
          </div>
        </footer>
      </div>
    );
  }
} 

export default DashboardPage;
