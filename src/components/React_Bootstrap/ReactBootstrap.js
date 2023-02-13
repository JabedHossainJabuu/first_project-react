import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ReactBootstrap() {
  return (
    <Card style={{width: "20rem"}}>
      
      <Card.Body>
      <Card.Title>React Bootstrap</Card.Title>

        <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iusto assumenda molestias reprehenderit aspernatur unde quidem nam sed cumque labore eveniet? 
        Explicabo in quisquam maxime velit voluptas dolorum libero eum nesciunt, dignissimos hic nemo 
        eius magnam et soluta totam sapiente odio illum architecto similique? Fugiat provident, aliquid 
        eum deleniti consequatur similique!</Card.Text>

        <Button variant='primary'>Click Me</Button>
      </Card.Body>

    </Card>
  );
};