import './app.css'
import App from './app.svelte'


/**
 * @param {string} appBase 
 * @param {string} viewBase 
 * @param {string[]} routeChunks 
 */
function init(appBase, viewBase, routeChunks){
    
    new App({
        target: document.getElementById('view-root'),
        props: {
            appBase,
            viewBase,
            routeChunks,
        }
    })
    
    const stylePath = "./style.css"
    const origin = new URL(import.meta.url).origin
    const styleUrl = new URL(stylePath, origin)
    
    // import(styleUrl.href)
    
}

export default init
