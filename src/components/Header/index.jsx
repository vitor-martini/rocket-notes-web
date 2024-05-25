import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/vitor-martini.png" alt="Imagem do usuário" />

        <div>
          <span>Bem-vindo,</span>  
          <strong>Vitor Martini</strong>
        </div>  
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}