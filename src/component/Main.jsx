import { useState } from "react";
import Content from "./Content";
import MenuBar from "./MenuBar";

export default function Main() {
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");

    return (
        <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
            <MenuBar setTitle={setTitle} type={{ type, setType }} />
            <Content title={title} type={type} />
        </div>)
}