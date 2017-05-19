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
          {/* Flickity HTML init */}
            <div className="container">
              <h2>Analog Signal</h2>
              <div className="carousel new-products-carousel" data-flickity='{ "groupCells": true  }'>
                <div className="carousel-cell analog-signals-card">
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
                <div className="carousel-cell analog-signals-card">
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
                <div className="carousel-cell analog-signals-card">
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
                <div className="carousel-cell analog-signals-card">
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
                <div className="carousel-cell analog-signals-card">
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
                <div className="carousel-cell analog-signals-card">
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
                <div className="carousel-cell analog-signals-card">
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
                <div className="carousel-cell analog-signals-card">
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
                <div className="carousel-cell analog-signals-card">
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
          </div>
        )
    }
}

export default Carousel2;
