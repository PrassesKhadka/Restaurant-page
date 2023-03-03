import vdom from "./VDOM"

const content=document.querySelector('#content')
export default function restaurants()
{
    const restaurants=new vdom('div').addAttributes({class:'grid'})
    .addChild(new vdom('div').addAttributes({class:'grid-1 style'})
    .addChild(new vdom('h1').addAttributes({class:'style'}).addText('ROADHOUSE CAFE'))
    .addChild(new vdom('h2').addAttributes({class:'style'}).addText('Thamel,Kathmandu')))

    .addChild(new vdom('div').addAttributes({class:'grid-2 style'})
    .addChild(new vdom('h1').addAttributes({class:'style'}).addText('ROADHOUSE CAFE'))
    .addChild(new vdom('h2').addAttributes({class:'style'}).addText('Bhatbhateni,Kathmandu')))

    .addChild(new vdom('div').addAttributes({class:'grid-3 style'})
    .addChild(new vdom('h1').addAttributes({class:'style'}).addText('ROADHOUSE CAFE'))
    .addChild(new vdom('h2').addAttributes({class:'style'}).addText('Jhamsikhel,Kathmandu')))

    .addChild(new vdom('div').addAttributes({class:'grid-4 style'})
    .addChild(new vdom('h1').addAttributes({class:'style'}).addText('ROADHOUSE CAFE'))
    .addChild(new vdom('h2').addAttributes({class:'style'}).addText('Lakeside,Pokhara')))

    .addChild(new vdom('div').addAttributes({class:'grid-5 style'})
    .addChild(new vdom('h1').addAttributes({class:'style'}).addText('ROADHOUSE CAFE'))
    .addChild(new vdom('h2').addAttributes({class:'style'}).addText('Boudha,Kathmandu')))

    .addChild(new vdom('div').addAttributes({class:'grid-6 style'})
    .addChild(new vdom('h1').addAttributes({class:'style'}).addText('ROADHOUSE CAFE'))
    .addChild(new vdom('h2').addAttributes({class:'style'}).addText('Labim,Lalitpur')))
    content.appendChild(restaurants.render())
    return restaurants.render();
}
