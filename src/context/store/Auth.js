import React, { useReducer, useEffect,useState } from "react";
import authReducer from "../reducers/autenticacion.reducer";
import { setCurrentUser } from "../actions/autenticacion.action";
import jwt_decode from "jwt-decode";

export const Context = React.createContext();

const Auth = props => {
    const [stateUser, dispatch] = useReducer(authReducer, {
        isAuthenticated: null,
        user: {}
    });
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        if (localStorage.jwt) {
            const decoded = localStorage.jwt ? localStorage.jwt : "";
            dispatch(setCurrentUser(jwt_decode(decoded))); 
        }
        setShowChild(true);
    }, []); 

    if (!showChild) {
        return null;
    } else {
        return (
            <Context.Provider
                value={{
                    stateUser,
                    dispatch
                }}
            >
                {props.children}
            </Context.Provider>
        );
    }
};

export default Auth;