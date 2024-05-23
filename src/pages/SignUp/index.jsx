import { Container, Form } from "./styles"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar notas!</p>
        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}>
        </Input>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        ></Input>

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}>
        </Input>

        <Button title="Cadastrar"/>

        <a href="#">Voltar</a>
      </Form>
    </Container>
  )
}