import styled from 'styled-components'

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: blue;
  width: 80%;
  height: 50rem;
  margin-top: 20rem;
  margin-left: 2rem;
  justify-content: center;
  text-align: left;
  z-index: 10;


#name {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #444444;
  width: 35rem;
  height: 5rem;
  margin: 30px;
  color: #444444;
  background-color: #FFFCF8;
  text-align: center;
  font-size: 30px;
  border: none;
  font-family: alice;
}

#email {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #444444;
  width: 35rem;
  height: 5rem;
  margin: 30px;
  color: #444444;
  background-color: #FFFCF8;
  text-align: center;
  font-size: 30px;
  border: none;
  font-family: alice;
}

#subject {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #444444;
  width: 35rem;
  height: 5rem;
  margin: 30px;
  color: #444444;
  background-color: #FFFCF8;
  text-align: center;
  font-size: 30px;
  border: none;
  font-family: alice;
}

#message {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #444444;
  width: 35rem;
  height: 15rem;
  margin: 30px;
  color: #444444;
  background-color: #FFFCF8;
  text-align: center;
  font-size: 30px;
  border: none;
  font-family: alice;
  resize : none;
}

#button {
  color: #444444;
  background-color: transparent;
  font-size: 50px;
  width: 200px;
  height: 80px;
  position: absolute;
  top: 75rem;
  left: 45rem;
  border: none;
  transition: filter 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-family: alice;

  &:hover,
  &:focus {
    filter: brightness(150%);
  }
}

  @media (max-width: 1024px) {
    margin-top: 1rem;

    #name,
    #email,
    #subject,
    #message {
      display: flex;
      flex-direction: column;
      width: 90%;
  }

  #button {
    position: absolute;
    left: 30px;
    top: 1000px;
    font-size: 30px;
  }

`
