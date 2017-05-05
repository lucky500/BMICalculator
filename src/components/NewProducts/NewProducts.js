import React from 'react';
import './newproducts.css';
import AD4003 from '../../img/AD4003.jpg';


//import { NavDropdown, MenuItem } from 'react-bootstrap';

class NewProducts extends React.Component {

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
        <div className="new-products-component">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <h4>NEW PRODUCTS</h4>
                <div className="featured-new-products-container clearfix">
                  <a href="#">
                    <div className="product-description">
                      <p><span>AD4003</span></p>
                      <p>18-Bit, 2 MSPS Precision SAR Differential ADC</p>
                    </div>
                    <div className="product-image">
                      <img src={AD4003} alt="" className="img-responsive" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <li>
                  <a href="#">
                    <span>ADXL251 </span>
                    Dual-Axis, 60 g to 480 g Sensor with SPI and PSI5
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>ADL7003 </span>
                    50 GHz to 95 GHz, GaAs, pHEMT, MMIC, Wideband Low Noise Amplifier
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>HMC906A-DIE </span>
                    GaAs pHEMT MMIC 2 Watt Power Amplifier, 27.3 - 33.5 Ghz
                  </a>
                </li>
              </div>
              <div className="col-xs-12 col-md-4">
                <li>
                  <a href="#">
                    <span>AD9208 </span>
                    14-Bit, 3GSPS, JESD204B, DUAl Analog-to-Digital Converter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>AD6688 </span>
                    RF Diversity and 1.2GHz BW Observation Receiver
                  </a>
                </li>
                <li className="text-center">
                  <a href="#" className="btn">
                    VIEW ALL NEW PRODUCTS
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewProducts;
