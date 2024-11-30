//Declare student object
let student = {
  firstName: "John",
  age: 50,
  enrolled: true,
  courses: ["CPAN113", "CPAN200", "CPAN4000"],

  info: function () {
    return (
      "CPAN Student's info: " +
      "\n" +
      "Name : " +
      this.firstName +
      " \n" +
      "Age : " +
      this.age +
      " \n" +
      "Enrolment Status : " +
      this.enrolled +
      " \n" +
      "Registered Courses: " +
      this.courses
    );
  },
};

//log information to console
console.log(
  "Student's name is " +
    student.firstName +
    ", and " +
    student.firstName +
    " is " +
    student.age +
    " years old."
);
console.log(student.info());

//convert object to JSON
const studentJson = JSON.stringify(student);
console.log(studentJson);

//convert JSON back to a new object
const studentNewObject = JSON.parse(studentJson);
console.log(studentNewObject);

//Destructuring
const { firstName, courses } = student;
console.log(firstName);
console.log(courses);

//Array of scores to practice destructuring
const scoresArray = [85, 92, 78, 90];
const [first, second] = scoresArray;

console.log(first);
console.log(second);

//The spread operator
const spreadStudentObject = { ...student, graduationYear: "2026" };
console.log(spreadStudentObject);

//New array of courses
const newCourseArray = ["PROG001", "PROG005", "PROG007", "PROG009"];

const newStudentCourseArray = [...student.courses, newCourseArray];

console.log(newStudentCourseArray);

//New method to dynamically add course to the course array
function addCourse(newCourse) {
  courses.push(newCourse);
}

addCourse("JAVA200");
console.log(courses);

//New method to count number of courses
function countCourses() {
  let total = courses.length;
  console.log("Count of courses is " + total);
}

//Use reduce to find the average score

let count = scoresArray.length;
let total = scoresArray.reduce((addition, current) => addition + current, 0);

let average = total / count;
console.log("The average score = " + average);
