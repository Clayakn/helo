import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import boat from '../../images/boat.jpg';
import tree from '../../images/tree.jpg';


class Form extends Component {

    render(){
        return (
            <div>
                <h1>Form</h1>
                <ul>
                <li><Link to={`${this.props.match.url}/${tree}`}>Tree</Link></li>
                <li><Link to={`${this.props.match.url}/${boat}`}>Boat</Link></li>
                </ul>
            <div>
                    <Route path={`${this.props.match.path}/${tree}`} render={() => { return <img src={tree} alt='Tree'/> }}/>
                    <Route path={`${this.props.match.path}/${boat}`} render={() => { return <img src={boat} alt='Boat'/> }}/>
             </div>
            </div>
        )
    }
}
export default Form;