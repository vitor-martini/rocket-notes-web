import { Container, Links, Content, NoteHeader } from "./styles";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { IconButton } from "../../components/IconButton";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Details() {
  const navigation = useNavigate()
  const params = useParams();
  const [data, setData] = useState({})

  async function handleDeleteNote() {
    const confirm = window.confirm("Deseja realmente excluir?")

    if(!confirm) return

    try {
      await api.delete(`/notes/${data.id}`)
      alert("Nota excluída com sucesso!")
      navigation("/")
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível excluir a nota.")
      }
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const result = await api.get(`/notes/${params.id}`)
      setData(result.data)
    }

    fetchNote()
  }, [])

  return(
    <Container>
      <Header/>
      <main>
        {
          data.title &&
          <Content>
            <NoteHeader>
              <h1>{data.title}</h1>
                <IconButton onClick={handleDeleteNote}>
                <FaTrashAlt size={30} />
              </IconButton>
            </NoteHeader>
            <p>{data.description}</p>
            {
              data.links && data.links.length > 0 &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links && data.links.map(link => (
                      <li key={link.id}><a href={link.url} target="_blank">{link.url}</a></li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags && data.tags.length > 0 &&
              <Section title="Marcadores">
                {
                  data.tags && data.tags.map(tag => (
                    <Tag
                      key={tag.id}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }
          </Content>
        }
      </main>
    </Container>
  )
}