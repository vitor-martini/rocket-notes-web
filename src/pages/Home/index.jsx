import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {

  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  function handleSelectedTag(tagName) {
    const isAlreadySelected = selectedTags.includes(tagName)

    if (isAlreadySelected) {
      setSelectedTags(selectedTags.filter(tag => tag !== tagName))
      return 
    }

    setSelectedTags(prevState => [...prevState, tagName])
  }

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, []) 

  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <TextButton 
            title="Todos" 
            isActive={selectedTags.length === 0} 
            onClick={() => setSelectedTags([])}
          /></li>
        {
          tags && tags.map((tag, index) => (
            <li key={index}>
              <TextButton 
                title={tag.name} 
                isActive={selectedTags.includes(tag.name)}
                onClick={() => handleSelectedTag(tag.name)}
              />
            </li>
          ))
        }
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