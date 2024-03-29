
export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onInputChange(event.target.value);
    }

    render() {
        // const searchBody = (this.state.value) ? <List answer={this.answer}/> : <span>Пусто</span>;
        const text = this.props.text;
        return (
            <label className="searching">Организация или ИП
                <input value={text}
                       onChange={this.handleChange}
                       className="searching__input"/>
            </label>

        );
    }
}