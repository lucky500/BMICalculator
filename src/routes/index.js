import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Applications from './Applications';
import About from './About';
import Contact from './Contact';

class Routes extends React.Component {
    render() {
        return(
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/applications" component={Applications} />
            </div>
        )
    }
}

export default Routes;
