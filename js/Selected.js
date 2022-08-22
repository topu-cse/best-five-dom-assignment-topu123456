function getPlayerName(btnId, pleyerid) { 
    document.getElementById(btnId).addEventListener('click', function () { 
        document.getElementById(btnId).disabled = 'true'; 
        const playername = document.getElementById(pleyerid) 
        const addplayername = playername.innerText; 
        const inputplayer = document.getElementById('serial-inputName');
        const li1 = document.createElement('li'); 
        li1.innerText = addplayername; 
        inputplayer.appendChild(li1); 
         
        let player=inputplayer.childNodes.length;
        if (player > 6) { 
            alert('ONLY FIVE PLAYER ALLOW'); 
            inputplayer.removeChild(li1); 
        } 
        else { 
            return; 
        } 
 
    }) 
} 
const messi = getPlayerName('lio-messi-btn', 'lio-messi'); 
const naymer = getPlayerName('neymer-btn', 'neymer');
const ronaldo = getPlayerName('ronaldo-btn', 'ronaldo');
const luis = getPlayerName('luis-btn', 'luis');
const vinicius = getPlayerName('jr-btn', 'jr') 
const ozil = getPlayerName('ozil-btn', 'ozil'); 




document.getElementById('playerid-oneplayer').addEventListener('click', function () { 
    const playerfile = document.getElementById('perPlayer-cost'); 
    const costValue = playerfile.value; 
    const selectedPlayersCost = document.getElementById('serial-inputName').childNodes.length - 1; 
    const playersExpences = costValue * selectedPlayersCost; 
    const playersCostFeild = document.getElementById('totalplayer-cost'); 
    playersCostFeild.innerText = playersExpences; 
})


document.getElementById('all-total-btn').addEventListener('click',function(){
    const managerCostField = document.getElementById('manager-cost'); 
    const managerCoststing = managerCostField.value;
   const managercosttotal =parseFloat(managerCoststing)
    //console.log(managercosttotal)
    const coachCostField = document.getElementById('coach-cost'); 
    const coachCoststing = coachCostField.value;
    const coachtotalcost=parseFloat(coachCoststing) 
    //console.log(coachtotalcost)
    const playerscostForHireField = document.getElementById('totalplayer-cost'); 
    const playerscostForHire = parseInt(playerscostForHireField.innerText); 
 
    

    const totalField = document.getElementById('total');
   //const totalFieldsting=totalField.innerText;
//    const totalvalue=parseFloat(totalFieldsting)
  const totalvalue =playerscostForHire + managercosttotal + coachtotalcost ;
  totalField.innerText = totalvalue;
    
})
 
 
