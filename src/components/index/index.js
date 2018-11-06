import React, {Component} from 'react';
//import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Content from '../pages/content/content'

class Index extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="project-index">
                <Content></Content>
                {/*<Router basename="/">
                    <div className="prorject-navigation">
                        <Link to="/Page">Page页</Link>
                        <Route path="/Page" component={Page} />
                        <NavLink to="/Page" activeClassName="selected">Page页</NavLink>
                    </div>
                </Router>*/}
            </div>
        )
    }
}

export default Index;