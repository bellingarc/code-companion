import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../Screen"
import languages from "./Home2"

function ContentMenu({ languageSelection }) {
  const { setLanguageSelection } = useContext(UserContext)
  const history = useHistory()

  function renderHomeScreen(setLanguageSelection) {
    setLanguageSelection(null)
    history.push("/home")
  }

  return (
    <>
      <button onClick={() => renderHomeScreen(setLanguageSelection)}>
        Home
      </button>
      <p>ContentMenu</p>
      <div className="grid-container">
        {languageSelection.map((language) => {
          return (
            <button
              key={language.attName}
              onClick={() => console.log("Howdy")}
            >
              {language.attName}
            </button>
          )
        })}
      </div>
    </>
  )
}
export default ContentMenu
