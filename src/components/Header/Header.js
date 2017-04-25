import React from 'react';
import TopHeader from './TopHeader';
import MidHeader from './MidHeader';
import BottomHeader from './BottomHeader';
//import { NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends React.Component {

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
    navTime = (x) => {
        //console.log('here', x);
        this.setState({
            active: x,
        });
    }
  render() {
      return(
          <div>
              <TopHeader />
              <MidHeader />
              <BottomHeader />
          </div>
        )
    }
}

export default Header;
