import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import css from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.list}>
      {contacts.map((contact) => (
        <div key={contact.id} className={css.contact}>
          <p>{contact.name}: {contact.phone}</p>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}