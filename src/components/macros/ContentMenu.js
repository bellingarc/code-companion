import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../Screen"

function ContentMenu({ languageSelection }) {
  const { setLanguageSelection } = useContext(UserContext)
  const history = useHistory()
  const [copySuccess, setCopySuccess] = useState('')

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe)
      setCopySuccess('Copied!')
    } catch (err) {
      setCopySuccess('Failed to copy!')
    }
  }
  function renderHomeScreen(setLanguageSelection) {
    setLanguageSelection(null)
    history.push("/home")
  }

  function renderSubContentMenu(item, setLanguageSelection) {
    const contentIndex = languageSelection.findIndex(
      (element) => element.attName === item
    )
    const contentContents = languageSelection[contentIndex].type
    setLanguageSelection(contentContents)
    history.push("/subcontentMenu")
  }  
  return (
    <>
      <button onClick={() => renderHomeScreen(setLanguageSelection)}>
        Home
      </button>
      <div className="grid-container">
        {languageSelection && languageSelection.map((language) => {
          return (
            <button
              key={language.attName}
              onClick={() => language.final ? copyToClipBoard(language.code) : renderSubContentMenu(
                language.attName,
                setLanguageSelection)}
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
