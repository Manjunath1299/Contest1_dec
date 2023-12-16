const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log(data.filter(person => person.profession === 'developer'));
}

// 2. Add Data
function addData() {
  const name = prompt('Enter name:');
  const age = parseInt(prompt('Enter age:'));
  const profession = prompt('Enter profession:');

  const newData = { name, age, profession };
  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
  const newdata = data.filter(person => person.profession !== 'admin');
  console.log(newdata);
}


// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [{ name: "dummy", age: 30, profession: "tester" }];
  const result = data.concat(dummyArray);
  console.log(result);
}


// 5. Average Age
function averageAge() {
  let totalAge = 0;

  for (let i = 0; i < data.length; i++) {
    totalAge += data[i].age;
  }

  const average = totalAge / data.length;
  console.log(average);
}
// 6. Age Check
function checkAgeAbove25() {
  let isAbove25 = false;

  for (let i = 0; i < data.length; i++) {
    if (data[i].age > 25) {
      isAbove25 = true;
      break;
    }
  }

  console.log(isAbove25);
}



// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessions = [];
  
  for (let i = 0; i < data.length; i++) {
    const profession = data[i].profession;
    
    if (!uniqueProfessions.includes(profession)) {
      uniqueProfessions.push(profession);
    }
  }

  console.log(uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === 'john') {
      data[i].profession = 'manager';
      break; // Once 'john' is found and updated, exit the loop
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCount = data.reduce(
    (count, person) => {
      count[person.profession]++;
      return count;
    },
    { developer: 0, admin: 0 }
  );
  console.log(professionCount);
}