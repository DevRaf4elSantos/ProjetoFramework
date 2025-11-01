async function buscarCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erro de rede ou na requisição: ${response.status}`);
        }
        
        const data = await response.json();

        if (data.erro) {
            throw new Error('CEP não encontrado.');
        }

        return {
            
            logradouro: data.logradouro || 'Indisponível', 
            bairro: data.bairro || 'Indisponível',
            localidade: data.localidade || 'Indisponível',
            uf: data.uf || 'Indisponível'
        };

    } catch (error) {
        console.error("Falha ao buscarCEP:", error);

        return null;
    }
}