import { Container, Form } from "../NewNote/styles.js";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

export function NewNote() {
  return (
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>
          <Input placeholder="Título"/>
          <TextArea placeholder="Observações"/>
        </Form>
      </main>
    </Container>
  )
}