import styled, {keyframes}  from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 6px solid #ccc;
  border-top: 6px solid #007bff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;



function Load(){
    return(
        <LoadScreen>
            <Spinner></Spinner>
        </LoadScreen>
    )
}

export default LoadScreen;