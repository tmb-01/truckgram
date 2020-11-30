import logo from './logo.svg';
import './App.css';
import Index from "./pdp-admin-site/components";
import DirectorDashboard from "./pdp-admin-site/pages/DirectorDashboard";
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar";
import Freight from "./pages/Freights";
import PostFreight from "./pages/PostFreight";
import ChatRoom from "./pages/ChatRoom";
import React, {useEffect, useState} from "react";
import {Provider} from "react-redux"
import {createStore} from "redux";
import searchReducer from "./redux/search/searchReducer";
import {directionFrom, directionTo, typeOfTruck} from "./redux/search/searchActions";
import MyMap from "./components/FreightSearch/index2";
import Profile from "./pages/Profile";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


// import MyMap from "./components/FreightSearch/index2";
// import {DATE} from "./redux/search/searchActionTypes";
// import store from "./redux/search/searchStore"


// const increment=()=>{
//     return{
//         type:"increment"
//     }
// }
//
// const decrement=()=>{
//     return{
//         type:"decrement"
//     }
// }
//
// const counter=(state=0,action)=>{
//     switch (action.type){
//         case "increment":
//             return state+1;
//         case "decrement":
//             return state-1;
//     }
// }
//
// let store=createStore(counter,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//
// store.subscribe(()=>console.log(store.getState()));
//
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())


const store = createStore(searchReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(typeOfTruck("tent"))
store.dispatch(directionFrom("uzbekistan"))
store.dispatch(directionTo("russia"))
// store.dispatch(directionTo("kazakhistan"))


// console.log("type of truck" + typeOfTruck().type)
// console.log("type of truck" + typeOfTruck("Tent").payload)


export const LangContext = React.createContext();
export const SetLangContext = React.createContext();

// eslint-disable-next-line react-hooks/rules-of-hooks


function App() {

    const [opacity, setOpacity] = useState(true)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = document.body.scrollHeight - window.innerHeight;
                console.log(maxScroll)
                if (currentScrollPos > true && currentScrollPos < maxScroll) {
                    setOpacity(false)
                    console.log(currentScrollPos)
                } else {
                    setOpacity(true)
                }
            }
        }
    }, [])


    const [isLangUzS, setIsLangUzS] = useState(true)


    return (
        <Provider store={store}>
            <LangContext.Provider value={isLangUzS}>
                <SetLangContext.Provider value={setIsLangUzS}>
                    <div>
                        <Router>
                            <Navbar/>
                            <Switch>
                                <Route path={"/profile"}>
                                    <Profile/>
                                </Route>
                                <Route path={"/post-freight"}>
                                    <PostFreight/>
                                </Route>
                                <Route  path={"/freight"}>
                                    <Freight/>
                                </Route>
                                <Route path={"/chat-room"}>
                                    <ChatRoom/>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </SetLangContext.Provider>
            </LangContext.Provider>
        </Provider>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
