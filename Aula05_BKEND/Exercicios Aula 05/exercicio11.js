
let estudante = {
    nome: 'João da Silva',
    matricula: 123456,
    curso: 'Ciência da Computação',
    materias: [
        'Matemática Discreta',
        'Algoritmos e Estruturas de Dados',
        'Redes de Computadores',
        'Banco de Dados'
    ]
};


console.log('Nome:', estudante.nome);
console.log('Matrícula:', estudante.matricula);
console.log('Curso:', estudante.curso);
console.log('Matérias:', estudante.materias.join(', '));
