import{r as o,Y as e,$ as c}from"./index-D3khomyw.js";import{u as m}from"./useInitAll-CbSIb_cJ.js";import{W as i}from"./index-DDHlE0nS.js";import{r as h}from"./index-CELLMRsP.js";import"./index-DdmoGPpG.js";function x(){const{sceneRef:r}=m("remove-mesh-test"),t=o.useRef();o.useEffect(()=>{t.current=new i(r.current),t.current.addToScene()},[r]);const a=()=>{var s,n;(s=t.current)==null||s.remove(),(n=r.current)==null||n.add(h())};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:a,children:"change Mesh"}),e.jsx("div",{id:"remove-mesh-test",style:{width:"500px",height:"500px"}})]})}export{x as default};