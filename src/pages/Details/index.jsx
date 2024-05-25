import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { TextButton } from "../../components/TextButton";
import { Header } from "../../components/Header";

export function Details() {
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <TextButton title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut in facilis. Laborum aspernatur modi placeat minus ipsa, odit tempora sit ipsam architecto asperiores dolorum illum et aliquam culpa at.tur modi placeat minus ipsa, odit tempora sit ipsam architecto asperiores dolorum illum et aliquam culpa at.</p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://app.rocketseat.com.br/home</a></li>
              <li><a href="#">https://app.rocketseat.com.br/home</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="nodejs"/>
            <Tag title="expres"/>        
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}