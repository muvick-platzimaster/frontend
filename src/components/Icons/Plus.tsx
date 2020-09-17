import * as React from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => {
   return (
      <svg
         width={100}
         height={100}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="prefix__feather prefix__feather-plus"
         {...props}
      >
         <path d="M12 5v14M5 12h14" />
      </svg>
   )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default SvgComponent
