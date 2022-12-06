import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchGotData } from './store/actions';
import { CharactherContainer, Container } from './styles/App';

class App extends Component {
  state = {
    idValue: '',
  }

  handleChanger = (event) => {
    const {target: {value}} = event;
    this.setState({
      idValue: value,
    })
  }

  render() {
    const {
      infosPersonagem,
      loading,
      name,
      gender,
      culture,
      born,
      died,
      titles,
      aliases,
      father,
      mother,
      spouse,
      dispatch,
    } = this.props;
    const { idValue } = this.state;
    
    return (
      <Container>
        <section>
          <input type="number" onChange={ this.handleChanger }/>
          <button type="button" onClick={() => dispatch(fetchGotData(idValue))}>Encontrar personagem</button>
        </section>
        {loading && <p>Carregando...</p>}
        {
          infosPersonagem && (
            <CharactherContainer>
              <h1>{`Name: ${name}`}</h1>
              <p>{`Genero: ${gender}`}</p>
              <p>{`Cultura: ${culture}`}</p>
              <p>{`Nascimento: ${born}`}</p>
              <p>{`Morte: ${died}`}</p>
              <p>{`Titulos: ${titles}`}</p>
              <p>{`Apelidos: ${aliases}`}</p>
              <p>{`Pai: ${father}`}</p>
              <p>{`Mãe: ${mother}`}</p>
              <p>{`Cônjuge: ${spouse}`}</p>
            </CharactherContainer>
          )
        }
        
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.gotReducer.isLoading,
  name: state.gotReducer.name,
  gender: state.gotReducer.gender,
  culture: state.gotReducer.culture,
  born: state.gotReducer.born,
  died: state.gotReducer.died,
  titles: state.gotReducer.titles,
  aliases: state.gotReducer.aliases,
  father: state.gotReducer.father,
  mother: state.gotReducer.mother,
  spouse: state.gotReducer.spouse,
  infosPersonagem: state.gotReducer.infosPersonagem,
});

export default connect(mapStateToProps)(App);