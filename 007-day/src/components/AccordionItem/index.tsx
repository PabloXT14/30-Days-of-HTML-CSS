import { AccordionItems } from "../../App";
import { AccordionItemContainer } from "./styles";
import { 
  FaPlus,
  FaMinus
} from 'react-icons/fa';

interface AccordionItemProps extends AccordionItems {
  handleToggleAccordionItem(id: string): void;
}

export function AccordionItem(props: AccordionItemProps) {

  return (
    <AccordionItemContainer isOpen={props.isOpen}>
      <button 
        onClick={() => props.handleToggleAccordionItem(props.id)} 
        id={props.id}
      >
        <span className="accordion-title">{props.title}</span>
        <span className="accordion-icon">
          {props.isOpen ? (<FaMinus />) : (<FaPlus />)}
        </span>
      </button>
      <div className="accordion-content">
        <p>{props.content}</p>
      </div>
    </AccordionItemContainer>
  );
}