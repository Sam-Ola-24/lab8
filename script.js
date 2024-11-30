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

