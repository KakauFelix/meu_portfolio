// Configurando a função de translate do header
const header = document.getElementById("header"), 
      navbar = document.getElementById("navbar");

function rolagem() {
        header.classList.toggle("ativa", scrollY > 0);
        navbar.classList.toggle("ativa", scrollY > 0);
}

window.addEventListener('scroll', rolagem);

// Configurando o carrossel da página
var balls = document.querySelector('.balls');
var quant = document.querySelectorAll('.slides .div_slide');
var atual = 0;
var div_slide = document.getElementById('atual');
var next = document.getElementById('next');
var voltar = document.getElementById('voltar');
// var rolar = true;

for (let i = 0; i < quant.length; i++) {
      var div = document.createElement('div');  
      div.id = i;
      balls.appendChild(div);  
}

document.getElementById('0').classList.add('slide_atual');

var pos = document.querySelectorAll('.balls div');

for (let i = 0; i < pos.length; i++) {
      pos[i].addEventListener('click', ()=>{
            atual = pos[i].id;
            // rolar = false;
            slide();
      })
}

voltar.addEventListener('click', ()=>{
      atual--;
      // rolar = false;
      slide();
});
next.addEventListener('click', ()=>{
      atual++;
      // rolar = false;
      slide();
});

function slide() {
      if (atual >= quant.length) {
            atual = 0;
      } else if (atual < 0) {
            atual = quant.length - 1;
      }

      document.querySelector('.slide_atual').classList.remove('slide_atual');
      div_slide.style.marginLeft = -1120 * atual + "px";
      document.getElementById(atual).classList.add('slide_atual');
}

// setInterval(()=>{
//       if (rolar) {
//             atual++;
//             slide();
//       } else {
//          rolar = true;   
//       }
// }, 4000);  

var certificados_cursos = [
      {curso: 'canvas', url_certificado: 'CNV_Certificado.pdf'},
      {curso: 'ai-900', url_certificado: 'Certificado_AI-900_Microsoft.pdf'},
      {curso: 'dp-900', url_certificado: 'Certificado_DP-900_Microsoft.pdf'},
      {curso: 'gestao de tempo', url_certificado: 'GT_Certificado.pdf'},
      {curso: 'design thinking', url_certificado: 'DT_Certificado.pdf'},
];

// Exibindo os modais com os certificados
function abrir_certificado(curso) {
      div_modal.style.display = 'flex';

      console.log(curso);

      for (let i = 0; i < certificados_cursos.length; i++) {
            if (certificados_cursos[i].curso == curso) {
                  var posicao_certificado = i;
                  break;
            }
      }

      console.log(posicao_certificado);

      // Obtém a referência da div "pdfContainer"
      var pdfContainer = document.getElementById('pdfContainer');
      pdfContainer.innerHTML = '';

      // Cria o elemento <object> para exibir o PDF
      var object = document.createElement('object');
      object.data = `assets/certificados/${certificados_cursos[posicao_certificado].url_certificado}`;
      object.type = 'application/pdf';
      object.width = '100%';
      object.height = '100%';

      // Adiciona o objeto à div "pdfContainer"
      pdfContainer.appendChild(object);
}

function fechar_certificado() {
      div_modal.style.display = 'none';
}