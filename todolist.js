function addItem() {
    // TODO: add 'item' to the list of TODOs
  
    //Step 1: identify the value of the myInput element. 
    const input = document.getElementById('myInput');
    const val = input.value;
    //Step 2: Create a text node containing that value
    const li = document.createElement('li');
    li.innerHTML = val;
    //Step 3: Create a new li element and append the text node to it
    document.getElementById('myTODOs').appendChild(li);
    //Step 4: Append the li element to the existing myTODOs element. 
  }