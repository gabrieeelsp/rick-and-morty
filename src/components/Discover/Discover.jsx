import { useEffect } from 'react';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import {
    DiscoverFilter
} from '../../components';

import { setFilterStatusDiscover, setFilterGenderDiscover, setFilterSpecieDiscover, getCharactersDiscover, setFilterNameDiscover, setPageDiscover } from '../../redux/actions';

import style from './Discover.module.css'
import { useDispatch, useSelector } from 'react-redux';

const Discover = (props) => {
    const {
        onSearch,
        hasCharacterById,
        onClose,
     } = props;
    const dispatch = useDispatch();

    const characters = useSelector((state) => state.discoverCharacters.results);
    const maxPage = useSelector((state) => state.discoverCharacters.info.pages);

    const gender = useSelector((state) => state.filterGenderDisc)
    const setGender = (value) => dispatch(setFilterGenderDiscover(value));

    const status = useSelector((state) => state.filterStatusDisc)
    const setStatus = (value) => dispatch(setFilterStatusDiscover(value));

    const specie = useSelector((state) => state.filterSpecieDisc)
    const setSpecie = (value) => dispatch(setFilterSpecieDiscover(value));

    const name = useSelector((state) => state.filterNameDisc)
    const setName = (value) => dispatch(setFilterNameDiscover(value));

    const page = useSelector((state) => state.pageDisc)
    const setPage = (value) => dispatch(setPageDiscover(value));

    useEffect(() => {
        dispatch(getCharactersDiscover(gender, status, specie, name, page));
    }, [gender, status, specie, name, page])

    

    const handleClickAdd = (id) => {        
        onSearch(id);
    }

    const handleClickRemove = (id) => {
        onClose(id);
    }

    const handleClickPageLeft = () => {
        if ( page > 1) {
            setPage(page - 1)
        }
        
    }

    const handleClickPageRight = () => {
        if ( page < maxPage ) {
            setPage(Number(page) + 1)
        }
    }

    return (
        <>
            <div className={style.discoverBox}>
                <DiscoverFilter 
                    gender={gender} setGender={setGender} 
                    status={status} setStatus={setStatus} 
                    specie={specie} setSpecie={setSpecie} 
                    name={name} setName={setName} 
                    />
                <div className={style.tableBox}>
                    <table className={style.tableDiscover} >
                        <thead>
                            <tr>
                                <th>Id</th><th>Name</th><th>Status</th><th>Gender</th><th>Species</th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { characters.map((item) => 
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.species}</td>
                                    { !hasCharacterById(item.id) && <td><BsFillArrowRightSquareFill onClick={() => handleClickAdd(item.id)} className={style.addButton} /></td> }
                                    { hasCharacterById(item.id) && <td><BsFillArrowLeftSquareFill onClick={() => handleClickRemove(item.id)} className={style.removeButton} /></td> }
                                    
                                </tr>
                                )}

                        </tbody>
                    </table>
                    <div className={style.paginationBox}>
                        <span>{`Page ${page} of ${maxPage}`}</span>
                        <FaArrowLeft className={`${style.pageSelector} ${page === 1 ? 'disable' : ''}`} onClick={handleClickPageLeft} />
                        <FaArrowRight className={`${style.pageSelector} ${page === maxPage ? 'disable' : ''}`} onClick={handleClickPageRight} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover;