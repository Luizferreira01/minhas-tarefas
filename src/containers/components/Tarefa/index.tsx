import { useState } from 'react'
import * as S from './styles'

const Tarefa = () => {
  const [estaEditando, setEstaEdiatando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>Nome Da Tarefa</S.Titulo>
      <S.Tag>Importante</S.Tag>
      <S.Tag>Pendente</S.Tag>
      <S.Descricao />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEdiatando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEdiatando(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
