import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Question = ({ questionNumber, question, options, selectedAnswer, onAnswerSelect, onAnswerSubmit }) => {
  return (
    <div className="d-flex flex-column">
      <h2 style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '16px' }}>Question {questionNumber}</h2>
      <p style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px' }}>{question}</p>
      <Form className="d-flex flex-column align-items-start round">
        {options.map((option, index) => (
          <Button
            key={index}
            as="a"
            variant={selectedAnswer === option ? 'primary' : 'link'}
            onClick={() => onAnswerSelect(option)}
            className="m-2"
          >
            {option}
          </Button>
        ))}
        <Button variant="primary" onClick={onAnswerSubmit} className="m-2">
          Submit Answer
        </Button>
      </Form>
    </div>
  );
};

export default Question;
