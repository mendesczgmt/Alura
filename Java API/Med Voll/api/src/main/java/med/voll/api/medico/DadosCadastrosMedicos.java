package med.voll.api.medico;

import med.voll.api.endereco.DadosEndereco;

public record DadosCadastrosMedicos( String email,  String nome,  String crm,  Especialidade especialidade, DadosEndereco endereco) {

}
