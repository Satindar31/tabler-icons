import * as React from "react";

function IconBrandUnity({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-unity" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 13h11l5 -10" /><path d="M6.5 18l-4.5 -5l4.5 -5" /><path d="M13 13l5 8" /><path d="M11.5 4l6.5 -1l2 6" /><path d="M20 15l-2 6l-6.5 -.5" /></svg>;
}

export default IconBrandUnity;