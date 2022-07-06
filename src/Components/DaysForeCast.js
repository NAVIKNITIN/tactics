import React from "react";
import { Accordion, Card, ContextAwareToggle } from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const DaysForeCast = ({DailyData}) => {
  return (
    <div>
      <ul className="accordion">
      {DailyData.map((faq, index) => (
        <AccordionItem key={index} faq={faq.temp.day} />
      ))}
    </ul>
    </div>
  );
};

export default DaysForeCast;
