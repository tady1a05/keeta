import Header from "./Header";
import Main from "./Main";
import ShoppingCart from "./ShoppingCart";
import Modal from "./Modal";
import { useState } from "react";

export default function Keeta() {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <div style={{ height: "100%" }}>
            <Header />
            <Main />
            <ShoppingCart toggleModal={{ toggleModal, setToggleModal }} />
            {toggleModal && <Modal toggleModal={{ toggleModal, setToggleModal }} />}
        </div>
    )
}
