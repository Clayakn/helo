import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    changeHandleSearch = (val) => {
        this.setState({
            search: val
        })
    }

    componentDidMount() {
        axios.get(`/api/posts/${this.props.userId}?search=${this.state.search}&userposts=${this.state.userposts}`)
        .then(response => {
            console.log('response',response)
            this.setState({
                posts: response.data
            })
        }).catch(error => {
            console.log('Axios error GET componentDidMount', error)
        })
    }
    search(){
        axios.get(`/api/posts/${this.props.userId}?search=${this.state.search}&userposts=${this.state.userposts}`)
        .then(response => {
            console.log('response',response)
            this.setState({
                posts: response.data
            })
        }).catch(error => {
            console.log('Axios error GET search', error)
        })
    }

    render(){
        console.log(this.state.posts)
        let displayPosts =  this.state.posts.map((post,i) => {
            return (
            <div key={i}>
                <h1>{post.username}</h1>
                <p>{post.title}</p>
                <img src={post.profile_pic} alt='Profile of Post Creator'/>
            </div> 
            )
        })
        return (
            <div>
            <input placeholder='Search by Title' onChange={(e) => this.changeHandleSearch(e.target.value)}/>
            <button onClick={() => this.search()}>Search</button>
            <button>Reset</button>
            <p>My Posts</p>
            <input type='checkbox' checked={this.state.userposts} onChange={(e) => this.setState({userposts: !this.state.userposts})}/>
            {displayPosts}
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { userId } = state
    return {
        userId
    }
}
export default connect(mapStateToProps)(Dashboard);