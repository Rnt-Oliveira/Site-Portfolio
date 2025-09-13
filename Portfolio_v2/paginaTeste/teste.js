//  PÁGINA TESTE DO RESUME.JS

var itensCertificado = [ //IMAGEM, INFORMAÇÕES E LINKS DOS CERTIFICADOS
    {
        certificado: 'certificados/Certificado Apple.jpg',
        txt3: 'iOS & Macintosh',
        txt1: 'Apple / iPlace',
        txt2: '07/2021',

    },
    {
        certificado: 'certificados/Certificado Apple.jpg',
        txt3: 'MacBook, Imac, MacPro e iPhone',
        txt1: 'Apple / iPlace',
        txt2: '06/2021',

    },
    {
        certificado: 'certificados/Certificado FIAP - Gestão e Infraestrutura de TI.png',
        txt: 'Gestão e Infraestrutura de T.I',
        txt1: 'FIAP Online',
        txt2: '12/2021',
        link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/35096/a0b99cb1a241058fbdc098d625bbaf3b/certificado.png',

    },
    {
        certificado: 'certificados/Certificado FIAP - Big Data & Analytics.png',
        txt: 'Big Data & Analytics',
        txt1: 'FIAP Online',
        txt2: '02/2022',
        link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/44385/fcd3450c7642143756958fd9fb43faf6/certificado.png',

    },
    {
        certificado: 'certificados/Certificado LinkedIn - Fundamentos da Programacao.png',
        txt: 'Fundamentos da Programação',
        txt1: 'LinkedIn Learning',
        txt2: '09/2022',
        link: 'https://www.linkedin.com/learning/certificates/30becd0ac010ace935a31ece0ca81aa58e1f1181f425d5d939822f06c51a33e9',

    },
    {
        certificado: 'certificados/Certificado LinkedIn - Fundamentos de Programacao Design Orientado a Objetos.png',
        txt: 'Fundamentos da Programação Orientado a Objetos',
        txt1: 'LinkedIn Learning',
        txt2: '09/2022',
        link: 'https://www.linkedin.com/learning/certificates/c9c34816071a140467ab4b155319de1fa4fabd3ae27f2a5e253ea6ed3596e95d',

    },
    {
        certificado: 'certificados/Certificado LinkedIn - Descubra o Python.png',
        txt: 'Descubra Python',
        txt1: 'LinkedIn Learning',
        txt2: '09/2022',
        link: 'https://www.linkedin.com/learning/certificates/e5ae8738731042b9ecf6d353de02dec103c49e2c19c896aa6de25d4ac0e28f5a',

    },
    {
        certificado: 'certificados/Certificado LinkedIn - Git e GitHub - Básico.png',
        txt: 'Git & GitHub - Básico',
        txt1: 'LinkedIn Learning',
        txt2: '08/2022',
        link: 'https://www.linkedin.com/learning/certificates/908cc29d4d4fe774b2ff3722511d45f0b25f2bffd5dd7fc85ad09437b7cdaf9f?trk=share_certificate',

    },
    {
        certificado: 'certificados/Certificado LinkedIn - JavaScript -  Formação Básica.png',
        txt: 'JavaScript - Formação Básica',
        txt1: 'LinkedIn Learning',
        txt2: '08/2022',
        link: 'https://www.linkedin.com/learning/certificates/e16ec7fdee1dd447d4de50e9368295843465489ecaffd79a429d1d8a80e06370',

    },
    {
        certificado: 'certificados/Certificado DESCOMPLICA - Programming Basics.png',
        txt: 'Programming Basics',
        txt1: 'Faculdade Descomplica',
        txt2: '06/2022',
        link: 'https://microcertificado.descomplica.com.br/af7f5b409935348b5bc1a10543db62766033032818e09d20670b230a9408a21d',

    },
    {
        certificado: 'certificados/Certificado DESCOMPLICA - Arquitetura e Organização de Computadores.png',
        txt: 'Arquitetura e Organização de Computadores',
        txt1: 'Faculdade Descomplica',
        txt2: '10/2022',
        link: 'https://microcertificado.descomplica.com.br/4b34c8a2b2e6590cfb1ee947e318550b86e9e1385486fa14862300568f3a1423',

    },
    {
        certificado: 'certificados/Certificado DESCOMPLICA - DB Devoloper.png',
        txt: 'DB Devoloper',
        txt1: 'Faculdade Descomplica',
        txt2: '12/2022',
        link: 'https://microcertificado.descomplica.com.br/fc0da1cbb2db922813ff9a3d8e1807d5b041df4b2e13131c8a85d15b3d839da2',

    },
    {
        certificado: 'certificados/Certificado DESCOMPLICA - Object-Oriented Devoloper.png',
        txt: 'Object-Oriented Devoloper',
        txt1: 'Faculdade Descomplica',
        txt2: '03/2023',
        link: 'https://microcertificado.descomplica.com.br/3a7f0b5b8e9dcd4f03ac20c7efcb50ff7232f70f2419be9ecfbe0a99f83c2f3f',

    },
    {
        certificado: 'certificados/Certificado Alura - Lógica de programação_ comece em lógica com o jogo Pong e Javascript.png',
        txt: 'Lógica de Programação - Jogo Pong e JavaScript',
        txt1: 'Alura',
        txt2: '09/2022',
        link: 'https://cursos.alura.com.br/certificate/023d4568-e59d-410e-bad3-4c4b03a2d802',

    },
    {
        certificado: 'certificados/Certificado Alura - Arquitetura de Computadores.png',
        txt: 'Arquitetura de Computadores',
        txt1: 'Alura',
        txt2: '10/2022',
        link: 'https://cursos.alura.com.br/certificate/8c99fee6-65b8-40c1-9a68-bb209edb6c94',

    },
    {
        certificado: 'certificados/Certificado Alura - Git & GitHub.png',
        txt: 'Git & GitHub',
        txt1: 'Alura',
        txt2: '11/2022',
        link: 'https://cursos.alura.com.br/certificate/5db316ef-9299-426f-bec9-eb68e426a074',

    },
    {
        certificado: 'certificados/Certificado Alura - HTML5 e CSS3 - 1º.png',
        txt: 'HTML5 & CSS3 - 1º',
        txt1: 'Alura',
        txt2: '10/2022',
        link: 'https://cursos.alura.com.br/certificate/02d397b7-aed1-4d13-9273-529bb0f78353',

    },
    {
        certificado: 'certificados/Certificado Alura - HTML5 e CSS3 - 2º.png',
        txt: 'HTML5 & CSS3 - 2º',
        txt1: 'Alura',
        txt2: '10/2022',
        link: 'https://cursos.alura.com.br/certificate/e20645a6-f4f6-4712-b303-58e3e8b2646e',

    },
    {
        certificado: 'certificados/Certificado Alura - HTML5 e CSS3 - 3º.png',
        txt: 'HTML5 & CSS3 - 3º',
        txt1: 'Alura',
        txt2: '10/2022',
        link: 'https://cursos.alura.com.br/certificate/ece13b79-097a-44ee-83aa-f19341183226',

    },
    {
        certificado: 'certificados/Certificado Alura - HTML5 e CSS3 - 4º.png',
        txt: 'HTML5 & CSS3 - 4º',
        txt1: 'Alura',
        txt2: '11/2022',
        link: 'https://cursos.alura.com.br/certificate/f461ae5a-bbc7-4262-8959-e35054736bab',

    },
    {
        certificado: 'certificados/Certificado Alura - JavaScript para WEB.png',
        txt: 'JavaScript para WEB',
        txt1: 'Alura',
        txt2: '11/2022',
        link: 'https://cursos.alura.com.br/certificate/6a159533-b4a9-4615-bb72-f9cffa3f4af8',

    },
    {
        certificado: 'certificados/Certificado Alura - Linux I - Conhecendo e utilizando o temirnal.png',
        txt: 'Linux I - Conhecendo e utilizando o terminal',
        txt1: 'Alura',
        txt2: '10/2022',
        link: 'https://cursos.alura.com.br/certificate/d463e5c5-9883-4308-94cf-d5b7eef8e852',

    },
    {
        certificado: 'certificados/Certificado Alura - Java, JRE e JDK.png',
        txt: 'JAVA, JRE e JDK',
        txt1: 'Alura',
        txt2: '12/2022',
        link: 'https://cursos.alura.com.br/certificate/f4720252-7cb7-4939-896a-59537d619c91',

    },
    {
        certificado: 'certificados/Certificado Alura - JAVA OO ENTENDO A ORIENTAÇÃO A OBJETOS.png',
        txt: 'JAVA OO - Entendento a Orientação a Objetos',
        txt1: 'Alura',
        txt2: '12/2022',
        link: 'https://cursos.alura.com.br/certificate/20cbd048-4f08-4c3d-aa40-456d710d8cec',

    },


];
var itensFormacao = [ //FORMAÇÃO ACADÊMICA
    {
        txt: 'Análise e Desenvolvimento de Sistemas',
        txt1: 'Ensino Superior - Faculdade Descomplica',
        txt2: 'Previsão de conclusão - 03/2025 (Cursando)'
    },

    {
        txt: 'Administração',
        txt1: 'Ensino Superior - UNISUAM',
        txt2: 'Previsão de conclusão - 12/2024 (Cursando)'
    },
];
var itensExperiencia = [ //CAMINHO PROFISSIONAL
    {
        txt: 'iPlace - Shopping RioSul / Grupo Herval',
        txt1: '06/21',
        txt2: 'Analísta Técnico',
    },
    {
        txt: 'Livraria Leitura / Ouvidor',
        txt1: '10/2020 - 03/2021',
        txt2: 'Livreiro',
    },
    {
        txt: 'Lojas Americanas',
        txt1: '03/2019 - 09/2020',
        txt2: 'Operador de Loja',
    },
    {
        txt: 'PC Help Soluções Tecnológicas',
        txt1: '04/2013 - 12/2018',
        txt2: 'Técnico de Informática - Autônomo',
    },
];

