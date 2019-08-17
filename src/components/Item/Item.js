
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

    render() {
        const item = this.props.data;

        return (
            <li className={this.state.style} onFocus={this.handleFocus} onClick={this.handleClick}>
                <p>{item.value}</p>
                <div>
                    <span>{item.data.inn}</span>
                    <span>{item.data.address.value.split(', ').filter((elem) => elem[0] === 'г')}</span>
                </div>
            </li>
        );
    }
}