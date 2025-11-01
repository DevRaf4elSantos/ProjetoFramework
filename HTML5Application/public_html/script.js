/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.getElementById('cep').addEventListener('blur', function() {
    
    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert('CEP inválido. O CEP deve ter 8 dígitos.');
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
        
            if (data.erro) {
                alert('CEP não encontrado.');
                return;
            }

            document.getElementById('logradouro').value = data.logradouro || 'Indisponível';
            document.getElementById('bairro').value = data.bairro || 'Indisponível';
            document.getElementById('cidade').value = data.localidade || 'Indisponível';
            document.getElementById('estado').value = data.uf || 'Indisponível';
        })
        .catch(error => {
            alert('Erro ao buscar o CEP. Tente novamente.');
            console.error(error);
        });
});

document.getElementById('addressForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert('Endereço cadastrado com sucesso!');
});
