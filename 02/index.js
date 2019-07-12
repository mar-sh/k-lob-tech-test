const randomClothes = () => {
  const clothes = ["JakartaJS", "AWSome Day", "Elixir", "GoJakarta"];
  let clothesSet = [];

  for(let i = 0; i<3; i++) {
    let set = {};
    let amount = ~~(Math.random() * (3-1) + 1);
    // fill the set with given amount ( 1 - 2 )
    while(Object.keys(set).length < amount ) {
      let random = ~~(Math.random() * clothes.length);
      // check if it's already a key in the set object 
      // this is to avoid duplicates without changing the clothes array   
      if(!set[clothes[random]]) {
        // if it isn't assign it a value 1
        set[clothes[random]] = 1;
        // if it is increment the value
      } else set[clothes[random]]++;      
    }
    clothesSet.push(set);
  }

  clothesSet = clothesSet.map((set) => Object.keys(set));

  return clothesSet;
}

const flatten = (arr) => {
  let flat = [];

  arr.forEach((v) => {
    if(typeof v === 'object') {
      flat = [...flat, ...v]
    } else 
    flat.push(v)
  })

  return flat;
}

const combinationCheck = () => {
  let combinations = randomClothes();
  let unique = true;

  // join the sorted combination;
 let duplicates = combinations.map((combo) => combo.sort().join(' '));

 // check and remove duplicates;
 duplicates = duplicates.filter((combo, index) => duplicates.indexOf(combo) === index);

 // if the 2 length are not the same means there are duplicates combination
 if(duplicates.length !== combinations.length) {
   unique = false; 
 }

 if(unique) {
   let possible = flatten(combinations)
   possible = possible.filter((v, i) => possible.indexOf(v) === i);
   return `${unique}. Example of possible combination: ${JSON.stringify(possible)}`;
 } else return `${unique}`;
}

console.log(combinationCheck());





