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
         className="prefix__feather prefix__feather-chevron-right"
         {...props}
      >
         <path d="M9 18l6-6-6-6" />
      </svg>
   )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