//FORMAÇÃO ACADÊMICA
var lista = document.getElementById("formacao");

for (var i = 0; i < itensFormacao.length; i++) {
    var item = document.createElement("li");
    var link = document.createElement("a");
    var texto = document.createElement("p");
    var texto1 = document.createElement("p");
    var texto2 = document.createElement("p");

    texto.textContent = itensFormacao[i].txt;
    texto1.textContent = itensFormacao[i].txt1;
    texto2.textContent = itensFormacao[i].txt2;

    item.appendChild(texto);
    item.appendChild(texto1);
    item.appendChild(texto2);

    lista.appendChild(item);
};
//CAMINHO PROFISSIONAL
var lista = document.getElementById("experiencia");

for (var i = 0; i < itensExperiencia.length; i++) {
    var item = document.createElement("li");
    var link = document.createElement("a");
    var texto = document.createElement("p");
    var texto1 = document.createElement("p");
    var texto2 = document.createElement("p");

    texto.textContent = itensExperiencia[i].txt;
    texto1.textContent = itensExperiencia[i].txt1;
    texto2.textContent = itensExperiencia[i].txt2;

    item.appendChild(texto);
    item.appendChild(texto1);
    item.appendChild(texto2);

    lista.appendChild(item);
};

//CERTIFICADOS
var lista = document.getElementById("cursos");

