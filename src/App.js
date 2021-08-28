import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

function App() {
  const tasks = ['Buy apples', 'Feed cow', 'Walk cow', 'Drink water', 'Eat dates']

  return (
    <Container className="App">
      <br />
      <Row align='center'>
        <Col xs={0} md={2}>
        </Col>
        <Col xs={8} md={6}>
          <h1>To-do App</h1>
        </Col>
        <Col xs={4} md={4}>
        </Col>
      </Row>
      <br /><br />
      <Form>
        <Row>
          <Col xs={0} md={2}>
          </Col>
          <Col xs={8} md={6}>
            <Form.Control placeholder="Add a task" />
          </Col>
          <Col xs={4} md={4}>
            <Button variant="primary">Create</Button>
          </Col>
        </Row>
      </Form>
      <br /><hr />
      {
        tasks.map(task => (
          <>
            <Row>
              <Col xs={0} md={2}>
              </Col>
              <Col xs={8} md={6}>
                <h5>{task}</h5>
              </Col>
              <Col xs={4} md={4} className='icons'>
                <AiOutlineEdit />{' '}
                <AiOutlineDelete />
              </Col>
            </Row>
            <hr />
          </>
        ))
      }
    </Container>
  )
}

export default App;
