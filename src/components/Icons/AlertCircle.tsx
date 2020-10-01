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
         className="prefix__feather prefix__feather-alert-circle"
         {...props}
      >
         <circle cx={12} cy={12} r={10} />
         <path d="M12 8v4M12 16h.01" />
      </svg>
   )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
