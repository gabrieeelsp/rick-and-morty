import Card from '../Card/Card'

import style from './Cards.module.css'

function Cards (props) {
    const {
        characters,
        onClose
     } = props;
    
    return (
        <div className={style.list}>
            {characters.map(character => {
                return (
                    <Card
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        species={character.species}
                        gender={character.gender}
                        status={character.status}
                        image={character.image}
                        onClose={onClose}
                    >
                    </Card>
                )
            })}
        </div>
    )
}

export default Cards;