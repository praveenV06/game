let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msgpara=document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const gencompChoice=()=>{
    let option  = ["paper","rock","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};
const drawgame= ()=>{
   msgpara.innerText="game was Draw play again ";

}
const showWinner=(userwin,userChoice,compChoice)=>{
if(userwin){
    userScore++;
    userScorePara.innerText=userScore;

    msgpara.innerText = `you win ${userChoice} beat ${compChoice}`
     msgpara.style.backgroundColor="green"
}
else{
    compScore++;
    compScorePara.innerText=compScore;

    msgpara.innerText = `you lose ${compChoice} beat ${userChoice}`
    msgpara.style.backgroundColor="red"
}
}
const playGame=(userChoice)=>{
    // console.log("userChoice=",userChoice);
    // generate computer choice ->modular 
    const compChoice=gencompChoice();
    console.log("comp choice",compChoice)
    if(userChoice===compChoice){
        //draw
        drawgame();
        }
        else{
            let userwin=true;
            if(userChoice==="rock")
                {
                   userwin= compChoice ==="paper"?false :true;
                }
                else if(userChoice==="paper")
                    {
                        userwin= compChoice==="scissors"? false:true;
                    }
                    else{

                        userwin=  compChoice==="rock"? false:true;
                    }
                    showWinner(userwin,userChoice,compChoice);

        }
         

    }


choices.forEach((choice) => {
    choice.addEventListener("click" ,() => {
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

