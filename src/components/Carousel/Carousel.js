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
                    <img src={Banner1} alt="..." className="banner1"/>
                    <div className="carousel-caption">
                      
                    </div>
                  </div>
                  <div className="item">
                    <div className="carousel-hero-area">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-4">
                          <div className="text">
                            <h2>THE CHIRP HEARD 'ROUND THE UNIVERSE</h2>
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
                      </div>
                    </div>
                    <img src={Banner2} alt="..." className="banner2"/>
                    <div className="carousel-caption">
                    </div>
                  </div>
                  <div className="item">
                    <div className="carousel-hero-area">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-4">
                          <div className="text">
                            <h2>THE CHIRP HEARD 'ROUND THE UNIVERSE</h2>
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
                      </div>
                    </div>
                    <img src={Banner3} alt="..." className="banner3"/>
                    <div className="carousel-caption">
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
