import { FindContactInput, SearchTitle } from "./FilterContacts.styled";
import { getFilter } from "redux/selector";
import { filterContacts } from "redux/contactSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";




export const Filter = () => {
   const filteValue = useSelector(getFilter);
   const dispatch = useDispatch();
   const changeFilter = e => dispatch(filterContacts(e.currentTarget.value));

    return (
        <div>
            <SearchTitle>Find contacts by name</SearchTitle>
            <FindContactInput type="text" value={filteValue} onChange={changeFilter}  />
        </div>
    )
}
