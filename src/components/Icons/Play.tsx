import * as React from 'react'

function SvgComponent() {
   return (
      <svg viewBox="0 0 24 24" className="titleCard-playSVG">
         <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
      </svg>
   )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