for (var i = 0; i < itensCertificado.length; i++) {

    var item = document.createElement("li");
    var conteiner = document.createElement("div");
    var img = document.createElement("img");
    var info = document.createElement("div");
    var link = document.createElement("a");
    var texto = document.createElement("p");
    var texto1 = document.createElement("p");
    var texto2 = document.createElement("p");


    texto.textContent = itensCertificado[i].txt3;
    texto1.textContent = itensCertificado[i].txt1;
    texto2.textContent = itensCertificado[i].txt2;
    link.textContent = itensCertificado[i].txt;
    link.href = itensCertificado[i].link;
    link.target = itensCertificado[i].link;
    img.src = itensCertificado[i].certificado;


    item.appendChild(conteiner);
    conteiner.appendChild(img);
    conteiner.appendChild(info);
    info.appendChild(link);
    info.appendChild(texto);
    info.appendChild(texto1);
    info.appendChild(texto2);

    lista.appendChild(item);

};

//PDF    

//FORMAÇÃO ACADÊMICA
var lista = document.getElementById("PDF1");

for (var i = 0; i < itensFormacao.length; i++) {
    var item = document.createElement("li");
    var link = document.createElement("a");
    var texto = document.createElement("p");
    var texto1 = document.createElement("p");
    var texto2 = document.createElement("p");

    texto.textContent = itensFormacao[i].txt;
    texto1.textContent = itensFormacao[i].txt1;
    texto2.textContent = itensFormacao[i].txt2;

    item.appendChild(texto);
    item.appendChild(texto1);
    item.appendChild(texto2);

    lista.appendChild(item);
};
//CAMINHO PROFISSIONAL
var lista = document.getElementById("PDF2");

for (var i = 0; i < itensExperiencia.length; i++) {
    var item = document.createElement("li");
    var link = document.createElement("a");
    var texto = document.createElement("p");
    var texto1 = document.createElement("p");
    var texto2 = document.createElement("p");

    texto.textContent = itensExperiencia[i].txt;
    texto1.textContent = itensExperiencia[i].txt1;
    texto2.textContent = itensExperiencia[i].txt2;

    item.appendChild(texto);
    item.appendChild(texto1);
    item.appendChild(texto2);

    lista.appendChild(item);
};

//CERTIFICADOS  PARTE QUE VAI SER COPIADA
var lista = document.getElementById("PDF3");

for (var i = 0; i < itensCertificado.length; i++) {

    var item = document.createElement("li");
    var conteiner = document.createElement("div");
    var info = document.createElement("div");
    var texto = document.createElement("p");
    var texto1 = document.createElement("p");
    var texto2 = document.createElement("p");
    var texto0 = document.createElement("p");

    texto.textContent = itensCertificado[i].txt3;
    texto1.textContent = itensCertificado[i].txt1;
    texto2.textContent = itensCertificado[i].txt2;
    texto0.textContent = itensCertificado[i].txt;
    


    item.appendChild(conteiner);
    conteiner.appendChild(info);
    info.appendChild(texto0);
    info.appendChild(texto);
    info.appendChild(texto1);
    info.appendChild(texto2);
    

    lista.appendChild(item);

};