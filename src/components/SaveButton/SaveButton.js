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
                <button className="save-button">
                    <img src={img} alt="Галочка" className="save-button__img"/>Сохранено
                </button>
            );
        }
        return <button className="save-button save-button_unsaved"
                       onClick={this.handleClick}>Сохранить</button>;
    }
}