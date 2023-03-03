//A template for the vdom ->Virtual DOM
//which will be rendered in the html pages
//4 things to consider:element(tags(div,p,img...)),it's attributes,textContent(here the children is empty)
//and children
export default class vdom 
{
    constructor(element)
    {
        this.element=element
        this.attributes={}
        this.children=[]
    }
    //functions
    //an attributes object is passed
    //Eg:attributes={class:'new',id:'new-1'}
    addAttributes(attributes)
    {
        //here Object.keys will return an array of keys from attributes object
        //Eg:attributes={class:'new',id:'new-1'}
        //i=class then i=id
        for(const i of Object.keys(attributes))
        {
            //like saying array[0]='value'
            //Array is also an object but here key=index(0,1,2,3....)
            //here this means this objects attribute data's key(i)=value
            this.attributes[i]=attributes[i]
            //returns the object which called this function 
            return this;
        }
    }

    //Here the childElement we passed is an objects from class vdom 
    addChild(childElement)
    {
        this.children.push(childElement)
        return this;
    }

    addText(string)
    {
        //Only when there is no child ,we can add innerText
        this.children=[]
        this.innerText=string
        return this;
    }

    //This is where all the magic happens-->writing in the HTML page
    //so the object which calls this will have all the 4 necessary conditions:element,attributes,children,innerText
    //Now using this information rendre it in your browser -> DOM manipulation 
    //#Returns the DOM element #node
    render()
    {
        //Setting element
        const DOM=document.createElement(this.element)
        //Setting attributes
        for(const i of Object.keys(this.attributes))
        {
            DOM.setAttribute(i,this.attributes[i])
        }
        //Setting innerText/Children these two are if and or
        if(this.innerText===undefined)
        {
            //Here i is an object of class vdom that we will be passing
            for(const j of this.children)
            {
                DOM.appendChild(j.render())
            }
        }else
        {
            DOM.textContent=this.innerText
        }
        return DOM;
    }




}