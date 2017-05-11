import React from 'react';
import './Carousel.css';


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
          <div>

          </div>
        )
    }
}

export default Carousel2;
