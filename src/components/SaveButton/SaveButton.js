

export class SaveButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {isSaved: false};
    }

    handleClick() {
        console.log(this.state.isSaved);
        this.setState({isSaved: true});
    }

    render() {
        if (this.state.isSaved) {
            return (
                <button className="button">
                    <img src="./Vector.svg" className="button__img"/>Сохранено
                </button>);
        } else {
            return <button className="button button_unsaved" onClick={this.handleClick}>Сохранить</button>;
        }
    }
}