var title= document.querySelector('#items')

console.log(items.parentNode)
items.parentNode.style.backgroundColor='#CCC'
//parentElement

console.log(items.parentElement)
tems.parentElement.style.backgroundColor='#CCC'

//lastELementchild
console.log(items.lastElementChild)


items.lastElementChild.textContent="helooo"


//firstelementchild
console.log(title.firstElementChild)

title.firstElementChild.textContent="himamni"


//childelement
 console.log(title.firstChild)


 //lastchild
 console.log(title.lastChild)



 title.lastChild.textContent="himamni"


//firstchild

console.log(title.firstChild)

title.firstChild.textContent="hi"


//nxtsibling

console.log(title.nextSibling)

title.nextSibling.textContent="mnsi"
nextelementsibling
console.log(title.nextElementSibling)


   //previoussibling
console.log(title.previousSibling)

title.previousSibling.textContent="himamni"

previouselementsibling
 console.log(title.previousElementSibling

title.previousElementSibling.textContent="ram"

//createlement


var mydiv=document.createElement('div')
mydiv.className ='hello'
//setattribute
mydiv.setAttribute('title','hello world')

//addtextnode
var mydivText= document.createTextNode('hello')
//add text
mydiv.appendChild(mydivText)
console.log(mydiv)
 var container=document.querySelector('header .container')
 var h1=document.querySelector('header h1')
 container.insertBefore(mydiv,h1)


 var parentElement=document.getElementById('items')

 parentElement.innerHTML='<li>hello</li> <li>itme 1</li><li>Item 2</li><li >Item 3</li><li>Item 4</li>'

 
 console.log(parentElement)





 


 
 


 




