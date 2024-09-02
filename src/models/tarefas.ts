import * as enums from '../utils/enumns/tarefa'

class tarefa {
  titulo: string | undefined
  prioridade: enums.Prioridade | undefined
  status: enums.Status | undefined
  descricao!: string
  id: number | undefined

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default tarefa
