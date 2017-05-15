import React from 'react';
import './Footer.css';
import English from '../../img/mobile/language_en.jpg';


class Footer extends React.Component {

  constructor(props) {
    super();
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <footer className="footer">
          <section className="container">
            <div className="row hidden-xs hidden-sm">
              <div className="col-xs-8">
                <div className="row">
                  <div className="col-xs-3">
                    <div className="text-xs-center">
                      <div className="information-card-block chipped-corner">
                        <blockquote>
                          <p>9,000</p>
                          <p>Problem Solvers</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-3">
                    <div className="text-xs-center">
                      <div className="information-card-block chipped-corner">
                        <blockquote>
                          <p>2,200</p>
                          <p>Patents</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-3">
                    <div className="text-xs-center chipped-corner">
                      <div className="information-card-block">
                        <blockquote>
                          <p>100,000</p>
                          <p>Customers</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-3">
                    <div className="text-xs-center">
                      <div className="information-card-block chipped-corner">
                        <blockquote>
                          <p>50</p>
                          <p>Years</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="dividertop"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <div className="dividerbottom"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 text-white">
                    <p>
                      Analog Devices. Dedicated to solving the toughest engineering challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-4 text-white">
                <h5>
                  Ahead of What's Possible
                </h5>
                <p>
                  ADI enables our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure and connect.  We collaborate with our customers to accelerate the pace of innovation and create breakthrough solutions that are ahead of what’s possible.
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-lg-3">
                <div className="social">
                  <div>
                    <div className="hidden-xs">Social</div>
                    <a className="btn btn-primary visible-xs" role="button" data-toggle="collapse" href="#socialCollapse" aria-expanded="false" aria-controls="socialCollapse">
                     Social
                    </a>
                  </div>
                  <div id="socialCollapse">
                    <ul className="list-group col">
                      <li className="list-group-item col-xs-12 col-sm-4 fa fa-2x">EZ</li>
                      <li className="list-group-item col-xs-12 col-sm-4 fa fa-facebook-official fa-2x"></li>
                      <li className="list-group-item col-xs-12 col-sm-4 fa fa-twitter-square fa-2x"></li>
                      <li className="list-group-item col-xs-12 col-sm-4 fa fa-linkedin-square fa-2x"></li>
                      <li className="list-group-item col-xs-12 col-sm-4 fa fa-google-plus-square fa-2x"></li>
                      <li className="list-group-item col-xs-12 col-sm-4 fa fa-youtube-square fa-2x"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-lg-3">
                <div>
                  <div className="hidden-xs">Quick Links</div>
                  <a className="btn btn-primary visible-xs" role="button" data-toggle="collapse" href="#quickLinksCollapse" aria-expanded="false" aria-controls="quickLinksCollapse">
                    Quick Links
                  </a>
                </div>
                <div id="quickLinksCollapse">
                  <div className="col-xs-12 col-md-12 col-lg-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">About ADI</li>
                      <li className="list-group-item">Alliances</li>
                      <li className="list-group-item">Analog Dialogue</li>
                      <li className="list-group-item">4link</li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-md-12 col-lg-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">1link</li>
                      <li className="list-group-item">2link</li>
                      <li className="list-group-item">3link</li>
                      <li className="list-group-item">4link</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="visible-xs col-xs-12 col-sm-4 col-lg-3">
                <div className="global-toggle-heading">
                  <a className="global_btn" role="button" data-toggle="collapse" href="#globalCollapse" aria-expanded="false" aria-controls="globalCollapse">
                   Global
                  </a>
                </div>
                <div id="globalCollapse">
                  <p className="visible-xs">Please Select a Region</p>
                  <div className="list-group list-group-flush">
                    <a className="list-group-item" data-toggle="collapse" href="#indiaCollapse" aria-expanded="false" aria-controls="indiaCollapse">India
                    </a>
                    <div id="indiaCollapse">
                      <img src="#" alt="" />
                    </div>
                    <a className="list-group-item" data-toggle="collapse" href="#koreaCollapse" aria-expanded="false" aria-controls="koreaCollapse">Korea
                    </a>
                    <div id="koreaCollapse">
                      <img src="#" alt="" />
                    </div>
                    <a className="list-group-item" data-toggle="collapse" href="#singaporeCollapse" aria-expanded="false" aria-controls="singaporeCollapse">Singapore
                    </a>
                    <div id="singaporeCollapse">
                      <img src="#" alt="" />
                    </div>
                    <a className="list-group-item" data-toggle="collapse" href="#taiwanCollapse" aria-expanded="false" aria-controls="taiwanCollapse">Taiwan
                    </a>
                    <div id="taiwanCollapse">
                      <img src="#" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-lg-3">
                <div className="hidden-xs">
                  <div>Languages</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">English</li>
                    <li className="list-group-item">简体中文</li>
                    <li className="list-group-item">日本語</li>
                    <li className="list-group-item">Руccкий</li>
                  </ul>
                </div>
                <div className="visible-xs">
                  <a className="btn btn-primary" role="button" data-toggle="collapse" href="#languagesCollapse" aria-expanded="false" aria-controls="languagesCollapse">
                   Languages
                  </a>
                  <div id="languagesCollapse">
                    <p className="visible-xs">Please select a Language</p>
                    <div className="list-group list-group-flush">
                      <a className="list-group-item" data-toggle="collapse" href="#englishCollapse" aria-expanded="false" aria-controls="englishCollapse">English
                      </a>
                      <div id="englishCollapse">
                        <img src="#" alt="" />
                      </div>
                      <a className="list-group-item" data-toggle="collapse" href="#chineseCollapse" aria-expanded="false" aria-controls="chineseCollapse">简体中文
                      </a>
                      <div id="chineseCollapse">
                        <img src="#" alt="" />
                      </div>
                      <a className="list-group-item" data-toggle="collapse" href="#japanaseCollapse" aria-expanded="false" aria-controls="japanaseCollapse">日本語
                      </a>
                      <div id="japanaseCollapse">
                        <img src="#" alt="" />
                      </div>
                      <a className="list-group-item" data-toggle="collapse" href="#russianCollapse" aria-expanded="false" aria-controls="russianCollapse">日本語
                      </a>
                      <div id="russianCollapse">
                        <img src="#" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden-xs hidden-sm col-sm-4 col-lg-3">
                <div>
                  <div>NEWSLETTERS</div>
                  <div>
                    Interested in the latest news and articles about ADI products, design tools, training and events? Choose from one of our 12 newsletters that match your product area of interest, delivered monthly or quarterly to your inbox.
                  </div>
                  <div className="btn btn-primary btn-small">Sign Up</div>
                </div>
              </div>
            </div>
            <div className="row">
              <small className="float-md-left">1995 - 2016 Analog Devices, Inc. All Rights Reserved</small>
              <div className="links-footer float-md-right">
                <a className="nav-link" href="#">Sitemap</a>
                <a className="nav-link" href="#">Privacy &amp; Security</a>
                <a className="nav-link" href="#">Terms of Use</a>
              </div>
            </div>
          </section>
        </footer>
      </div>
    )
  }
}

module.exports = Footer;
