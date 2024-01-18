import React from 'react';
import { Alert, Button } from 'react-bootstrap';

const Result = ({ score, onReplay }) => {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Quiz Completed!</Alert.Heading>
        <p>Your Score: {score}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="info" onClick={onReplay}>
            Replay
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default Result;
