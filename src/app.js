import './app.css'
import App from './app.svelte'


function init(){
    
    new App({
        target: document.getElementById('view-root'),
    })
    
    const stylePath = "./style.css"
    const origin = new URL(import.meta.url).origin
    const styleUrl = new URL(stylePath, origin)
    
    // import(styleUrl.href)
    
    
    console.log({
        level:"dev", 
        message:"app.js loaded", 
        url: import.meta.url,
        origin: new URL(import.meta.url).origin,
        appKeys: Object.keys(App)
    })
}

export default init
