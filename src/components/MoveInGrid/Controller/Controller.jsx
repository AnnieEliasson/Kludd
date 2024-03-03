import {useEffect} from 'react';

const Controller = ({x, setX, y, setY, NewTarget }) => {
  
 let targetHP = 10
 let newX = x
 let newY = y

    const Right = () => {
        newX ++
        const avatar = document.querySelector(".Character")
        avatar.classList.remove("mirror")
        if(newX > 12){
          newX = 12
        }
        setX(newX)
    }

    const Left = () => {
        newX --
        const avatar = document.querySelector(".Character")
        avatar.classList.add("mirror")

        if(newX < 1){
          newX = 1
        }
        setX(newX)
    }

    const Up = () => {
        newY --
        if(newY < 1){
          newY = 1
        }
        setY(newY)
    }

    const Down = () => {
        newY ++
        if(newY > 6){
          newY = 6
        }
        setY(newY)
    }


    const Fire = () => {
      document.querySelector(".fire").classList.add("show-fire")
    }


    const Fire2 = () => {
      
      if(document.querySelector(".Character").classList == ('Character mirror')){
        document.querySelector(".fire2-left").classList.add("show-fire")
      } else {
        document.querySelector(".fire2").classList.add("show-fire")
      }
      
    const hpBar = document.querySelector(".target-hp")

    const bulletLine = document.querySelector('.fire2'); 
    const bulletLineLeft = document.querySelector('.fire2-left'); 
    const target = document.querySelector('.Target');

 
    const rect1 = bulletLine.getBoundingClientRect(); 
    const rect1Left = bulletLineLeft.getBoundingClientRect(); 
    const rect2 = target.getBoundingClientRect(); 
 
if (!(rect1.right < rect2.left ||  
      rect1.left > rect2.right ||  
      rect1.bottom < rect2.top ||  
      rect1.top > rect2.bottom)) { 

        targetHP --
  console.log(targetHP);

  if(targetHP <= 8){
    
    hpBar.style.backgroundColor = "yellowgreen"
    hpBar.style.width = "30px"
  }

  if(targetHP <= 6){
    
    hpBar.style.backgroundColor = "yellow"
    hpBar.style.width = "25px"
  }

  if(targetHP <= 4){
    hpBar.style.backgroundColor = "orange"
    hpBar.style.width = "10px"
  }

  if(targetHP <= 2){
    hpBar.style.backgroundColor = "red"
    hpBar.style.width = "5px"
  }

  if(targetHP <= 0){
    NewTarget()
    targetHP = 10
    hpBar.style.backgroundColor = "green"
    hpBar.style.width = "40px"
  }
  
} 


if (!(rect1Left.right < rect2.left ||  
  rect1Left.left > rect2.right ||  
  rect1Left.bottom < rect2.top ||  
  rect1Left.top > rect2.bottom)) {

    targetHP --
  console.log(targetHP);

  if(targetHP <= 8){
    
    hpBar.style.backgroundColor = "yellowgreen"
    hpBar.style.width = "30px"
  }

  if(targetHP <= 6){
    
    hpBar.style.backgroundColor = "yellow"
    hpBar.style.width = "25px"
  }

  if(targetHP <= 4){
    hpBar.style.backgroundColor = "orange"
    hpBar.style.width = "10px"
  }

  if(targetHP <= 2){
    hpBar.style.backgroundColor = "red"
    hpBar.style.width = "5px"
  }

  if(targetHP <= 0){
    NewTarget()
    targetHP = 10
    hpBar.style.backgroundColor = "green"
    hpBar.style.width = "40px"
  }

  if(targetHP <= 0){
    NewTarget()
    targetHP = 10
  }

}
    }

    const Talk = () => {
      document.querySelector(".talk").classList.add("show-fire")

      setTimeout(()=>{
        document.querySelector(".talk").classList.remove("show-fire")
      }, 3000)
    }

  useEffect(() => {
    const keyDownHandler = event => {

      if (event.keyCode == "68") {
        Right()
      } else if (event.keyCode == "65"){
        Left()
      } else if (event.keyCode == "87"){
        Up()
      } else if (event.keyCode == "83"){
        Down()
      } else if (event.keyCode == "32"){
        Fire()
      } else if (event.key == "b"){
        Fire2()
      } else if (event.key == "e"){
        Talk()
      }
    };

    const keyUpHandler = event => {
      if(event.keyCode == "32"){
        document.querySelector(".fire").classList.remove("show-fire")
      }
      if(event.key == "b"){
        document.querySelector(".fire2").classList.remove("show-fire")
        document.querySelector(".fire2-left").classList.remove("show-fire")
      }
    }

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, []);
};

export default Controller;