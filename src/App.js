import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './actions';

function App() {
  const [task, setTask] = useState("");
  const tasks = useSelector(state => state)
  console.log(tasks)
  const dispatch = useDispatch()

  const createTask = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTodo(task))
      setTask("");
    }
  };
  const edit = (i, e) => {
    dispatch(editTodo(i, e))
  };
  const remove = (i) => {
    dispatch(deleteTodo(i))
    console.log("deleted");
  };

  return (
    <Container className="App">
      <br />
      <Row align="center">
        <Col xs={0} md={2}></Col>
        <Col xs={8} md={6}>
          <h1>To-do App</h1>
        </Col>
        <Col xs={4} md={4}></Col>
      </Row>
      <br />
      <br />
      <Form onSubmit={createTask}>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={8} md={6}>
            <Form.Control
              placeholder="Add a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Col>
          <Col xs={4} md={4}>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
      <hr />
      {tasks.map((task, i) => (
        <>
          <Row key={i}>
            <Col xs={0} md={2}></Col>
            <Col xs={8} md={6}>
              <h5>
                <input
                  style={{ border: "none" }}
                  value={task}
                  onChange={(e) => edit(i, e)}
                />
                {console.log(tasks)}
              </h5>
            </Col>
            <Col xs={4} md={4} className="icons">
              {/* <AiOutlineEdit className='icon' onClick={() => edit(i)} />{' '} */}
              <AiOutlineDelete className="icon" onClick={() => remove(i)} />
            </Col>
          </Row>
          <hr />
        </>
      ))}
    </Container>
  );
}

export default App;
