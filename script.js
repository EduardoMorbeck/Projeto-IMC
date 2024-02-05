let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let res = document.getElementById('resultado')
function verificar() {
    let alt = (altura.value)
    let pes = (peso.value)
    let imc = pes/alt**2
    if (alt == 0 || pes == 0 ){
        res.innerHTML = 'Por favor, verifique os valores informados!'
    }else {
        res.innerHTML = `Seu IMC é ${imc.toFixed(1)}`
        if (imc < 18.5) {
            res.innerHTML += ', você está abaixo do peso!<br><br>Um IMC menor que 18,5 indica que a pessoa está abaixo do peso considerado saudável para sua altura. Pode estar associado a deficiências nutricionais e problemas de saúde, como falta de energia e imunidade reduzida.<br><br>Dicas:<br>Alimentação Balanceada: Priorize alimentos ricos em nutrientes para garantir uma ingestão adequada de vitaminas e minerais.<br>Exercício Regular: Incorporar exercícios físicos para melhorar a saúde cardiovascular e promover o ganho de massa muscular.<br>Consulte um Profissional de Saúde: Busque orientação médica ou nutricional para abordar qualquer causa subjacente de peso baixo e criar um plano de saúde personalizado.'
        } else if (imc <= 24.9) {
            res.innerHTML += ', você está no peso ideal<br><br>Um IMC entre 18,5 e 24,9 reflete um peso considerado saudável em relação à altura. Geralmente associado a menor risco de problemas de saúde relacionados ao peso.<br><br>Dicas:<br>Manutenção da Rotina: Continue com uma dieta equilibrada e mantenha a prática regular de exercícios.<br>Monitoramento Regular: Realize verificações periódicas de saúde e mantenha um estilo de vida ativo para prevenir ganho de peso não saudável.<br>Bem-Estar Mental: Cuide da saúde mental, pois equilíbrio emocional também é essencial para a saúde global.'
        }else if (imc <= 29.9) {
            res.innerHTML += ', sobrepeso<br><br>Um IMC entre 25 e 29,9 indica um excesso de peso em relação à altura, mas não necessariamente à obesidade.Pode aumentar o risco de condições como diabetes tipo 2 e doenças cardiovasculares.<br><br>Dicas: <br>Alimentação Saudável: Adote uma dieta equilibrada, rica em frutas, vegetais e proteínas magras.<br>Exercícios Aeróbicos: Integre atividades aeróbicas para queimar calorias e melhorar a saúde cardiovascular.<br>Controle de Porções: Monitore o tamanho das porções e evite excessos, focando na qualidade dos alimentos.'
        }else if (imc <= 34.9) {
            res.innerHTML += ', obesidade grau 1<br><br>Um IMC entre 30 e 34,9 reflete um nível moderado de obesidade. Aumenta significativamente o risco de problemas de saúde, como diabetes, hipertensão e doenças cardiovasculares. <br><br>Dicas:<br>Modificação da Dieta: Reduza a ingestão de calorias e escolha alimentos nutritivos para promover a perda de peso.<br>Atividade Física Regular: Aumente a intensidade e frequência dos exercícios, incluindo treinamento de resistência.<br>Apoio Profissional: Consulte um nutricionista ou especialista em perda de peso para orientação personalizada.'
        }else if (imc <= 39.9) {
            res.innerHTML += ', obesidade grau 2<br><br>Um IMC entre 35 e 39,9 indica obesidade severa. O risco de complicações de saúde é substancialmente elevado, incluindo problemas cardíacos, apneia do sono e diabetes tipo 2.<br><br>Dicas:<br> Acompanhamento Médico Regular: Busque orientação médica frequente para monitorar a saúde e ajustar o plano conforme necessário.<br>Abordagem Multidisciplinar: Trabalhe com uma equipe de profissionais de saúde, incluindo médicos, nutricionistas e treinadores, para um suporte abrangente.<br>Estilo de Vida Sustentável: Foque em mudanças de longo prazo, incorporando hábitos saudáveis e sustentáveis na rotina diária.'
        }else{
            res.innerHTML += ', obesidade grau 3<br><br>Um IMC igual a 40 ou superior, indica obesidade mórbida. Representa o mais alto grau de obesidade, com riscos graves para a saúde, incluindo doenças cardíacas, diabetes avançado, e impactos significativos na qualidade de vida.<br><br>Dicas: <br>Acompanhamento Médico Regular: Busque orientação médica frequente para monitorar a saúde e ajustar o plano conforme necessário. <br>Abordagem Multidisciplinar: Trabalhe com uma equipe de profissionais de saúde, incluindo médicos, nutricionistas e treinadores, para um suporte abrangente.<br>Estilo de Vida Sustentável: Foque em mudanças de longo prazo, incorporando hábitos saudáveis e sustentáveis na rotina diária.'
        }   
    }
}