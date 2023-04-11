// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'
type Data = {
  id: number
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const idSelecionado = +(req.query.id as string)

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)
  if(unicaQuestaoOuNada.length === 1){
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharespostas()
    const obj = questaoSelecionada.responderCom(0).paraObjeto()
    res.status(200).json(obj)
  }
  else {
    res.status(204).send('')
  }
}
