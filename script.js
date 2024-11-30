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

