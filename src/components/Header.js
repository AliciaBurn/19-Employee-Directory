import React, { Component } from "react";
import "./Header.css";


export default class Header extends Component {
    render() {
        return ( 
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
            </div>
        </div>
        )

    }
}
