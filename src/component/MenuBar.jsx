import { useState, useEffect } from 'react';
import '../css/Common.css';

export default function MenuBar(props) {
    const [menuItems, setMenuItems] = useState([])
    const { type, setType } = props.type;
    const setTitle = props.setTitle;

    useEffect(() => {
        const initData = async () => {
            console.log("MenuBar effect")
            await fetch("http://localhost:3001/menuItems").then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).then((returnedResponse) => {
                setMenuItems(returnedResponse)
                setType(returnedResponse[0].type)
                setTitle(returnedResponse[0].name)
            }).catch((error) => {
                // Your error is here!
                console.log(error)
            });

        }
        initData()
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", flexGrow: "1", backgroundColor: "#f3f3f3" }}>
            {menuItems.map(menuItem =>
                <div key={menuItem.id} className="menu-item" style={{ paddingTop: "24px", paddingBottom: "24px", paddingRight: "24px", backgroundColor: type === menuItem.type ? "#ffffff" : "#f3f3f3" }} data-type={menuItem.type} onClick={() => { setType(menuItem.type); setTitle(menuItem.name) }}>{menuItem.name}</div>
            )}

        </div>)
}

