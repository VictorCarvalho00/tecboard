import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario/Index";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEvento({ temas, aoSubmeter }) {

    function aoFormularioSubmetido(formData) {
        const evento = {
            capa: formData.get('capa'),
            tema: temas.find(function (item) {
                return item.id == formData.get('tema')
            }),
            data: new Date(formData.get('dataEvento')),
            titulo: formData.get('nomeEvento')
        }
        aoSubmeter(evento)
    }

    return (
        <form className="form-evento" action={aoFormularioSubmetido}>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>
            <div className='campos'>
                <CampoDeFormulario>
                    <Label htmlForm="nomeEvento">
                        Qual nome do evento?
                    </Label>
                    <CampoDeEntrada
                        type="text"
                        id="nomeEvento"
                        placeholder="Summer dev hits"
                        name="nomeEvento"
                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlForm="capa">
                        Qual o endereço da imagem da capa?
                    </Label>
                    <CampoDeEntrada
                        type="text"
                        id="capa"
                        placeholder="http://..."
                        name="capa"
                    />
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlForm="dataEvento">
                        Data do evento
                    </Label>
                    <CampoDeEntrada
                        type="date"
                        id="dataEvento"
                        name="nomeEvento"
                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlForm="temaEvento">
                        Tema do evento
                    </Label>
                    <ListaSuspensa id="tema" name="tema" itens={temas} />
                </CampoDeFormulario>
            </div>
            <div className='acoes'>
                <Botao>
                    Criar evento
                </Botao>
            </div>
        </form>
    )
}