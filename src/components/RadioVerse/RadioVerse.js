import React from 'react';
import './radioverse.css';

class RadioVerse extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      radioVerseItems:[
        {
          title:'Introducing RadioVerse',
          image:'http://www.analog.com/-/media/analog/en/home/spot-lights/introducing-radioverse.jpg?la=en',
          link:'http://www.analog.com/en/applications/technology/sdr-radioverse-pavilion-home.html#video'
        },
        {
          title:'Explore Wideband Transceivers',
          image:'http://www.analog.com/-/media/analog/en/home/spot-lights/explore-wideband-transceivers.jpg?la=en',
          link:'http://www.analog.com/en/applications/technology/sdr-radioverse-pavilion-home/wideband-transceivers.html'
        },
        {
          title:'Explore Ultra Low Power Transceivers',
          image:'http://www.analog.com/-/media/analog/en/home/spot-lights/explore-ultralow-power-transceivers.jpg?la=en',
          link:'http://www.analog.com/en/applications/technology/sdr-radioverse-pavilion-home/ultralow-power-transceivers.html'
        }
      ]
    };
  }

  render() {
    return (
    <div className="container radioverse">
      <div className="row">
            <div className="col-md-12">
                <div className="clearfix">
                    <figure className="text-center">
                      <img alt="HR White" src="http://www.analog.com/-/media/analog/en/landing-pages/sdr-radioverse-pavilion/section_divider_white.jpg?la=en&amp;h=90&amp;w=938" />
                    </figure>
                    <div className="text-center">
                      <a href="http://www.analog.com/en/applications/technology/sdr-radioverse-pavilion-home.html">
                        <img alt="RadioVerse" src="http://www.analog.com/-/media/analog/en/home/spot-lights/radioverse_logo.jpg?la=en" />
                      </a>
                    </div>
                    <h4 className="text-center">
                      RadioVerse offers market leading wireless communication technology and a robust design environment that helps you solve the toughest radio communication challenges.
                    </h4>
                </div>
            </div>
        </div>

        <div className="row radioverse-list">
        {this.state.radioVerseItems.map((item) =>
          <div className="col-md-4" key={item.title}>
              <figure>
                <a href={item.link}>
                  <img alt="Introducing RadioVerse" src={item.image} className="img-responsive" />
                </a>
              </figure>
              <h4 className="text-center">
                  <a href={item.link}>{item.title}</a>
              </h4>
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default RadioVerse;
