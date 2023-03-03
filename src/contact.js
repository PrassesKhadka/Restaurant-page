import vdom from "./VDOM"

const content=document.querySelector('#content')

export default function contact()
{
    const contact=new vdom('div').addAttributes({class:'contact'})
    .addChild(new vdom('p').addText('Thank you for your interest in Road House Hospitality Group.We are always happy to answer your questions and inquiries'))
    .addChild(new vdom('div').addAttributes({class:'content-reservation'})
    .addChild(new vdom('br'))
    .addChild(new vdom('br'))
    .addChild(new vdom('br'))
    .addChild(new vdom('br'))
    .addChild(new vdom('h1').addText('RESERVATIONS:'))
    .addChild(new vdom('p').addText('Please e-mail us marketing@roadhousenepal.com'))
    .addChild(new vdom('p').addText('Contact Number: +977 9820805958'))
    .addChild(new vdom('p').addText('We kindly ask you to provide your contact information'))
    .addChild(new vdom('p').addText('so we can reach out to you in case your inquiry comes in during the off business hours.'))
    .addChild(new vdom('br'))
    .addChild(new vdom('br'))
    .addChild(new vdom('br'))
    .addChild(new vdom('br'))
    .addChild(new vdom('div').addAttributes({class:'grid-contact'})
    .addChild(new vdom('p').addAttributes({class:'contact-flex'}).addText('Bhatbhateni Branch 11:00 AM - 10:00 PM    01 4426587 / 9863029295'))
    .addChild(new vdom('p').addAttributes({class:'contact-flex'}).addText('Thamel Branch 11:00 AM - 10:00 PM    01 5367885 / 9863029293'))
    .addChild(new vdom('p').addAttributes({class:'contact-flex'}).addText('Jhamsikhel Branch 11:00 AM - 10:00 PM    01 5521755 / 9863029296'))
    .addChild(new vdom('p').addAttributes({class:'contact-flex'}).addText('Boudha Branch 11:00 AM - 10:00 PM    01 4916446 / 9863029297'))
    .addChild(new vdom('p').addAttributes({class:'contact-flex'}).addText('Pokhara Branch 11:00 AM - 10:00 PM    061 467421'))
    .addChild(new vdom('p').addAttributes({class:'contact-flex'}).addText('Roadhouse Pizzeria, Labim 11:00 AM - 10:00 PM    015366364'))))




    content.appendChild(contact.render())
}