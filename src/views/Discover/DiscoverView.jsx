import { Discover } from "../../components";

const DiscoverView = (props) => {
    const { 
        onSearch,
        hasCharacterById,
        onClose,
     } = props;
    return (
        <>
            <Discover onSearch={onSearch} onClose={onClose} hasCharacterById={hasCharacterById} />
        </>
    )
}

export default DiscoverView;