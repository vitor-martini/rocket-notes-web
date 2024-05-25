import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { FiPlus, FiSearch } from 'react-icons/fi';

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
        <Input placeholder="Pesquisar pelo título" icon={ FiSearch }/>
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react'},
              { id: '2', name: 'xesq'}
            ]
          }}></Note>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
          Criar nota
      </NewNote>
    </Container>
  )
}