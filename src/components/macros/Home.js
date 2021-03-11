import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import firebase from "firebase"
import { UserContext } from "../Screen"
import { firebaseConfig } from "../../fbconfig"
import user from "../../userProfile"
let Mousetrap = require('mousetrap')
let db;
let languagesTemp;
function dbAuth() {
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig)
  db = firebase.database()
}

function HomeScreen() {
  const { setLanguageSelection } = useContext(UserContext)
  const history = useHistory()
  const [languages, setLanguages] = useState([])

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
languagesTemp = languages

  function renderLanguageMenuByKey(item, setLanguageSelection) {
    const languageIndex = languagesTemp.findIndex(
      (element) => element.parentName === item
    )
    const languageContents = languagesTemp[languageIndex].contents
    setLanguageSelection(languageContents)
    history.push("/languageMenu")
  }

  function renderLanguageMenu(item, setLanguageSelection) {
    const languageIndex = languages.findIndex(
      (element) => element.parentName === item
    )
    const languageContents = languages[languageIndex].contents
    setLanguageSelection(languageContents)
    history.push("/languageMenu")
  }
  

  return (
    <>
      <div className="grid-container">
        {languages.map((language) => {
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
      <script>
    {window.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) {
    return // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "F13":renderLanguageMenuByKey(languagesTemp[0].parentName, setLanguageSelection)
    break
    case "F14":renderLanguageMenuByKey(languagesTemp[1].parentName,setLanguageSelection)
    break
    case "F15":renderLanguageMenuByKey(languagesTemp[2].parentName,setLanguageSelection)
    break
    case "F16":renderLanguageMenuByKey(languagesTemp[3].parentName,setLanguageSelection)
    break
    case "F17":renderLanguageMenuByKey(languagesTemp[4].parentName,setLanguageSelection)
    break
    case "F18":renderLanguageMenuByKey(languagesTemp[5].parentName,setLanguageSelection)
    break
    case "F19":renderLanguageMenuByKey(languagesTemp[6].parentName,setLanguageSelection)
    break
    case "F20":renderLanguageMenuByKey(languagesTemp[7].parentName,setLanguageSelection)
    break
    case "F21":renderLanguageMenuByKey(languagesTemp[8].parentName,setLanguageSelection)
    break
    case "F22":renderLanguageMenuByKey(languagesTemp[9].parentName,setLanguageSelection)
    break
    case "F23":renderLanguageMenuByKey(languagesTemp[10].parentName,setLanguageSelection)
    break
    case "F24":renderLanguageMenuByKey(languagesTemp[11].parentName,setLanguageSelection)
    break
    
    default:
      return // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault()
}, true)}
    </script>
    </>
  )
}

export default HomeScreen
