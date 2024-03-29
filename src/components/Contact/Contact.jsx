import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from '../Button/Button';
import styles from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };
    
  return (
    <li className={styles.item}>
        <div className={styles.box}>
            <div className={styles.str}>
                <IoPerson className={styles.icon} /><span className={styles.name}>   {contact.name}</span>
            </div>
            <div className={styles.str}>
                <FaPhoneAlt className={styles.icon} /><span className={styles.number}>   {contact.number}</span>
            </div>
        </div>
        <Button onClick={handleDeleteContact}>Delete</Button>
    </li>
  );
};
