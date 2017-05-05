import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  constructor(props) {
    super();
  }

  componentWillMount() {
    this.setState({
      'content': document.getElementById('footer').innerHTML
    })
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.content}}>
        <div>Hello!</div>
      </div>
    )
  }
}

module.exports = Footer;