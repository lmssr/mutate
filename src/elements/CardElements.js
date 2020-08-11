import styled from "styled-components"

export const CardWrapper = styled.div`

  margin-bottom: 20px;
  margin-top: 6rem;
  margin-left: 2rem;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  width: 90%;
  height: 500px;
  flex-direction: column;


.title {
  width: 60%;
  position: relative;
  bottom: 50px;
}

.text {
  width: 70%;
  position: relative;
  top: 10px;
}

@media (max-width: 480px) {
    margin-top: 0;
    padding-top: 10px;
    font-size: 14px;
    margin-left: 0;
    width: 100%;
    height: 10rem;

.text {
  width: 100%;
}

.title {
  padding: 10px;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  z-index: 500;
}
}
`
