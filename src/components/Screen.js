import React, { useState, createContext } from "react"
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom"
import HomeScreen from "./macros/Home"
import LanguageMenu from "./macros/LanguageMenu"
import ContentMenu from "./macros/ContentMenu"
import SubContentMenu from "./macros/SubContentMenu"
import "./Screen.css"
export const UserContext = createContext(null)
function Screen() {
  const [languageSelection, setLanguageSelection] = useState()

  return (
    <UserContext.Provider value={{languageSelection, setLanguageSelection}}>
    <Router>
      <Switch>
        <Route exact path="/subcontentMenu">
          <SubContentMenu languageSelection={languageSelection}/>
        </Route>
        <Route exact path="/contentMenu">
          <ContentMenu languageSelection={languageSelection}/>
        </Route>
        <Route exact path="/languageMenu">
          <LanguageMenu languageSelection={languageSelection}/>
        </Route>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
        <Route exact path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  )
}

export default Screen
