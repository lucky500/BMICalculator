import React from 'react';
import myAnalog from '../../img/myanalog_logo.png';
import { Link } from 'react-router-dom';
//import { NavDropdown, MenuItem } from 'react-bootstrap';

let data = require('../../data/data.json');

class TopHeader extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: this.props.active,
    }
  }

  componentDidMount() {
      console.log('data', data);

  }

  componentWillReceiveProps(nextProps) {

      //console.log('next Props Header:', nextProps);
  }
    navTime = (x) => {
        //console.log('here', x);
        this.setState({
            active: x,
        });
    }
  render() {
      return(
      <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/*<Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>*/}
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={this.state.active === 1 ? 'active' : ''}>
                <Link to="/" onClick={this.navTime.bind(this, 1)}>
                    <strong>Analog</strong>Dialogue
                </Link>
            </li>
            <li className={this.state.active === 2 ? 'active' : ''}>
                <Link to="/about" onClick={this.navTime.bind(this, 2)}>
                    <strong>Engineer</strong>Zone
                </Link>
            </li>
            <li className={this.state.active === 3 ? 'active' : ''}>
                <Link to="/contact" onClick={this.navTime.bind(this, 3)}>
                    <strong>Wiki</strong>
                    <strong>Linear</strong>.com
                </Link>
            </li>
            <li className={this.state.active === 3 ? 'active' : ''}>
                <Link to="/contact" onClick={this.navTime.bind(this, 3)}>
                    <strong>Linear</strong>.com
                </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <li>
                  <Link to="/cart">
                      <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                  </Link>
              </li>
              <li>
                  <Link to="#" className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i className="fa fa-globe fa-lg" aria-hidden="true"></i>
                    <span className="caret"></span>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">India</a></li>
                    <li><a href="#">Korea</a></li>
                    <li><a href="#">Singapore</a></li>
                    <li><a href="#">Taiwan</a></li>
                  </ul>
              </li>
              <li>
                  <Link to="/careers">
                      <strong>Careers</strong>
                  </Link>
              </li>
              <li>
                  <Link to="#" className="myanalog">
                      <img src={myAnalog} alt="myanalog" />
                      <span className="caret"></span>
                  </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
        )
    }
}

export default TopHeader;
