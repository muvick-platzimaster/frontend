import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 359.77 94.33"
         {...props}
      >
         <g id="Capa_2" data-name="Capa 2">
            <g id="Logotipo_1" data-name="Logotipo 1">
               <g id="Fondo">
                  <g id="Grupo_1" data-name="Grupo 1">
                     <g id="M">
                        <g>
                           <path
                              d="M91.87,93.25H73.93V37.46q0-9,.68-20h-.45a112.41,112.41,0,0,1-2.53,12.36L52.74,93.25H37.89L18.67,30.5q-.8-2.54-2.53-13h-.51q.74,13.79.73,24.19V93.25H0V0H26.59L43.07,55.27A88.57,88.57,0,0,1,45.93,68.6h.34q1.51-7.72,3.2-13.46L66,0H91.87Z"
                              fill="#0D52AC"
                           />
                        </g>
                     </g>
                     <g id="UVICK">
                        <g>
                           <path
                              d="M151.81,66.33q0,28-26.1,28-25.32,0-25.32-27.35V31.08h14V67.15q0,15.09,11.79,15.09,11.58,0,11.58-14.57V31.08h14Z"
                              fill="#fff"
                           />
                           <path
                              d="M217.1,31.08,195.68,93.25H179.81L158.66,31.08h15.08l13,43.27a30.74,30.74,0,0,1,1.25,6.2h.26a35.35,35.35,0,0,1,1.35-6.38l12.87-43.09Z"
                              fill="#fff"
                           />
                           <path d="M238.56,93.25h-14V31.08h14Z" fill="#fff" />
                           <path
                              d="M297.25,91q-6.79,3.28-17.77,3.29-14.31,0-22.5-8.41t-8.19-22.41q0-14.91,9.21-24.19T281.91,30a44.7,44.7,0,0,1,15.34,2.3V45.82A27.24,27.24,0,0,0,283,42.09q-8.75,0-14.13,5.51t-5.37,14.91q0,9,5.07,14.37t13.65,5.36a29.08,29.08,0,0,0,15-4Z"
                              fill="#fff"
                           />
                           <path
                              d="M359.77,93.25H342.08L324,66.24a25.21,25.21,0,0,1-1.65-3.42h-.22V93.25h-14V31.08h14V60.47h.22c.35-.8.92-2,1.73-3.46l17.17-25.93H357.9L336.23,60.73Z"
                              fill="#fff"
                           />
                        </g>
                     </g>
                  </g>
               </g>
            </g>
         </g>
      </svg>
   );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
