
export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {style: 'list__item'};
        this.handleFocus = this.handleFocus.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleFocus() {
        this.setState({style: 'list__item list__item_focused'})
    }

    handleClick() {
        this.props.onItemClick(this.props.index);
    }

    parseData() {
        return this.props.data.data.address.value.split(', ')
            .map((elem) => elem.split(' '))
            .filter((elem) => this.isCity(elem[0]));
    }

    isCity(value) {
        const names = ['г', 'село', 'ГОРОД'];
        return names.some((elem) => value === elem);
    }

    render() {
        const item = this.props.data;
        let city = this.parseData()[0];
        city = city ? city : [];
        let citySpanText = city[0] ? `${city[0][0]}. ${city[1]}` : '';

        return (
            <li className="item" onFocus={this.handleFocus} onClick={this.handleClick}>
                <p>{item.value}</p>
                <div>
                    <span>{item.data.inn}</span>
                    <span>{citySpanText}</span>
                </div>
            </li>
        );
    }
}