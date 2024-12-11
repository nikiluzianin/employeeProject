import "./Button.css"

function Button({ onClick, type = "default", text, role = "primary" }) {

    const fullClassName = "Button " + role;

    return (
        <>
            <button type={type} className={fullClassName} onClick={onClick} >{text}</button>
        </>
    );

}

export default Button