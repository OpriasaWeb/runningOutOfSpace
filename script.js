// ------------- Author: Jeremy Opriasa ------------ //

function spacey(array){
  var storeSpaces = []; 
  var newStoreSpaces = []; 
  
  for(let i = 0; i < array.length; i++){
    storeSpaces += array[i]; // store array per iteration
    newStoreSpaces.push(storeSpaces); // push the current iteration of array here
    
  }
  return newStoreSpaces; // return
  
}

console.log(spacey(['kevin', 'has','no','space']));
console.log(spacey(['best', 'practices', 'code', 'wars']));

// ------------- Author: Jeremy Opriasa ------------ //


// ------------- Others code - best practices ------------ //

// function spacey(a){
//   for(let i=1;i<a.length;i++)
//     a[i]=a[i-1]+a[i];
//   return a;
// }

// function spacey(array){
//   let result =''
//   return array.map(item=> result+= item)
// }

// ------------- Others code - best practices ------------ //