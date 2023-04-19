import './Home.css';
import Menu from '../../components/Menu/Menu';
import arrowIcon from '../../assets/imgs/arrow-icon.png';
import userImage from '../../assets/imgs/user-image.png';
import addWhiteIcon from '../../assets/imgs/add-white-icon.png';
import Categorias from '../../components/Categorias/Categorias';
import Card from '../../components/Card/Card';
import { useContext } from 'react';
import { AuthGoogleContext } from '../../contexts/authGoogle';

function Home() {
    // const { user } = useContext(AuthGoogleContext);
    // let userLogado = JSON.parse(user);
    // console.log(userLogado)

    return(
        <div className="container-fluid">
            <div className="row" id="row">

                <Menu />

                <div className="col col-10 p-0" id="playbooksMain">

                    <div className="playbooksHeader">
                        <p className="playbooksTitle">Playbooks</p>

                        <div className="perfilFixedMenu">
                            <img className="userImage" src={userImage} alt="imagem de perfil" />
                            <p className="userName">Ana Carolina</p>
                            <img src={arrowIcon} alt="arrow icon" />
                        </div>
                    </div>

                    <div className="mainComponents">
                        <Categorias />
                        <div className="mainCards">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>

                    <div className="btnAddCard">
                        <img src={addWhiteIcon} alt="ícone de adição" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home;