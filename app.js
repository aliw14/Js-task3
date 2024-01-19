// Destructing , Renaming , Rest operaton in object
const studentProfile = {
  name: "Ali",
  age: 19,
  course: "EACamp",
  hobbies: ["swimming", "basketball"],
};
let { name, age, ...rest } = studentProfile;
console.log(name, age, rest);

studentProfile["test"] = studentProfile["age"];
delete studentProfile.age;
console.log(studentProfile);

// SIMPLE ARRAY PRACTICE

const grades = ["NBA", "ABF", "TBF"];
console.log(grades[1]);

//Copying Objects

const additionalInfo = {
  address: "34567890",
};

const completeProfile = { ...studentProfile, ...additionalInfo };

console.log(completeProfile);
