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

const titleCased = () => { 
  return tutorials.map(function(tutorial) {
    let capitalized = []
    let new_tutorial = tutorial.split(' ')
    for (let i =0;i < new_tutorial.length; i++) {
      let new_word = new_tutorial[i].charAt(0).toUpperCase() + new_tutorial[i].slice(1)
      capitalized.push(new_word)
    }
    return capitalized.join(' ')
  })

}
// const titleCased = () => {
//   return tutorials
// }