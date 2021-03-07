import React, { useContext } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import LanguageMenu from "./LanguageMenu"
import languages from "./Home2"
import { UserContext } from "../Screen"

function HomeScreen() {
  const { setLanguageSelection } = useContext(UserContext)
  const history = useHistory()
  
  function renderLanguageMenu(item, setLanguageSelection) {
  const languageIndex = languages.findIndex(
    (element) => element.parentName === item
  )
  const languageContents = languages[languageIndex].contents
  setLanguageSelection(languageContents)
  history.push("/languageMenu")
}
function renderHomeScreen(setLanguageSelection) {
  setLanguageSelection(null)
  history.push("/home")
}
  return (
    <>
      <button
        onClick={() => renderHomeScreen(setLanguageSelection)}
      ></button>
      <p>HomeScreen</p>
      <div className="grid-container">
        {languages.map((language) => {
          return (
            <button
              key={language.parentName}
              onClick={() =>
                renderLanguageMenu(
                  language.parentName,
                  setLanguageSelection,
                  history
                )
              }
            >
              {language.parentName}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default HomeScreen
