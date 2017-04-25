import React from 'react';
import { Link } from 'react-router-dom';
//import { NavDropdown, MenuItem } from 'react-bootstrap';

class BottomHeader extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: this.props.active,
    }
  }

  componentDidMount() {
      //console.log('Header', this);

  }

  componentWillReceiveProps(nextProps) {

      //console.log('next Props Header:', nextProps);
  }

  render() {
      return(
          <div className={'bottomnav'}>
              <nav className={'navbar'}>
                <div className="container">
                  <div className={"col-md-12 primary"}>
                    <ul className='nav navbar-nav' onClick={this.megaNavTabsClick}>
                        <li className="parametric"><Link to="#" data-target=".tab-products,.tab-parametric" data-toggle="tab" name="parametric-search_592a0e5c-0eba-46ba-9da5-0f12d39435d4"><span>Parametric Search</span></Link></li>
                        <li className="products"><a href="#" data-target=".tab-products,.tab-parametric" data-toggle="tab" name="products_4fdf2e50-8263-4ca2-85ff-1d925a690dca"><span>Products</span></a></li>
                        <li className="applications"><a href="#" data-target=".tab-applications" data-toggle="tab" name="applications_7fe6d279-3406-44d1-8712-6b4617451920"><span>Applications</span></a></li>
                        <li className="designcenter"><a href="#" data-target=".tab-designcenter" data-toggle="tab" name="design-center_62fb24df-9843-4c70-b53a-9dc5d9e70013"><span>Design Center</span></a></li>
                        <li className="community"><a href="#" data-target=".tab-community" data-toggle="tab" name="community_498d6b10-d71e-47ab-aed2-7f740349cad1"><span>Community</span></a></li>
                        <li className="education"><a href="#" data-target=".tab-education" data-toggle="tab" name="education_ead5c3e1-71e8-42b1-bb3a-eca493ab9841"><span>Education</span></a></li>
                        <li className="support"><a href="#" data-target=".tab-support" data-toggle="tab" name="support_0d5387c1-2e8a-4c67-b3e0-4b19babdea16"><span>Support</span></a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
        )
    }
}

export default BottomHeader;
