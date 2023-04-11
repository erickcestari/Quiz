import styles from '../styles/Estatistica.module.css'

interface EstatisticaProps {
    valor: any
    texto: any
    corFundo?: string
    corFont?: string
}

const Estatistica = (props: EstatisticaProps) => {
  return (
    <div className={styles.estatistica}>
        <div className={styles.valor} style={{backgroundColor: props.corFundo ?? '#fdd60f', color: props.corFont ?? '#333'}}>
            {props.valor}
        </div>
        <div className={styles.texto}>
            {props.texto}
        </div>
    </div>
  )
}

export default Estatistica