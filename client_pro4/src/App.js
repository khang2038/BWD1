import { useDispatch } from 'react-redux';
import { Container } from "@material-ui/core";
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cpn_header from '~/components/cpn_header/cpn_header.js';
import Details from './pages/Details';
import Home from './pages/Home';
import Create_project from './pages/Create_project';
import Profile from './pages/Profile';
import Product from './pages/Product';
import Wallet from './pages/Wallet';
import Add_product from './pages/Add_product';
import Login from './pages/Login';
import Edit from './pages/Edit';
import axios from 'axios';

import * as actions from './redux/actions';
import AppContext from './components/AppContext';
import AppReducer from './reducers/AppReducer';
import { useReducer } from 'react';
import My_post from './pages/My_post';

function App_logged() {
  const initialState = {user : null,posts : []}

  const [state_user, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{state_user, dispatch}}>

    <Container maxWidth={false} className="" style={{margin:'0', padding: '0'}}>

      <Cpn_header />
        
      <Routes>
        <Route path="/" element={<Homepage />}>
          
        </Route>
        <Route path="/homepage" element={<Homepage />}>

        </Route>
        <Route path="/login" element={<Login />}>
          
        </Route>
        <Route path="/product" element={<Product />}>

        </Route>
        <Route path="/product/:id/edit" element={<Edit />}>

        </Route>
        <Route path="/add_product" element={<Add_product />}>
        
        </Route>
        <Route path="/my_post" element={<My_post />}>

        </Route>
        <Route path="/wallet" element={<Wallet />}>

        </Route>
        <Route path="/details" element={<Details />}>

        </Route>
        <Route path="/profile" element={<Profile />}>

        </Route>
        <Route path="/create_project/:slug" element={<Create_project />}>

        </Route>
      </Routes>
    </Container>

    </AppContext.Provider>
  )
}

function App() {

  return (
    
    <App_logged />
  )
}

export default App;
