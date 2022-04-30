function verificar() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const formAno = document.getElementById('txtano');
  const result = document.querySelector('div#res');

  if (parseFloat(formAno.value.length) <= 0 || Number(formAno.value) > anoAtual) {
    window.alert('[ERROR] Verifique os dados e tente novamente!');
  } else {
    const sex = document.getElementsByName('radsex');
    const idade = anoAtual - Number(formAno.value);
    let genero = '';
    const img = document.createElement('img');
    img.setAttribute('id', 'img');

    if (sex[0].checked) {
      if (idade >= 0 && idade < 10) {
        genero = 'Bebê';
        img.setAttribute('src', './img/child-boy.jpg');
      } else if (idade < 21) {
        genero = 'Jovem';
        img.setAttribute('src', './img/young-man.jpg');
      } else if (idade < 50) {
        genero = 'Adulto';
        img.setAttribute('src', './img/man-adult.jpg');
      } else {
        genero = 'Idoso';
        img.setAttribute('src', './img/man-old.jpg');
      };
    } else if (sex[1].checked) {
      if (idade >= 0 && idade < 10) {
        genero = 'Bebê';
        img.setAttribute('src', './img/child-girl.jpg');
      } else if (idade < 21) {
        genero = 'Jovem';
        img.setAttribute('src', './img/woman-young.jpg');
      } else if (idade < 50) {
        genero = 'Adulta';
        img.setAttribute('src', './img/woman-adult.jpg');
      } else {
        genero = 'Idosa';
        img.setAttribute('src', './img/woman-old.jpg');
      };
    };
    result.innerHTML = `${genero} com ${idade} anos.`;
    result.style.textAlign = 'center';
    result.appendChild(img);
  };
};