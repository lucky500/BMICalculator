import React from 'react';
import Carousel from '../../components/Carousel';
import NewProducts from '../../components/NewProducts';
import FooterBlue from '../../components/Footer/FooterBlue';

class Contact extends React.Component {

    constructor (props) {
      super(props);
      this.state = {

      }
    }

    componentDidMount() {
        //console.log('Home View Props', this.props);

    }

    componentWillReceiveProps(nextProps) {
        //console.log('next Props:', nextProps);
    }
  render() {
      return(
          <div>
              <Carousel />
              <NewProducts />
              <FooterBlue />
          </div>
        )
    }
}

export default Contact;
