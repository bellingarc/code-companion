import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../Screen"

function ContentMenu({ languageSelection }) {
  const { setLanguageSelection } = useContext(UserContext)
  const history = useHistory()
  const [copySuccess, setCopySuccess] = useState("")
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe)
      setCopySuccess("Copied!")      
      renderHomeScreen(setLanguageSelection)
    } catch (err) {
      setCopySuccess("Failed to copy!")
    }
  }

  const listener = (event) => {
    event.preventDefault()

    switch (event.key) {
      case "F13":
        languageSelection[0].final
          ? copyToClipBoard(languageSelection[0].code)
          : renderSubContentMenu(
              languageSelection[0].attName,
              setLanguageSelection
            )
        break
      case "F14":
        languageSelection[1].final
          ? copyToClipBoard(languageSelection[1].code)
          : renderSubContentMenu(
              languageSelection[1].attName,
              setLanguageSelection
            )
        break
      case "F15":
        languageSelection[2].final
          ? copyToClipBoard(languageSelection[2].code)
          : renderSubContentMenu(
              languageSelection[2].attName,
              setLanguageSelection
            )
        break
      case "F16":
        languageSelection[3].final
          ? copyToClipBoard(languageSelection[3].code)
          : renderSubContentMenu(
              languageSelection[3].attName,
              setLanguageSelection
            )
        break
      case "F17":
        languageSelection[4].final
          ? copyToClipBoard(languageSelection[4].code)
          : renderSubContentMenu(
              languageSelection[4].attName,
              setLanguageSelection
            )
        break
      case "F18":
        languageSelection[5].final
          ? copyToClipBoard(languageSelection[5].code)
          : renderSubContentMenu(
              languageSelection[5].attName,
              setLanguageSelection
            )
        break
      case "F19":
        languageSelection[6].final
          ? copyToClipBoard(languageSelection[6].code)
          : renderSubContentMenu(
              languageSelection[6].attName,
              setLanguageSelection
            )
        break
      case "F20":
        languageSelection[7].final
          ? copyToClipBoard(languageSelection[7].code)
          : renderSubContentMenu(
              languageSelection[7].attName,
              setLanguageSelection
            )
        break
      case "F21":
        languageSelection[8].final
          ? copyToClipBoard(languageSelection[8].code)
          : renderSubContentMenu(
              languageSelection[8].attName,
              setLanguageSelection
            )
        break
      case "F22":
        languageSelection[9].final
          ? copyToClipBoard(languageSelection[9].code)
          : renderSubContentMenu(
              languageSelection[9].attName,
              setLanguageSelection
            )
        break
      case "F23":
        languageSelection[10].final
          ? copyToClipBoard(languageSelection[10].code)
          : renderSubContentMenu(
              languageSelection[10].attName,
              setLanguageSelection
            )
        break
      case "F24":
        languageSelection[11].final
          ? copyToClipBoard(languageSelection[11].code)
          : renderSubContentMenu(
              languageSelection[11].attName,
              setLanguageSelection
            )
        break

      default:
        return // Quit when this doesn't handle the key event.
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
        {languageSelection &&
          languageSelection.map((language) => {
            return (
              <button
              className="grid-item"
                key={language.attName}
                onClick={() =>
                  language.final
                    ? copyToClipBoard(language.code)
                    : renderSubContentMenu(
                        language.attName,
                        setLanguageSelection
                      )
                }
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
