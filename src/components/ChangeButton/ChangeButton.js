

export class ChangeButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleChangeButtonClick();
    }

    render() {
        return <button onClick={this.handleClick}>{this.props.name}</button>;
    }
}