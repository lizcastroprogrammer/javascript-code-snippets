

function groceries(arr) {
  
  console.log(arr[0].item)  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].item);
  }
  console.log(newArr)
}
  switch(newArr) {

  }
  /*let newString;
  let newArr = []; 

    //let newString;
    console.log(arr.length);
    //console.log('itemsArr is: ' + itemsArr);
    if (arr.length === 1) {
      console.log(arr[0]['item']);
    } else if (arr.length == 2) {
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].item);
      }
      //console.log(newArr.join(' and '));
    } else if (arr.length > 2) {
      for (let i = 0; i < arr.length - 2; i++) {
      newArr.push(arr[i].item + ',');
    }

      console.log(newArr.splice(arr.length - 1, 0, 'and'));
      console.log(newArr)
      console.log(newArr.push(arr[arr.length - 1].item));
      console.log(newArr)
      return console.log(newArr.join(' '));
  }
}
*/

groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])

