document.getElementById('cep').addEventListener('blur', async function() {
    
    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    const limparCamposEndereco = () => {
        document.getElementById('logradouro').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';
    };

    if (cep.length !== 8) {
        alert('CEP inválido. O CEP deve ter 8 dígitos.');
        limparCamposEndereco();
        return;
    }
    
    const endereco = await buscarCEP(cep); 
    
    if (endereco) { 
        document.getElementById('logradouro').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
    } else {
        limparCamposEndereco();
        alert("Não foi possível encontrar o endereço para o CEP informado.");
    }
});

