import { useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cpn_header from "~/components/cpn_header/cpn_header.js";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Create_project from "./pages/Create_project";
import { useReducer } from "react";
import AppReducer from "./Reducers/AppReducer";
import AppContext from "./components/AppContext";

import * as actions from "./redux/actions";

function App() {
  const initialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <Container
      maxWidth={false}
      className=""
      style={{ margin: "0", padding: "0" }}
    >
      <Cpn_header />

      <AppContext.Provider value={{state , dispatch }}> 
        <Routes>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/create_project" element={<Create_project />}></Route>
        </Routes>
      </AppContext.Provider>
    </Container>
  );
}

export default App;
