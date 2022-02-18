import React from 'react'
const heading = {
  fontSize: '72px',
  color: 'blue'
}

function Inline() {
  return (
    <div>
      <h4>Inline Stylesheet</h4>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
