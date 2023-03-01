const content=document.querySelector('#content')
const body=document.body;

export default function load()
{
    const div_header =document.createElement('div')
    div_header.className='header'

    const div_header_left=document.createElement('div')
    div_header_left.className='header-left'
    const img1=document.createElement('img')
    const img2=document.createElement('img')
    img1.setAttribute('src','./images/logo')
    img2.setAttribute('src','./images/logo-name')
    
    const div_header_middle=document.createElement('div')
    div_header_middle.className='header-middle'
    const nav=document.createElement('nav')
    const home=document.createElement('button')
    home.textContent='Home'
    const about=document.createElement('button')
    about.textContent='About'
    const restaurants=document.createElement('button')
    restaurants.textContent='Restaurants'
    const contact=document.createElement('button')
    contact.textContent='Contact'
    nav.append(home,about,restaurants,contact)

    const div_header_right=document.createElement('div')
    div_header_right.className='header-right'
    
    body.appendChild(div_header)
    div_header.append(div_header_left,div_header_middle,div_header_right)
    div_header_left.append(img1,img2)
    div_header_middle.appendChild(nav)



}