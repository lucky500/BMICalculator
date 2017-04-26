import React from 'react';

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
      console.log('here');
      this.setState({
          searchOn: true,
      })
  }
  searchForm = () => {
      return (
          <div>
          <input type="text" placeholder="Search" />
          <a href="#" className={this.state.searchOn ? "xin" : "xout"}><span className="sr-only">Clear</span><i className="fa fa-remove"></i></a>
          <a href="#" className={this.state.searchOn ? "searchin" : "search"}><span className="sr-only">Search</span><i className="fa fa-search"></i></a>
          </div>
      );
  }

  render() {
      return(
          <div>
              <form onFocus={this.searchOn} className={this.state.searchOn ? "searchon" : "searchoff"}>
                  {this.searchForm()}
               </form>
          </div>
        )
    }
}

export default Search;
