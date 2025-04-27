import SearchBar from "./SearchBar"

export default function Header() {
    const flexGrowOne = { flexGrow: "1" }

    return (
        <div style={{ display: "flex", height: "45px", alignItems: "center" }}>
            <div style={flexGrowOne}>Order</div>
            <div style={flexGrowOne}>Comments</div>
            <div style={flexGrowOne}>Merchant</div>
            <div style={flexGrowOne}><SearchBar /> </div>
        </div >
    )
}