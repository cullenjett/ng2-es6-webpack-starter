let obj = Object.assign({}, {name: 'Cullen Jett'})
console.log(obj)

class Test {
  constructor(message) {
    console.log(`New Test created: ${message}`)
  }
}

new Test("Hello from main.js")