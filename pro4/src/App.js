import { useDispatch } from 'react-redux';
import { Container } from "@material-ui/core";
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cpn_header from '~/components/cpn_header/cpn_header.js';
import Details from './pages/Details';


import * as actions from './redux/actions';

function App() {
  
  return (
  <Container maxWidth={false} className="" style={{margin:'0', padding: '0'}}>
      <Cpn_header />

      <Routes>
        <Route path="/homepage" element={<Homepage />}>
          
        </Route>
        <Route path="/details" element={<Details />}>

        </Route>
      </Routes>
  </Container>
  )
}

export default App;
