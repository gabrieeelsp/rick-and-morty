import {
    Cards,
} from '../../components'
const HomeView = (props) => {
    const { characters, onClose } = props;
    
    return (
        <>
            <Cards characters={characters} onClose={onClose} />
        </>
    )
}

export default HomeView;