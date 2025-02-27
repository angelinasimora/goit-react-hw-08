import {  useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice"; 
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const filterId = useId();


   return (
    <div className={css.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        value={nameFilter}
        name="filter"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        id={filterId}
        className={css.search}
      />
    </div>
  );
}