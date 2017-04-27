// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
// Styles
import styles from './MyAnalogCollage.css';

export default class MyAnalogCollageCard extends React.Component {
  constructor(props) {
    super(props);

    var toBoolean = function (value) {
      var strValue = String(value).toLowerCase();
      strValue = ((!isNaN(strValue) && strValue !== '0') &&
        strValue !== '' &&
        strValue !== 'null' &&
        strValue !== 'undefined') ? '1' : strValue;
      return strValue === 'true' || strValue === '1' ? true : false
    };

    this.state = {
      'isVisible': true, 
      'isMinimized': false,
      'count': this.props.card != null ? this.props.card.length : 0,
      'isNewProducts': this.props.isNewProducts != null ? true : false,
      'shouldClose': false,
      'shouldExpand': false,
      'anglePosition': 'fa-angle-down',
      'isLink': this.props.disableTitle,
      'futureFlag': toBoolean(this.props.futureFeature.toLowerCase()),
      'noItemsubLabel': this.props.noItemsubLabel ? true : false,
      'section': this.props.section ? this.props.section : '',
      'expand': false,
      'lang': $.cookie('website#lang') != null ? $.cookie('website#lang') : 'en'
    }
    this.toggleCard = this.toggleCard.bind(this);
  }

  componentWillMount = () => {
    // console.ADI(this.props.title);
    //console.dir(this.props.card);
  }

  //findDomNodeHandler = (e) => {
  //    var len = document.querySelectorAll('.card-list li').length;
  //    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  //}

  handleClick = (e) => {
    // this.setState({
    // 'isMinimized' : !this.state.isMinimized,
    //  'shouldClose': !this.state.shouldClose
    // })
  }

  cardShowMore = (e) => {
    // this.setState({
    //     'shouldExpand': !this.state.shouldExpand,
    //     'anglePosition': (this.state.anglePosition == 'fa-angle-down')?'fa-angle-up':'fa-angle-down'
    // });
  }

  //expand and collapse each tab 
  toggleCard = (e) => {
    this.setState({
      isMinimized: !this.state.isMinimized,
      expand: !this.state.expand
    });
  }

