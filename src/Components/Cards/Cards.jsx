import {CardsData}  from "../../Data/CardsData";
import Card from "../card";

function Cards(){
    const columns = Object.keys(CardsData[0])
    return(
        <>
        <Card columns = {columns} dataSource = {CardsData}/>
            {/* <div id="cards">
                {cards.map((card)=>(
                    <div>
                        <div ><img id="img" src={card.image} alt="" /></div>
                        <h3>{card.title}</h3>
                        <button>{card.price}</button>
                    </div>
                ))}
            </div> */}

            
        </>
    )
}

export default Cards