console.log('Iniciando sistema.');

const usuarios = [
  {
    nome: 'Zemildo',
    email: 'zemildo@email.com',
    genero: 'Masculino',
    estadoCivil: 'casado'

  },
  {
    nome: 'Romilda',
    email: 'romilda@email.com',
    genero: 'Feminino',
    estadoCivil: 'solteira'

  }
];

function montarTabela() {
  const tabelaUsuario = document.getElementById('tabela_usuarios')
  for (let i = 0; i < usuarios.length; i++) {
   
    tabelaUsuario.innerHTML += `
  <tr>
  <td>${usuarios[i].nome}</td>
  <td>${usuarios[i].email}</td>
  <td>${usuarios[i].genero}</td>
  <td>${usuarios[i].estadoCivil}</td>  
  <td>
  <button 
  title="Excluir usuário"
  style="cursor: pointer;"
  onclick = "excluirUsuario(${i})">
  <img src="../assets/images/excluir.png" 
  width="16px"
  height="16px"
  alt="excluir">
  </button>
  </td> 
  </tr>
  `
  }
}

montarTabela()