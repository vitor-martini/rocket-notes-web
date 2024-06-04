import { Container, Form, BackgroundImg } from "./styles"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth"
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth(); 

  async function handleSignIn() {
    setLoading(true);
    await signIn({ email, password });
    setLoading(false);
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar notas!</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignIn} 
          disabled={loading}
        />

        <Link to="/register">Crie sua conta!</Link>
      </Form>
      <BackgroundImg />
    </Container>
  )
}