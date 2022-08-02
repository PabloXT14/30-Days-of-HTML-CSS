import { useState } from "react";
import { AccordionItem } from "./components/AccordionItem";
import { globalStyles } from "./styles/global"
import { styled } from "./styles/stitches.config";

globalStyles();

const Container = styled('div', {
  padding: '4rem',
  width: '48rem',
  border: '1px solid $primary',
  borderRadius: '$default',
  margin: '2rem 0'
});

const Title = styled('h2', {

});

const AccordionContainer = styled('div', {

});


export interface AccordionItems {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
}

export function App() {
  const [accordionItems, setAccordionItems] = useState<AccordionItems[]>([
    {
      id: 'accordion-button-1',
      title: 'Why is the sky blue?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa in minima minus, voluptates illo nostrum odio, veritatis? Qui.',
      isOpen: false,
    },
    {
      id: 'accordion-button-2',
      title: 'Why is the moon sometimes out during the day?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa in minima minus, voluptates illo nostrum odio, veritatis? Qui.',
      isOpen: false,
    },
    {
      id: 'accordion-button-3',
      title: 'Will we ever discover aliens?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa in minima minus, voluptates illo nostrum odio, veritatis? Qui.',
      isOpen: false,
    },
    {
      id: 'accordion-button-4',
      title: 'How much does the Earth weight?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa in minima minus, voluptates illo nostrum odio, veritatis? Qui.',
      isOpen: false,
    },
    {
      id: 'accordion-button-5',
      title: 'How do airplanes stay up?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa in minima minus, voluptates illo nostrum odio, veritatis? Qui.',
      isOpen: false,
    }
  ])

  function onHandleToggleAccordionItem(id: string) {
    const accordionItem = accordionItems.find((item) => item.id === id);

    if (!accordionItem) return;

    accordionItem.isOpen = !accordionItem.isOpen;

    setAccordionItems((state) => {
      return (state.map(item => {
        if (item.id === id) return accordionItem
        item.isOpen = false
        return item
      }))
    })
  }

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <AccordionContainer>
        {accordionItems.map((item) => {
          return (
            <AccordionItem
              key={item.id}
              {...item}
              handleToggleAccordionItem={onHandleToggleAccordionItem}
            />
          )
        })}
      </AccordionContainer>
    </Container>
  )
}
