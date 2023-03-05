import _ from 'lodash';
import './style.css';
import load from './loadHTML.js';
import loadHome from './home.js';
import about from './about';
import restaurants from './restaurants';
import hotels from './hotels';
import contact from './contact';
zzzzzz
load()
loadHome()

const content=document.querySelector('#content')
const roadhouse=document.querySelector('#roadhouse')
const home_button=document.querySelector('#Home')
const about_button=document.querySelector('#About')
const restaurants_button=document.querySelector('#Restaurants')
const hotels_button=document.querySelector('#Hotels')
const contact_button=document.querySelector('#Contact')

//adds style to the active button i.e home button when the page loads the first time
home_button.classList.add('active-style')

roadhouse.addEventListener('click',()=>{
    clear()
    home_button.classList.add('active-style')
    remove_other_active('Home')
    loadHome()
})

home_button.addEventListener('click',(e)=>{
    //Clears the innerHTML of the id content(the only element present in our main html file)
    clear()
    //adds style to the active buttons(Home,About,....)
    active(e)
    remove_other_active(e.currentTarget.id)
    loadHome()
})

about_button.addEventListener('click',(e)=>{
    clear();
    active(e)
    remove_other_active(e.currentTarget.id)
    // console.log(e.currentTarget.id)
    about();
})
restaurants_button.addEventListener('click',(e)=>{
    clear();
    active(e)
    remove_other_active(e.currentTarget.id)
    restaurants()
})
hotels_button.addEventListener('click',(e)=>{
    clear();
    active(e)
    remove_other_active(e.currentTarget.id)
    hotels()
})
contact_button.addEventListener('click',(e)=>{
    clear();
    active(e)
    remove_other_active(e.currentTarget.id)
    contact()
})

function clear()
{
    content.innerHTML='';
}
function active(e)
{
    //Returns the id of the selected button:Home,About,.....
    //console.log(e.currentTarget.id)
    const button_element=e.currentTarget;
    button_element.classList.add('active-style')
}
function remove_other_active(button_to_be_active)
{
    const arr=['Home','About','Restaurants','Hotels','Contact']
    for(const i of arr)
    {
        if(i!=button_to_be_active)
        {
            // console.log(i)
            const id_select=`#${i}`
            // console.log(id_select)
            const select_node=document.querySelector(id_select)
            select_node.classList.remove('active-style')
        }
    }
}