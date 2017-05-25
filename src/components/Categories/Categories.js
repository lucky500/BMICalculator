import React from 'react';
import CategoriesData from '../../data/Categories.json';
import './Categories.css';

class Categories extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Categories:CategoriesData,
      show:this.props.show
    };

    this.hideCategories = this.hideCategories.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.state.show !== nextProps.show){
      this.setState({
        show:nextProps.show,
        hide:false
      });
    }
  }

  hideCategories() {
    this.setState({
      show:false,
      hide:true
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }


  render(){
    return (
      <div className="categories-container" style={{'display':this.state.hide || !this.state.show?'none':'block'}}>
        <div className="emptybar">
        </div>
        <div className="categories-section">
          <div className="row">
            <div className="col-md-12">
              <h3>Categories</h3>
              <ul className="categories-list">
                {
                  this.state.Categories.map((category) =>
                  <li key={category.id}><a href="#">{category.name}</a></li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
          <div className="didyouknow">
          <div className="row categories-section">
            <div className="col-md-12">
              <div className="tabpane rte Product">
                <span className="header1">Did you know?</span>
                <p>ADI holds over 2200 patents, nearly 800 patents pending and has invested over $9 billion in signal processing R&amp;D over the past 50 years.</p>
                <span className="tabpane-close" onClick={this.hideCategories}><a href="#" className="glyphicon glyphicon-chevron-up"></a></span>
              </div>
              <div className="tabpane rte PST">
                <span className="tabpane-close"><a href="#" className="glyphicon glyphicon-chevron-down"></a></span>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default Categories;
