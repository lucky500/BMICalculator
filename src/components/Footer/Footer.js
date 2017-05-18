import React from 'react';
import './Footer.css';
import India from '../../img/mobile/map_india.jpg'
import Korea from '../../img/mobile/map_korea.jpg'
import Singapore from '../../img/mobile/map_singapore.jpg'
import Taiwan from '../../img/mobile/map_taiwan.jpg'
import English from '../../img/mobile/language_en.jpg';
import Chinese from '../../img/mobile/language_cn.jpg';
import Japanese from '../../img/mobile/language_ja.jpg';
import Russian from '../../img/mobile/language_ru.jpg';
import FooterLogo from '../../img/mobile/footer_logo.gif';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false,
    };
  }

  handleClick() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    })
  }

  componentWillMount() {

  }

  render() {
    return (
        <footer className="footer">
          <section className="container">
            <div className="footer-top">
              <div className="row hidden-xs hidden-sm">
                <div className="col-sm-9 col-lg-8">
                  <div className="row">
                    <div className="col-xs-3">
                      <div className="text-xs-center">
                        <div className="information-card-block chipped-corner">
                          <blockquote>
                            <p>15,000</p>
                            <p className="facts">Problem Solvers</p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <div className="text-xs-center">
                        <div className="information-card-block chipped-corner">
                          <blockquote>
                            <p>4,700+</p>
                            <p className="facts">Patents Worldwide</p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <div className="text-xs-center chipped-corner">
                        <div className="information-card-block">
                          <blockquote>
                            <p>125,000</p>
                            <p className="facts">Customers</p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <div className="text-xs-center">
                        <div className="information-card-block chipped-corner">
                          <blockquote>
                            <p>50+</p>
                            <p className="facts">Years</p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 dividertop"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 dividerbottom"></div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 text-white">
                      <p className="blue-box-text">
                        Analog Devices. Dedicated to solving the toughest engineering challenges.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-lg-4">
                  <h5>
                    Ahead of What&#39;s Possible
                  </h5>
                  <div className="callout-line">&nbsp;</div>
                  <p>
                    ADI enables our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure and connect.  We collaborate with our customers to accelerate the pace of innovation and create breakthrough solutions that are ahead of what’s possible.
                  </p>
                  <p>See the innovations</p>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-xs-12 col-sm-4 col-lg-3 social-section">
                  <div className="social">
                    <div className="toggle-heading">
                      <div className="hidden-xs header-4">Social</div>
                      <a className="visible-xs" role="button" data-toggle="collapse" href="#socialCollapse" aria-expanded="false" aria-controls="socialCollapse">
                       Social
                       <i onClick={this.handleClick} className={this.state.active ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i>
                      </a>
                    </div>
                    <div id="socialCollapse">
                      <ul className="list-group col social-icons">
                        <li className="list-group-item col-xs-12 col-sm-4">
                          <i className="ez-icon">EZ</i>
                        </li>
                        <li className="list-group-item col-xs-12 col-sm-4">
                          <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                        </li>
                        <li className="list-group-item col-xs-12 col-sm-4">
                            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                        </li>
                        <li className="list-group-item col-xs-12 col-sm-4">
                          <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                        </li>
                        <li className="list-group-item col-xs-12 col-sm-4">
                          <i className="fa fa-google-plus fa-lg" aria-hidden="true"></i>
                        </li>
                        <li className="list-group-item col-xs-12 col-sm-4">
                          <i className="fa fa-youtube fa-2x" aria-hidden="true"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-4 quicklinks-section">
                  <div className="toggle-heading">
                    <div className="hidden-xs header-4">Quick Links</div>
                    <a className="visible-xs" role="button" data-toggle="collapse" href="#quickLinksCollapse" aria-expanded="false" aria-controls="quickLinksCollapse">
                      Quick Links
                      <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div id="quickLinksCollapse">
                    <div className="col-xs-12 quicklinks">
                      <ul className="list-group list-group-flush clearfix">
                        <li className="list-group-item">About ADI</li>
                        <li className="list-group-item">Alliances</li>
                        <li className="list-group-item">Analog Dialogue</li>
                        <li className="list-group-item">Careers</li>
                        <li className="list-group-item">Contact us</li>
                        <li className="list-group-item">Investor Relations</li>
                        <li className="list-group-item">News Room</li>
                        <li className="list-group-item">Quality &#38; Reliability</li>
                        <li className="list-group-item">Sales &#38; Distribution</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="visible-xs col-xs-12 global-section">
                  <div className="toggle-heading">
                    <a role="button" data-toggle="collapse" href="#globalCollapse" aria-expanded="false" aria-controls="globalCollapse">
                     Global
                     <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div id="globalCollapse">
                    <p className="visible-xs">Please Select a Region</p>
                    <div className="list-group list-group-flush">
                      <a className="list-group-item" data-toggle="collapse" href="#indiaCollapse" aria-expanded="false" aria-controls="indiaCollapse">India
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a>
                      <div id="indiaCollapse">
                        <img src={India} alt="" />
                      </div>
                      <a className="list-group-item" data-toggle="collapse" href="#koreaCollapse" aria-expanded="false" aria-controls="koreaCollapse">Korea
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a>
                      <div id="koreaCollapse">
                        <img src={Korea} alt="" />
                      </div>
                      <a className="list-group-item" data-toggle="collapse" href="#singaporeCollapse" aria-expanded="false" aria-controls="singaporeCollapse">Singapore
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a>
                      <div id="singaporeCollapse">
                        <img src={Singapore} alt="" />
                      </div>
                      <a className="list-group-item" data-toggle="collapse" href="#taiwanCollapse" aria-expanded="false" aria-controls="taiwanCollapse">Taiwan
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a>
                      <div id="taiwanCollapse">
                        <img src={Taiwan} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-2 language-section">
                  <div className="hidden-xs">
                    <div className="header-4">Languages</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">English</li>
                      <li className="list-group-item">简体中文</li>
                      <li className="list-group-item">日本語</li>
                      <li className="list-group-item">Руccкий</li>
                    </ul>
                  </div>
                  <div className="visible-xs">
                    <div className="toggle-heading">
                      <a role="button" data-toggle="collapse" href="#languagesCollapse" aria-expanded="false" aria-controls="languagesCollapse">
                       Languages
                       <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div id="languagesCollapse">
                      <p className="visible-xs">Please select a Language</p>
                      <div className="list-group list-group-flush">
                        <a className="list-group-item" data-toggle="collapse" href="#englishCollapse" aria-expanded="false" aria-controls="englishCollapse">English
                          <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </a>
                        <div id="englishCollapse">
                          <img src={English} alt="" />
                        </div>
                        <a className="list-group-item" data-toggle="collapse" href="#chineseCollapse" aria-expanded="false" aria-controls="chineseCollapse">简体中文
                          <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </a>
                        <div id="chineseCollapse">
                          <img src={Chinese} alt="" />
                        </div>
                        <a className="list-group-item" data-toggle="collapse" href="#japanaseCollapse" aria-expanded="false" aria-controls="japanaseCollapse">日本語
                          <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </a>
                        <div id="japanaseCollapse">
                          <img src={Japanese} alt="" />
                        </div>
                        <a className="list-group-item" data-toggle="collapse" href="#russianCollapse" aria-expanded="false" aria-controls="russianCollapse">Руccкий
                          <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </a>
                        <div id="russianCollapse">
                          <img src={Russian} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden-xs hidden-sm col-sm-4 col-lg-3">
                  <div>
                    <div className="header-4">NEWSLETTERS</div>
                    <div>
                      Interested in the latest news and articles about ADI products, design tools, training and events? Choose from one of our 12 newsletters that match your product area of interest, delivered monthly or quarterly to your inbox.
                    </div>
                    <div className="control-form">
                      <div className="btn btn-primary btn-small">Sign Up</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bottom-row">
                <div className="col-md-6">
                  <div className="visible-xs">
                    <img src={FooterLogo} alt="" className="footer-logo" />
                  </div>
                  <p className="float-left">1995 - 2017 Analog Devices, Inc. All Rights Reserved</p>
                </div>
                <div className="col-md-6">
                  <div className="links-footer float-right hidden-xs">
                    <a className="nav-link" href="#">Sitemap</a>
                    <a className="nav-link" href="#">Privacy &amp; Security</a>
                    <a className="nav-link" href="#">Terms of Use</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
    )
  }
}

module.exports = Footer;
