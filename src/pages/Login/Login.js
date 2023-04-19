import React, { useContext } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";
import waveBg from '../../assets/imgs/wave-bg.png';
import logo from '../../assets/imgs/logo.png';
import googleIcon from "../../assets/imgs/google-icon.png";
import './Login.css';
import { AuthGoogleContext } from "../../contexts/authGoogle";

function Login() {
    const { signInGoogle, signed } = useContext(AuthGoogleContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if(loading) {
        return <p>Carregando...</p>;
    }

    if(user) {
        return console.log(user);
    } 

    async function loginGoogle() {
        await signInGoogle();
    }

    if(!signed) {
        return (
            <div className="container-fluid">
                <div className="row">
    
                    <div className="col col-6 p-0">
                            <div className="headerLogin">
                                <img src={logo} alt="logotipo" className="logotipo"/>
                                <p className="titleLogin">Dados de acesso</p>
                            </div>
    
                            <form>
                                <div className="formLogin">
                                    <div className="form-group-email-login">
                                        <label htmlFor="inputEmail" className="labelCadastro">E-mail</label>
                                        <input type="email" className="form-control" id="inputEmail-login" placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)} required/>
                                    </div>
                                    
                                    <div className="form-group-senha-login">
                                        <label htmlFor="inputSenha" className="labelCadastro">Senha</label>
                                        <input type="password" className="form-control" id="inputSenha-login" placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)} required/>
                                    </div>
                                </div>
    
                                <div className="boxBtnLogar">
                                    <button className="btnLogar" type="submit" onClick={handleSignIn}>
                                        Entrar
                                    </button>
                                    <Link to="/">
                                        <p className="textEsqueceuSenha">Esqueceu a senha?</p>
                                    </Link>
                                </div>
    
                                <div className="boxBtnLogarGoogle">
                                    <button className="btnLogarGoogle" onClick={loginGoogle}>
                                        <img className="googleIcon" src={googleIcon} alt="ícone do google" />
                                        <p className="btnLogarGoogleText">Entrar com o Google</p>
                                    </button>
                                </div>
    
                                <div className="boxCadastrar">
                                    <p className="boxCadastrarText">Não possui uma conta?</p>
                                    <Link to="/cadastro">
                                        <p className="boxCadastrarText">Cadastre-se</p>
                                    </Link>
                                </div>
                            </form>
                    </div>
    
                    <div className="col col-6 border p-0" id="right-side-login">
                        <img src={waveBg} className="vh-100 w-100" alt="background"/>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Navigate to="/home" />
    }
}

export default Login;