//Tipagem estruturada//

type VerifyUserFn = (user: User, sentValue: User) => Boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = {username: 'Gustavo', password: '123456'};
const sentUser = {username: 'Gustavo', password: '123456'};
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);


