import { useEffect, useState } from "react";
import Item from "./Item";

export default function Content(props) {
    const type = props.type
    const title = props.title;

    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("Content useEffect")
        const initData = async () => {
            await fetch("http://localhost:3001/products?type=" + type).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).then((returnedResponse) => {
                setItems(returnedResponse);

            }).catch((error) => {
                // Your error is here!
                console.log(error)
            });;
        }
        initData();
    }, [type])

    return (
        <div style={{ display: "flex", flexGrow: "5", flexDirection: "column", paddingLeft: "10px" }}>
            <div style={{ fontSize: "24px", paddingTop: "24px", paddingBottom: "24px" }}>{title}</div>
            <div style={{ display: "flex", flexGrow: "5", flexDirection: "column" }}>
                {items.map(item =>
                    <Item key={item.id} item={item} />)
                }
            </div>
        </div>)
}