  render = () => {
    let flag = this.state.shouldExpand ? 'show' : '';
    let cardHeightstyles = null;
    (this.props.isExistFlag && this.props.section == 'myproducts' ? cardHeightstyles = styles.myproductscard : '');
    (this.props.isExistFlag && this.props.section == 'mynewsletters' ? cardHeightstyles = styles.mynewsletterscard : '');
    (this.props.isExistFlag && this.props.section == 'mynewproducts' ? cardHeightstyles = styles.mynewproductscard : '');
    (this.props.isExistFlag && this.props.section == 'myorders' ? cardHeightstyles = styles.myorderscard : '');
    (this.props.isExistFlag && this.props.section == 'myparametricsearches' ? cardHeightstyles = styles.myparametricsearchescard : '');
    (this.props.isExistFlag && this.props.section == 'myresources' ? cardHeightstyles = styles.myresourcescard : '');
    (this.props.isExistFlag && this.props.section == 'myezdiscussions' ? cardHeightstyles = styles.myezdiscussionscard : '');

    return (<div>{this.state.futureFlag ? (
      <div className="col-xs-12">
        {this.props.section == 'future1' && <span className={styles.futureItems1}></span>}
        {this.props.section == 'future2' && <span className={styles.futureItems2}></span>}
      </div>
    ) : (

        <div className="col-xs-12">
          <div className={this.state.shouldClose ? cx(styles.card, styles.cardClose) : styles.card}>
            <div className={this.state.isMinimized ? cx(styles.cardTitle, styles.minimized, styles[this.props.bgColor]) : cx(styles.cardTitle, styles[this.props.bgColor])}>
              <h4 className={styles.cardtitle}>
                {this.props.title}&nbsp;{this.state.count > 0 ? '(' + this.state.count + ')' : ''}
              </h4>
            </div>
            <div className={this.state.isMinimized ? cx(styles.cardContent, styles.expandCard) : cx('cardContent', cardHeightstyles != null ? cardHeightstyles : '')}>
              <ul className={this.props.isExistFlag ? styles.cardList : styles.emptyCard}>
                {this.props.isExistFlag && this.state.section == 'mynewsletters' && this.props.linksCount > 0 && <li className={styles.newsletterExistsTitle}> {this.props.ItemsLabel}</li>}

                {!this.props.isExistFlag ? (
                  <li>
                    {this.state.section == 'myorders' && <div><span className={styles.cart}></span></div>}
                    <strong className={styles.noItemsLabel}>
                      {this.props.noItemsLabel}
                    </strong>
                    <span className={styles.noItemsubLabel}>{this.state.noItemsubLabel ? <i>{this.props.noItemsubLabel}</i> : ''}</span>
                  </li>)
                  :
                  (this.props.card.map((listItem, i) => {
                    return (
                      <li key={i} className={((i > 3) ? (this.state.shouldExpand ? styles.cardListitemShow : styles.hideCardItems) : '')}>
                        {i < 10 &&
                          <div className={styles.listItemsDiv}>
                            <div className={(this.state.section == 'mynewproducts' || this.state.section == 'mynewsletters' || this.state.section == 'myparametricsearches') ? '' : (this.state.section == 'myorders' && i == 0) ? '' : styles.ItemColumn1}>
                              {this.state.section == 'myorders' && i == 0 &&
                                <div className={styles.orderCart}>
                                  <span className={styles.cart}></span>
                                  <span className={styles.orderHistory}>{this.props.ItemsLabel}</span>
                                </div>
                              }
                            </div>
                            <div className={(this.state.section == 'mynewproducts' || this.state.section == 'myresources' || this.state.section == 'myproducts' || this.state.section == 'mynewsletters' || this.state.section == 'myparametricsearches') ? '' : styles.ItemColumn2}>
                              {this.state.section == 'mynewsletters' && listItem.EnglishTitle &&
                                <span>
                                  <a href={listItem.SampleURL} target='_blank' className={cx('pull-left', styles.newslettersCode)}>{listItem.EnglishTitle}</a>
                                  <a target='_blank' className={cx('pull-right', styles.newsletter_unsubscribe)} href={listItem.UnSubscribedLink}>Unsubscribe</a>
                                </span>
                              }
                              <span>
                                <div>
                                  {this.state.section == 'myresources' && listItem.Title &&
                                    <span>
                                      <a target='_blank' href={(listItem.LinkSrc == null) ? this.props.rootURL + '/' + listItem.Title : listItem.LinkSrc}>
                                        {listItem.Title}
                                      </a>
                                    </span>
                                  }
                                  {this.state.section == 'myparametricsearches' && listItem.LinkText &&
                                    <a target='_blank' href={(listItem.LinkSrc == null) ? this.props.rootURL + '/' + listItem.Title : listItem.LinkSrc}>
                                      {listItem.Title}
                                    </a>
                                  }
                                  {this.state.section == 'myorders' &&
                                    <a target='_blank' href={(listItem.LinkSrc == null) ? '#' : this.props.rootURL + listItem.LinkSrc}>
                                      {listItem.ItemCount}&nbsp;Items&nbsp;-&nbsp; {listItem.OrderPrice && listItem.OrderPrice.replace('$', '')}<br />
                                      <span className={styles.orderDate}>{listItem.OrderDate}</span>
                                    </a>
                                  }
                                  {this.state.section == 'myproducts' && listItem.Title &&
                                    <span>
                                      <a target='_blank' href={(listItem.LinkSrc == null) ? this.props.rootURL + '/' + this.state.lang + '/' + listItem.Title : listItem.LinkSrc}>
                                        {listItem.Title}
                                      </a>
                                      &nbsp;|&nbsp;
                                  <a className={styles.datasheet} target='_blank' href={this.props.rootURL + '/' + this.state.lang + '/' + listItem.Title + '/datasheet'}>
                                        Data Sheet
                                  </a>
                                    </span>
                                  }
                                  {this.state.section == 'mynewproducts' && listItem['header'] && listItem['items'].map((data, index) => {
                                    return <span key={index} className={styles.newProductsBorder}>
                                      <a target='_blank' href={data['link'] != null ? data['link'] : '#'}>
                                        {data['title']}
                                      </a>
                                      &nbsp;|&nbsp;
                                    <a className={styles.datasheet} target='_blank' href={this.props.rootURL + '/' + data['title'] + '/datasheet'}>
                                        Data Sheet
                                    </a>
                                      <p>{data['text']}</p>
                                      <strong>{listItem['header']}</strong>
                                    </span>
                                  })
                                    // console.log(listItem['header'], listItem['items']);
                                  }

                                </div>
                                <div>

                                  {listItem.Description &&
                                    <p>
                                      {listItem.Description}
                                    </p>
                                  }
                                  {listItem.subtext &&
                                    <div>
                                      <strong>
                                        {listItem.subtext}
                                      </strong>
                                    </div>
                                  }
                                </div>
                              </span>
                            </div>
                          </div>
                        }
                      </li>
                    )
                  })
                  )
                }
              </ul>
            </div>
            {this.props.isExistFlag && this.state.section == 'myresources' && this.state.count > 5 && <div className={styles.seeAllText}><span> <a href={this.props.seeall} target='_blank'>Edit Resources</a></span> <span className={this.state.expand ? styles.collapseArrow : styles.expandArrow} onClick={this.toggleCard}></span></div>}
            {this.props.isExistFlag && this.state.section == 'myproducts' && this.state.count > 5 && <div className={styles.seeAllText}><span> <a href={this.props.seeall} target='_blank'>Edit Products</a></span> <span className={this.state.expand ? styles.collapseArrow : styles.expandArrow} onClick={this.toggleCard}></span></div>}
            {this.props.isExistFlag && this.state.section == 'mynewsletters' && this.state.count > 5 && <div className={styles.seeAllText}><span> <a href={this.props.seeall} target='_blank'>Edit Newsletters</a></span> <span className={this.state.expand ? styles.collapseArrow : styles.expandArrow} onClick={this.toggleCard}></span></div>}
            {this.props.isExistFlag && this.state.section == 'mynewproducts' && this.state.count > 5 && <div className={styles.seeAllText}><span> <a href={this.props.seeall} target='_blank'>Edit New Products</a></span> <span className={this.state.expand ? styles.collapseArrow : styles.expandArrow} onClick={this.toggleCard}></span></div>}
            {this.props.isExistFlag && this.state.section == 'myparametricsearches' && this.state.count > 5 && <div className={styles.seeAllText}><span> <a href={this.props.seeall} target='_blank'>Edit Parametric Searches</a></span> <span className={this.state.expand ? styles.collapseArrow : styles.expandArrow} onClick={this.toggleCard}></span></div>}
            {this.props.isExistFlag && this.state.section == 'myorders' && this.state.count > 5 && <div className={styles.seeAllText}><span> <a href={this.props.seeall} target='_blank'>Edit Orders</a></span> <span className={this.state.expand ? styles.collapseArrow : styles.expandArrow} onClick={this.toggleCard}></span></div>}
            {this.props.isExistFlag && this.state.section == 'myezdiscussions' && this.state.count > 5 && <div className={styles.seeAllText}><span> <a href={this.props.seeall} target='_blank'>Edit EngineerZone Discussions</a></span> <span className={this.state.expand ? styles.collapseArrow : styles.expandArrow} onClick={this.toggleCard}></span></div>}
          </div>
        </div>)
    }</div>);
  }
}