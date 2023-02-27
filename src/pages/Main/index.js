import React, { Component } from "react";
// import { Title } from "./styles";
import { FaGithubAlt, FaPlus, FaSpinner } from "react-icons/fa";
import { Container, Form, SubmitButton, List } from "./styles";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default class Main extends Component {
  state = {
    newRepo: "",
    repositories: [],
    loading: false,
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem("repositories");

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem("repositories", JSON.stringify(repositories));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: "",
      loading: false,
    });

    // console.log(response.data);
    // console.log(this.state.newRepo);
  };

  render() {
    const { newRepo, repositories, loading } = this.state;

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

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link
                to={{
                  pathname: `/repository/${encodeURIComponent(
                    repository.name
                  )}`,
                  state: { stateParam: true },
                }}
              >
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
