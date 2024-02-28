import {useEffect} from 'react';

const Controller = ({x, setX, y, setY}) => {

    const Right = () => {
        x ++
        if(x > 12){
          x=12
        }
        setX(x)
    }

    const Left = () => {
        x --

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
      document.querySelector(".fire2").classList.add("show-fire")
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
      }
    }

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
};

export default Controller;