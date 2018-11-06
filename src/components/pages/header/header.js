import React, { Component } from 'react';
import { Icon } from 'antd';
import logo from '../../images/logo.png';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: props.userName.userName,

        }

        this.userInfoFn = this.userInfoFn.bind(this);
    }

    userInfoFn(){
        alert(1)
    }

    render() {
        console.log(this.state);
        return (
            <div className="hader">
                <div className="logo">
                    <img src={logo} alt="易鑫集团"/>
                </div>
                <h1>销售渠道管理平台</h1>
                <div className="middle"></div>
                <div className="user-info">
                    <div className="info-box">
                        <span onClick={this.userInfoFn}><Icon type="user" theme="outlined" />{this.state.userName}</span>
                    </div>
                    <div className="user-options">
                        <ul>
                            <li>退出</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;