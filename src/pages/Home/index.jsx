import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate()
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  function handleSelectedTag(tagName) {
    const isAlreadySelected = selectedTags.includes(tagName)

    if (isAlreadySelected) {
      setSelectedTags(selectedTags.filter(tag => tag !== tagName))
      return 
    }

    setSelectedTags(prevState => [...prevState, tagName])
  }

  function handleDetails(noteId) {
    navigate(`/details/${noteId}`)
  }

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, []) 

  useEffect(() => {
    async function fetchNotes(){
      const result = await api.get(`/notes?title=${search}&tags=${selectedTags}`)
      setNotes(result.data)
    }

    fetchNotes()
  }, [search, selectedTags])

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
        <Input 
          placeholder="Pesquisar pelo título" icon={ FiSearch }
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes && notes.map(note => (
              <Note 
                key={note.id}
                onClick={() => handleDetails(note.id)}
                data={note}/>
            ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
          Criar nota
      </NewNote>
    </Container>
  )
}