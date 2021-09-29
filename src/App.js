import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import './App.css';


const App = (props) => {

    return(
        <BrowserRouter>
            <div className='app'>
                <div className='app-wrapper'>
                    <Header />
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route path='/profile'>
                                <Profile dataPosts={props.data.profileData}/>
                            </Route>
                            <Route exact path='/dialogs'>
                                <Dialogs dataDialogs={props.data.dialogsData}/>
                            </Route>
                            <Route path='/news'>
                                <News />
                            </Route>
                            <Route path='/music'>
                                <Music />
                            </Route>
                            <Route path='/settings'>
                                <Settings />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
