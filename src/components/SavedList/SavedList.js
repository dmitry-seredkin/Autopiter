import {SavedItem} from "../SavedItem/SavedItem";

export class SavedList extends React.Component {
    constructor(props) {
        super(props);
    }

    parseData() {
        return this.props.storage.map((value, index) =>
            <SavedItem key={`${index}`} data={value} onItemDelete={this.props.onItemDelete}/>
        );
    }

    render() {
        return (
            <ul className="saved-list">
                {this.parseData()}
            </ul>
        );
    }
}