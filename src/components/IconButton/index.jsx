import { Button } from "./styles";

export function IconButton ({children, ...rest}) {
  return (
    <Button {...rest}>
      {children}
    </Button>
  )
}