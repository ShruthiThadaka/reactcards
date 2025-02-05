import { CardsData } from "../Data/CardsData"

function Card({columns, dataSource}){
    return (
        <>
        <div>
            {dataSource.map((card)=>(
                <>
                    {columns.map((division)=>(
                       <div key={division}>
                       {division === "image" ? (
                           <img src={card[division]} alt={card.title} />
                       ) : (
                           card[division]
                       )}
                   </div>
                    ))}
                </>
            ))}
        </div>
        </>
    )
}
export default Card