import _ from 'lodash';
import './style.css';
import load from './loadHTML.js';
import loadHome from './home.js';
import about from './about';
import restaurants from './restaurants';
import hotels from './hotels';
import contact from './contact';


load()
loadHome()

const content=document.querySelector('#content')
const roadhouse=document.querySelector('#roadhouse')
const home_button=document.querySelector('#Home')
const about_button=document.querySelector('#About')
const restaurants_button=document.querySelector('#Restaurants')
const hotels_button=document.querySelector('#Hotels')
const contact_button=document.querySelector('#Contact')

roadhouse.addEventListener('click',()=>{
    clear()
    loadHome()
})
home_button.addEventListener('click',()=>{
    clear()
    loadHome()
})

about_button.addEventListener('click',()=>{
    clear();
    about();
})
restaurants_button.addEventListener('click',()=>{
    clear();
    restaurants()
})
hotels_button.addEventListener('click',()=>{
    clear();
    hotels()
})
contact_button.addEventListener('click',()=>{
    clear();
    contact()
})

function clear()
{
    content.innerHTML='';
}