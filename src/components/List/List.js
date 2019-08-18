import {Item} from "../Item/Item";

export class List extends React.Component {
    constructor(props) {
        super(props);
    }

    parseData() {
        return this.props.array.map((item, index) =>
            <Item key={index} index={index} data={item} onItemClick={this.props.onItemClick}/>
        );
    }

    render() {
        return (
            <ul className="list">
                {this.parseData()}
            </ul>
        );
    }
}