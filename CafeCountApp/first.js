let count=0;
let presentcount=0;
let players=document.getElementById("count-el");
let presentplayers=document.getElementById("present-el");
let savetext=document.getElementById("save-el");
let errortxt=document.getElementById("Error-txt");
function total(){
    count+=1;
    players.textContent=count;
    let presentplayerscount=parseInt(presentplayers.textContent);
    presentplayerscount+=1;
    presentplayers.textContent=presentplayerscount;
    errortxt.innerText="";
    
}

function present(){
    let ActivePlayers=parseInt(presentplayers.textContent)-1;

    if(ActivePlayers>=0){
    presentcount-=1
    presentplayers.textContent=count+presentcount;
    errortxt.innerText="";
    }
    else{
        errortxt.innerText="Player is not inside!"
    }

}

function save(){
    let final=parseInt(presentplayers.textContent);

    if  (final===0){
        let daycount=count;

        savetext.textContent+=daycount+"-";
        players.textContent=0;

        presentplayers.textContent=0;
        presentcount=0;
        count=0;
        errortxt.innerText="";
    }
    else{
        errortxt.innerText="Player is still Playing inside!"
        }
}

