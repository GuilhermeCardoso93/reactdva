import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from "../assets/logo1.png";
import mecha from "../assets/dvamecha.png";
import corea from "../assets/corea.png";
import brasil from "../assets/brasil.png";
import usa from "../assets/usa.png";

import "./History.scss";


const History = () => (
  <div className='mt-5 pt-5 pb-5'>
  <Container expand="lg" className="hist-div lg-p-2">
    <section className="hist-container pl-3">
    <Row>
      <Col>
        <h3 className=" title-dv">   HISTORY - D.VA  
        <img
                src={logo1}
                height="70"
                width="80"
                className="d-inline-block pb-2 "
                alt="d.va logo"
              /></h3>
        </Col>
    </Row>
    <Row>
        <br/> 
        <Col className="pt-5 pr-5">   
        <p className="dva-2 mt-5">
          <ul className='lg-pl-5'>
          <li><strong>Nome real: </strong>Hana Song</li>
          <li> <strong>Idade:</strong>19</li> 
          <li><strong>Altura:</strong> Desconhecida</li>
          <li><strong>Ocupação:</strong>Piloto de Mecha, Gamer profissional</li>
          <li><strong>Base de Operações:</strong>Busan, Coreia do Sul</li>
          <li><strong>Afiliações:</strong> MEKA Exército Coreano de Exo-Força Móvel</li>
          <li><strong>Nacionalidade:</strong> Sul-Coreana
          <img src={corea} height ="30"width="30" className="band" alt="bandeira"/> </li>
          <li><strong>Dublador:</strong></li>
          EUA - Charlet Chung
          <img src={usa} height="30"  width="30" className=" band"alt="bandeira"/><br/>
          Brasil - Jullie Vasconcelos
          <img src={brasil} height="30" width="30" className=" band" alt="bandeira"/>
          </ul>
        </p>
      </Col>
      <Row>
      <Col>
        <img
          src={mecha}
          height="300"
          width="350"
          className="home-img d-inline-block  w-80 pb-3 ml-1 pr-2"
          alt="d.va logo"
        />
      </Col>
      </Row>
     
      <Row>
        <Col className="p-5">
          <span><strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O mecha da D.Va é ágil e poderoso, seus Canhões de Fusão duplo
            disparam automaticamente a curto alcance e ela pode usar seus
            Propulsores para atropelar inimigos e obstáculos, ou impedir ataques
            com sua Matriz de Defesa destruidora de projéteis. D.Va é uma
            ex-gamer profissional que sabe como usar suas habilidades para
            pilotar um mecha de última geração na defesa de sua cidade natal.
            Vinte anos atrás, a Coréia do Sul foi atacada por um ômnico
            monstruoso que surgiu das profundezas do Mar da China Oriental. O
            construto enorme causou danos catastróficos às cidades costais antes
            de ser forçado a recuar para debaixo das ondas. Em resposta, o
            governo da Coréia do Sul desenvolveu uma unidade drone blindada e
            mecanizada, chamada de MEKA, para proteger ambientes urbanos em
            combates futuros com a ameaça ômnica. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Os medos do governo
            se mostraram bem fundados à medida que um padrão de ataques
            perturbador surgiu. A cada determinado número de anos, a
            monstruosidade se levantava do mar para atacar a Coréia do Sul e
            seus vizinhos. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O ômnico aprendia com cada ataque, sempre se
            reconfigurando em uma forma diferente e aparecendo com novas armas e
            funcionalidades. Cada incidente terminava em um impasse, com a
            monstruosidade derrotada, porém não destruída. Com o ômnico sempre
            se adaptando, ele eventualmente conseguiu interferir com o controle
            de drones da rede MEKA, forçando os militares a colocarem pilotos
            nos mechas. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Com dificuldades para achar candidatos apropriados, o
            governo recorreu aos jogadores de videogames profissionais, que
            tinham os reflexos e instintos necessários para operar os sistemas
            avançados das armas dos mechas. Os melhores foram selecionados,
            incluindo a campeã mundial, Hana Song, conhecida também como "D.Va".
            Famosa por suas habilidades de elite, D.Va era uma competidora
            feroz, que jogava para vencer a qualquer custo, e tinha a reputação
            bem fundamentada de não mostrar misericórdia por seus oponentes.
            Vendo sua nova missão como um jogo, D.Va avança ferozmente em
            batalha junto com o resto de sua unidade MEKA, pronta para agir em
            defesa de sua nação a qualquer momento. Recentemente, ela começou a
            fazer streams de suas operações de combate para seus adorados fãs e
            o crescimento de seus seguidores a transformou em um ícone global.
            </strong></span>
        </Col>
      </Row>
    </Row>
    </section>
  </Container>
  </div>
);

export default History;
