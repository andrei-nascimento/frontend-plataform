import React from "react";
import waveBg from '../../assets/imgs/wave-bg.png';
import logo from '../../assets/imgs/logo.png';

function Cadastro() {

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col col-6 border p-0">
                    <img src={waveBg} className="vh-100 w-100" alt="intro-image"/>
                </div>

                <div className="col col-6 border p-0">
                    <div style={{
                    marginTop: '80px', 
                    marginLeft: '40px', 
                    marginBottom: '40px'
                    }}>
                        <img src={logo} alt="logotipo" />
                    </div>

                    <div style={{ 
                    marginLeft: '40px', 
                    marginBottom: '28px',
                    color: '#476EE6',
                    fontSize: '24px',
                    fontWeight: '500'
                    }}>
                        Cadastro
                    </div>

                    <form>
                        <div className="row" style={{marginLeft: '32px', marginRight: '32px'}}>

                            <div className="col-md-6 p-8">
                                <div className="form-group" style={{marginBottom: '26px'}}>
                                    <label for="inputNome" style={{
                                    fontSize: '14px', 
                                    marginBottom: '12px', 
                                    fontWeight: '500'
                                    }}>
                                        Nome
                                    </label>
                                    <input type="text" className="form-control h-50" id="inputNome" placeholder="Digite seu nome" />
                                </div>

                                <div className="form-group">
                                    <label for="inputSenha" style={{
                                    fontSize: '14px', 
                                    marginBottom: '12px', 
                                    fontWeight: '500'
                                    }}>
                                        Senha
                                    </label>
                                    <input type="text" className="form-control" id="inputSenha" placeholder="Digite sua senha" />
                                </div>
                            </div>

                            <div className="col-md-6 p-8">
                                <div className="form-group" style={{marginBottom: '26px'}}>
                                    <label for="inputEmail" style={{
                                    fontSize: '14px', 
                                    marginBottom: '12px', 
                                    fontWeight: '500'}}>
                                        E-mail
                                    </label>
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Digite seu e-mail" />
                                </div>

                                <div class="form-group">
                                    <label for="inputConfirmaSenha" style={{
                                    fontSize: '14px', 
                                    marginBottom: '12px', 
                                    fontWeight: '500'}}>
                                        Confirme sua senha
                                    </label>
                                    <input type="text" className="form-control" id="inputConfirmaSenha" placeholder="Confirma senha" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;