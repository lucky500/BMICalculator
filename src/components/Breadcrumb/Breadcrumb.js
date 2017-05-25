import React from 'react';
import '../Breadcrumb.css';

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
                    name:'name3',
                    link:'link3'
                }
            ]
        };
    }

    render(){
        return (
            <div className="breadcrumb">
                <ul>
                    {
                        this.state.items.map((item) =>(
                            <li key={item.name}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Breadcrumb;