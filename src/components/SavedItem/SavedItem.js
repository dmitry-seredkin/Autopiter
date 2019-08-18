import trash from './trashCan.svg'
import stroke from './Stroke.svg'


export class SavedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.handleTrashClick = this.handleTrashClick.bind(this);
    }

    handleTrashClick() {
        this.props.onItemDelete(this.props.data);
    }

    handleExpandClick() {
        this.setState((state) => ({active: !state.active}));
    }

    render() {
        const active = this.state.active;
        const info = this.props.data;
        let itemClass = 'saved-list__item saved-item';
        let extraInfo;
        let buttonText = 'подробнее';
        let imgText = 'Развернуть';
        let strokeClass = 'saved-item__stroke';


        if (active) {
            itemClass += ' saved-item__active';
            buttonText = 'скрыть подробности';
            imgText = 'Свернуть';
            strokeClass += ' saved-item__stroke_active';
            extraInfo =
                <div>
                    <p><span>КПП</span>{info.kpp}</p>
                    <p><span>ОГРН</span>{info.ogrn}</p>
                    <p><span>Юридический адрес</span>{info.address}</p>
                    <p><span>Генеральный директор</span>{info.director}</p>
                </div>;
        }

        return (
            <li className={itemClass}>
                <div className="saved-item__info">
                    <h3 className="saved-item__header">{info.header}</h3>
                    <p><span>ИНН</span>{info.inn}</p>
                    {extraInfo}
                </div>
                <div className="saved-item__buttons">
                    <button className="saved-item__trash">
                        <img src={trash} alt="Удалить" onClick={this.handleTrashClick}/>
                    </button>
                    <button className="saved-item__button" onClick={this.handleExpandClick}>{buttonText}
                        <img src={stroke} alt={imgText} className={strokeClass}/>
                    </button>
                </div>
            </li>
        );
    }
}