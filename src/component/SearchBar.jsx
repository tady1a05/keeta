
export default function SearchBar() {
    const searchBarStyle = {
        backgroundColor: "#ebebeb",
        height: "15px",
        resize: "none",
        borderRadius: "10px",
        border: "none",
        paddingLeft: "19px",
        outline: "none"
    }

    const searchIconStyle = {
        width: "10px",
        height: "10px",
        position: "absolute",
        left: "6px",
        top: "5px"
    }

    return (
        <div style={{ position: "relative" }}>
            <img src="/icon/search.png" style={searchIconStyle}></img>
            <textarea style={searchBarStyle} />
        </div>
    )
}