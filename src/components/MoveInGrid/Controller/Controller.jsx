import {useEffect} from 'react';

const Controller = ({x, setX, y, setY}) => {


    const Right = () => {
        x ++
        setX(x)
        console.log(x);
        
    }

    const Left = () => {
        x --
        setX(x)
        console.log(x);
    }

    const Up = () => {
        y --
        setY(y)
        console.log(y);
    }

    const Down = () => {
        y ++
        setY(y)
        console.log(y);
    }

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'd') {
        Right()
      } else if (event.key === 'a'){
        Left()
      } else if (event.key === 'w'){
        Up()
      } else if (event.key === 's'){
        Down()
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
};

export default Controller;