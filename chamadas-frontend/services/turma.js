import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/turma';


const getTurmasProfessor = async (id) => {
    const response = await axios.get(`${baseUrl}/professor/${id}`);
    return response.data
}

const getTurmasAluno = async (id) => {
    const response = await axios.get(`${baseUrl}/aluno/${id}`);
    return response.data
}

export default { getTurmasProfessor, getTurmasAluno };