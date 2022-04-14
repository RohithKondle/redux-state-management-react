import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authenticatedActions } from '../store/auth'

const Header = () => {

  const authenticated = useSelector(state => state.authenticated.authenticated)
  
  console.log(authenticated)
  const dispatch = useDispatch()

  const logoutClickedHandler = () => {
     dispatch(authenticatedActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { authenticated && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutClickedHandler}>Logout</button>
          </li>
        </ul>
      </nav> }
      
    </header>
  );
};

export default Header;
