import React, { useRef, useEffect, useState } from 'react';
import './style.css';
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import api from '../../services/api';

const Home = () => {
  const containerRef = useRef(null);

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()
  const inputAge = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  async function createUsers(){
    await api.post('/usuarios', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      age: inputAge.current.value
    })
    getUsers()
  }

  async function deleteUsers(id){
    await api.delete(`/usuarios/${id}`, {
    })
    getUsers()
  }

  useEffect(() => {
    getUsers()
    const container = containerRef.current;
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    const handleRegister = () => {
      container.classList.add("active");
    };

    const handleLogin = () => {
      container.classList.remove("active");
    };

    if (registerBtn) {
      registerBtn.addEventListener('click', handleRegister);
    }

    if (loginBtn) {
      loginBtn.addEventListener('click', handleLogin);
    }

    return () => {
      if (registerBtn) {
        registerBtn.removeEventListener('click', handleRegister);
      }
      if (loginBtn) {
        loginBtn.removeEventListener('click', handleLogin);
      }
    };
  }, []);

  return ( 
    <>
      <div className="container" id="container" ref={containerRef}>
        <div className="form-container sign-up">
          <form>
            <h1>Criar Conta</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FaGoogle className='icons'/></a>
              <a href="#" className="icon"><FaFacebookF className='icons'/></a>
              <a href='#' className="icon"><FaGithub className='icons'/></a>
              <a href="#" className="icon"><FaLinkedinIn className='icons'/></a>
            </div>
            <span>ou use seu e-mail para cadastro</span>
            <input type="text" placeholder="Seu Nome" ref={inputName} />
            <input type="email" placeholder="Seu Email" ref={inputEmail} />
            <div className='pAge'>
              <input type="password" placeholder="Sua Senha" ref={inputPassword} />
              <input type="text" placeholder="Sua idade" ref={inputAge} />
            </div>
            <button type='button' onClick={createUsers}>Cadastrar-se</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Entrar</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FaGoogle className='icons'/></a>
              <a href="#" className="icon"><FaFacebookF className='icons'/></a>
              <a href="#" className="icon"><FaGithub className='icons'/></a>
              <a href="#" className="icon"><FaLinkedinIn className='icons'/></a>
            </div>
            <span>ou use seu email e senha</span>
            <input type="email" placeholder="Seu Email" />
            <input type="password" placeholder="Sua Senha" />
            <a href="#">Esqueceu sua senha?</a>
            <button>Entrar</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bem vindo de volta!</h1>
              <p>Insira seus dados pessoais para usufluir de todo o site</p>
              <button className="hidden" id="login">Entrar</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Seja Bem Vindo!</h1>
              <p>Registre-se com seus dados pessoais para usufluir de todo o site</p>
              <button className="hidden" id="register">Cadastrar-se</button>
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Home;
