import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories';
//import { NavDropdown, MenuItem } from 'react-bootstrap';

class BottomHeader extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: this.props.active,
        isCategoriesVisible: false
    };
  }

  componentDidMount() {
      //console.log('Header', this);

  }

  componentWillReceiveProps(nextProps) {

      //console.log('next Props Header:', nextProps);
  }

  toggleCategories(activeTab) {
    this.setState(prevState =>({
      isCategoriesVisible:!prevState.isCategoriesVisible,
      activeTab:!prevState.isCategoriesVisible?activeTab:''
    }));

  }

  getActiveClass(){
    let activeClass='';
    switch(this.state.activeTab){
      case 'products':
      activeClass = 'active';
      break;
      default:
      activeClass = '';
    }
    return activeClass;
  }

  render() {
      return(
          <div className={'bottomnav'}>
              <nav className={'navbar'}>
                <div className="container">
                  <div className={"col-md-12 primary"}>
                    <ul className='nav navbar-nav'>
                        <li className="parametric"><Link to="#"><span>Parametric Search</span></Link></li>
                        <li className={"products " + this.getActiveClass() } onClick={()=>this.toggleCategories('products')} data-toggle="tab" data-target=".tab-products" name="product"><Link to="/products"><span>Products</span></Link></li>
                        <li className="applications"><a href="#" data-target=".tab-applications" data-toggle="tab" name="applications_7fe6d279-3406-44d1-8712-6b4617451920"><span>Applications</span></a></li>
                        <li className="designcenter"><a href="#" data-target=".tab-designcenter" data-toggle="tab" name="design-center_62fb24df-9843-4c70-b53a-9dc5d9e70013"><span>Design Center</span></a></li>
                        <li className="community"><a href="#" data-target=".tab-community" data-toggle="tab" name="community_498d6b10-d71e-47ab-aed2-7f740349cad1"><span>Community</span></a></li>
                        <li className="education"><a href="#" data-target=".tab-education" data-toggle="tab" name="education_ead5c3e1-71e8-42b1-bb3a-eca493ab9841"><span>Education</span></a></li>
                        <li className="support"><a href="#" data-target=".tab-support" data-toggle="tab" name="support_0d5387c1-2e8a-4c67-b3e0-4b19babdea16"><span>Support</span></a></li>
                    </ul>
                  </div>
                </div>
              </nav>
              <Categories show={this.state.isCategoriesVisible} />
            </div>
        )
    }
}

export default BottomHeader;
