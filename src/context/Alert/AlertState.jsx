import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);


    // set Alert
    const setAlert = (msg, type) => { // setting an alert function to display if the input field was submitted empty
        dispatch({ type: SET_ALERT, payload: { msg, type } })

        // setting a time limit for the displayed alert to disappear.
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);

    };


    return <AlertContext.Provider value={{
        alert: state,
        setAlert,

    }}>

        {props.children}

    </AlertContext.Provider>
}

export default AlertState;