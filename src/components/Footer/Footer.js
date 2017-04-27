import React from 'react';

class Footer extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      'content': document.getElementById('footer').innerHTML
    })
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
    )
  }
}

module.exports = Footer;
