export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}
const person1 = createPerson('Guss', 'Henrique');
console.log(person1);

function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(10);
const squareOfTwoString = squareOf('valor');


if (squareOfTwoNumber === null) {
  console.log('Conta invalida');
} else {
  console.log(squareOfTwoNumber * 100);
}

console.log(squareOf('55'));
