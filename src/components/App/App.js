import logo from './Logo.svg'

import {ChangeButton} from "../ChangeButton/ChangeButton";
import {Suggestion} from "../Suggestion/Suggestion";
import {SavedList} from "../SavedList/SavedList";


export class App extends React.Component {
    constructor(props) {
        super(props);
        let str = localStorage.getItem('savedOrganizations');
        this.state = {page: 'new', storage: str ? JSON.parse(str) : []};
        this.dataSet = new Set(this.state.storage);
        this.handleChangeButtonClick = this.handleChangeButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleItemSave = this.handleItemSave.bind(this);
    }

    handleChangeButtonClick(type) {
        this.setState({page: type});
    }

    handleItemDelete(obj) {
        this.dataSet.delete(obj);
        let array = Array.from(this.dataSet);
        localStorage.setItem('savedOrganizations', JSON.stringify(array));
        this.setState({storage: array});
    }

    handleItemSave(obj) {
        this.dataSet.add(obj);
        let array = Array.from(this.dataSet);
        localStorage.setItem('savedOrganizations', JSON.stringify(array));
        this.setState({storage: Array.from(this.dataSet)});
    }

    render() {
        const page = this.state.page;
        const storage = this.state.storage;
        let appBody = <Suggestion onItemSave={this.handleItemSave} storage={storage}/>;
        let active = [1, 0];
        if (page === 'saved') {
            appBody = <SavedList onItemDelete={this.handleItemDelete} storage={storage}/>;
            active = [0, 1];
        }

        return (
            <div className="app">
                <header className="app__header"><img src={logo} alt="Логотип"/></header>
                <main className="app__content">
                    <section className="app__wrapper">
                        <h1 className="app__h1">Мои организации</h1>
                        <div className="app__buttons">
                            <ChangeButton
                                type='new'
                                name="Новая организация"
                                active={active[0]}
                                onChangeButtonClick={this.handleChangeButtonClick}/>
                            <ChangeButton
                                type='saved'
                                name="Сохраненые организации"
                                active={active[1]}
                                count={this.state.storage.length}
                                onChangeButtonClick={this.handleChangeButtonClick}/>
                        </div>
                        <div className="app__body">
                            {appBody}
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

