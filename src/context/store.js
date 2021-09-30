import * as React from "react"
const GlobalContext = React.createContext({
    Bool: false,
    English: {
        whatwedo: "",
        whoweare: "",
        humanitywork: "",
        slumwork: "",
        indigenous: "",
        music: "",
        pastortraining: "",
        building: "",
        childrensministry: "",
        homevisits: "",
        vision: "",

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
    const [state, dispatch] = React.useReducer(globalReducer, {Bool: false, English: {
        whatwedo: "What we do - Evangelism, Preach in churches, Encourage the church to boldly live for Christ, children’s ministry, youth ministry, pastoral/ leadership training, humanitarian, building projects, restoration of those in addictions, men’s & women’s ministry, worship music project, slums, homeless outreach, take bibles to those without the word and travel to share with indigenous groups. ",
        whoweare: "We are missionaries.  We are a family from the United States, from the State of Washington. Called out by the Lord in 2011, to go into the mission field, on a complete journey of faith. The Lord strengthened and prepared us, as He asked us to give up our home and sell all that we had to leave the U.S. and move to Costa Rica. We now serve traveling throughout all of Central America and have seen thousands of people impacted by the gospel of Jesus Christ! All glory to God as He continues to establish all for His purpose! It is our greatest desire to be a living sacrifice unto the Lord, and proclaim the gospel to all the world! BENEDICT FAMILY - Justin & Grifyn, Hailey, Adison, Chloey, Makensie, Landen, Levi, Jubilee, Kaeden & Olivia.",
        humanitywork: "",
        slumwork: "",
        indigenous: "",
        music: "",
        pastortraining: "",
        building: "",
        childrensministry: "",
        homevisits: "",
        vision: "to humbly serve as the Lord allows us each day. To come along side local churches and to go into the communities. To meet the greatest needs and ultimately to share the gospel of Jesus Christ! "
    }, Spanish: {}})
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