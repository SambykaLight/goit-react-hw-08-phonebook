import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './default-avatar.png'
import authSelectors from 'redux/auth/authSelectors';
import authOperation from 'redux/auth/authOperation';

const styles ={
    avatar: {
        marginRight: 4,
    },
    container: {
        display: 'flex',
        alignItems:'center',
    },
    name:{
        fontWeight: 700,
        marginRight: 12,
    },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return(
    <div style={styles.container}>
        <img src={avatar} alt='' width='32px'/>
        <span style={styles.name}> Welcome, {name}</span>
        <button type='button' onClick={() => dispatch(authOperation.logOut())}>Logout</button>
    </div>
  )
}
