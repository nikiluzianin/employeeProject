import styles from "./Button.module.css"

function Button({ onClick, type = "default", text, role = "primary" }) {

    const fullClassName = "btn";

    /*return (
        <>
            <button type={type} className={`${styles[fullClassName]} ${styles[role]}`} onClick={onClick} >{text}</button >
        </>
    );*/

    return (
        <>
            <button type={type} className={styles[fullClassName] + " " + styles[role]} onClick={onClick} >{text}</button >
        </>
    );

}

export default Button