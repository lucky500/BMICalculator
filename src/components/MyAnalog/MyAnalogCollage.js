// Libraries
import React from 'react';
import Axios from 'axios';
import cx from 'classnames';
import { Timeline } from 'react-twitter-widgets'
// Components
import MyAnalogCollageCard from './MyAnalogCollageCard.jsx';
// Styles
import styles from './MyAnalogCollage.css';
//import cardsData from './MyAnalogFlyout.json';
//import userEZDiscusssion from './ProductCategories.json';
//import newProdData from './newproducts.json';

class MyAnalogCollage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'cardsData': null
    }
  }

  ajaxSuccess = (result) => {
    this.setState({ 'cardsData': result });
  }

  //makeAsyncRequest = (url, type) => {
  //  var request = $.ajax({
  //    url: url,
  //    type: 'GET',
  //    dataType: 'jsonp'
  //  });
  //  request.done(res => {
  //    ajaxSuccess(res, type);
  //  });
  //  request.fail((jqXHR, textStatus) => {
  //    console.log(textStatus);
  //  });
  //}

  componentDidMount = () => {
    var ajaxSuccess = this.ajaxSuccess;
    var makeAsyncRequest = this.makeAsyncRequest;
    let userProfile;
    let prodCategories;

    /***
    **Get user Subscribed Data -- AJAX call to fetch the cards Data.
    **/
    let GetUserHomeDataUrl = ADI.Config.GetUserHomeData + '?tiles=orders,resources,Categories,Updates,enewsletters,PSTs';
    $.ajax({
      url: GetUserHomeDataUrl,
      type: 'GET',
      dataType: 'jsonp'
    })
      .done(res => {
        ajaxSuccess(res);
      })
      .fail((jqXHR, textStatus) => {
        console.log(textStatus);
      });
    // makeAsyncRequest(GetUserHomeDataUrl, 'getUserHomeData');

    /**
     * Get user Handle 
     */
    //if (this.state.cardsData != null && this.state.cardsData['EZUserName'] != null) {
    //let getUserIDUrl = 'h ttps://ez.analog.com/api/core/v3/people/username/' + this.state.cardsData['EZUserName'] + '?fields=-resources,id';
    //  var request = $.ajax({
    //    url: url,
    //    type: 'GET',
    //    dataType: 'jsonp',
    //    xhrFields: {
    //      withCredentials: true
    //    }
    //  });
    //  request.done(res => {
    //    console.log(JSON.parse(res));
    //  });
    //  request.fail((jqXHR, textStatus) => {
    //    console.log(textStatus);
    //  });
    //}
    //makeAsyncRequest(getUserIDUrl, 'getUserID');

    // let getSubscribedProductsUrl = 'https ://ez.ana log.com/api/core/v3/con tents?filter=author(/people/20971)';
    //var request = $.ajax({
    //  url: url,
    //  type: 'GET',
    //  dataType: 'jsonp'
    //});
    //request.done(res => {
    //  console.log(JSON.parse(res));
    //});
    //request.fail((jqXHR, textStatus) => {
    //  console.log(textStatus);
    //});
    //makeAsyncRequest(getSubscribedProductsUrl, 'getSubscribedProducts');
  }

  render = () => {
    return (
      <section className='bg-grey'>
        <div className='container container--cards'>
          {/*<div className={cx('row', styles.gettingStartedDiv)}>
            <span className={styles.gettingStartedSpan}>Getting started is easy.</span>&nbsp;&nbsp;<a href='#' className={styles.showmehow} target='_blank'>Show me how&nbsp;></a>
          </div>*/}
          <div className='row row--cards'>
            {this.state.cardsData === null ? <div className={cx(styles.myPageSpinner, 'personalized-content')}></div> :
              <div>
                <div className='col-xs-12 col-lg-4'>
                  <div className='row'>
                    {this.state.cardsData['Updates'] &&
                      <MyAnalogCollageCard
                        title='My Products'
                        futureFeature='false'
                        noItemsLabel='Save any product to MyAnalog and it will appear in this tile.'
                        bgColor='agCorporateBlue'
                        section='myproducts'
                        rootURL={this.state.cardsData['DictionaryUrls'].ADIRoot == null ? window.location.origin : this.state.cardsData['DictionaryUrls'].ADIRoot}
                        noItemsubLabel='Find your products faster!'
                        linksCount={this.state.cardsData['Updates'] ? this.state.cardsData['Updates'].length : ''}
                        card={this.state.cardsData['Updates']}
                        seeall={this.state.cardsData['DictionaryUrls'].ProductSeeAll ? this.state.cardsData['DictionaryUrls'].ProductSeeAll : '#'}
                        isExistFlag={this.state.cardsData['Updates'] !== null ? (this.state.cardsData['Updates'].length != 0 ? true : false) : false}
                      />
                    }
                  </div>
                  {/*<div className='row'>
                    this.state.cardsData['Updates'] &&
                      <MyAnalogCollageCard
                        title='EngineerZone Discussions'
                        noItemsLabel='No Discussions to display.'
                        futureFeature='false'
                        seeall={this.state.cardsData['EZUserName'] != null ? 'ht tps://ez.a nalog.com/people/' + this.state.cardsData['EZUserName'] + '/activity' : ''}
                        noItemsubLabel='Find your products faster!'
                        bgColor='agCorporateLtGreen'
                        section='myezdiscussions'
                        rootURL={this.state.cardsData['DictionaryUrls'].ADIRoot}
                        linksCount={this.state.cardsData['Updates'] ? this.state.cardsData['Updates'].length : ''}
                        card={this.state.cardsData['Updates']}
                        isExistFlag={this.state.cardsData['Updates'] ? true : false} />
                   
                  </div>*/ }

                  <div className='row'>
                    {
                      this.state.cardsData['Orders'] &&
                      <MyAnalogCollageCard
                        title='My Orders'
                        futureFeature='false'
                        noItemsLabel='You have no orders in your cart.'
                        ItemsLabel='Your order history'
                        bgColor='agCorporateDkgray'
                        card={this.state.cardsData['Orders']}
                        seeall={this.state.cardsData['DictionaryUrls'].OrderSeeAll != '' ? this.state.cardsData['DictionaryUrls'].OrderSeeAll : '#'}
                        section='myorders'
                        rootURL={this.state.cardsData['DictionaryUrls'].OrderDetails == null ? window.location.origin : this.state.cardsData['DictionaryUrls'].OrderDetails}
                        linksCount={this.state.cardsData['Orders'] ? this.state.cardsData['Orders'].length : ''}
                        isExistFlag={this.state.cardsData['Orders'] !== null ? (this.state.cardsData['Orders'].length != 0 ? true : false) : false}
                      />
                    }
                  </div>
                  <div className='row'>
                    <MyAnalogCollageCard
                      title='ADI New Products'
                      noItemsLabel=''
                      linksCount={this.state.cardsData['ParametricSearches'] ? this.state.cardsData['ParametricSearches'].length : ''}
                      futureFeature='true'
                      section='future2'
                      bgColor='agCorporateDkgray'
                      card={this.state.cardsData['ParametricSearches']}
                      isExistFlag={this.state.cardsData['ParametricSearches'] !== null ? (this.state.cardsData['ParametricSearches'].length != 0 ? true : false) : false}
                      />
                  </div>
                </div>
                <div className='col-xs-12 col-lg-4'>
                  <div className='row'>
                    {this.state.cardsData['Resources'] &&
                      <MyAnalogCollageCard
                        futureFeature='false'
                        title='My Resources'
                        section='myresources'
                        noItemsLabel='Save a page to MyAnalog and it will appear in this tile.'
                        linksCount={this.state.cardsData['Resources'] ? this.state.cardsData['Resources'].length : ''}
                        bgColor='agCorporateOrange'
                        rootURL={this.state.cardsData['DictionaryUrls'].ADIRoot}
                        seeall={this.state.cardsData['DictionaryUrls'].ResourceSeeAll != '' ? this.state.cardsData['DictionaryUrls'].ResourceSeeAll : '#'}
                        noItemsubLabel='Add shortcuts to pages you visit often!'
                        card={this.state.cardsData['Resources']}
                        rootURL={this.state.cardsData['DictionaryUrls'].ADIRoot == null ? window.location.origin : this.state.cardsData['DictionaryUrls'].ADIRoot}
                        isExistFlag={this.state.cardsData['Resources'] !== null ? (this.state.cardsData['Resources'].length != 0 ? true : false) : false}
                      />
                    }
                  </div>
                  <div className='row'>
                    
                      <MyAnalogCollageCard
                        title='My Newsletters'
                        futureFeature='false'
                        noItemsLabel='When you subscribe to a newsletter it will appear in this tile.'
                        noItemsubLabel='You can manage subscriptions in your MyAnalog account.'
                        ItemsLabel='You are subscribed to these newsletters'
                        linksCount={this.state.cardsData['Newsletter'] ? this.state.cardsData['Newsletter'].length : ''}
                        bgColor='agCorporateDkPurple'
                        rootURL={this.state.cardsData['DictionaryUrls'].ADIRoot == null ? window.location.origin : this.state.cardsData['DictionaryUrls'].ADIRoot}
                        section='mynewsletters'
                        seeall={this.state.cardsData['DictionaryUrls'].NewsletterSeeAll != '' ? this.state.cardsData['DictionaryUrls'].NewsletterSeeAll : '#'}
                        card={this.state.cardsData['Newsletter']}
                        isExistFlag={this.state.cardsData['Newsletter'] !== null ? (this.state.cardsData['Newsletter'].length != 0 ? true : false) : false}
                      />
                   
                  </div>
                  <div className='row'>
                      <MyAnalogCollageCard
                        title='My Parametric Searches'
                        futureFeature='false'
                        linksCount={this.state.cardsData['ParametricSearches'] ? this.state.cardsData['ParametricSearches'].length : ''}
                        noItemsLabel='Save any PST to MyAnalog and it will appear in this tile.'
                        bgColor='agCorporateDkgray'
                        rootURL={this.state.cardsData['DictionaryUrls'].ADIRoot == null ? window.location.origin : this.state.cardsData['DictionaryUrls'].ADIRoot}
                        section='myparametricsearches'
                        seeall={this.state.cardsData['DictionaryUrls'].PSTSeeAll !== '' ? this.state.cardsData['DictionaryUrls'].PSTSeeAll : '#'}
                        card={this.state.cardsData['ParametricSearches']}
                        isExistFlag={this.state.cardsData['ParametricSearches'] !== null ? (this.state.cardsData['ParametricSearches'].length != 0 ? true : false) : false}
                      />
                  </div>

                </div>
                <div className='col-xs-12 col-lg-4'>
                  { /*<div className='row'>
                  this.state.newProdData &&
                      <MyAnalogCollageCard
                        title='ADI New Products'
                        futureFeature='false'
                        noItemsLabel='Save any product category page to your MyAnalog account and new products in that category will show in this tile.'
                        noItemsubLabel='You can add multiple categories'
                        linksCount={this.state.newProdData ? this.state.newProdData.length : ''}
                        bgColor='agCorporateDkblue'
                        card={this.state.newProdData}
                        section='mynewproducts'
                        rootURL={this.state.cardsData['DictionaryUrls'].ADIRoot}
                        seeall={this.state.cardsData['DictionaryUrls'].NewProductsSeeAll !== '' ? this.state.cardsData['DictionaryUrls'].NewProductsSeeAll : '#'}
                        isExistFlag={this.state.newProdData ? true : false}
                      />
                  </div> */}

                  <div className={cx('row', styles.twittermodule)}>
                    <div className={styles.adisntitle}>
                      <a href="https://twitter.com/ADI_News" target="_blank">Join the Conversation
                 </a>
                    </div>
                    <Timeline
                      dataSource={{
                        sourceType: 'profile',
                        screenName: 'adi_news'
                      }}
                      options={{
                        username: 'adi_news',
                        height: '472'
                      }}
                    //onLoad={() => }
                    />
                  </div>

                  <div className='row'>
                    <MyAnalogCollageCard
                      title='ADI New Products'
                      noItemsLabel=''
                      linksCount={this.state.cardsData['Updates'] ? this.state.cardsData['Updates'].length : ''}
                      futureFeature='true'
                      section='future1'
                      rootURL={this.state.cardsData['DictionaryUrls'].ADIRoot == null ? window.location.origin : this.state.cardsData['DictionaryUrls'].ADIRoot}
                      bgColor='agCorporateDkblue'
                      card={this.state.cardsData['ParametricSearches']}
                      isExistFlag={this.state.cardsData['ParametricSearches'] !== null ? (this.state.cardsData['ParametricSearches'].length != 0 ? true : false) : false}
                    />
                  </div>

                </div>
              </div>}
          </div>
        </div>
      </section>
    )
  }
}

module.exports = MyAnalogCollage;