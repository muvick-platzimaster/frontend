import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg
         width={100}
         height={100}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="prefix__feather prefix__feather-log-out"
         {...props}
      >
         <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
      </svg>
   )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
