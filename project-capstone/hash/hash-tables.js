let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhhh!');
  }
};

console.log(user.age);
console.log(user.spell = 'abra kadabra');
user.scream()

//Map --> Gives you some order
const a = new Map();
console.log(a);
//Set --> No duplicate keys
const b = new Set();
console.log(b);