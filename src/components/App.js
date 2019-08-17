// import React from 'react'


import {ChangeButton} from "./ChangeButton/ChangeButton";
import {Suggestion} from "./Suggestion/Suggestion";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'new'};
        this.handleChangeButtonClick = this.handleChangeButtonClick.bind(this);
    }

    handleChangeButtonClick() {
        this.setState = {page: 'saved'};
    }

    render() {
        localStorage.setItem('savedOrg', JSON.stringify([]));

        return (

            <div className="app">
                <div>
                    <ChangeButton
                        name="Новая организация"
                        onChangeButtonClick={this.handleChangeButtonClick}/>
                    <ChangeButton
                        name="Сохраненые организации"
                        onChangeButtonClick={this.handleChangeButtonClick}/>
                </div>
                <Suggestion/>
            </div>);
    }
}

