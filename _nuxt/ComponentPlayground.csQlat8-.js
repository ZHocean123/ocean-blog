import{u as m}from"./asyncData.krrslR6j.js";import{M as c,I as p,d as i,a9 as l,r as u,N as e,l as d}from"./entry._nTaLruw.js";import f from"./Ellipsis.UqImWn8u.js";import y from"./ComponentPlaygroundData.j7aQEf--.js";import"./TabsHeader.IceKioaX.js";import"./ComponentPlaygroundProps.iWqyt1-r.js";import"./ProseH4.k2kdZUPX.js";import"./ProseCodeInline.l5thr31U.js";import"./Badge.i0NMDiZp.js";import"./MDCSlot.yM0ZnJUo.js";import"./slot.p0Q1I2Yr.js";import"./ProseP.d0mYs9y2.js";import"./index.PtswKNw1.js";import"./ComponentPlaygroundSlots.vue.QmbVNrmP.js";import"./ComponentPlaygroundTokens.vue.SEviAMHl.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-5cbef1a6"]]);export{V as default};
