import React,{useState} from "react";
import {Button,Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios'


const QuizForm = () => {
    const [pregunta1, setpregunta1] = useState("")
    const [pregunta2, setpregunta2] = useState("")
    const [pregunta3, setpregunta3] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        const respuestas = [pregunta1,pregunta2,pregunta3]
        const jwt = localStorage.getItem("jwt");
        axios
        .post("http://localhost:3001/server/quiz",{respuestas}, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: jwt,
          },
        })
        .then((res) => {
          alert("Formulario enviado exitósamente")
          setpregunta1("")
          setpregunta2("")
          setpregunta3("")
        })
        .catch((err) => {
          console.log(err);
        });

    }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup >
        
        <legend>¿Qué te gustaría que agregáramos al informe?</legend>
        <Input type="textarea" onChange={(e) => setpregunta1(e.target.value)} value={pregunta1} name="pregunta1" id="pregunta1" />
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>¿La información es correcta?</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio"  onChange={(e) => setpregunta2(e.target.value)} value="Si" name="pregunta2" />{' '}
            Si
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio"  onChange={(e) => setpregunta2(e.target.value)} value="No" name="pregunta2" />{' '}
            No
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio"  onChange={(e) => setpregunta2(e.target.value)} value="Más o Menos" name="pregunta2" />{' '}
            Más o menos
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Del 1 al 5, ¿Es rápido el sitio?</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" onChange={(e) => setpregunta3(e.target.value)} value="1" name="pregunta3" />{' '}
            1
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" onChange={(e) => setpregunta3(e.target.value)} value="2" name="pregunta3" />{' '}
            2
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" onChange={(e) => setpregunta3(e.target.value)} value="3" name="pregunta3" />{' '}
            3
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" onChange={(e) => setpregunta3(e.target.value)} value="4" name="pregunta3" />{' '}
            4
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" onChange={(e) => setpregunta3(e.target.value)} value="5" name="pregunta3" />{' '}
            5
          </Label>
        </FormGroup>
      </FormGroup>
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default QuizForm;
