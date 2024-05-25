import { Container } from "./styles";
import { FiPlus, FiX} from "react-icons/fi";

export function NoteItem({ isNew, isTag, value, onClick, ...rest }) {
  return (
    <Container 
      $isnew={isNew ? "true" : "false"}
      $istag={isTag ? "true" : "false"}
      >
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>    
  )
}