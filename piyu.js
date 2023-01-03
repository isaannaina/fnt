var form = document.getElementById('addForm');
var itemList = document.getElementById('items');



form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;
        
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  itemList.addEventListener('click', removeItem);

  var deleteBtn = document.createElement('button');


  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  //add edit
  
  var editBtn = document.createElement('button');


  editBtn.className = 'btn btn-primary float-right delete';

  editBtn.appendChild(document.createTextNode('edit'));

  li.appendChild(editBtn);
  itemList.appendChild(li);

}
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('do you want to delete')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


