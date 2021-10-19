import React from "react";
import {Route, Switch} from "react-router-dom";

import Header from './components/Header/Header';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";

import './App.css';


const App = () => {
    return <div className='app'>
            <div className='app-wrapper'>
                <Header />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile'
                               render={() => <Profile />} />
                        <Route exact path='/dialogs'
                               render={() => <DialogsContainer />} />
                        <Route path='/news'
                               render={() => <News />} />
                        <Route path='/users'
                               render={() => <UsersContainer />} />
                        <Route path='/music'
                               render={() => <Music />} />
                        <Route path='/settings'
                               render={() => <Settings />} />
                    </Switch>
                </div>
            </div>
        </div>
}

export default App;