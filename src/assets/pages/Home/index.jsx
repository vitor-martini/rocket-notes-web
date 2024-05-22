import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../../components/Header';
import { TextButton } from '../../../components/TextButton';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>
      <Header />

      <Menu>
        <li><TextButton title="Todos" isActive /></li>
        <li><TextButton title="AAA" /></li>
        <li><TextButton title="BBB" /></li>
        <li><TextButton title="CCC" /></li>
      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewNote>
        <FiPlus/>
          Criar nota
      </NewNote>
    </Container>
  )
}