function getPlayerName(btnId, pleyerid) { 
    document.getElementById(btnId).addEventListener('click', function () { 
        document.getElementById(btnId).disabled = 'true'; 
        const playername = document.getElementById(pleyerid) 
        const addplayername = playername.innerText; 
        const inputplayer = document.getElementById('serial-inputName');
        const li1 = document.createElement('li'); 
        li1.innerText = addplayername; 
        inputplayer.appendChild(li1); 
         
 
    }) 
} 
const messi = getPlayerName('lio-messi-btn', 'lio-messi'); 
const naymer = getPlayerName('neymer-btn', 'neymer');
const ronaldo = getPlayerName('ronaldo-btn', 'ronaldo');
const luis = getPlayerName('luis-btn', 'luis');
const vinicius = getPlayerName('jr-btn', 'jr') 
const ozil = getPlayerName('ozil-btn', 'ozil'); 
 
 
