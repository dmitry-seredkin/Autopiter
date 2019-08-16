// import React from 'react'

import './SaveButton/SaveButton'
import {SaveButton} from "./SaveButton/SaveButton";
import {Input} from "./Input/Input";
import {Suggestion} from "./Suggestion/Suggestion";

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div>{this.props.title}</div>
                <Suggestion/>
            </div>);
    }
}

