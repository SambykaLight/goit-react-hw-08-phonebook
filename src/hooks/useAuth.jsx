import { useSelector } from 'react-redux';
import {
    getIsLoggedIn,
    getUsername,
    selectIsRefreshing
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(getUsername);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};