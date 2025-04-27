import "../css/Common.css";
import { useSelector } from 'react-redux'

export default function ShoppingCart(props) {
    const { toggleModal, setToggleModal } = props.toggleModal;
    const items = useSelector(state => state.items.items)

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        items.forEach((item) => {
            totalPrice += parseInt(item.price) * parseInt(item.qty);
        });

        return totalPrice;
    }

    const calculateTotalQty = () => {
        let totalQty = 0;

        items.forEach((item) => {
            totalQty += parseInt(item.qty);
        });

        return totalQty;
    }


    let totalPrice = calculateTotalPrice();
    let totalQty = calculateTotalQty();

    return (
        <div className="shopping-cart" onClick={() => setToggleModal(!toggleModal)}>
            <img className="shopping-cart-icon" src="/icon/bunnyShoppingCart.png" />
            <div className="gold-circle">{totalQty}</div>
            <div className="shopping-cart-content">
                <div className="shopping-cart-content-total-price">
                    <span style={{ fontSize: "18px" }}>$</span>
                    <span>{totalPrice}</span>
                </div>
                <div className="shopping-cart-content-reminder">estimate additonal transfer fee $5</div>
            </div>
            <div className="shopping-cart-checkout">
                <span style={{ paddingRight: "20px" }}>Starting from $1</span>
            </div>
        </div>);
}