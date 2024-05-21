import { Container } from "./styles";
import { Button } from "../../../components/Button";

export function Details() {
  return(
    <Container>
      <h1>Hello World</h1>
      <span>Salveeeee</span>
      <Button title="teste 1" loading/>
      <Button title="teste 2" />
    </Container>
  )
}