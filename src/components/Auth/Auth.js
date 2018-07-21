import React, { Component } from 'react';
import './Auth.css';
import Logo from '../../images/helo_logo.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/reducer';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }
    changeHandleUsername(val) {
        this.setState({
            username: val
        })
    }
    changeHandlePassword(val) {
        this.setState({
            password: val
        })
    }

    register() {
        const username = this.state.username;
        const password = this.state.password;
        axios.post('/api/auth/register', {username, password})
        .then(response => {
            this.props.updateUser(response.data.username, response.data.profile, response.data.userId)
        })
        .catch(error => {
           console.log('Axios error POST on register', error)
          });
        this.props.history.push('/dashboard')
    }

    login(){
        const username = this.state.username;
        const password = this.state.password; 
        axios.post('/api/auth/login', {username, password})
        .then(response => {
            this.props.updateUser(response.data.username, response.data.profile, response.data.userId)
        })
        .catch(error => {
           console.log('Axios error POST on login', error)
          });
          this.props.history.push('/dashboard')
    }

    render(){
        return (
            <div className='authBox'>
                <img className='heloLogo' src={Logo} alt='Helo logo'/>
                <h1 className='heloHeader'>Helo</h1>
                <div className='loginLine'>Username:<input onChange={(e) => {this.changeHandleUsername(e.target.value)}} /> </div>
                <div className='loginLine'>Password:<input onChange={(e) => {this.changeHandlePassword(e.target.value)}} /> </div>
                <div className='loginLine'><button onClick={() => this.login()}>Login</button><button onClick={() => this.register()}>Register</button> </div>
            </div>
        )
    }
}
export default connect(null,{ updateUser })(Auth);