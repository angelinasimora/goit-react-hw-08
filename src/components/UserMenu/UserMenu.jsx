import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import css from './UserMenu.module.css';
const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);



  const handleLogout = async () => {
    await dispatch(logoutUser()).unwrap();
    navigate('/');
  };
 

  return (
    <div className={css.wrapper}>
       <p className={css.username}>Welcome, {user.name}</p>
     <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
