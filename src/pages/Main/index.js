import React from "react";
// import { Title } from "./styles";
import { FaGithubAlt, FaPlus } from "react-icons/fa";
import { Container, Form, SubmitButton } from "./styles";

function Main() {
  return (
    // <Title error={false}>
    //   Main
    //   <small>menor</small>
    // </Title>
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />

        <SubmitButton disabled>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
