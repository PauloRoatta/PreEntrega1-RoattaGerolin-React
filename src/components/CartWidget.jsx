import Carrito from "../assets/Carrito.png"


export const CartWidget = () => {
    return (
        <>
            <img src={Carrito} alt="Carrito" width={40} />
            <span>6</span>
        </>
    );
}