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

//iterate to split by spaces
//iterate to select all first chars and upcase and concat. rest of word
//use .join to bring together as one array
const titleCased = () => {
  return tutorials.map( string => {
  let elements = string.split(' ');
  let capitalizedElements = elements.map(   word => word.charAt(0).toUpperCase() + word.slice(1)    ).join(' ');
  return capitalizedElements
    });
  }




// let students = ["harry", "ron", "hermione", "ginevera"];

// let rollCall = students.map(student => student + " the wizard");
// console.log(rollCall);

// const robots = [
//   { name: 'Johnny 5', modes: 5, isActivated: false, },
//   { name: 'C3PO', modes: 3, isActivated: false, },
//   { name: 'Sonny', modes: 2.5, isActivated: false, },
//   { name: 'Baymax', modes: 1.5, isActivated: false, },
// ];

// const activatedRobots = robots.map(function (robot) {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true,
//   });
// });

// console.log(activatedRobots);
