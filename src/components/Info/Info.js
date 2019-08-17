import {SaveButton} from "../SaveButton/SaveButton";

export class Info extends React.Component {
    constructor(props) {
        super(props);
        this.info = this.parseData();
        this.state = {isSaved: false};
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    }

    handleSaveButtonClick() {
        let org = JSON.parse(localStorage.getItem('savedOrg'));
        org.push(this.props.item.value);
        localStorage.setItem('savedOrg', JSON.stringify(org));
        this.setState({isSaved: true});
    }

    parseData() {
        const item = this.props.item;
        return {
            header: item.value ? item.value : '',
            address: item.data.address ? item.data.address.value : '',
            director: item.data.management ? item.data.management.name : '',
            inn: item.data.inn ? item.data.inn : '',
            kpp: item.data.kpp ? item.data.kpp : '',
            ogrn: item.data.ogrn ? item.data.ogrn : ''
        };
    }

    render() {
        const item = this.info;
        const isSaved = this.state.isSaved;

        return (
            <div className="info">
                <h1 className="info__header">{item.header}</h1>
                <div className="info__body">
                    <div className="info__left-column">
                        <div className="info__address">
                            <p>Юридический адрес</p>
                            <p>{item.address}</p>
                        </div>
                        <div className="info__director">
                            <p>Генеральный директор</p>
                            <p>{item.director}</p>
                        </div>
                    </div>
                    <div className="info__digits">
                        <p><span>ИНН</span>  {item.inn}</p>
                        <p><span>КПП</span>  {item.kpp}</p>
                        <p><span>ОГРН</span>  {item.ogrn}</p>
                    </div>
                </div>
                <SaveButton onSaveButtonClick={this.handleSaveButtonClick} flag={isSaved}/>
            </div>
        );
    }
}