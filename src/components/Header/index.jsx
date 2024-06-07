import { RiShutDownLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { Container, Profile, NavButtons, Button } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header() {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSignOut() {
    signOut()
    navigate("/")
  }

  function handleBackHome() {
    navigate("/")
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={`Foto de ${user.Profile}`} />

        <div>
          <span>Bem-vindo,</span>  
          <strong>{user.name}</strong>
        </div>  
      </Profile>

      <NavButtons>
        <Button onClick={handleBackHome}>
          <TiHome />
        </Button>

        <Button onClick={handleSignOut}>
          <RiShutDownLine/>
        </Button>
      </NavButtons>
    </Container>
  )
}