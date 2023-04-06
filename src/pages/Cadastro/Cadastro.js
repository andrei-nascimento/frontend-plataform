import React from "react";
import waveBg from '../../assets/imgs/wave-bg.png';
import logo from '../../assets/imgs/logo.png';
import './Cadastro.css';

function Cadastro() {

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col col-6 border p-0">
                    <img src={waveBg} className="vh-100 w-100" alt="background"/>
                </div>

                <div className="col col-6 border p-0">
                    <div className="headerCadastro">
                        <img src={logo} alt="logotipo" className="logotipo"/>
                        <p className="titleCadastro">Cadastro</p>
                    </div>

                    <form>
                        <div className="formCadastro">
                            <div className="boxNomeSenha">
                                <div className="form-group-nome">
                                    <label for="inputNome" className="labelCadastro">Nome</label>
                                    <input type="text" className="form-control" id="inputNome" placeholder="Digite seu nome" />
                                </div>

                                <div className="form-group-senha">
                                    <label for="inputSenha" className="labelCadastro">Senha</label>
                                    <input type="text" className="form-control" id="inputSenha" placeholder="Digite sua senha" />
                                </div>
                            </div>

                            <div className="boxEmailSenha">
                                <div className="form-group-email">
                                    <label for="inputEmail" className="labelCadastro">E-mail</label>
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Digite seu e-mail" />
                                </div>

                                <div className="form-group-confirma-senha">
                                    <label for="inputConfirmaSenha" className="labelCadastro">Confirme sua senha</label>
                                    <input type="text" className="form-control" id="inputConfirmaSenha" placeholder="Confirma senha" />
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="boxTermos">
                        <p>Termos de uso e privacidade</p>
                        <div>
                            <input type="checkbox" className="iptCheck"/>
                            <p>Ao clicar neste botão, eu concordo com os termos de uso e privacidade da nossa empresa</p>
                        </div>
                        <p>
                            <a href="#">Termos de uso e Privacidade</a>
                        </p>
                    </div>

                    <div className="btnCadastrar">
                        <p className="textCadastrar">Cadastrar</p>
                    </div>

                    <div className="boxLinkLogin">
                        <p>Já tem uma conta?</p>
                        <p>
                            <a href="#">Login</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cadastro;