import styles from '../styles/Questionario.module.css'
import QuestaoModel from "@/model/questao";
import Questao from './Questao';
import Botao from './Botao';
import Enunciado from './Enunciado';

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

const Questionario = (props: QuestionarioProps) => {

    const respostaFornecida = (indice:number) => {
        if(!props.questao.respondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao ? <Questao valor={props.questao}
            tempoPraResposta={20}
            respostaFornecida={respostaFornecida}
            tempoEsgotado={props.irPraProximoPasso}
            />
            
            :<Enunciado texto='Carregando 🤚' />
            }
            <Botao onClick={props.irPraProximoPasso} texto={props.ultima ? 'Finalizar' : 'Próxima'}/>
            
        </div>
    )
}

export default Questionario;