import React, { useState } from 'react'
import Popup from './Popup/Popup'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="container2">
      <input
        className="button__block"
        type="button"
        value="Click to Open Popup"
        onClick={togglePopup}
      />

      {isOpen && <Popup handleClose={togglePopup} />}
    </div>
  )
}

export default App
