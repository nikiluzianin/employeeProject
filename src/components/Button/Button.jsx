import styles from "./Button.module.css"

function Button({ onClick, type = "default", text, role = "primary", isButtonDisabled = false, id }) {

    const fullClassName = "btn";

    /*return (
        <>
            <button type={type} className={`${styles[fullClassName]} ${styles[role]}`} onClick={onClick} >{text}</button >
        </>
    );*/

    return (
        <>
            <button disabled={isButtonDisabled} type={type} className={styles[fullClassName] + " " + styles[role]} onClick={onClick} id={id} >{text}</button >
        </>
    );

}

export default Button