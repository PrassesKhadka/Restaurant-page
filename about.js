import vdom from "./VDOM";

const content=document.querySelector('#content');

export default function about()
{
    const about=new vdom('div').addAttributes({class:'middle-section'})
    .addChild(new vdom('h1').addAttributes({class:'header'}).addText('THAMEL,KATHMANDU'))
    .addChild(new vdom('p').addAttributes({class:'paragraph'}).addText('The Roadhouse Cafés are the signature of the Roadhouse group. The Roadhouse Café in Thamel was the first and original and has been a popular choice for locals and tourists alike for years.'))
    .addChild(new vdom('p').addAttributes({class:'paragraph'}).addText('The décor of Mediterranean colours, wooden furniture and mosaics on the walls gives the café an earthy feel and has set the tone for the interiors of the other cafes. Enjoy outdoor seating in our cozy garden patio at the back.'))
    .addChild(new vdom('p').addAttributes({class:'paragraph'}).addText('The menu features the Roadhouse signature wood-fired pizza along with a selection of pastas, salads and grilled dishes.'))
    .addChild(new vdom('p').addAttributes({class:'paragraph'}).addText('Contact Numbers:'))
    .addChild(new vdom('p').addAttributes({class:'paragraph'}).addText('977 01 5367885'))
    .addChild(new vdom('p').addAttributes({class:'paragraph'}).addText('977 9863029293'))
    content.appendChild(about.render())
}