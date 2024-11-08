//Criar 3 constantes (const)chamadas horas, minutos e segundos.

const caixaHoras = document.getElementById("horas");
const caixaMinutos = document.getElementById("minutos");
const caixaSegundos = document.getElementById("segundos");
const caixaDate = document.getElementById("date")


//Crie uma constante chamada relogio e atribua o metodo setInterval.

const relogio = setInterval(() => {

 //crie uma variavel(let) chamada dateToday e atribua o super variavel new Date()

    let dateToday = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'
    };
     


 //Criar 3 variaveis chamadas hr, min e sec e atribuir a variavel dateToday.
    let date = dateToday.toLocaleDateString('pt-br', options);
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();



    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
            
        // ou {
            //  hr = "0" + hr;
         // }
    caixaDate.textContent = date;    
    caixaHoras.textContent = hr;
    caixaMinutos.innerText = min;
    caixaSegundos.innerHTML = sec;
    


}, 10);


