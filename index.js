const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map( sentence => {
    let words = sentence.split(' ')
    let capitalizedWords =
      words.map( word => word.charAt(0).toUpperCase() + word.slice(1) )
    let result = capitalizedWords.join(' ')
    return result
  })
}

// Standard iteration using for and for of

    // let students = ['harry', 'ron', 'hermione', 'ginevra'];
    // let rollCall = [];

    // for (const student of students) {
    //   rollCall.push(student + ' the wizard')
    // }

// map() iteration with a function declaration

    // function studentRollCall(student) {
    //   return student + ' the wizard';
    // }

    // let students = ['harry', 'ron', 'hermione', 'ginevra'];
    // let rollCall = students.map(studentRollCall);

// map() with a function expression

    // let students = ['harry', 'ron', 'hermione', 'ginevra'];
    // let rollCall = students.map(function(student) {
    //   return student + ' the wizard';
    // });

// map() with an arrow function

    //when the parameter list is only one element, we can drop the ()
    // let students = ['harry', 'ron', 'hermione', 'ginevra'];
    // let rollCall = students.map(student => student + ' the wizard')
