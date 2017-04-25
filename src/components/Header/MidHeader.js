import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Logo from '../../img/ADI_Logo_AWP.png';

class MidHeader extends React.Component {

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

  }
    navTime = (x) => {
        //console.log('here', x);
        this.setState({
            active: x,
        });
    }
  render() {
      return(
         <div className="midheader">
             <div className="container">
                 <div className="col-md-3">
                     <Link to="#">
                     <img src={Logo} alt="logo" />
                    </Link>
                 </div>
                 <div className="col-md-6">
                     <Search />
                 </div>
             </div>
         </div>
        )
    }
}

export default MidHeader;
