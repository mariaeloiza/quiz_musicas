'use client'

import Image from 'next/image';
import { use, useState } from "react";
import "./quizMusicas.css"

function QuizMusicas() {

    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0)
    const [ p3, alteraP3 ] = useState(0)
    const [ p4, alteraP4 ] = useState(0)
    const [ p5, alteraP5 ] = useState(0)
    const [ p6, alteraP6 ] = useState(0)
    const [ total, alteraTotal ] = useState(0)
    
    const [ mostraInicio, alteraMostraInicio ] = useState(true)
    const [ mostraErro, alteraMostraErro ] = useState(false)
    const [ mostraAcerto, alteraMostraAcerto ] = useState(false)

    const [ mostraP1, alteraMostraP1 ] = useState(false)
    const [ mostraP2, alteraMostraP2 ] = useState(false)
    const [ mostraP3, alteraMostraP3 ] = useState(false)
    const [ mostraP4, alteraMostraP4 ] = useState(false)
    const [ mostraP5, alteraMostraP5 ] = useState(false)
    const [ mostraP6, alteraMostraP6 ] = useState(false)

    const [ mostraFinal, alteraMostraFinal ] = useState(false)
    
    function calculaTotal(){
        let totalAtualizado = 0 
    
        alteraTotal(p1+p2+p3+p4+p5+p6)
    
        totalAtualizado = p1+p2+p3+p4+p5+p6
        alteraTotal(totalAtualizado)
    
        let valorBanco = parseInt(localStorage.getItem("total"))
        localStorage.setItem( "total", totalAtualizado )
    
    }

    return (
        <div>
            
            {
                mostraInicio == true &&
                <div className="inicio">
                    <h1>Adivinhe as músicas dos filmes da Disney</h1>
                    <button onClick={() => {alteraMostraP1(true); alteraMostraInicio(false)} } >Iniciar</button>
                </div>

            }

            {
                mostraP1 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>

                        <audio controls>
                            <source src="/audios/pinocchio30s (mp3cut.net).mp3" type="audio/mp3"/>
                        </audio>

                        <br/>

                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)} } /> Peter Pan </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)} } /> Enrolados </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(1); alteraMostraP2(true); alteraMostraP1(false)} } /> Pinocchio </label>
                        <br/>
                        <label><input name="p1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)} } /> Dumbo </label>
                        <br/>
                    </div>
            }

            {
                mostraP2 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>

                        <audio controls>
                            <source src="/audios/cinderella30s (mp3cut.net).mp3" type="audio/mp3"/>
                        </audio>

                        <br/>

                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP2(1); alteraMostraP3(true); alteraMostraP2(false)} }  /> Cinderela </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP3(true); alteraMostraP2(false)} } /> Branca de neve </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP3(true); alteraMostraP2(false)} } /> A Bela e a Fera </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP2(0); alteraMostraP3(true); alteraMostraP2(false)} } /> Bambi </label>
                        <br/> 
                    </div>
            }

            {   
                mostraP3 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>

                        <audio controls>
                            <source src="/audios/enrolados30s (mp3cut.net).mp3" type="audio/mp3"/>
                        </audio>

                        <br/>

                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP3(0); alteraMostraP4(true); alteraMostraP3(false)} }  /> A Dama e o Vagabundo </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP3(0); alteraMostraP4(true); alteraMostraP3(false)} } /> Lucca </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP3(0); alteraMostraP4(true); alteraMostraP3(false)} } /> Aladdin </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP3(1); alteraMostraP4(true); alteraMostraP3(false)} } /> Enrolados </label>
                        <br/> 
                    </div>
            }

            {   
                mostraP4 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>

                        <audio controls>
                            <source src="/audios/frozen30s (mp3cut.net).mp3" type="audio/mp3"/>
                        </audio>

                        <br/>

                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP4(0); alteraMostraP5(true); alteraMostraP4(false)} }  /> Up altas aventuras </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP4(1); alteraMostraP5(true); alteraMostraP4(false)} } /> Frozen </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP4(0); alteraMostraP5(true); alteraMostraP4(false)} } /> Hércules </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP4(0); alteraMostraP5(true); alteraMostraP4(false)} } /> A Princesa e o Sapo </label>
                        <br/> 
                    </div>
            }

            {   
                mostraP5 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>

                        <audio controls>
                            <source src="/audios/Aladdin(mp3cut.net).mp3" type="audio/mp3"/>
                        </audio>

                        <br/>

                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP5(0); alteraMostraP6(true); alteraMostraP5(false)} }  /> Irmão Urso </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP5(0); alteraMostraP6(true); alteraMostraP5(false)} } /> Mulan </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP5(1); alteraMostraP6(true); alteraMostraP5(false)} } /> Aladdin </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> {alteraP5(0); alteraMostraP6(true); alteraMostraP5(false)} } /> Cinderela </label>
                        <br/> 
                    </div>
            }

            {   
                mostraP6 == true &&
                    <div className="pergunta">
                        <h2>De que filme é essa música?</h2>

                        <audio controls>
                            <source src="/audios/tarzan30s (mp3cut.net).mp3" type="audio/mp3"/>
                        </audio>

                        <br/>

                        <label><input name="p2" type="radio" onChange={ ()=> alteraP6(0) }  /> A Bela adormecida </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP6(0) } /> Pocahontas </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP6(0) } /> A Pequena Sereia </label>
                        <br/>
                        <label><input name="p2" type="radio" onChange={ ()=> alteraP6(1) } /> Tarzan </label>
                        <br/> 

                        <button onClick={ ()=> {calculaTotal(); alteraMostraFinal(true); alteraMostraP6(false)} }> Finalizar </button>
                    </div>
            }

       {
                 mostraFinal == true &&
                 <div className="final">
                     <p> Total de pontos: {total} <br/> de 6 perguntas</p>
                 </div>
             }
              {
                     mostraFinal == true &&
                 <div className="agradecimento">
                     <p> Obrigado por jogar!</p>
                     <Image
                      src="/gif_reileao.gif" 
                   alt="Agradecimento em GIF"
           width={250} 
           height={150} 
         />
                     </div>    
                 }

        </div>


  );
}

export default QuizMusicas;
