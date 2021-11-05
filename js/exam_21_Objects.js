//let user = {}
//user.name = "John";
//alert(user.name);
//user.surname = "Smith";
//user.name = "Pete";
//alert(user.name);
//delete user.name;
//alert(user.name);

let salaries = {
    //John: 100,
    //Ann: 160,
    //Pete: 130
  }
  let sum = 0;
  for (let key in salaries){
      sum = sum + salaries[key];
  }
 // console.log(sum);

  // до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);

  function multiplyNumeric(obj){
      for (let key1 in obj){
          if (typeof obj[key1] == 'number') {
              obj[key1] *= 2;
          }
      }
  }
  for (let key2 in menu){
      console.log(menu[key2]);
  }