import './Home.css';
import Menu from '../../components/Menu/Menu';
import arrowIcon from '../../assets/imgs/arrow-icon.png';
import userImage from '../../assets/imgs/user-image.png';
import Categorias from '../../components/Categorias/Categorias';

function Home() {



    return(
        <div className="container-fluid">
            <div className="row">

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

                    <Categorias />

                </div>

            </div>
        </div>
    )
}

export default Home;