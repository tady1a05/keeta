import "../css/Common.css";
import ModalItem from "./ModalItem";
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../store/shoppingCartSlice'

export default function Modal(props) {
    const { toggleModal, setToggleModal } = props.toggleModal;
    const dispatch = useDispatch()
    const items = useSelector(state => state.items.items)

    return (
        <div className="modal-overall">
            <div className="modal-grey-layer" onClick={() => { setToggleModal(!toggleModal); }}></div>
            <div className="modal">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "15px", borderBottom: "solid #fdfdfd 2px" }}>
                    <div style={{ fontWeight: "bold" }}>Shopping Cart</div>
                    <div style={{ display: "flex", alignItems: "center" }} onClick={() => { dispatch(clearCart()) }}>
                        <img src="/icon/bin.png" style={{ width: "24px", height: "24px" }} />
                        <span style={{ fontWeight: "bold", color: "#858585" }}>Empty Shopping Cart</span>
                    </div>
                </div>
                <div style={{ padding: "15px" }}>
                    {items.map(item => <ModalItem key={item.id} item={item} />)}
                </div>
                <div style={{ height: "58px" }}></div>
            </div>
        </div>
    )
}