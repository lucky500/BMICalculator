import React from 'react';
import './Carousel.css';
import Banner1 from '../../img/carousel1.jpg';
import Banner2 from '../../img/carousel2.jpg';
import Banner3 from '../../img/carousel3.jpg';

//import { NavDropdown, MenuItem } from 'react-bootstrap';

class Carousel extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: this.props.active,
    }
  }

  componentDidMount() {
      //console.log('Header', this);

  }

  componentWillReceiveProps(nextProps) {

      //console.log('next Props Header:', nextProps);
  }

  render() {
      return(
          <div>
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="false">

                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <div className="carousel-hero-area pannel1">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="text">
                            <h2>FROM DC TO AC TO LEADING-EDGE</h2>
                            <p>ADI's precision mixed-signal processing technology and system-level expertise are helping SolarEdge deliver a critical breakthrough in solar energy.
                            </p>
                            <strong>
                              <a href="#">See how we're taking solar energy mainstream &#62;
                              </a>
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="img-responsive banner1">
                    </div>
                  </div>
                  <div className="item">
                    <div className="carousel-hero-area pannel2">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="text">
                            <h2>ULTRA LOW POWER ADUCM3029 MICROCONTROLLER</h2>
                            <p>FOR IoT applications where power consumption, security,
                              and robustness are key. Full-on at 30&#956;A/MHz, sleep at 
                              750nA.
                            </p>
                            <strong>
                              <a href="#">Better processing, control, and connectivity &#62;
                              </a>
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="img-responsive banner2">
                    </div>
                  </div>
                  <div className="item">
                    <div className="carousel-hero-area pannel3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="text">
                            <h2>THE CHIRP HEARD &#39;ROUND THE UNIVERSE</h2>
                            <p>Analog Devices is proud to have its converters,
                              temperature sensors, op amps and more utilized by LIGO
                              - which listens to the universe of gravitational waves,
                              ripples in the fabric of space-time.
                            </p>
                            <strong>
                              <a href="#">See the Innovations that changed astrophysics &#62;
                              </a>
                            </strong>
                          </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                      </div>
                    </div>
                    <div className="img-responsive banner3">
                    </div>
                  </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
          </div>
        )
    }
}

export default Carousel;
