function calcularPrevisao(coeficientes, ano) {
    let previsao = 0;
    for (let i = 0; i < coeficientes.length; i++) {
        previsao += coeficientes[i]["Coeff."] * Math.pow(ano, coeficientes[i]["Exponent"]);
    }
    return previsao;
}

const coeficientes = [
    { "Exponent": 1, "Coeff.": -211514612639439.25 },
    { "Exponent": 2, "Coeff.": 195796039304.61865 },
    { "Exponent": 3, "Coeff.": -64304062.00743461 },
    { "Exponent": 4, "Coeff.": -6737.9044626081595 }
];

const ano = 2024;
const previsao = calcularPrevisao(coeficientes, ano);
console.log("Previsão para o ano", ano, ":", previsao);
