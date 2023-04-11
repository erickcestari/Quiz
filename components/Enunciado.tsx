import styles from '../styles/Enunciado.module.css'

interface EnunciadoProps {
    texto: string;
}

const Enunciado = (props:EnunciadoProps) =>{
    return(
        <div className={styles.enunciado}>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}

export default Enunciado;