

export class ChangeButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onChangeButtonClick(this.props.type);
    }

    render() {
        let buttonClass = 'change-button';
        buttonClass += this.props.active ? ' change-button_active' : '';
        let countClass = 'change-button__count';
        countClass += this.props.active ? ' change-button__count_active' : '';
        let buttonText = this.props.name;
        let buttonCnt = (this.props.type === 'new') ? '' : <span className={countClass}>({this.props.count})</span>;
        return <button className={buttonClass} onClick={this.handleClick}>{buttonText}{buttonCnt}</button>;
    }
}