import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeView from 'view/HomeView';
import LoginView from 'view/LoginView';
import NavBar from 'view/NavBar';
import RegistrationView from 'view/RegistrationView';
import { ContactsView } from 'view/ContactsView';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperation from 'redux/auth/authOperation';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;
  useEffect(() => {
    dispatch(authOperation.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing your data</b>
  ) : (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<Layout/>}> */}
        <Route path='/' element={<HomeView />} />
        <Route path="/LoginView" element={ <PublicRoute redirectTo='/ContactsView' component={<LoginView />}/>} />
        <Route path="/RegistrationView" element={ <PublicRoute redirectTo='/ContactsView' component={<RegistrationView />} />}/>
        <Route path="/ContactsView" element={<PrivateRoute redirectTo='/' component={<ContactsView/>} />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}
