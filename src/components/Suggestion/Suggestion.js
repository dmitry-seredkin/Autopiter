import {Input} from "../Input/Input";
import {List} from "../List/List";


export class Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', res: []};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(string) {
        fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token 795191bf87cd55a4786de06f17ca6dbef8cf956b'
            },
            body: JSON.stringify({
                query: string
            })
        })
            .then(response => response.json())
            .then(result => {
                this.setState({value: string, res: result.suggestions});
            })
            .catch(error => console.log('Провал' + error));
    }

    render() {
        const value = this.state.value;
        const res = this.state.res;
        let suggestionBody;

        if (res[0]) {
            suggestionBody = <List array={res}/>;
        } else {

        }

        return (
            <div className="suggestion">
                <Input
                    text={value}
                    onChange={this.handleInputChange}
                />
                {suggestionBody}
            </div>
        );
    }
}