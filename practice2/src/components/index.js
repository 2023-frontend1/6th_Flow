import styled from 'styled-components'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: yellowgreen;
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
`
const CustomButton = styled.button`
  width: 200px;
  height: 100px;
  background-color: #0080ff;
  color: white;
  border: none;
  border-radius: 100px;
  &:hover {
    background-color: #fa8258;
  }
`
export { Container, CustomButton }
