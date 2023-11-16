import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Card } from 'react-native-elements'
import { useParams } from 'react-router-native'
import turmaService from '../services/turma'
import { useState, useEffect } from 'react'
import AppBar from './AppBar';
import inscricaoService from '../services/inscricao'
import presencaService from '../services/presenca'



const styles = StyleSheet.create({
    center: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 3,
      elevation: 3,
      backgroundColor: 'blue',
      marginTop: 50
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

const onPressPresente = async (id_turma,id_aluno) => {

    const inscricao = await inscricaoService.getInscricao(id_turma,id_aluno)
    const id_inscricao = inscricao[0].id
    const body = { id_inscricao }

    const presenca = await presencaService.postPresenca(body)
    console.log(presenca)

}

const ApresentarTurma = props => {
    return (
        <View style={styles.center}>
            <Text style={styles.center}>{props.class}</Text>
        </View>
    )
}

const ApresentarProfessor = props => {
    return (
      <View style={styles.center}>
        <Text>Professor: {props.name}</Text>
      </View>
    );
};

const ApresentarFrequencia = props => {
  return (
    <View>
      <Text>Você está em aula há {props.tempoEmSala} do tempo da chamada aberta.</Text>
      <Text>Você esteve presente em {props.frequenciaNasAulas} das aulas.</Text>
    </View>
  );
};

  


const AlunoPresencaPage = () => {

  const id_turma = useParams().id
  const [ turma, setTurma ] = useState();

  const id_aluno = window.localStorage.getItem('id_logged_user')


  useEffect(() => {
    async function fetchTurma() {
          const response = await turmaService.getTurmaPorId(id_turma);
          setTurma(response.data[0]);
          return;
    }
         
    fetchTurma()
  }
  , []);

  var turmaName = ""
  var professor = ""

  if(turma !== undefined) {
    turmaName = turma.nome_disciplina;
    professor = turma.nome_professor;
  }

    return (
      <>
        <AppBar />
        <View style={[styles.center, {top: 50}]}>
          <Card style={styles.center}>
            <ApresentarTurma class={turmaName}></ApresentarTurma>
            <ApresentarProfessor name={professor} />
          </Card>
          <Pressable style={styles.button} onPress={() => onPressPresente(id_turma,id_aluno)}>
            <Text style={styles.text}>{"Marcar presença"}</Text>
          </Pressable>
          <Card>
            <ApresentarFrequencia tempoEmSala={'50 minutos'} frequenciaNasAulas={'80%'}></ApresentarFrequencia>
          </Card>
        </View>
      </>
    );
};

export default AlunoPresencaPage;