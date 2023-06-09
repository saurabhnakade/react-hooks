import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <AuthContext.Provider value={{isLoggedIn:isLoggedIn,logoutHandler:logoutHandler}}>
                <MainHeader/>
                <main>
                    {!isLoggedIn && <Login onLogin={loginHandler} />}
                    {isLoggedIn && <Home onLogout={logoutHandler} />}
                </main>
            </AuthContext.Provider>
        </React.Fragment>
    );
}

export default App;
