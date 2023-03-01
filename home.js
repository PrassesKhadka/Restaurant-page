import vdom from "./VDOM";
const content=document.querySelector('#content')
export default function loadHome()
{
    const home=new vdom('div')
    .addAttributes({class:'home'})
    .addChild(new vdom('img').addAttributes({class:'random-image',id:'1'}))
    .addChild(new vdom('div').addAttributes({class:'description'}).addChild(new vdom('p').addText('Roadhouse is committed to maintaining the high quality and standards that our customers have become accustomed to.')))







   
    
    content.appendChild(home.render())
}