import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import firebase from "firebase"
import { UserContext } from "../Screen"
import { firebaseConfig } from "../../fbconfig"
import user from "../../userProfile"

let Mousetrap = require('mousetrap')
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

  function renderLanguageMenu(item, setLanguageSelection) {
    console.log({languages})
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
      window.addEventListener("keyup", function (event) {
        
        event.preventDefault()
      
        switch (event.key) {
          case "F13":renderLanguageMenu(languages[0].parentName, setLanguageSelection)
          break
          case "F14":renderLanguageMenu(languages[1].parentName, setLanguageSelection)
          break
          case "F15":renderLanguageMenu(languages[2].parentName, setLanguageSelection)
          break
          case "F16":renderLanguageMenu(languages[3].parentName, setLanguageSelection)
          break
          case "F17":renderLanguageMenu(languages[4].parentName, setLanguageSelection)
          break
          case "F18":renderLanguageMenu(languages[5].parentName, setLanguageSelection)
          break
          case "F19":renderLanguageMenu(languages[6].parentName, setLanguageSelection)
          break
          case "F20":renderLanguageMenu(languages[7].parentName, setLanguageSelection)
          break
          case "F21":renderLanguageMenu(languages[8].parentName, setLanguageSelection)
          break
          case "F22":renderLanguageMenu(languages[9].parentName, setLanguageSelection)
          break 
          case "F23":renderLanguageMenu(languages[10].parentName, setLanguageSelection)
          break
          case "F24":renderLanguageMenu(languages[11].parentName, setLanguageSelection)
          break
          
          default:
            return // Quit when this doesn't handle the key event.
        }
      
      }, true)
    }
  }, [languages])
  
  return (
    <>
      <div className="grid-container">
        {languages && languages.map((language) => {
          return (            
            <button
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
