import * as React from "react"
const GlobalContext = React.createContext({
    Bool: false,
    English: {

    },
    Spanish: {

    }
})

function globalReducer(state, action){
    console.log(state)
    console.log(action.type)
    console.log(action.payload)
    switch(action.type){
        
        case "BOOLEAN": {
            return {...state, Bool: action.payload}
        }
        default:
            throw new Error("Unknown action type " + action.type)
    }
}

function GlobalProvider({children}){
    const [state, dispatch] = React.useReducer(globalReducer, {Bool: false, English: {}, Spanish: {}})
    const value = {state, dispatch}
return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
function useGlobalContext(){
    const context = React.useContext(GlobalContext)
    if(!context){
        throw new Error("useGlobalContext must be used in GlobalProbider")
    }
    return context
}
export {GlobalProvider, useGlobalContext}