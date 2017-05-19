import React from 'react';
import './search.css';

//const styles = {}

class Search extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: this.props.active,
        searchOn: false,
    }
  }

  componentDidMount() {
      //console.log('Header', this);
  }

  componentWillReceiveProps(nextProps) {
      //console.log('next Props Header:', nextProps);
  }

  searchOn = () => {
      this.setState({
          searchOn: true,
      })
  }
  searchOff = () => {
      this.setState({
          searchOn: false,
      })
  }
  searchForm = () => {
      if(this.state.searchOn) {
          return (
              <div>
                  <input type="text" placeholder="Search" className={'inputin'} />
                   <a href="#" className={this.state.searchOn ? "searchin" : "search"}><span className="sr-only">Search</span><i className="fa fa-search"></i></a>
                  <a href="#" className={this.state.searchOn ? "xin" : "xout"}><span className="sr-only">Clear</span><i className="fa fa-remove"></i></a>
                  <div className={"line"}>
                      <span className="cross">Cross Reference Search</span>
                      <span className="tips">Search Tips</span>
                  </div>
          </div>
          );
      } else {
          return(
          <div>
              <input type="text" placeholder="Search" />
              <a href="#" className={"xout"}><span className="sr-only">Clear</span><i className="fa fa-remove"></i></a>
              <a href="#" className={"search"}><span className="sr-only">Search</span><i className="fa fa-search"></i></a>
              <div className={"line"}></div>
          </div>
          )
      }
  }

  render() {
      return(
          <div className={'searchstate'}>
              <form onFocus={this.searchOn} onBlur={this.searchOff} className={this.state.searchOn ? "searchon" : "searchoff"}>
                  {this.searchForm()}
               </form>
          </div>
        );
    }
}

export default Search;
