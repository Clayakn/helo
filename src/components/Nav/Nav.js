import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';


function Nav(props) {
    return (
      <div>
        {props.path === '/' 
        ? 
        '' 
        : 
        <div className='navBar'>
        <h1>Nav</h1>
        <p>{props.username}</p>
        <img className='profilePic' src={props.profile} alt='Profile Icon'/>
        <Link to='/dashboard'><button>Home</button></Link>
        <Link to='/new'><button>New Post</button></Link>
        <Link to='/'><button>Logout</button></Link>
        </div>}

      </div>
    )
}

const mapStateToProps = state => {
    const { username, profile } = state
  return {
    username,
    profile
  }
}

export default connect(mapStateToProps)(Nav);
