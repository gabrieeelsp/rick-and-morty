import style from './DiscoverFilter.module.css'

const DiscoverFilter = (props) => {
    const { 
        status,
        setStatus,
        gender, 
        setGender, 
        specie,
        setSpecie,
        name,
        setName,
    } = props;

    const optionStatus = ['All', 'Alive', 'Dead', 'unknown']
    const optionSpecies = ['All', 'Human', 'Alien', 'unknown']
    const optionGender = ['All', 'Male', 'Female', 'unknown', 'Genderless']

    const handleChangeGender = (event) => {
        setGender(event.target.value)
    }
    const handleChangeStatus = (event) => {
        setStatus(event.target.value)
    }
    const handleChangeSpecie = (event) => {
        setSpecie(event.target.value)
    }
    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <div className={style.filtersBox}>
                <div className={style.filterBox}>
                    <select value={gender} onChange={handleChangeGender} >
                        {optionGender.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                </div>
                <div className={style.filterBox}>
                    <select value={status} onChange={handleChangeStatus} >
                        {optionStatus.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                </div>
                <div className={style.filterBox}>
                    <select value={specie} onChange={handleChangeSpecie} >
                        {optionSpecies.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                </div>
                <div className={style.searchInputBox}>
                    <input placeholder='Name...' value={name} className={style.searchInput} type="text" onChange={handleChangeName} />
                </div>
                
            </div>
        </>
    )
}

export default DiscoverFilter;