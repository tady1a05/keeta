import Plus from "./Plus";
import { addProductIdToCart } from "../store/shoppingCartSlice.js"

export default function Item(props) {
    const item = props.item;

    return (<div style={{ display: "flex", flexDirection: "row", paddingBottom: "40px" }}>
        <div style={{ display: "flex" }}>
            <img style={{ width: "100px", height: "100px" }} src={item.img} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", paddingLeft: "10px" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>{item.name}</span>
            <span style={{ fontSize: "14px", backgroundColor: "#cacaca", width: "fit-content" }}>{item.description}</span>
            <span style={{ backgroundColor: "#fcdcb6", width: "fit-content" }}>{item.specialDescription}</span>
            <span style={{ color: "#959595", fontWeight: "bold" }}>sales {item.salePerMonth} per month, rating {item.rating}%</span>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <span style={{ color: "#8e3a3c", fontWeight: "bold", fontSize: "20px" }}>${item.price}</span>
                <Plus addProductIdToCart={addProductIdToCart(item)} />
            </div>
        </div>
    </div>)
}