import QuestaoModel from "@/model/questao"
import RespostaModel from "@/model/resposta"

const questoes: QuestaoModel[] = [
    new QuestaoModel(25, 'Qual bicho transmite a Doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(1, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(2, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(3, 'Quem compôs o Hino da Independência?', [
        RespostaModel.errada('Castro Alves'),
        RespostaModel.errada('Manuel Bandeira'),
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.certa('Dom Pedro I'),
    ]),
    new QuestaoModel(4, 'Qual é o antônimo de "malograr"?', [
        RespostaModel.errada('Perder'),
        RespostaModel.errada('Fracassar'),
        RespostaModel.errada('Desprezar'),
        RespostaModel.certa('Conseguir'),
    ]),
    new QuestaoModel(5, 'Em que país nasceu Carmen Miranda?', [
        RespostaModel.errada('Argentina'),
        RespostaModel.errada('Espanha'),
        RespostaModel.errada('Brasil'),
        RespostaModel.certa('Portugal'),
    ]),
    new QuestaoModel(6, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        RespostaModel.errada('Costa e Silva'),
        RespostaModel.errada('Emílio Médici'),
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.certa('João Figueiredo'),
    ]),
    new QuestaoModel(7, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        RespostaModel.errada('Ás'),
        RespostaModel.errada('Nove'),
        RespostaModel.errada('Rei'),
        RespostaModel.certa('Valete'),
    ]),
    new QuestaoModel(8, 'O adjetivo "venoso" está relacionado a:', [
        RespostaModel.errada('Vela'),
        RespostaModel.errada('Vento'),
        RespostaModel.errada('Vênia'),
        RespostaModel.certa('Veia'),
    ]),
    new QuestaoModel(9, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abrupção'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.certa('Ablução'),
    ]),
    new QuestaoModel(10, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        RespostaModel.errada('Monte Branco'),
        RespostaModel.errada('Monte Fuji'),
        RespostaModel.errada('Monte Carlo'),
        RespostaModel.certa('Monte Everest'),
    ]),
    new QuestaoModel(11, 'Em que parte do corpo se encontra a epiglote?', [
        RespostaModel.errada('Estômago'),
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Rim'),
        RespostaModel.certa('Pescoço'),
    ]),
    new QuestaoModel(12, 'A compensação por perda é chamada de...', [
        RespostaModel.errada('Déficit'),
        RespostaModel.errada('Indexação'),
        RespostaModel.errada('Indébito'),
        RespostaModel.certa('Indenização'),
    ]),
    new QuestaoModel(13, 'Quem é o "patrono" do Exército Brasileiro?', [
        RespostaModel.errada('Marechal Deodoro'),
        RespostaModel.errada('Barão de Mauá'),
        RespostaModel.errada('Marquês de Pombal'),
        RespostaModel.certa('Duque de Caxias'),
    ]),
    new QuestaoModel(14, 'Qual linguagem de programação não é tipada?', [
        RespostaModel.errada('Java'),
        RespostaModel.errada('Typescript'),
        RespostaModel.errada('C'),
        RespostaModel.certa('Javascript'),
    ]),
    new QuestaoModel(15, 'Qual número decimal é representado por 001010 na base 2', [
        RespostaModel.errada('9'),
        RespostaModel.errada('12'),
        RespostaModel.errada('4'),
        RespostaModel.certa('10'),
    ]),
    new QuestaoModel(16, 'Qual o valor de x ? x*2 = (5*4) + 4', [
        RespostaModel.errada('1'),
        RespostaModel.errada('10'),
        RespostaModel.errada('14'),
        RespostaModel.certa('12'),
    ]),
    new QuestaoModel(17, 'Qual é o valor de π?', [
        RespostaModel.errada('3'),
        RespostaModel.errada('3,1416...'),
        RespostaModel.errada('3,14'),
        RespostaModel.certa('3,1415...'),
    ]),
    new QuestaoModel(18, 'Qual é o valor da constante gravitacional (G)?', [
        RespostaModel.errada('6,6743 × 2^4'),
        RespostaModel.errada('1,63 × 10^2'),
        RespostaModel.errada('53,6 × 10^-1'),
        RespostaModel.certa('6,6743 × 10^-11'),
    ]),
    new QuestaoModel(19, 'Qual é a velocidade da luz no vácuo?', [
        RespostaModel.errada('0 m/s'),
        RespostaModel.errada('300 000 m/s'),
        RespostaModel.errada('300 000 000 km/s'),
        RespostaModel.certa('300 000 000 m/s'),
    ]),
    new QuestaoModel(20, 'Quais os planetas do sistema solar?', [
        RespostaModel.errada('Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Sol, Terra, Urano, Vênus'),
        RespostaModel.errada('Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Terra, Urano, Vênus'),
        RespostaModel.errada(' Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio'),
        RespostaModel.certa('Terra, Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio'),
    ]),
    new QuestaoModel(21, 'De quem é a famosa frase “Penso, logo existo”?', [
        RespostaModel.errada('Sócrates'),
        RespostaModel.errada('Galileu Galilei'),
        RespostaModel.errada('Albert Einstein'),
        RespostaModel.certa('Descartes'),
    ]),
    new QuestaoModel(22, 'Quais são os cromossomos que determinam o sexo masculino?', [
        RespostaModel.errada('Os V'),
        RespostaModel.errada('Os Z'),
        RespostaModel.errada('Os X'),
        RespostaModel.certa('Os Y'),
    ]),
    new QuestaoModel(23, 'Quanto tempo a luz do Sol demora para chegar à Terra?', [
        RespostaModel.errada('12 minutos'),
        RespostaModel.errada('1 dia'),
        RespostaModel.errada('12 horas'),
        RespostaModel.certa('8 minutos'),
    ]),
    new QuestaoModel(24, ' As pessoas de qual tipo sanguíneo são consideradas doadores universais?', [
        RespostaModel.errada('Tipo A'),
        RespostaModel.errada('Tipo B'),
        RespostaModel.errada('Tipo AB'),
        RespostaModel.certa('Tipo O'),
    ]),
    
]

export default questoes