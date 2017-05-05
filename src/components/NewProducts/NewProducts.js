import React from 'react';
import 'newproducts.css';


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

  render() {}

  export default NewProducts;
