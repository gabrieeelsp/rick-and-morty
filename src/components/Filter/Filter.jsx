import { useSelector, useDispatch } from "react-redux";
import { setFilterFav, setOrderFav } from "../../redux/actions";

import style from './Filter.module.css'

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filterFav)
    const order = useSelector((state) => state.orderFav)

    const handleChangeOrder = (event) => {
        dispatch(setOrderFav(event.target.value))
    }

    const optionGender = ['All', 'Male', 'Female', 'unknown', 'Genderless']

    const handleChangeFilter = (event) => {
        dispatch(setFilterFav(event.target.value))
    }

    return (
        <>
            <div className={style.filterBox}>
                    <select value={filter} onChange={handleChangeFilter}>
                        {optionGender.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                    <select value={order} onChange={handleChangeOrder}>
                        <option value="none">---</option>
                        <option value="ASC">Menor Id</option>
                        <option value="DESC">Mayor Id</option>
                    </select>
            </div>
        </>
    )
}

export default Filter;