import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../../utils/enumns/tarefa'

type Props = {
  Titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, Titulo }: Props) => {
  const [estaEditando, setEstaEdiatando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{Titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSaalvar>Salvar</S.BotaoSaalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEdiatando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEdiatando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
