import './Categorias.css';
import addIcon from '../../assets/imgs/add-icon.png';
import editIcon from '../../assets/imgs/edit-icon.png';

function Categorias() {
    return(
        <div className="categoriasContainer">
            <p className="categoriaTitle">Categorias</p>
            <div className="line"></div>

            <div className="categoriaItemBox">
                <p className="categoriaItemTitle">Playbook de Vendas</p>
                <img src={editIcon} alt="ícone de edição" />
            </div>
            <div className="categoriaItemBox2">
                <p className="categoriaItemTitle">Playbook de Marketing</p>
                <img src="" alt="" />
            </div>
            <div className="categoriaItemBox2">
                <p className="categoriaItemTitle">Playbook de Suporte</p>
                <img src="" alt="" />
            </div>
            <div className="categoriaAddBox">
                <img src={addIcon} alt="íconce de adicionar" />
                <p className="categoriaItemTitle">Adicionar outra categoria</p>
            </div>
        </div>
    )
}

export default Categorias;