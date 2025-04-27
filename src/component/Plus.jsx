import "../css/Common.css"
import { useDispatch } from 'react-redux'

export default function Plus(props) {
    const addProductIdToCart = props.addProductIdToCart;
    const dispatch = useDispatch()

    return (
        <button className="plus" onClick={() => dispatch(addProductIdToCart)} />
    )
}