import { Container, Form } from "../NewNote/styles.js";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api"

export function NewNote() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(removedLink) {
    setLinks(prevState => prevState.filter(link => link !== removedLink));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(removedTag) {
    setTags(prevState => prevState.filter(tag => tag !== removedTag))
  }

  function clearFields() {
    setTitle("")
    setDescription("")
    setLinks([])
    setTags([])
  }

  function validateFields() {
    if(!title) {
      alert("Título é obrigatório!")
      return false;
    }

    return true;
  }

  async function handleAddNote() {
    if (!validateFields()) {
      return;
    }

    try {
      await api.post("/notes", {
        title,
        description,
        tags,
        links
      })
      alert("Nota cadastrada com sucesso!")
      clearFields()
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Ocorreu um erro ao cadastrar a nota.")
      }
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <h1>Criar nota</h1>
          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <TextArea
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />

          <Section title="Links úteis">
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />

            {
              links.map((link, index) => (
                <NoteItem
                  key={index}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }

          </Section>

          <Section title="Marcadores">
            <div className="tag-section">

              <NoteItem
                isNew
                placeholder="Nova Tag"
                className="tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                isTag />

              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={index}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                    className="tag"
                    isTag />
                ))
              }
            </div>
          </Section>

          <Button
            title="Salvar"
            onClick={handleAddNote}
          />
        </Form>
      </main>
    </Container>
  )
}