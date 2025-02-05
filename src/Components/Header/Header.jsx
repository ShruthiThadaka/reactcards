import { menuItems } from "../Menuitems/Menuitems";
import './Header.css'

function Header(){
    return(
        <>
        <h1>My React Page</h1>
            <div id="header">
                {menuItems.map((item)=>(
                    <li key={item.id}><a href={item.url}>{item.name}</a></li>
                ))}
            </div>
        </>
    )
}

export default Header