import {useEffect} from 'react';

const Controller = ({x, setX, y, setY, }) => {

    const Right = () => {
        x ++
        const avatar = document.querySelector(".Character")
        avatar.classList.remove("mirror")
        if(x > 12){
          x=12
        }
        setX(x)
    }

    const Left = () => {
        x --
        const avatar = document.querySelector(".Character")
        avatar.classList.add("mirror")

        if(x < 1){
          x=1
        }
        setX(x)
    }

    const Up = () => {
        y --
        if(y < 1){
          y=1
        }
        setY(y)
    }

    const Down = () => {
        y ++
        if(y > 6){
          y=6
        }
        setY(y)
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
      

    const bulletLine = document.querySelector('.fire2'); 
    const target = document.querySelector('.Target'); 
 
    const rect1 = bulletLine.getBoundingClientRect(); 
    const rect2 = target.getBoundingClientRect(); 
 
if (!(rect1.right < rect2.left ||  
      rect1.left > rect2.right ||  
      rect1.bottom < rect2.top ||  
      rect1.top > rect2.bottom)) { 
  console.log('Nuddar'); 
  
} else { 
  console.log('Nuddar INTE'); 
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