import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #282534;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-color: antiquewhite;
  border: 1px solid var(--outline);
`;

export const ProductInfo = styled.div`
  font-size: 15;
  color: white;
  margin: 5vw;
  border-top: 1px solid var(--outline);
  max-width: 50vw;
`;

export const ProductForm = styled.form``;
