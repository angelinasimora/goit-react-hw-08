// import { Link } from 'react-router-dom';
import {Navigation} from '../Navigation/Navigation'
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={css.header}>
           <Navigation/>
                {/* <Link to="/">Back</Link> */}
                  {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
};