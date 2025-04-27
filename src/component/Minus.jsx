import "../css/Common.css"
import { useDispatch } from 'react-redux'

export default function Minus(props) {
    const dispatch = useDispatch()

    const removeProductIdFromCart = props.removeProductIdFromCart;

    return (<button className="minus" onClick={() => { dispatch(removeProductIdFromCart) }}></button>)
}