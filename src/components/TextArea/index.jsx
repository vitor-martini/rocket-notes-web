import { Container } from "../../components/TextArea/styles"

export function TextArea({ value, ...rest}) {
  return (
    <Container {...rest}>
      { value }
    </Container>
  )
}