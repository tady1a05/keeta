import Plus from "./Plus";
import Minus from "./Minus";
import { addProductIdToCart, removeProductIdFromCart } from "../store/shoppingCartSlice.js"

export default function ModalItem(props) {
    const item = props.item;

    return (<div style={{ display: "flex", gap: "10px", paddingBottom: "10px" }}>
        <img style={{ width: "70px", height: "70px" }} src={item.img} />
        <div style={{ display: "flex", flexDirection: "column", flexGrow: "55", justifyContent: "space-between" }}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{item.name}</span>
            <span>
                <span style={{ fontSize: "14px" }}>$ </span>
                <span style={{ fontSize: "22px" }}>{item.price}</span>
            </span>
        </div>
        <div style={{ flexGrow: "25", display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", alignSelf: "flex-end" }}>
            <Minus removeProductIdFromCart={removeProductIdFromCart(item.id)} />
            <div>{item.qty}</div>
            <Plus addProductIdToCart={addProductIdToCart(item)} />
        </div>
    </div>)
}