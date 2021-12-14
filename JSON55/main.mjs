import data from './data.json'

//console.log(JSON.stringify(data));
//console.log(data);
//console.log( data.users[0].firstName); 
console.log(data.users[0]);
console.log(data.users[0].firstName);

function showUsersInfo() {
    data.users.forEach(function (user) {
      let userInfo = `${user.firstName}, born ${user.dateOfBirth} - ${user.knowsAs}`;
  
      console.log(userInfo);
    });
  }
  
  //showUsersInfo();
  
  
  function getListUsersName() {
    const json = JSON.stringify(data, ['users', 'firstName', 'lastName']);
    console.log(json);
    const users = JSON.parse(json).users;
  
    return users;
  }
  
  //console.log( getListUsersName() );
//console.log(usersMine);

