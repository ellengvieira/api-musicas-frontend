import { useContext } from "react";
import Alerta from "../../Alerta";
import MusicaContext from "./MusicaContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from "../../comuns/CampoSelect";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaArtistas } = useContext(MusicaContext);

    (function () {
        'use strict'

        var forms = document.querySelectorAll('.needs-validation')

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()

    return (

        <Dialogo id="modalEdicao" idmodal="modalFormulario"
            labelmodal="Edição de Músicas" idformulario="formulario"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtID"
                label="Código" tipo="number" readonly={true}
                requerido={false} name="codigo" value={objeto.codigo}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={5} />
            <CampoEntrada id="txDuracao"
                label="Duração" tipo="number" readonly={false}
                requerido={true} name="duracao" value={objeto.duracao}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={10} />
            <CampoEntrada id="txtNome"
                label="Nome" tipo="text" readonly={false}
                requerido={true} name="nome"
                value={objeto.nome}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={40} />
            <CampoSelect value={objeto.codArtista}
                id="txtArtista" name="codArtista" label="Artista"
                onchange={handleChange}
                msgvalido="OK" msginvalido="Informe o artista"
                requerido={true}>
                {listaArtistas.map((a) => (
                    <option key={a.codigo} value={a.codigo}>
                        {a.nome}
                    </option>
                ))}
            </CampoSelect>
        </Dialogo>

    )
}

export default Form;