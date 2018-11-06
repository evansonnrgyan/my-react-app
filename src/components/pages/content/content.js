import React, { Component } from 'react';
import Navigation from '../navigation/navigation';
import Header from '../header/header';
import Body from '../body/body'
import Footer from '../footer/footer';

class Content extends Component {
    render() {
        let obj = {userName: '当前用户'}
        return (
            <div className="content">
                <Navigation />
                <Header userName={obj} />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Content;