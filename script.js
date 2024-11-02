function consultarSigno() {
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    const mes = dataNascimento.getMonth() + 1; // getMonth() retorna 0-11
    const dia = dataNascimento.getDate();

    let signo = '';
    let cavaleiro = '';

    // Determinando o signo
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = 'Aquário';
        cavaleiro = 'Camus de Aquário';
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = 'Peixes';
        cavaleiro = 'Afrodite de Peixes';
    } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = 'Áries';
        cavaleiro = 'Mu de Áries';
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = 'Touro';
        cavaleiro = 'Aldebaran de Touro';
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = 'Gêmeos';
        cavaleiro = 'Saga de Gêmeos';
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = 'Câncer';
        cavaleiro = 'Máscara da Morte de Câncer';
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = 'Leão';
        cavaleiro = 'Aiolia de Leão';
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = 'Virgem';
        cavaleiro = 'Shaka de Virgem';
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = 'Libra';
        cavaleiro = 'Dohko de Libra';
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = 'Escorpião';
        cavaleiro = 'Milo de Escorpião';
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = 'Sagitário';
        cavaleiro = 'Aiolos de Sagitário';
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = 'Capricórnio';
        cavaleiro = 'Shura de Capricórnio';
    }

    // Exibindo o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h2>Parabéns, você é ${signo}, ${cavaleiro}!</h2>`;
}