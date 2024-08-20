import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import tarefa from '../../models/tarefas'
import * as enums from '../../utils/enumns/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new tarefa(
      'estudar javaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new tarefa(
      'estudar TypeScript',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever aula 2 do modulo',
      2
    ),
    new tarefa(
      'estudar React',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'praticar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
