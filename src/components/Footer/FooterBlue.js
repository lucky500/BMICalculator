import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  constructor(props) {
    super();
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <div className="container">
            <div className="row footer-top visible-desktop" name="adi_footer_top">
                <div className="col-md-8">
                    <div className="row">
                        <div className="tiles-big" name="adi_tiles_big">
                            <ul className="list-inline ">
                                <a href="http://www.analog.com/en/about-adi.html" target="" name="problem-solvers_53c6a6a3-7113-400e-b299-320e2f5f43ae">
                                    <li className="boxes blue ">
                                        <div className="number">15,000</div>
                                        <div className="fact">Problem Solvers</div>
                                    </li>
                                </a>
                                <a href="http://www.analog.com/en/about-adi.html" target="" name="patents_1350c01c-8972-4593-a0bf-0eb6ba1be865">
                                    <li className="boxes blue ">
                                        <div className="number">4,700+</div>
                                        <div className="fact">Patents Worldwide</div>
                                    </li>

                                </a>
                                <a href="http://www.analog.com/en/about-adi.html" target="" name="customers_af6aaac4-a660-4ac9-86ee-fd52e3adddf9">
                                    <li className="boxes blue ">
                                        <div className="number">125,000</div>
                                        <div className="fact">Customers</div>

                                    </li>

                                 </a>
                                 <a href="http://www.analog.com/en/landing-pages/001/future-turns-fifty.html" target="" name="years_f0252945-126f-49a1-8fbb-1c465709aa1e">
                                     <li className="boxes blue last">
                                         <div className="number">50+</div>
                                         <div className="fact">Years</div>

                                     </li>

                                  </a>

                            </ul>
                            <div className="clearfix">&nbsp;</div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="dividertop">&nbsp;</div>
                                </div>

                             </div>
                             <div className="row">
                                 <div className="col-xs-6 dividerbottom">&nbsp;</div>

                              </div>
                              <div className="row">
                                  <div className="col-xs-12">
                                      <span className="tac header4">Analog Devices. Dedicated to solving the toughest engineering challenges.</span>

                                  </div>

                              </div>

                          </div>

                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="callout">
                            <span className="ntm header3">Ahead of Whats Possible</span>
                            <div className="bg-head">&nbsp;</div>
                            <p>ADI enables our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure and connect. &nbsp;We collaborate with our customers to accelerate the pace of innovation and create breakthrough solutions that are ahead of what’s possible.<br /><br />
                                <a href="http://www.analog.com/en/landing-pages/001/ahead-of-whats-possible.html">See the Innovations</a>
                            </p>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
  }
}

module.exports = Footer;
