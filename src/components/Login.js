import React, { Component } from 'react';
import InputField from './InputField';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            logined: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }   

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password
        };

        this.setState({
            logined: userData.username,
            username: '',
            password: ''
        })
    }

    handleButton() {
       let attr = document.getElementById("popup");
       attr.style.display = "none";
    }

    render() {
        this.props = this.state;
        console.log(this.props);
        return (
            <div data-form>
                <form onSubmit={this.onSubmit}>
                    <div data-field>
                        <label htmlFor="username">Username</label>
                        <InputField
                            name="username"
                            type="username"
                            value={this.state.username}
                            onChange={this.onChange}
                            id="username"
                        />
                    </div>
                    <div data-field>
                        <label htmlFor="password">Password</label>
                        <InputField
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </div>
                    <div data-choice>
                        <input type="submit" value="Отправить" />
                        <a data-link href="">Forgot password?</a>
                    </div>
                </form>
                <div data-popup id="popup">
                    {
                        this.props.logined.length !== 0 ?
                            <div data-message>
                                <span onClick={this.handleButton}>x</span>
                                Привет, {this.props.logined}!
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        )
    }
}

export default Login;