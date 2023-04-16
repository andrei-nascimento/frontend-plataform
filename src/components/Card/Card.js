import './Card.css';

function Card() {
    return(
        <div className="cardContainer">
            <div className="cardHeader">
                <p className="cardTitle">Nossa metodologia</p>
                <p className="btnEditar">Editar</p>
            </div>

            <div className="cardLine"></div>

            <div className="cardDescriptionBox">
                <p className="cardDescriptionText">
                    1. Enteder a dor ou poblema que o cliente quer resolver;
                </p>
                <p className="cardDescriptionText">
                    2. Mostrar os módulos que possam resolver o poblema do cliente;
                </p>
                <p className="cardDescriptionText">3. Montar a proposta comercial;</p>
                <p className="cardDescriptionText">4. Apresentar a proposta com a solução;</p>
                <p className="cardDescriptionText">5. Fazer follow up, após a proposta ser apresentada.</p>
            </div>
        </div>
    )
}

export default Card;