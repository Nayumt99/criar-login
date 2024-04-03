document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validação de entrada do usuário
  var nome = document.getElementById('nome').value;
  var cpf = document.getElementById('cpf').value;
  var dataNascimento = document.getElementById('data-nascimento').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmar-senha').value;

  // Verificação de disponibilidade de e-mail (simulado)
  var emailDisponivel = verificarDisponibilidadeEmail(email);

  // Verificação da senha
  var senhaValida = validarSenha(senha);

  // Feedback visual para validação
  if (!nome || !cpf || !dataNascimento || !email || !senha || !confirmarSenha) {
    document.getElementById('message').innerText = 'Por favor, preencha todos os campos.';
    return;
  } else if (senha !== confirmarSenha) {
    document.getElementById('message').innerText = 'As senhas não coincidem.';
    return;
  } else if (!senhaValida) {
    document.getElementById('message').innerText = 'A senha não atende aos critérios de segurança:' + 
      '\n- Mínimo de 8 caracteres\n- Pelo menos uma letra maiúscula\n- Pelo menos uma letra minúscula\n- Pelo menos um número\n- Pelo menos um caractere especial';
    return;
  } else if (!emailDisponivel) {
    document.getElementById('message').innerText = 'O e-mail fornecido já está em uso.';
    return;
  }

  // Simulação de envio de dados para o servidor
  // Aqui você pode fazer as validações necessárias e enviar os dados para o servidor

  // Exibindo mensagem de sucesso após 1 segundo
  setTimeout(function() {
    document.getElementById('message').innerText = 'Conta criada com sucesso!';
  }, 1000);
});

// Função para verificar a disponibilidade de e-mail (simulação)
function verificarDisponibilidadeEmail(email) {
  // Simulação de verificação de disponibilidade de e-mail
  // Retorna true se o e-mail estiver disponível e false se não estiver
  return true; // Simulado, você pode implementar a lógica real aqui
}

// Função para validar a senha
function validarSenha(senha) {
  // Regex para verificar se a senha atende aos critérios definidos
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(senha);
}

document.getElementById('forgot-password').addEventListener('click', function(event) {
  event.preventDefault();
  // Aqui você pode implementar a lógica real de recuperação de senha, como enviar um email com um link de recuperação
  var email = prompt("Por favor, insira o seu e-mail cadastrado:");

  if (email) {
    document.getElementById('message').innerText = 'Se o e-mail estiver cadastrado, você receberá um e-mail de redefinição de senha.';
  }
});
