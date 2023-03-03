import vdom from "./VDOM"

const content=document.querySelector('#content')

export default function hotels()
{
    const hotels=new vdom('div').addAttributes({class:'hotels'})
    .addChild(new vdom('div').addAttributes({class:'hotels-left'})
    .addChild(new vdom('h1').addAttributes({class:'font-hotels'}).addText('HOTEL ROADHOUSE'))
    .addChild(new vdom('h2').addAttributes({class:'font-hotels'}).addText('Kathmandu'))
    .addChild(new vdom('p').addAttributes({class:'font-hotels'}).addText('The Roadhouse hotel is a tribute to refined Newari architecture. The four-floor boutique hotel is situated alongside Roadhouse Café in Thamel. The exterior of the hotel is a reminder of the lavish lifestyle that Newar traders enjoyed in the 17th century. Centrally located, in the heart of modern day Kathmandu, the hotel is traditional in outlook but filled with the comforts of contemporary amenities.')))




    .addChild(new vdom('div').addAttributes({class:'hotels-right'})
    .addChild(new vdom('h1').addAttributes({class:'font-hotels'}).addText('TEMPLE TREE RESORT'))
    .addChild(new vdom('h2').addAttributes({class:'font-hotels'}).addText('Pokhara'))
    .addChild(new vdom('p').addAttributes({class:'font-hotels'}).addText('The Temple Tree Resort & Spa is a boutique hotel near Fewa Lake in Pokhara. Elegant and luxurious, the Temple Tree is all you could ask for in peace and comfort in tranquil surroundings.')))
    content.appendChild(hotels.render())
}