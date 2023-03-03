import vdom from "./VDOM";
const content=document.querySelector('#content')
//Here the middle-section is made 
export default function loadHome()
{
    const home=new vdom('div').addAttributes({class:'middle-section'})
    .addChild(new vdom('h1').addAttributes({class:'header'}).addText('Welcome To RoadHouse'))
    .addChild(new vdom('img').addAttributes({class:'middle-image'}))
    .addChild(new vdom('p').addAttributes({class:'paragraph'}).addText('We have been one of Nepal’s leading hospitality brands since 1992. Roadhouse has been committed to maintaining the high quality and standards that our customers have been accustomed that invokes quality service, food as well as its unique ambiance that has been well received over the year.'))
    .addChild(new vdom('p').addAttributes({class:'paragraph'}).addText('The brand initially started with the two Kayestha brothers opening Roadhouse Café at the heart of the city in Thamel, inspired by the hit song-“Roadhouse Blues” by The Doors.'))


   
    
    content.appendChild(home.render())
}