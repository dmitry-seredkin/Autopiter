import {Input} from "../Input/Input";
import {List} from "../List/List";
import {Info} from "../Info/Info";

export class Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', res: [], cur: null};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
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
                this.setState({value: string, res: result.suggestions, cur: null});
            })
            .catch(error => console.log('Провал' + error));
    }

    handleItemClick(index) {
        this.setState((state) => ({
            value: state.res[index].value,
            cur: index
        }));
    }


    render() {
        const value = this.state.value;
        const res = this.state.res;
        const index = this.state.cur;

        // console.log(`value: ${value}, res: ${res}, index: ${index}`);

        let suggestionBody;
        if (res[0]) {
            if (index !== null) {
                suggestionBody = <Info item={res[index]}/>
            } else {
                suggestionBody = <List array={res} onItemClick={this.handleItemClick}/>;
            }
        }

        return (
            <div className="suggestion">
                <Input
                    text={value}
                    onInputChange={this.handleInputChange}
                />
                {suggestionBody}
            </div>
        );
    }
}