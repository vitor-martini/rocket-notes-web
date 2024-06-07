import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { IconButton } from "../../components/IconButton"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"

export function Profile() {
  const navigate = useNavigate()
  const { user, updateUser } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [newAvatarPic, setNewAvatarPic] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    await updateUser({ user, newAvatarPic })
  }

  function handleAvatarChange(event) {
    const file = event.target.files[0]
    setNewAvatarPic(file)

    const newAvatarPicPreviw = URL.createObjectURL(file)
    setAvatar(newAvatarPicPreviw)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <IconButton onClick={handleBack}>
          <FiArrowLeft/>
        </IconButton>
      </header>
      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt={`Foto de ${user.name}`} />
          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id="avatar"
              type="file" 
              onChange={handleAvatarChange}
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button 
          title="Salvar"
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}