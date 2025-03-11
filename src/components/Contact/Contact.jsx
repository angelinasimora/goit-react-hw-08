import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


export default function Contact({ contact: { name, number, id } }) {
  
  const dispatch = useDispatch();
  
  return (
    <div className={css.card}>
      <div>
        <div className={css.name}>
          <FaUser /> {name}
        </div>
        <div>
          <FaPhoneAlt /> {number}
        </div>
      </div>
      <button className={css.delete} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}