import React from "react";
import { useState } from "react";
import waveBg from '../../assets/imgs/wave-bg.png';
import logo from '../../assets/imgs/logo.png';
import './Cadastro.css';
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";

function Cadastro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    function handleRegister(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if(loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col col-6 border p-0" id="left-side-cadastro">
                    <img src={waveBg} className="vh-100 w-100" alt="background"/>
                </div>

                <div className="col col-6 p-0">
                    <div className="headerCadastro">
                        <img src={logo} alt="logotipo" className="logotipo"/>
                        <p className="titleCadastro">Cadastro</p>
                    </div>

                    <form>
                        <div className="formCadastro">
                            <div className="boxNomeEmail">
                                <div className="form-group-nome">
                                    <label htmlFor="inputNome" className="labelCadastro">Nome</label>
                                    <input type="text" className="form-control" id="inputNome" placeholder="Digite seu nome" required/>
                                </div>

                                <div className="form-group-email">
                                    <label htmlFor="inputEmail" className="labelCadastro">E-mail</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="boxSenhaConfirmaSenha">
                                <div className="form-group-senha">
                                    <label htmlFor="inputSenha" className="labelCadastro">Senha</label>
                                    <input type="password" className="form-control" id="inputSenha" placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)} required/>
                                </div>

                                <div className="form-group-confirma-senha">
                                    <label htmlFor="inputConfirmaSenha" className="labelCadastro">Confirme sua senha</label>
                                    <input type="password" className="form-control" id="inputConfirmaSenha" placeholder="Confirma senha" required/>
                                </div>
                            </div>
                        </div>
                    
                        <div className="boxTermos">
                            <p className="titleTermos">Termos de uso e privacidade</p>
                            <div className="checkTermos">
                                <input type="checkbox"/>
                                <p className="textTermos">Ao clicar neste botão, eu concordo com os termos de uso e privacidade da nossa empresa</p>
                            </div>
                            <p className="text2Termos">
                                <a href="#" className="linkTermos">Termos de uso e Privacidade</a>
                            </p>
                        </div>

                        <div className="boxBtnCadastrar">
                            <button className="btnCadastrar" type="submit" onClick={handleRegister}>
                                Cadastrar
                            </button>
                        </div>
                    </form>

                    <div className="boxLinkLogin">
                        <p className="textLinkLogin">Já tem uma conta?</p>
                        <Link to="/login">
                            <p className="textLinkLogin2">Login</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cadastro;