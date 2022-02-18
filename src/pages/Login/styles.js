import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .main-login {
    background-color: #eee;
    padding: 50px 2%;
    max-width: 400px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      max-width: 200px;
    }
  }
  
`;

export const Form = styled.form`
  width: 100%;
  margin: 30px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    border: none;
    background-color: #ccc;
    width: 100%;
    padding: 10px 5px;
    border-radius: 8px;
  }

  button {
    background-color: transparent;
    width: 150px;
    margin: 30px auto 10px;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #8859C0;
    color: #8859C0;
    transition: 0.3s all ease;
  }

  button:hover {
    background-color: #8859C0;
    color: #fff;
  }
`;