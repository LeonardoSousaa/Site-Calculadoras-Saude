import './style.css';

function TerceiraSection() {
    return (
        <section class="terceira_section">
            <div class="terceira_section_div">
                <h3>Tipos de biotipos</h3>
                <p class="terceira_section_p">Passe o mouse em cima, para abrir a descrição de cada biotipo.</p>
            </div>

            <div class="terceira_section_blocos">
                <ul class="terceira_section_ul">
                    <li class="terceira_section_li">
                        <img className='ImagemEcto'/>
                    </li>

                    <li class="terceira_section_li">
                        <img className='ImagemEndo'/>
                    </li>

                    <li class="terceira_section_li">
                        <img  className='ImagemMeso'/>
                    </li>
                </ul>
            </div>
        </section>
    )
} 


export default TerceiraSection