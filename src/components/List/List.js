
export class List extends React.Component {
    constructor(props) {
        super(props);
        // this.parseData = this.parseData.bind(this);
    }

    parseData() {
        return this.props.array.map((item, index) =>
            <li key={index} className="list__item">
                <p>{item.value}</p>
                <div>
                    <span>{item.data.inn}</span>
                    <span>{item.data.address.value.split(', ').filter((elem) => elem[0] === 'г')}</span>
                </div>
            </li>
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