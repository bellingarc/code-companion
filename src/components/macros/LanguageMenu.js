import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../Screen"

function LanguageMenu({ languageSelection }) {
  const { setLanguageSelection } = useContext(UserContext)
  const history = useHistory()
  const [copySuccess, setCopySuccess] = useState('')

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe)
      setCopySuccess('Copied!')
      renderHomeScreen(setLanguageSelection)
    } catch (err) {
      setCopySuccess('Failed to copy!')
    }
  }
  const listener = (event) => {
    event.preventDefault()
      
        switch (event.key) {
          case "F13":languageSelection[0].final ? copyToClipBoard(languageSelection[0].code)  : renderLanguageContentsMenu(languageSelection[0].contentName, setLanguageSelection)
          break
          case "F14":languageSelection[1].final ? copyToClipBoard(languageSelection[1].code)  : renderLanguageContentsMenu(languageSelection[1].contentName, setLanguageSelection)
          break
          case "F15":languageSelection[2].final ? copyToClipBoard(languageSelection[2].code)  : renderLanguageContentsMenu(languageSelection[2].contentName, setLanguageSelection)
          break
          case "F16":languageSelection[3].final ? copyToClipBoard(languageSelection[3].code)  : renderLanguageContentsMenu(languageSelection[3].contentName, setLanguageSelection)
          break
          case "F17":languageSelection[4].final ? copyToClipBoard(languageSelection[4].code)  : renderLanguageContentsMenu(languageSelection[4].contentName, setLanguageSelection)
          break
          case "F18":languageSelection[5].final ? copyToClipBoard(languageSelection[5].code)  : renderLanguageContentsMenu(languageSelection[5].contentName, setLanguageSelection)
          break
          case "F19":languageSelection[6].final ? copyToClipBoard(languageSelection[6].code)  : renderLanguageContentsMenu(languageSelection[6].contentName, setLanguageSelection)
          break
          case "F20":languageSelection[7].final ? copyToClipBoard(languageSelection[7].code)  : renderLanguageContentsMenu(languageSelection[7].contentName, setLanguageSelection)
          break
          case "F21":languageSelection[8].final ? copyToClipBoard(languageSelection[8].code)  : renderLanguageContentsMenu(languageSelection[8].contentName, setLanguageSelection)
          break
          case "F22":languageSelection[9].final ? copyToClipBoard(languageSelection[9].code)  : renderLanguageContentsMenu(languageSelection[9].contentName, setLanguageSelection)
          break 
          case "F23":languageSelection[10].final ? copyToClipBoard(languageSelection[10].code)  : renderLanguageContentsMenu(languageSelection[10].contentName, setLanguageSelection)
          break
          case "F24":languageSelection[11].final ? copyToClipBoard(languageSelection[11].code)  : renderLanguageContentsMenu(languageSelection[11].contentName, setLanguageSelection)
          break
          
          default:
            return // Quit when this doesn't handle the key event.
        }
      
      }
  function renderLanguageContentsMenu(item, setLanguageSelection) {
    const contentIndex = languageSelection.findIndex(
      (element) => element.contentName === item
    )
    const contentContents = languageSelection[contentIndex].attributes
    setLanguageSelection(contentContents)
    history.push("/contentMenu")
  }

  function renderHomeScreen(setLanguageSelection) {
    history.push("/home")
  }

  useEffect(() => {
    if (languageSelection && languageSelection.length > 0) {
      window.addEventListener("keyup", listener, true)
    }
    return () => {
      window.removeEventListener("keyup", listener, true)
    }
  }, [languageSelection])
  

  return (
    <>
      <button onClick={() => renderHomeScreen(setLanguageSelection)}>
        Home
      </button>
      <div className="grid-container">
        {languageSelection.map((language) => {
          return (
            <button
              className="grid-item"
              key={language.contentName}
              onClick={() =>language.final ? copyToClipBoard(language.code) :
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
      © 2021, Skarzold Bellingar
    </>
  )
}
export default LanguageMenu