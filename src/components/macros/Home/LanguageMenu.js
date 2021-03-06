import React from "react"
function LanguageMenu( {languageSelection} ) {

  return (
    <>
    <button></button>
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
