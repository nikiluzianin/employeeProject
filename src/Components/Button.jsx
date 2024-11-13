

function Button({ onClick, type = "default", text }) {

    return (
        <>
            <button type={type} className="customButton" onClick={onClick} >{text}</button>
        </>
    );

}

export default Button