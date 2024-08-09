import FiltroCard from '../components/FiltroCard'
import styled from 'styled-components'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
