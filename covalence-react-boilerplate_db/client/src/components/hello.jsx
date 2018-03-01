import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return( 
        <div>
            <h1> A list of Blogs.. yes i know it's borings </h1>
            <input type="text" placeholder="name"></input>
            <textarea class="form-control" aria-label="With textarea" placeholder="Blog something"></textarea>
            <input type="submit"></input>
        </div>
        );
    }
}

export default HelloWorld;