import React, { useRef, useEffect } from 'react';
import './style.css';
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
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
              <a href="#" className="icon"><FaGithub className='icons'/></a>
              <a href="#" className="icon"><FaLinkedinIn className='icons'/></a>
            </div>
            <span>ou use seu e-mail para cadastro</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Cadastrar-se</button>
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
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
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
