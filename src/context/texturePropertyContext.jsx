import React, { createContext, useReducer } from "react";
import combineReducers from 'react-combine-reducers';

import { MaterialPropertyReducer } from "../reducers/MaterialPropertyReducer";
import { MetaDataReducer, defaultMetaData } from "../reducers/MetaDataReducer";
// import { TextureTypes } from "../TestData/DefaultData";

export const TexturePropertyContext = createContext();

export const TexturePropertyProvider = (props) => {
    const [globalStateReducer, initialGlobalState] = combineReducers({
        MetaData: [MetaDataReducer, defaultMetaData],
        MaterialPorperties: [MaterialPropertyReducer, []]
    });
    const [globalState, dispatch] = useReducer(globalStateReducer, initialGlobalState);

    return (
        <TexturePropertyContext.Provider value={{ globalState, dispatch }}>
            {props.children}
        </TexturePropertyContext.Provider>
    );
}
