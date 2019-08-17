import img from './Vector.svg'

export class SaveButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onSaveButtonClick();
    }

    render() {
        if (this.props.flag) {
            return (
                <button className="button">
                    <img src={img} className="button__img"/>Сохранено
                </button>);
        } else {
            return <button className="button button_unsaved" onClick={this.handleClick}>Сохранить</button>;
        }
    }
}