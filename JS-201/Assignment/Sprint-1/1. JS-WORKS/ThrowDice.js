
  var dice1 = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  var dice2 = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  var dice3 = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(dice1,dice2,dice3) {

    let member1 = document.getElementById('member-1');
    member1.innerText = dice1;
    let member2 = document.getElementById('member-2');
    member2.innerText = dice2;
    let member3 = document.getElementById('member-3');
    member3.innerText = dice3;

      member1.style.backgroundColor = "none";
      member2.style.backgroundColor = "none";
      member3.style.backgroundColor = "none";

    let maxNumber = Math.max(dice1, dice2, dice3);
    let minNumber = Math.min(dice1, dice2, dice3);
    let winner = document.querySelector("#winner");
    winner.innerText = maxNumber;
    //winner.style.backgroundColor = "green";
    //console.log(typeof member1.innerText)

    // to max Number
    if(maxNumber==Number(member1.innerText) || maxNumber==Number(member2.innerText) || maxNumber==Number(member3.innerText))
    {
      if(maxNumber==Number(member1.innerText))
      {
        member1.style.backgroundColor = "green";
      }
      else if(maxNumber==Number(member2.innerText))
      {
        member2.style.backgroundColor = "green";
      }
      else
      {
        member3.style.backgroundColor = "green";
      }
    }

    //to min Number
    if(minNumber==Number(member1.innerText) || minNumber==Number(member2.innerText) || minNumber==Number(member3.innerText))
    {
      if(minNumber==Number(member1.innerText))
      {
        member1.style.backgroundColor = "red";
      }
      else if(minNumber==Number(member2.innerText))
      {
        member2.style.backgroundColor = "red";
      }
      else
      {
        member3.style.backgroundColor = "red";
      }
    }


    // to middle Number
    
    if(minNumber!=Number(member1.innerText) || minNumber!=Number(member2.innerText) || minNumber!=Number(member3.innerText) || 
      maxNumber!=Number(member1.innerText) || maxNumber!=Number(member2.innerText) || maxNumber!=Number(member3.innerText))
    {
      if(minNumber!=Number(member1.innerText) && maxNumber!=Number(member1.innerText))
      {
        member1.style.backgroundColor = "yellow";
      }
      else if(minNumber!=Number(member2.innerText) && maxNumber!=Number(member2.innerText))
      {
        member2.style.backgroundColor = "yellow";
      }
      else
      {
        member3.style.backgroundColor = "yellow";
      }
    }
    
    
    // to equal Number

    if(Number(member1.innerText)==Number(member2.innerText) || Number(member1.innerText)==Number(member3.innerText) || Number(member2.innerText)==Number(member3.innerText))
    {

       if(Number(member1.innerText)==Number(member2.innerText) && Number(member2.innerText)==Number(member3.innerText))
      {
        member1.style.backgroundColor = "blue";
        member2.style.backgroundColor = "blue";
        member3.style.backgroundColor = "blue";
      }

      else if(Number(member1.innerText)==Number(member2.innerText))
      {
        member1.style.backgroundColor = "blue";
        member2.style.backgroundColor = "blue";
      }
      else if(Number(member1.innerText)==Number(member3.innerText))
      {
        member1.style.backgroundColor = "blue";
        member3.style.backgroundColor = "blue";
      }
      else if(Number(member2.innerText)==Number(member3.innerText))
      {
        member2.style.backgroundColor = "blue";
        member3.style.backgroundColor = "blue";
      }
      
    }
  

  }
  
  let button = document.getElementById('roll');
  
  button.onclick = function() {
    let result1 = dice1.roll();
    let result2 = dice2.roll();
    let result3 = dice3.roll();
    printNumber(result1, result2, result3);
  };

  
  
  







  