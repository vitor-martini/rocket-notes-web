import { Container, Form } from "../NewNote/styles.js";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom'

export function NewNote() {
  return (
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Título"/>
          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem
              value="https://github.com/vitor-martini"
            />
            <NoteItem
              isNew
              placeholder="Novo link"
            />
          </Section>

          <Section title="Marcadores">
            <div className="tag-section">

              <NoteItem
                value="aaa"
                className="tag"
                isTag />

              <NoteItem
                value="bbb"
                className="tag"
                isTag />

              <NoteItem
                value="ccc"
                className="tag"
                isTag />

              <NoteItem
                isNew
                placeholder="Nova Tag"
                className="tag"
                isTag />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}