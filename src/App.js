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


const App = ({data}) => {

    const {dialogs, messages, posts} = data;

    return(
        <BrowserRouter>
            <div className='app'>
                <div className='app-wrapper'>
                    <Header />
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route path='/profile'>
                                <Profile dataPosts={posts}/>
                            </Route>
                            <Route exact path='/dialogs'>
                                <Dialogs dataDialogs={dialogs} dataMessages={messages}/>
                            </Route>
                            <Route path='/news' component={News} />
                            <Route path='/music' component={Music} />
                            <Route path='/settings' component={Settings}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
