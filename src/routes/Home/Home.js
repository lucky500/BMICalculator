import React from 'react';
import Carousel from '../../components/Carousel';
import NewProducts from '../../components/NewProducts';
import Carousel2 from '../../components/Carousel2';
import Footer from '../../components/Footer';

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
              <Carousel2 />
          </div>
        )
    }
}

export default Contact;
