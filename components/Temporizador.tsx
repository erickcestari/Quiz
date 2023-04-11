import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'

interface Temporizador {
    duracao: number
    tempoEsgotado: () => void
    key: any
}


const Temporizador = (props:Temporizador) => {
    return(
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#bce596', '#f7b801', '#ed827a']}
                colorsTime={[props.duracao, props.duracao * 0.66, 0]}
            >
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}

export default Temporizador