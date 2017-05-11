import React from 'react';
import './Carousel2.css';


//import { NavDropdown, MenuItem } from 'react-bootstrap';

class Carousel2 extends React.Component {

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
          <div className="analog-signals-container">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                   <h2>Analog Signal</h2>
                   <div id="carousel-analog-signals" className="carousel slide" data-ride="carousel" data-interval="false">
                      <ol className="carousel-indicators">
                        <li data-target="#carousel-analog-signals" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-analog-signals" data-slide-to="1"></li>
                        <li data-target="#carousel-analog-signals" data-slide-to="2"></li>
                        <li data-target="#carousel-analog-signals" data-slide-to="3"></li>
                        <li data-target="#carousel-analog-signals" data-slide-to="4"></li>
                      </ol>
                      <div className="carousel-inner" role="listbox">
                        <div className="item active">
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                        </div>
                        <div className="item">
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                        </div>
                        <div className="item">
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                        </div>
                        <div className="item">
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                          <div className="analog-signals-card col-xs-12 col-md-3">
                            <span className="header">
                              Press Release
                              <span className="date">APR 17 2017</span>
                            </span>
                            <a href="#">
                              <h3>Analog Devices, Inc. to Report Second Quarter FIscal Year 2017 Financial...</h3>
                            </a>
                            <p>
                              Press release shceduled for 8 a.m. eastern time on May 31, 2017
                            </p>
                          </div>
                        </div>
                      </div>
                      <a className="left carousel-control" href="#carousel-analog-signals" role="button" data-slide="prev">
                        <span className="icon-prev" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="right carousel-control" href="#carousel-analog-signals" role="button" data-slide="next">
                        <span className="icon-next" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Carousel2;
