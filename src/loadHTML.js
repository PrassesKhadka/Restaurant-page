const content=document.querySelector('#content')
const HTMLbody=document.querySelector('body')
import vdom from "./VDOM"

//This load() function will only load the header 
export default function load()
{
    //For header
    const header=new vdom('div')
    .addAttributes({class:'header'})
    //For header-left
    .addChild(new vdom('div').addAttributes({class:'header-left'}).addChild(new vdom('h1')
    .addAttributes({id:'roadhouse'})
    .addText('Roadhouse')))
    //For header-middle
    .addChild(new vdom('div').addAttributes({class:'header-middle'}).addChild(new vdom('nav')
    .addChild(new vdom('span').addAttributes({id:'Home'}).addText('Home'))
    .addChild(new vdom('span').addAttributes({id:'About'}).addText('About'))
    .addChild(new vdom('span').addAttributes({id:'Restaurants'}).addText('Restaurants'))
    .addChild(new vdom('span').addAttributes({id:'Hotels'}).addText('Hotels'))
    .addChild(new vdom('span').addAttributes({id:'Contact'}).addText('Contact'))))
    //For header-right
    // .addChild(new vdom('div').addAttributes({class:'header-right'})
    // .addChild(new vdom('span').addAttributes({class:'material-symbols-outlined'}).addText('list')))
    

    //Header embedded inside content id created in the HTML page
    HTMLbody.insertAdjacentElement("afterbegin", header.render());
    // content.appendChild(header.render())
}