const Ave1 = {
  nome: "pelicano",
  tempoDeVida: 25,
  Grande: true,
  ArrayString: ["Bico longo, pescoço curvado e plumagem branca"],
};

const Ave2 = {
  nome: "Águia",
  tempoDeVida: 30,
  Grande: true,
  ArrayString: ["Grande pornte, Bico curvo, Grandes Olhos"],
};

const Ave3 = {
  nome: "Calopsita",
  tempoDeVida: 15,
  Grande: false,
  ArrayString: ["Pequeno porte, Bico encurvados aos pés,Personalidade ativa e divertida"],
};

const ArrayVazio = [];

Ave1.Grande === true 
? ArrayVazio.push(Ave1) 
: alert(`Cuidado`);

Ave2.Grande === true
? ArrayVazio.push(Ave2)
: alert(`Cuidado`)

Ave3.Grande === true
? ArrayVazio.push(Ave3)
: alert(`Cuidado`)

console.log(ArrayVazio)

function selecionar(){
const input = document.getElementById("Pesquisa")
console.log(input.value)

}

for(let i in ArrayVazio){
  let string = ArrayVazio[i].ArrayString.toString()
  console.log(string)
}

function pesquisaAve() {
  let input = document.getElementById('pesquisa').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('img');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="img";                 
      }
  }
}







// function passo1(){
//   const input = document.getElementById("Nome")
//   console.log(input.value)
//   const escolhida1 = escolhida(input)
//   // console.log(`${escolhida1}`) ? escolhida1 : alert('não encontrado')
//   Test(escolhida1)
// }
// function escolhida(input){
//   const escolhida = 
// }




























