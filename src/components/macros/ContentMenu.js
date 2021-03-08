import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../Screen"

function ContentMenu({ languageSelection }) {
  const { setLanguageSelection } = useContext(UserContext)
  const history = useHistory()
  const [copySuccess, setCopySuccess] = useState('')

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
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
              key={language.attName}
              onClick={() => copyToClipBoard(language.code)}
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
