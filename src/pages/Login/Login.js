import React from "react";
import waveBg from '../../assets/imgs/wave-bg.png';
import logo from '../../assets/imgs/logo.png';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col col-6 border p-0">
                        <div className="headerLogin">
                            <img src={logo} alt="logotipo" className="logotipo"/>
                            <p className="titleLogin">Dados de acesso</p>
                        </div>

                        <form>
                            <div className="formLogin">
                                <div className="form-group-email-login">
                                    <label htmlFor="inputEmail" className="labelCadastro">E-mail</label>
                                    <input type="email" className="form-control" id="inputEmail-login" placeholder="Digite seu e-mail" required/>
                                </div>
                                
                                <div className="form-group-senha-login">
                                    <label htmlFor="inputSenha" className="labelCadastro">Senha</label>
                                    <input type="password" className="form-control" id="inputSenha-login" placeholder="Digite sua senha" required/>
                                </div>
                            </div>

                            <div className="boxBtnLogar">
                                <button className="btnLogar" type="submit">Entrar</button>
                                <Link to="/">
                                    <p className="textEsqueceuSenha">Esqueceu a senha?</p>
                                </Link>
                            </div>
                        </form>
                </div>

                <div className="col col-6 border p-0">
                    <img src={waveBg} className="vh-100 w-100" alt="background"/>
                </div>
            </div>
        </div>
    );
}

export default Login;