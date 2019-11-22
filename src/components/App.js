import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from "react-redux";
import store from "../redux/store";
import MainPage from "./pages/main";

function App() {
    return (
        <Provider store={store}>
            <CssBaseline/>
            <div className="App">
                <MainPage/>
            </div>
        </Provider>
    );
}

export default App;