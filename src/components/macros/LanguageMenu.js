import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../Screen"

function LanguageMenu({ languageSelection }) {
  const { setLanguageSelection } = useContext(UserContext)
  const history = useHistory()

  function renderLanguageContentsMenu(item, setLanguageSelection) {
    const contentIndex = languageSelection.findIndex(
      (element) => element.contentName === item
    )
    const contentContents = languageSelection[contentIndex].attributes
    setLanguageSelection(contentContents)
    history.push("/contentMenu")
  }

  function renderHomeScreen(setLanguageSelection) {
    setLanguageSelection(null)
    history.push("/home")
  }

  return (
    <>
      <button onClick={() => renderHomeScreen(setLanguageSelection)}>
        Home
      </button>
      <div className="grid-container">
        {languageSelection.map((language) => {
          return (
            <button
              key={language.contentName}
              onClick={() =>
                renderLanguageContentsMenu(
                  language.contentName,
                  setLanguageSelection,
                  history
                )
              }
            >
              {language.contentName}
            </button>
          )
        })}
      </div>
    </>
  )
}
export default LanguageMenu
