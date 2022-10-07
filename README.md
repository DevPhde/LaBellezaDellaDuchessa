# LaBellezaDellaDuchessa

<p>Neste projeto utilizamos as tecnologias HTML5, CSS e Javascript para desenvolver um site com 7 páginas web, para promover um salão de beleza. Sendo assim, o projeto foi dividido em 5 partes, cada um do grupo ficando responsável por uma parte e no fim sendo unido todo o código. Utilizamos o seguinte fluxograma para demonstrar nossa arquitetura do github. Começando pela parte de baixo, temos as 5 branchs responsáveis por armazenar o código de cada membro do time, tais branchs são ligadas diretamente com a branch "mãe" nomeada EPIC, Após o término individual de cada membro, o código é unido por meio de merge das branchs "filhas"(EPIC-HOME,EPIC-PS,EPIC/CONTATO,EPIC-QSOMOS e EPIC-COTACAO) com a branch "mãe"(EPIC) utilizando PRs.</p>

<div>
<img height="180em" src="./images/FLUXOGRAMA.png">
</div>

### Explicação:
<p>Este método foi adotado para que não houvesse muitos conflitos de códigos ou arquivos iguais, a utilizacao de apenas uma branch iria tornar o merge do código desnecessariamente trabalhoso e suscetível a bugs.

Após o merge de todas as branchs "filhas" na branch "mãe" é realizado um teste com todo o site unido. Devido a ocasionais problemas no projeto, foi criado uma branch nomeada de "EPIC-FIX", onde  o código unido foi enviado para realizarmos a correção de bugs e problemas de cada página.

A criação da branch "EPIC-FIX" foi necessária para que fosse controlado a versão dos nossos códigos, evitando assim, a perda de algum código ou funcionalidades do projeto.

Após a conferência dos códigos é  feito o merge da branch "EPIC-FIX" para branch "EPIC", e por fim, solicitando PR para merge da branch "EPIC" para branch "DEV", onde é armazenado o código pronto.

A  branch Production é onde será colocado para distriuição ao usuário (colocado o site online pela aba pages do github).<p>