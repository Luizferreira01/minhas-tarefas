import Tarefa from '../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <main>
    <Container></Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </main>
)

export default ListaDeTarefas
