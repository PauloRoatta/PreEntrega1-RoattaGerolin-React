import { CartWidget } from "./CartWidget"

export const NavBar = ()=>{
    return <header>
        <nav>
            <div>Rockeala Indumentaria</div>
            <ul>
            <li><a href="">Remeras</a></li>
            <li><a href="">Buzos Cuello Redondo</a></li>
            <li><a href="">Buzos Canguro</a></li>
        </ul>
        <CartWidget/>
        </nav>
    </header>
}