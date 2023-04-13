import logo from '../../assets/imgs/logo.png';
import playbookIcon from '../../assets/imgs/playbook-icon.png';
import exemploIcon1 from '../../assets/imgs/exemplo-icon1.png';
import exemploIcon2 from '../../assets/imgs/exemplo-icon2.png';
import exemploIcon3 from '../../assets/imgs/exemplo-icon3.png';
import userIcon from '../../assets/imgs/user-icon.png';
import logoutIcon from '../../assets/imgs/logout-icon.png';
import './Menu.css';

function Menu() {
    return(
        <div className="col col-2 border p-0" id="toolbar-home">
            <div className="menuLogo">
                <img src={logo} alt="logotipo" className="logotipoMenu"/>
            </div>

            <div className="playbooksMenu">
                <img src={playbookIcon} alt='ícone da página de playbook'/>
                    <p className="playbookTextMenu">Playbooks</p>
            </div>

            <div className="exemploMenu">
                <img src={exemploIcon1} alt='ícone de exemplo'/>
                <p className="exemploTextMenu">Exemplo</p>
            </div>

            <div className="exemploMenu">
                <img src={exemploIcon2} alt='ícone de exemplo'/>
                <p className="exemploTextMenu">Exemplo</p>
            </div>

            <div className="exemploMenu">
                <img src={exemploIcon3} alt='ícone de exemplo'/>
                <p className="exemploTextMenu">Exemplo</p>
            </div>

            <div className="exemploMenu">
                <img src={userIcon} alt='ícone de usuário'/>
                <p className="exemploTextMenu">Minha conta</p>
            </div>

            <div className="logoutMenu">
                <img src={logoutIcon} alt='ícone de logout'/>
                <p className="exemploTextMenu">Sair</p>
            </div>

        </div>
    )
}

export default Menu;