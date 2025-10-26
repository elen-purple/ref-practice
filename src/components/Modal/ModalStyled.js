import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  width: 320px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  background-color: white;
  color: black;
  border: none;
`;

export const Img = styled.img`
  width: 272px;
`;
