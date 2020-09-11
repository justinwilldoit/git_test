let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event

form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add Item function
function addItem(e) {
    e.preventDefault();
    // Get input value
    let newItem = document.getElementById('item').value;
    // Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    // add text node with input value
    if (newItem === ''){
        return;
    } else {
    li.appendChild(document.createTextNode(newItem));
    // create delete button element
    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    form.reset();        
    }
}

// Remove Item

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete this item?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items

function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display ='none';
        }
    });
}