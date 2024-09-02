import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";

function ToggleButton({setOpen}) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <IoReorderThreeOutline />
    </button>
  )
}

export default ToggleButton
