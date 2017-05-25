import React from 'react';

import RadioVerse from '../../components/RadioVerse';


class Products extends React.Component {

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
              <RadioVerse />
          </div>
        )
    }
}

export default Products;
