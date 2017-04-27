import React from 'react';
import MyAnalogCollage from '../MyAnalog/MyAnalogCollage.jsx';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.store = props.store;
  }

  componentWillMount = () => {
    this.setState({
      'content': document.getElementsByClassName('content')[0].innerHTML
    })
  }

  render = () => {
    return (
      <main>
        <MyAnalogCollage />
        <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
      </main>
    )
  }
}
