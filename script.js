function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('.res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let sex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (sex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-hbebe.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-hjovem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-hadulto.png');
            } else {
                img.setAttribute('src', 'foto-idoso.png');
            }
        } else if (sex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-mbebe.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-mjovem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-madulta.png');
            } else {
                img.setAttribute('src', 'foto-idosa.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}