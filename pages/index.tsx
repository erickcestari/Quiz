import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Questao from '@/components/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useState, useEffect } from 'react'
import Botao from '@/components/Botao'
import Questionario from '@/components/Questionario'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('verde'),
  RespostaModel.errada('vermelho'),
  RespostaModel.errada('azul'),
  RespostaModel.certa('Preta')
])

const BASE_URL = 'https://quiz-omega-three.vercel.app/api'



export default function Home() {
  const router = useRouter()
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)
  const [respostasCertas, setRespostasCertas] = useState(0)

  const carregarIdsDasQuestoes = async () =>{
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json()
    console.log(idsQuestoes)
    setIdsDasQuestoes(idsQuestoes)
  }
  const carregarQuestao = async (idQuestao: number) =>{
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const obj = await resp.json()
    console.log(obj)
    const newRespostas = obj.respostas.map((resposta:any) => new RespostaModel(resposta.valor, resposta.certa,false))
    const newQuestao =  new QuestaoModel(obj.id, obj.enunciado, newRespostas, false)
    setQuestao(newQuestao)
  }
  useEffect(() => {
    carregarIdsDasQuestoes()
  } ,[])
  useEffect(() => {
    
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])
  const questaoRespondida = (questaoRespondida:QuestaoModel) => {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou 
    setRespostasCertas(respostasCertas + Number(acertou))
  }

  const idProximaPergunta = () => {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
    return idsDasQuestoes[proximoIndice]
  }

  const irPraProximoPasso = () => {
    const proximoId = idProximaPergunta()
    proximoId ? irPraPraProximaQuestao(proximoId) : finalizar()
  }

  const irPraPraProximaQuestao = (proximoId: number) => {
    carregarQuestao(proximoId)
  }
  
  const finalizar = () => {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return questao?
      
      <Questionario
        questao={questao}
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
       />
      : <><h1>Carregando</h1> <h1>✋</h1></>
}
