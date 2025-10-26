import { useEffect, useRef, useState } from "react";
import { StopBtn } from "./components/StopBtn/StopBtn";
import { Output } from "./components/Output/Output";
import { Modal } from "./components/Modal/Modal";

const App = () => {
  const [count, setCount] = useState(300000);
  const intervalId = useRef(null);
  const endTime = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  const stopTimer = () => {
    if (count > 0) {
      clearInterval(intervalId.current);
      intervalId.current = null;
      setCount(0);
      setIsOpened(true);
    }
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  useEffect(() => {
    endTime.current = Date.now() + 300000;
    intervalId.current = setInterval(() => {
      if (endTime.current - Date.now() > 0) {
        setCount(endTime.current - Date.now());
      } else {
        setCount(0);
      }
    }, 1000);

    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <>
      <Output count={count} endTime={endTime} />
      <StopBtn count={count} stopTimer={stopTimer} />
      <Modal isOpened={isOpened} closeModal={closeModal} />
    </>
  );
};

export default App;
