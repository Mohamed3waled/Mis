import './App.css';
import { React } from 'react';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout Component/Layout';
import Home from './Components/Home Component/Home';
import SignUp from './Components/SignUp Component/SignUp';
import AccountLogin from './Components/Login Component/AccountLogin';
import Personnal from './Components/Personnal Component/Personnal';
import ViewProfile from './Components/Profile Component/View_Profile';
import NotFound from './Components/NotFound Component/NotFound';

const Root = createBrowserRouter([
  {path : '/' , element : <Layout /> , children : [
    {index : true  , element : <Home />},
    {path : 'home' , element : <Home />},
    {path : 'login' , element : <AccountLogin />},
    {path : 'signup' , element: <SignUp />},
    {path : 'personnal' , element : <Personnal />},
    {path : 'profile' , element : <ViewProfile />},
    {path : '*' , element : <NotFound />},

  ]}
])

export default function App() {
  return <>
  
  <RouterProvider router={Root}/>
  
  
  </>
}

