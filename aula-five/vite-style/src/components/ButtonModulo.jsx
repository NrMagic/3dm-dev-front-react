import styles from "./ButtonModule.module.css"
export default function ButtonModulo({ texto, destaque}){
    return(
        <button className={`
         ${styles.btn}
         ${destaque ? styles.destaque : ""}
         `}>
            {texto}
        </button>
    )
}

// let onlines = true

// onlines ? "true" : "false"