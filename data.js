const numerino = document.getElementById('numerino')
const numerone = document.getElementById('numerone')
const diminuire = document.getElementById('sx')
const aggiungere = document.getElementById('dx')
let counterpic = 0
let counterbig = 0

function diminuiree (){
counterpic++;
counterbig--;

if (counterbig < 0){
  counterbig = 0
}

return {
  counterbig,
  counterpic
};
}

diminuire.addEventListener('click', ()=>{
  diminuiree();
  numerino.textContent = counterpic,
  numerone.textContent = counterbig
})

aggiungere.onclick = function (){
  counterbig++;
  counterpic++;

  numerino.textContent = counterpic,
  numerone.textContent = counterbig
}

// Lista di utenti registrati
const users = [
  { username: "mario", password: "pass123" },
  { username: "luisa", password: "ciao456" },
  { username: "luisa", password: "ciao456" },
  { username: "pa", password: "ciao456" },
  { username: "pop", password: "ciao456" },
  { username: "gg", password: "ciao456" },
  { username: "admin", password: "admin" }
];


function accedi (nome, pass){
  for (i=0; i<users.length;i++){
    if (nome === users[i].username && pass === users[i].password){
      return `Let s go ${users[i].username.toUpperCase()}!`
    }
  }

  return 'accesso negato'
}

function signUp(nome, pass){
  for (i=0; i<users.length;i++){
    if (nome === users[i].username && pass === users[i].password){
      return 'utente già esistente'
    }
  }

  let bb = {username: nome, password: pass}
  users.push(bb)
  return `L'utente ${nome} è stato registrato`
}

console.log(accedi('mario', 'pass123'))
console.log(signUp('paolo', 'lolli123'))
console.log(users)

function luis (array){

  let counter = 0
  for (i=0; i<array.length;i++){
    if (array[i].username === 'luisa'){
      counter++;
    }
  }

  return counter;
}

console.log(luis(users))

function onlyUser (array){
  let newArr = [];

  for (i=0; i<array.length;i++){
    newArr.push(array[i].username)
  }

  return newArr;
}

console.log(onlyUser(users))

function three (array){
  for (i=0; i<array.length;i++){
    if (array[i].username.length>3){
      console.log(array[i].username)
    }
  }
}

three(users);