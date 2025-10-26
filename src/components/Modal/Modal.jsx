import { CloseBtn, Img, ModalBox, Overlay } from "./ModalStyled";

export const Modal = ({ isOpened, closeModal }) => {
  return (
    <>
      {isOpened ? (
        <Overlay>
          <ModalBox>
            <CloseBtn onClick={closeModal}>X</CloseBtn>
            <Img
              src="https://lunchbox.com.ua/wp-content/uploads/2022/10/%D0%90%D0%B2%D0%BE%D1%81%D1%8C%D0%BA%D0%B0.jpg"
              alt="Shopper"
            />
            <p>You want the propmotion on our shopper</p>
          </ModalBox>
        </Overlay>
      ) : (
        <></>
      )}
    </>
  );
};
