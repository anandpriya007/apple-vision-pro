let boxes = document.querySelectorAll('.box'); // iterating all 9boxes 
let resetBtn = document.querySelector('.reset-btn'); // iterating the reset button 
let newGameBtn = document.querySelector('.new-game-btn'); // iterating the newgame button 
let msgContainer = document.querySelector('.msgContainer'); // iterating teh msgcontainer div 
let msg = document.querySelector('.msg');                   // iterating the msg class 

let turn_x = true;                      // taking the starting value of turn-x to be true so that next move can be 0

const winPattern = [                    // checking all possibilities of winning in the game 
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];


boxes.forEach((box) => {                // iterating all the boxes  
  box.addEventListener("click", () => {
    
    if (turn_x) {                       //if turn_x is true then we will add X in the box  
      box.innerText = "X";
      turn_x = false;
    } 
    else {                              // if turn_x is false then we will add O in the box 
      box.innerText = "O";
      turn_x = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const diableBoxes = () =>{              // function to disable the box so that we cant click it any further 
     for(let box of boxes){
        box.disabled=true;
     }
};
const enableBoxes = () =>{              // function to enable the box so that we can click it again 
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";

    }
};

const showWinner = (winner) => {                               // function to shew the winner of the game  
  msg.innerText = `Congratulations : winner is ${winner}`;     //showing the winner name  
  msgContainer.classList.remove("hide");                       //removing the hide class from masconatiner class at the very moment we find the winner 
  diableBoxes();                                               // calling teh disablebox functionto disable teh clicking of button once the winner is shown

};

const checkWinner = () => {                                    // function to check the winner on checking teh pattern 
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;                 // taking all 3elements values 
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {  // checking taht there should me no null values present
      if (pos1val === pos2val && pos2val === pos3val) {        //checking if all 3 values are similar
        // console.log("winner", pos1val);
        showWinner(pos1val);                                   //calling the showwinner function at the moment we find the winner 
      }
    }
  }
};
const resetGame =()=>{                                         // function to reset the whole game when reset button when rset button is clicked 
    turn_x=true;
    enableBoxes();
    msgContainer.classList.add("hide");                        //again adding the hide class in teh msgConatiner class when we are clicking the reset button or new game button so taht it ca hide the message part for that momment 
};

newGameBtn.addEventListener("click",resetGame); // calling the resetGame function when we are clicking the new Game button 
resetBtn.addEventListener("click",resetGame);   // calling the resetGame function when we are clicking the reset Game button 

