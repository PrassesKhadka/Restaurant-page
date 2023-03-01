import vdom from "./VDOM";
const content=document.querySelector('#content')
//Here the middle-section is made 
export default function loadHome()
{
    //Middle-section
    const home=new vdom('div').addAttributes({class:'middle-section'})
    //Middle-image
    .addChild(new vdom('div').addAttributes({class:'middle-image'})
    .addChild(new vdom('img')))
    //Middle-intro
    .addChild(new vdom('div').addAttributes({class:'middle-intro'})
    .addChild(new vdom('div').addAttributes({class:'intro-image'}))
    .addChild(new vdom('div').addAttributes({class:'intro-about'})))
    //Middle-grid


   
    
    content.appendChild(home.render())
}