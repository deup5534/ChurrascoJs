function total() {
    const adultoBebe = parseInt(document.getElementById('adultobebe').value);
    const adultoNaoBebe = parseInt(document.getElementById('adultonbebe').value);
    const crianca = parseInt(document.getElementById('crianca').value);

    const carnePorCrianca = 200;
    const carnePorAdulto = 400;
    const acompanhamentoPorAdulto = 200;
    const cervejaPorAdulto = 2;
    const refrigerantePorPessoa = 500;
    const aguaPorPessoa = 400;

    const totalCarne = (carnePorAdulto * (adultoBebe + adultoNaoBebe)) + (crianca * carnePorCrianca);
    const totalAcompanhamento = acompanhamentoPorAdulto * (adultoBebe + adultoNaoBebe + crianca);
    const totalCerveja = cervejaPorAdulto * adultoBebe;
    const totalRefrigerante = refrigerantePorPessoa * (adultoBebe + adultoNaoBebe + crianca);
    const totalAgua = (adultoBebe + adultoNaoBebe + crianca) * aguaPorPessoa;

    document.getElementById('carne').textContent = `Carne: ${totalCarne} g`;
    document.getElementById('acompanhamento').textContent = `Acompanhamento: ${totalAcompanhamento} g`;
    document.getElementById('cerveja').textContent = `Cerveja: ${totalCerveja} L`;
    document.getElementById('refrigerante').textContent = `Refrigerante: ${totalRefrigerante} ml`;
    document.getElementById('agua').textContent = `Água: ${totalAgua} ml`;

}

// Atualizar os cálculos quando houver alteração nos campos de entrada
document.getElementById('adultobebe').addEventListener('input', total);
document.getElementById('adultonbebe').addEventListener('input', total);
document.getElementById('crianca').addEventListener('input', total);
 
