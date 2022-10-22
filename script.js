// //global variables, can be accessed by all functions

//   //declare a variable named playerName that stores the value the player enters from a prompt
//   let playerName = prompt("Welcome to the Monster Smash game, please enter your name")

//   //declare a variable named playerHealth and set it equal to the number value 15
//   let playerHealth = 15

//   //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName

//   let monsterName = "Ghost"

//   //declare a variable named monsterHealth and set it equal to the number value 15

//   let monsterHealth = 15

// //random integer function 
// //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function randomNum(min, max) {
//   //return a random integer between min - max
//   min = Math.ceil(min)
//   max = Math.floor(max)
//   return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
// }

// function playerAttack(){
// //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
// let playerAttackPoints = randomNum(1, 6)

// //subtract playerAttackPoints from monsterHealth and update the monsterHealth variable
// monsterHealth = monsterHealth - playerAttackPoints
//   //use an alert with string template literals to tell the player: 
//   alert(`You attacked ${monsterName} with ${playerAttackPoints} attack points of damage, ${monsterName} has ${monsterHealth} health points left`)
//   // 1. player attacked monster 
//   // 2. how much damage the player did 
//   // 3. how much health the monster has 
// }

// function monsterAttack(){
//   //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
//   let monsterAttackPoints = randomNum(1, 6)
//   //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
//   playerHealth = playerHealth -  monsterAttackPoints

//   alert(`You attacked ${playerName} with ${monsterAttackPoints} attack points of damage, ${playerName} has ${playerHealth} health points left `)
//   //use an alert with string template literals to tell the player: 
//   // 1. monster attacked player 
//   // 2. how much damage the monster did 
//   // 3. how much health the player has 
// }

// function playRound() {
//   //use randomNum to return either 0 or 1
//   let playerTurn = randomNum(0, 2)
//   //0 = player goes first, 1 = monster goes first
  
//   //use if/else to determine who goes first
  
//   //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

//   //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 

//   if(playerTurn === 0)
//   {
//     playerAttack()

//     if(monsterHealth > 0)
//     {
//       monsterAttack()
//     }
//   }

//   if(playerTurn === 1)
//   {
//     monsterAttack()

//     if(playerHealth > 0)
//     {
//       playerAttack()
//     }
//   }
// }

// function playGame() {
//   //beginning game message
//   alert(
//     `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
//   );

//  let roundNumber = 0

//   //while loop that runs until player or monster's health is <= 0 
//   //add the condition in the while loop parentheses 
//   while(playerHealth > 0 && monsterHealth > 0){
//     roundNumber++
//    //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
//     alert(`This is round ${roundNumber} the current health points for ${playerName} is ${playerHealth} and current health points for ${monsterName} is ${monsterHealth}`)
//    //call playRound inside the while loop
//     playRound()
//   }
//   //outside of while loop, declare a winner and use alert to show a win or lose message 
//   if(playerHealth > 0 && monsterHealth < 0)
//   {
//     alert(`${playerName} you win ${monsterName} you lose`);
//   }
  
//   if(monsterHealth > 0 && playerHealth < 0)
//   {
//     alert(`${monsterName} you win ${playerName} you lose`);
//   }

// }

// //call playGame to start game
// playGame()


class Fighter
{
  constructor(name, healthPoints, attackPoints)
  {
    this.name = name
    this.healthPoints = healthPoints
    this.attackPoints = this.randomNum(1, 6)
  }

  randomNum(min, max) 
  {
    //return a random integer between min - max
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
  }

  attack(hero, monster)
  {
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
    // let attackPoints = randomNum(1, 6)

  //subtract playerAttackPoints from monsterHealth and update the monsterHealth variable
    
    if(hero === myHero)
    {
      myHero.attackPoints = randomNum(1, 6)
      myMonster.healthPoints = myMonster.healthPoints - myHero.attackPoints
      
    }
    else
    {
      myHero.healthPoints = myHero.healthPoints - myMonster.attackPoints
    }
    
    //use an alert with string template literals to tell the player: 
    alert(`You attacked ${this.name} with ${attackPoints} attack points of damage, ${this.name} has ${this.healthPoints} health points left`)
  
  }

}

class Hero extends Fighter
{
  constructor(name, healthPoints, weapon)
  {
    super(name, healthPoints, attackPoints)
    this.weapon = weapon
  }

  weapon()
  {
    return `${this.name} is using a ${this.weapon}`
  }

}


class Monster extends Fighter
{
  constructor(name, healthPoints, ability)
  {
    super(name, healthPoints, attackPoints)
    this.ability = ability
  }

  ability()
  {
    return `${this.name} is using ${this.ability}`
  }
}

console.log(myMonster = new Monster("Boogyman", 15, "lighting"))

console.log(myHero = new Hero("Superman", 15, "laser-beams"))

// console.log(hero)

myFighter = new Fighter

console.log(myFighter.attack(myHero))

function playRound() {
  //use randomNum to return either 0 or 1
  let playerTurn = randomNum(0, 2)
  //0 = player goes first, 1 = monster goes first
  
  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 

  if(playerTurn === 0)
  {
    myHero.attack(myMonster)

    if(monsterHealth > 0)
    {
      monsterAttack()
    }
  }

  if(playerTurn === 1)
  {
    monsterAttack()

    if(playerHealth > 0)
    {
      playerAttack()
    }
  }
}

function playGame() {
  //beginning game message
  alert(
    `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(playerHealth > 0 && monsterHealth > 0){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`This is round ${roundNumber} the current health points for ${playerName} is ${playerHealth} and current health points for ${monsterName} is ${monsterHealth}`)
   //call playRound inside the while loop
    playRound()
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if(playerHealth > 0 && monsterHealth < 0)
  {
    alert(`${playerName} you win ${monsterName} you lose`);
  }
  
  if(monsterHealth > 0 && playerHealth < 0)
  {
    alert(`${monsterName} you win ${playerName} you lose`);
  }

}

//call playGame to start game
playGame()