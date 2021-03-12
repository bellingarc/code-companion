import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import firebase from "firebase"
import { UserContext } from "../Screen"
import { firebaseConfig } from "../../fbconfig"
import user from "../../userProfile"

let db;

function dbAuth() {
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig)
  db = firebase.database()
}

function HomeScreen() {
  const { setLanguageSelection } = useContext(UserContext)
  const history = useHistory()
  const [languages, setLanguages] = useState([])
  const [copySuccess, setCopySuccess] = useState('')
  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe)
      setCopySuccess('Copied!')
    } catch (err) {
      setCopySuccess('Failed to copy!')
    }
  }

  const listener = (event) => {
    event.preventDefault()
      
        switch (event.key) {
          case "F13":languages[0].final ? copyToClipBoard(languages[0].code) : renderLanguageMenu(languages[0].parentName, setLanguageSelection)
          break
          case "F14":languages[1].final ? copyToClipBoard(languages[1].code) : renderLanguageMenu(languages[1].parentName, setLanguageSelection)
          break
          case "F15":languages[2].final ? copyToClipBoard(languages[2].code) : renderLanguageMenu(languages[2].parentName, setLanguageSelection)
          break
          case "F16":languages[3].final ? copyToClipBoard(languages[3].code) : renderLanguageMenu(languages[3].parentName, setLanguageSelection)
          break
          case "F17":languages[4].final ? copyToClipBoard(languages[4].code) : renderLanguageMenu(languages[4].parentName, setLanguageSelection)
          break
          case "F18":languages[5].final ? copyToClipBoard(languages[5].code) : renderLanguageMenu(languages[5].parentName, setLanguageSelection)
          break
          case "F19":languages[6].final ? copyToClipBoard(languages[6].code) : renderLanguageMenu(languages[6].parentName, setLanguageSelection)
          break
          case "F20":languages[7].final ? copyToClipBoard(languages[7].code) : renderLanguageMenu(languages[7].parentName, setLanguageSelection)
          break
          case "F21":languages[8].final ? copyToClipBoard(languages[8].code) : renderLanguageMenu(languages[8].parentName, setLanguageSelection)
          break
          case "F22":languages[9].final ? copyToClipBoard(languages[9].code) : renderLanguageMenu(languages[9].parentName, setLanguageSelection)
          break 
          case "F23":languages[10].final ? copyToClipBoard(languages[10].code) : renderLanguageMenu(languages[10].parentName, setLanguageSelection)
          break
          case "F24":languages[11].final ? copyToClipBoard(languages[11].code) : renderLanguageMenu(languages[11].parentName, setLanguageSelection)
          break
          
          default:
            return // Quit when this doesn't handle the key event.
        }
      
      }
  function renderLanguageMenu(item, setLanguageSelection) {
    const languageIndex = languages.findIndex(
      (element) => element.parentName === item
    )
    const languageContents = languages[languageIndex].contents
    setLanguageSelection(languageContents)
    history.push("/languageMenu")
  }

  

  useEffect(() => {
    if (!db) {
      dbAuth()
    }
    db.ref("languages")
      .get()
      .then(function (snapshot) {
        if (snapshot.exists()) {
          setLanguages(snapshot.val())
        } else {
          console.log("No data available")
        }
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    if (languages && languages.length > 0) {
      window.addEventListener("keyup", listener, true)
    }
    return () => {
      window.removeEventListener("keyup", listener, true)
    }
  }, [languages])
  
  return (
    <>
      <div className="grid-container">
        {languages && languages.map((language) => {
          return (            
            <button className="grid-item"
              key={language.parentName}
              onClick={() =>{
                console.log(languages)
                renderLanguageMenu(
                  language.parentName,
                  setLanguageSelection
                )}
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
