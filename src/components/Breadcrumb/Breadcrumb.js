import React from 'react';
import './Breadcrumb.css';

class Breadcrumb extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items:[
                {
                    name:'name1',
                    link:'link1'
                },
                {
                    name:'name2',
                    link:'link2'
                },
                {
                    name:'name3'
                }
            ]
        };
    }

    render(){
        return (
            <div className="breadcrumb">
              <div className="breadcrumb-container">
                  <ul>
                    <li><a href="/" className="glyphicon glyphicon-home" alt="Home" title="Home"></a></li>
                      {
                          this.state.items.map((item, index) =>(
                              <li key={item.name}>
                                  {index<this.state.items.length-1?
                                    <a href={item.link}>{item.name}</a>
                                  :
                                    <span className="active">{item.name}</span>
                                  }
                              </li>
                          ))
                      }
                  </ul>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;
