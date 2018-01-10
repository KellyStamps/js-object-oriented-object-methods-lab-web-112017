function BoardMember (name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training

  this.veto = function () {
    return 'No, I must disagree'
  }

  this.approve = () => {return 'You can do that!'}

  this.doCharity = function() {
    return 'I like to help people.'
  }

  this.releasePressStatement = () => {return 'You will see great things from Scuber.'}

  this.sayHi = () => {return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`}

}


// Add following methods to the class:

// sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.
