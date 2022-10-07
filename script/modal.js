//------------------------------------------------------------------------------------------------//
function cotacao() {
    window.location.href="modal.html";
}


var produto1 = document.getElementById('produto1');
produto1.onclick = function() {
   if((this.id === 'produto1')){
    document.getElementById("descricao").innerHTML = "<strong>Salvatore Blue Gold Premium<strong><br><br>- 01 Shampoo Anti Resíduos Salvatore Blue Gold Premium 1 Litro;<br><br>- 01 Creme Condicionante Salvatore Blue Gold Premium 1 Litro;<br><br>Salvatore Cosméticos é uma empresa que se preocupa em desenvolver produtos de alta performance, para os profissionais e seus clientes e busca na natureza os princípios ativos fitoterápicos necessários para deixar os cabelos bonitos e, principalmente, saudáveis."
}
    
   
} 
var produto2 = document.getElementById('produto2');
produto2.onclick = function() {
   if((this.id === 'produto2')){
    document.getElementById("descricao").innerHTML = "<strong>PLÁSTICA DOS FIOS<br><br>A Biotina Supreme Evolution é um alinhamento térmico sem formol que proporciona um liso perfeito e duradouro para todos os tipos de cabelos.<br> Contém Biotina e Sericina em sua composição que contribuem para que o resulte em um cabelo liso natural, com muito brilho e balanço. Aplique o creme no cabelo limpo e seco; deixe o tempo de pausa conforme a estrutura do fio. Enxágue 50% do produto; seque alinhando ou escovando; pranche 20 vezes cada mecha em transparência; lave varias vezes com um bom shampoo para tirar o produto, hidrate com uma mascara de qualidade e seque 100%.</strong>"
}
}

var produto = document.getElementById('produto3');
produto3.onclick = function() {
   if((this.id === 'produto3')){
    document.getElementById("descricao").innerHTML = "<strong>Lanza Healing <br><br>O caminho para o cabelo perfeito requer cuidados especiais, e hoje você pode conseguir essa mudança com a ajuda da Lanza.<br>Livre de crueldade<br>Este produto é feito sem machucar nenhum animal.<br>Ele fixa a modelagem do cabelo independente de ser liso ou crespo</strong>"
}
}

var produto4 = document.getElementById('produto4');
produto4.onclick = function() {
   if((this.id === 'produto4')){
    document.getElementById("descricao").innerHTML = "<strong>SALÃO EM CASA<br><br>CABELOS SUPER HIDRATADOS, BRILHANTES E RECUPERADOS<br><br>A linha EICO Salão Em Casa é perfeita para cuidados diários com um efeito profissional em casa. Enriquecida com ativos de alta performance como Óleo de Rícino, Ácido Hialurônico, Aloe Vera, Manteiga de Karité, Óleo de Macadâmia, Silicones Especiais, Queratina Hidrolisada e PRODEW 500, proporciona hidratação intensiva, revitalização, reconstrução, brilho extremo, recuperação instantânea e resgate imediato da saúde dos fios.</strong>"
}
}

var produto5 = document.getElementById('produto5');
produto5.onclick = function() {
   if((this.id === 'produto5')){
    document.getElementById("descricao").innerHTML = "<strong>Creme Rosa Mosqueta <br><br>Para auxiliar no combate da celulite, a D’agua Natural desenvolveu o Creme de Massagem Redumodel com Oligovita. Seus ativos formam uma perfeita combinação de minerais que renovam a pele, promovem hidratação e auxiliam o processo de eliminação de gordura. Além disso, favorecem a produção do colágeno e da elastina, revitalizando e auxiliando no rejuvenescimento da pele, promovendo uma agradável sensação de bem-estar. Possui suave perfume de marula.<br><br>Mesma Composição do Sérum e Mousse, agora em Pote Profissional!</strong>"
}
}

var produto6 = document.getElementById('produto6');
produto6.onclick = function() {
   if((this.id === 'produto6')){
    document.getElementById("descricao").innerHTML = "<strong>DOMA CABELO<BR><BR>Tem o pH entre os valores 7 e 8, o que permite a preparação do cabelo para os próximos passos, por promover a abertura das cutículas, sem inchar demasiadamente a fibra capilar, além de trazer uma limpeza profunda retirando a sujeira do cabelo e o acúmulo de produtos no couro cabeludo.<br>Modo de uso: Aplique o Shampoo pH 7-8 com os cabelos molhados,  massageie suavemente por alguns instantes obtendo uma espuma cremosa. Enxague bem e repita o processo.<BR><BR>Precauções:  Uso  profissional. Manter fora do alcance das crianças. Em contato com os olhos, enxágue com muita água. Havendo irritação suspenda o uso e procure um médico.</strong>"
}
}
   

    


//abre o primeiro modal
function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;
        
                

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
    
}
//------------------------------------------------------------------------------------------------//
//fecha o modal
function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}



