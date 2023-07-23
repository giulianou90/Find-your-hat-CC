const prompt = require('prompt-sync')({sigint: true});
//const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...')

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const fieldArray = [
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]

class Field {
  constructor(field){
    this.field=field
  };

  print(){
    console.log(this.field[0].join(''));
    console.log(this.field[1].join(''));
    console.log(this.field[2].join(''))
  };

};

const myField = new Field(fieldArray);

myField.print()
/*if(move === 'd'){
  myField.print()
} */

let foundHat= false;
let foundHole= false;

while (!foundHat && !foundHole) {
  const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...');
  if(move==='d'){  
   fieldArray[0][0]=fieldCharacter;
    fieldArray[1][0]=pathCharacter;
    myField.print();
    const move2 = prompt('Please select a new direction:');;
    if(move2==='d'){
      fieldArray[1][0]=fieldCharacter;
      fieldArray[2][0]=pathCharacter;
      myField.print();
      const move3 = prompt('Please select a new direction:');
      if(move3==='r'){
        console.log('Congratulations! You found your hat!')
        foundHat=true
      }

    }

  }else{
    console.log('You lost your hat forever!');
    foundHole=true;
  
  }
}