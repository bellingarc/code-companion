import React, {useContext} from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../../Screen"

function LanguageMenu( {languageSelection} ) {
  const { setLanguageSelection } = useContext(UserContext)
  const history=useHistory()
  function renderHomeScreen(setLanguageSelection ) {
  setLanguageSelection(null)
  history.push("/home")
}
  return (
    <>
    <button onClick={() => renderHomeScreen(setLanguageSelection)}></button>
    <div className="grid-container">
      {languageSelection.map((language) => {
        return (
          <button
            key={language.contentName}
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
