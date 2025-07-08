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