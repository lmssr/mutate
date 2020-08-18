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

.date {
  padding-top: 40px;
  position: relative;
  top: 30px;
  font-size: 16px;
  z-index: 1;
}

@media (max-width: 480px) {
    margin-top: 0;
    margin-bottom: 380px;
    padding-top: 10px;
    font-size: 14px;
    margin-left: 0;
    width: 100%;
    height: 10rem;


.text {
  width: 100%;

}

.title {
  position: relative;
  top: 0;
  padding: 10px;
  padding-top: 40px;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  z-index: 1;
}

.date {
  padding: 10px;
  padding-top: 40px;
  margin-left: 9rem;
  position: relative;
  top: 140px;
  font-size: 16px;
  z-index: 1;
}
}
`
