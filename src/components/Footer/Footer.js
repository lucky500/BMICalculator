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
        <footer className="footer">
             <div className="row footer-bottom" name="adi_footer_bottom">
                 <div className="col-md-12 clearfix">
                     <div className="col-md-2" name="Footer_Social_Media_Links_eee39a50-a6b0-4426-9c6a-78dd1523c507">
                         <div className="row">
                             <div className="sociallinks">
                                 <span className="header4">
                                     <a href="#" className="footer-collapse dropdown-toggle" data-toggle="dropdown">Social<span className="glyphicon pull-right glyphicon-chevron-down visible-phone"></span></a>

                                 </span>
                                 <ul className="pull-right list-social footer-dropdown-menu">
                                     <li className="ez-color">
                                         <a href="http://ez.analog.com/welcome" target="" title="Join Analog Devices on EngineerZone" name="EngineerZone_d74a8282-8c8e-41a3-b545-de77a972702b"></a>

                                     </li>
                                     <li className="facebook-color">
                                         <a href="http://www.facebook.com/AnalogDevicesInc" target="_blank" title="Visit Analog Devices on Facebook" name="Facebook_b4a835b0-575b-4798-b6d0-9ce86fdc017b"></a>

                                      </li>
                                      <li className="twitter-color">
                                          <a href="https://twitter.com/#!/adi_news" target="_blank" title="Follow Analog Devices on Twitter" name="Twitter_227c82a6-4516-4571-9330-5d41fe62e4cb"></a>

                                      </li>
                                      <li className="linkedin-color">
                                          <a href="http://www.linkedin.com/company/3450" target="_blank" title="Join Analog Devices on LinkedIn" name="LinkedIn_36ed8b9d-d5e9-4480-918c-7461cc99c31e"></a>

                                       </li>
                                       <li className="google-color">
                                           <a href="http://plus.google.com/116502491843999760953/posts" target="_blank" title="Follow us on Google+" name="GooglePlus_dc694c23-ce9a-49d8-9627-7d516c3638d2"></a>

                                       </li>
                                       <li className="youtube-color"><a href="http://www.youtube.com/user/AnalogDevicesInc" target="_blank" title="View Analog Devices on YouTube" name="YouTube_dc3d3499-3062-4b36-932d-780467722fed"></a></li>

                                 </ul>

                                </div>

                            </div>

                        </div>
                        <div className="col-md-4 quick" name="adi_footer_quicklinks">
                            <div className="quicklinks">
                                <span className="header4"><a href="#" className="footer-collapse dropdown-toggle" data-toggle="dropdown">Quick Links<span className="glyphicon pull-right glyphicon-chevron-down visible-phone"></span></a></span>
                                <ul className="list-unstyled footer-dropdown-menu">
                                    <li className=""><a href="http://www.analog.com/en/about-adi.html" target="" title="About ADI" name="About_ADI_a18d047b-e6c9-43eb-ac39-f2433cb55f1f">About ADI</a></li>
                                    <li className=""><a href="http://www.analog.com/en/about-adi/alliances.html" target="" title="Alliances" name="Alliances_3588a8fa-88e8-4753-b76f-320caa7b0feb">Alliances</a></li>
                                    <li className=""><a href="http://www.analog.com/en/analog-dialogue.html" target="" title="Analog Dialogue" name="Analog_Dialogue_41ade380-bf31-4791-8015-2a7cc8211984">Analog Dialogue</a></li>
                                    <li className=""><a href="http://www.analog.com/en/about-adi/careers.html" target="" title="Careers" name="Careers_d3bc9a5a-eaac-4f74-a4eb-9588b983bae8">Careers</a></li>
                                    <li className=""><a href="http://www.analog.com/en/about-adi/contact-us.html" target="" title="Contact us" name="Contact_us_95dc0fe9-dc2d-4f85-81fa-1a49595a3d0d">Contact us</a></li>
                                    <li className=""><a href="http://investor.analog.com/" target="" title="Investor Relations" name="Investor_Relations_2ffc3744-f828-4aa2-8db4-3e3bb8854bb7">Investor Relations</a></li>
                                    <li className=""><a href="http://www.analog.com/en/about-adi/news-room.html" target="" title="News Room" name="News_Room_0b77676a-6e78-428a-b729-3b12f20cb0d0">News Room</a></li>
                                    <li className=""><a href="http://www.analog.com/en/about-adi/quality-reliability.html" target="" title="Quality &amp; Reliability" name="Quality_N_Reliability_9f2071ca-97a4-4e6c-85f8-a28480bc998c">Quality &amp; Reliability</a></li>
                                    <li className=""><a href="http://www.analog.com/en/about-adi/corporate-information/sales-distribution.html" target="" title="Sales &amp; Distributors" name="Sales_N_Distributors_c71f89eb-3bca-4ca9-a79d-73a1172cfa1a">Sales &amp; Distribution</a></li>

                                 </ul>

                             </div>

                         </div>
                         <div id="footer-region-language" className="col-md-2 visible-phone">
                             <div className="accordion-group">
                                 <div className="accordion-heading">
                                     <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo"> Global<span className="glyphicon pull-right glyphicon-chevron-down visible-phone"></span></a>

                                 </div>
                              <div id="collapseTwo" className="accordion-body collapse">
                                  <div className="accordion-inner">
                                      <div className="global-message"> Please Select a Region </div>
                                      <div className="accordion" id="accordion2">
                                          <div className="accordion-group">
                                              <div className="accordion-heading">
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#India"> India<span className="glyphicon pull-right glyphicon-chevron-down visible-phone"></span></a>

                                              </div>
                                              <div id="India" className="accordion-body collapse">
                                                  <div className="accordion-inner">
                                                  <a href="http://www.analog.com/en/landing-pages/001/india-welcome.html">
                                                      <img data-image-source="//assets.analog.com/images/map_india.jpg" className="mobile-images" width="100%" alt="India" />

                                                  </a>
                                                  </div>

                                              </div>

                                           </div>
                                           <div className="accordion-group">
                                               <div className="accordion-heading">
                                                   <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#Korea"> Korea<span className="glyphicon pull-right glyphicon-chevron-down visible-phone"></span></a>

                                               </div>
                                               <div id="Korea" className="accordion-body collapse">
                                                   <div className="accordion-inner">
                                                       <a href="http://www.analog.com/en/landing-pages/001/korea-welcome.html">
                                                           <img data-image-source="//assets.analog.com/images/map_korea.jpg" className="mobile-images" width="100%" alt="Korea" />

                                                       </a>

                                                    </div>

                                                </div>

                                             </div>
                                             <div className="accordion-group">
                                                 <div className="accordion-heading">
                                                     <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#Singapore"> Singapore<span className="glyphicon pull-right glyphicon-chevron-down visible-phone"></span></a>

                                                 </div>
                                                 <div id="Singapore" className="accordion-body collapse">
                                                     <div className="accordion-inner">
                                                         <a href="http://www.analog.com/en/landing-pages/001/singapore-welcome.html">
                                                             <img data-image-source="//assets.analog.com/images/map_singapore.jpg" className="mobile-images" width="100%" alt="Singapore" />

                                                         </a>

                                                      </div>

                                                  </div>

                                                </div>
                                                <div className="accordion-group">
                                                    <div className="accordion-heading"><a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#Taiwan"> Taiwan<span className="glyphicon pull-right glyphicon-chevron-down visible-phone"></span></a></div>
                                                    <div id="Taiwan" className="accordion-body collapse">
                                                        <div className="accordion-inner"><a href="http://www.analog.com/en/landing-pages/001/taiwan-welcome.html"><img data-image-source="//assets.analog.com/images/map_taiwan.jpg" className="mobile-images" width="100%" alt="Taiwan" /></a></div>

                                                    </div>

                                                 </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="accordion-group">
                                    <div className="accordion-heading">
                                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapseLanguage"> Language<span className="glyphicon pull-right glyphicon-chevron-down visible-phone"></span></a>

                                    </div>
                                    <div id="collapseLanguage" className="accordion-body collapse">
                                    <div className="accordion-inner">
                                        <div className="global-message">Please Select a Language</div>
                                        <div className="accordion language-footer-container" id="accordion4">
                                            <div className="accordion-group language-footer-block">
                                                <div className="accordion-heading">
                                                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#English">English<span className="glyphicon  pull-right glyphicon-chevron-down visible-phone"></span></a>
                                                </div>
                                            <div id="English" className="accordion-body collapse">
                                                <div className="accordion-inner language-footer">
                                                    <a href="http://www.analog.com/en/index.html"><img data-image-source="//assets.analog.com/images/language_en.jpg" className="mobile-images" width="100%" alt="English" /></a>
                                                </div>
                                            </div>
                                           </div>
                                           <div className="accordion-group language-footer-block">
                                            <div className="accordion-heading">
                                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#简体中文">
                                                    简体中文<span className="glyphicon  pull-right glyphicon-chevron-down visible-phone"></span>
                                                </a>
                                            </div>
                                            <div id="简体中文" className="accordion-body collapse">
                                                <div className="accordion-inner language-footer">
                                                    <a href="http://www.analog.com/cn/index.html">
                                                        <img data-image-source="//assets.analog.com/images/language_cn.jpg" className="mobile-images" width="100%" alt="简体中文" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-group language-footer-block">
                                            <div className="accordion-heading">
                                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#日本語">
                                                    日本語<span className="glyphicon  pull-right glyphicon-chevron-down visible-phone"></span>
                                                </a>
                                            </div>
                                            <div id="日本語" className="accordion-body collapse">
                                                <div className="accordion-inner language-footer">
                                                    <a href="http://www.analog.com/jp/index.html">
                                                        <img data-image-source="//assets.analog.com/images/language_jp.jpg" className="mobile-images" width="100%" alt="日本語" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-group language-footer-block">
                                            <div className="accordion-heading">
                                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#Руccкий">
                                                    Руccкий<span className="glyphicon  pull-right glyphicon-chevron-down visible-phone"></span>
                                                </a>
                                            </div>
                                            <div id="Руccкий" className="accordion-body collapse">
                                                <div className="accordion-inner language-footer">
                                                    <a href="http://www.analog.com/ru/index.html">
                                                        <img data-image-source="//assets.analog.com/images/language_ru.jpg" className="mobile-images" width="100%" alt="Руccкий" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-2 visible-desktop">
                                                <span className="header4">Languages</span>
                                                <div className="quicklinks" name="adi_footer_languages_quicklinks">
                                                    <ul className="list-unstyled">
                                                        <li><a href="http://www.analog.com/en/" target="" title="English" name="English_2c0dae2c-e343-42a4-8ce2-cd8350c8ec55">English</a></li>
                                                        <li><a href="http://www.analog.com/cn/" target="" title="简体中文" name="Chinese_8f00bfa0-df96-41b4-b43b-9937d78c4452">简体中文</a></li>
                                                        <li><a href="http://www.analog.com/jp/" target="" title="日本語" name="Japanese_28d4203f-f1f1-4a94-acf1-e5023759cda3">日本語</a></li>
                                                        <li><a href="http://www.analog.com/ru/" target="" title="Руccкий" name="Russian_08ad222c-9e19-46af-997d-9e7a12a99c0b">Руccкий</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-4 visible-desktop">
                                                <div className="newsletter" name="Callouts_Newsletter_b24a4bad-d9d0-4b9a-bb7d-149bf3a624cf">
                                                    <span className="header4">Newsletters</span>
                                                    <p>Interested in the latest news and articles about ADI products, design tools, training and events? Choose from one of our 12 newsletters that match your product area of interest, delivered monthly or quarterly to your inbox.</p>
                                                    <div className="control-form">
                                                        <a className="btn btn-primary" name="Newsletter_Sign Up_b24a4bad-d9d0-4b9a-bb7d-149bf3a624cf" href="https://my.analog.com/en/myanalog/manage-updates/manage-newsletters.html">Sign Up</a>
                                                    </div>
                                                </div>
                                                <div className="switch-mobile-view">
                                                    <a href="" id="btn-force-mobile-view" className="btn btn-primary">Switch to mobile view</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 clearfix visible-phone">
                                            <div className="container text-center">
                                                <button type="button" id="btn-force-desktop-view" className="btn btn-primary"> Desktop View </button>
                                            </div>

                                        </div>
                                        <div className="col-md-12">
                                            <div className="row copyright" name="adi_footer_copyright">
                                                <div className="col-md-6">
                                                    <div data-src="//assets.analog.com/images/footer_logo.gif" className="visible-phone">
                                                        <img src="//assets.analog.com/images/footer_logo.gif" alt="Analog Logo" width="100" />
                                                    </div>
                                                    <span className="copy">©</span> 1995 - 2017 Analog Devices, Inc. All Rights Reserved
                                                </div>
                                                <div className="col-md-6 visible-desktop" name="adi_footer_horizontal_links">
                                                    <span>沪ICP备09046653号</span>
                                                    <ul className="list-inline pull-right">
                                                        <li className=""><a href="http://www.analog.com/en/sitemap.html" target="" title="Sitemap" name="Sitemap_b8effdcc-bc20-42ab-af7b-e2a546667326">Sitemap</a></li>
                                                        <li className=""><a href="http://www.analog.com/en/about-adi/landing-pages/001/privacy_security_statement.html" target="" title="Privacy &amp; Security" name="Privacy_N_Security_7bd22b0b-d67b-4530-ae22-266045bc4d73">Privacy &amp; Security</a></li>
                                                        <li className=""><a href="http://www.analog.com/en/about-adi/landing-pages/001/terms_of_use.html" target="" title="Terms of use" name="Terms_of_Use_fd8a5f4a-6e7a-4d1d-9605-56488afcf6c6">Terms of use</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </footer>
        </div>
    )
  }
}

module.exports = Footer;
