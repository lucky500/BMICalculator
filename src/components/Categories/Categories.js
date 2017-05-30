import React from 'react';
import CategoriesData from '../../data/Categories.json';
import './Categories.css';

class Categories extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Categories:CategoriesData,
      show:this.props.show,
      categoryLevel:0,
      activeCategories:{}
    };

    this.hideCategories = this.hideCategories.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.show !== nextProps.show){
      this.setState({
        show:nextProps.show
      });
    }
  }

  hideCategories() {
    this.setState({
      show:false
    });
  }

  showSubCategories(categoryName,categoryLevel){
    this.setState((prevState)=>{
      var activeCategories = categoryLevel==0?{}:Object.assign(prevState.activeCategories);
      activeCategories[categoryLevel] = categoryName;
      return {activeCategories:activeCategories};
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  renderCategoryHeader(category){
    return (
      !!category === true ?
        <div className="header">
          <span className="header2">
            <a className="text-link subcat-link" href={category.link} name={category.id}>{category.name}</a>
          </span>
        </div>:""
    );
  }

  renderCategories(categories,categoryLevel, category){
    return (categories && categories.length>0?
      <ul className="categories-list">
      {
        categories.map((category) =>
        (<li key={category.name} className={this.state.activeCategories[categoryLevel] === category.name?'active':''}>
          {category.subCategories && category.subCategories.length>0?
            <a href="#" onClick={() => this.showSubCategories(category.name, categoryLevel)}>{category.name}</a>:
            <a href="#"><strong>{category.name}</strong></a>
          }
          <div className={"sub-categories " + (this.state.activeCategories[categoryLevel] === category.name?'show':'')}>
            {this.renderCategoryHeader(category)}
            {this.renderCategories(category.subCategories,categoryLevel+1, category)}
          </div>
        </li>
        ))
      }
      </ul>:""
  );
}



  render(){
    return (
      <div className="categories-container" style={{'display':!this.state.show?'none':'block'}}>
        <div className="emptybar">
        </div>
        <div className="categories-section">
          <div className="row">
            <div className="col-md-12">
              <div className="list-container">
                <div className="header"><span className="header2">Categories</span></div>
                {this.renderCategories(this.state.Categories, this.state.categoryLevel)}
              </div>
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
