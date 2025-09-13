function gerarPDF(){

    var doc = document.getElementById('dadosPDF').innerHTML;
    

    var janela = window.open('', '');

    janela.document.write('<html><head>');
    janela.document.write('<title>Currículo - Renato Oliveira</title></head>');
    janela.document.write('<main>'); 
    janela.document.write('<style>');
    janela.document.write(doc);
    janela.document.write('</main></html>');
    janela.document.close;
    janela.print();

}   