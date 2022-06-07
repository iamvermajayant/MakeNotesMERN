import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import './Mynotes.css';
import axios from 'axios';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
    }
  };

  const fetchNote = async () => {
    const {data} = await axios.get('/api/notes');
    setNotes(data);
  }
  
  useEffect(() => { 
      fetchNote();
  })


  return (
    <MainScreen title="Welcome back Jayant Verma...">
      <Link to="createnote">
        <Button className="btn btn-primary" size="sm">
          create Note
        </Button>
      </Link>

      {notes.map((note) => (
            <Card key={note._id} style={{ margin: "10px" }}>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <span style={{ color: "black", fontSize: "20px" }}>
                  {note.title}
                </span>
                <div>
                  <Button
                    href={`/notes/${note._id}`}
                    className="btn btn-primary"
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn btn-danger mx-3"
                    size="sm"
                    onClick={() => deleteNote(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion style={{ margin: "10px"}}>
              <Accordion.Header>Click to expand</Accordion.Header>
              <Accordion.Body>
              <Card.Body>
                <h6>
                  <Badge>{note.category}</Badge>
                </h6>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    {`Created on - Date`}
                  </footer>
                </blockquote>
              </Card.Body>
              </Accordion.Body>
              </Accordion>
            </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
