import { useContext } from "react";
import Alerta from "../../Alerta";
import ArtistaContext from "./ArtistaContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(ArtistaContext);

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
            labelmodal="Edição de artistas" idformulario="formulario"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtID"
                label="Código" tipo="number" readonly={true}
                requerido={false} name="codigo" value={objeto.codigo}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={5} />
            <CampoEntrada id="txtNome"
                label="Nome" tipo="text" readonly={false}
                requerido={true} name="nome" value={objeto.nome}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={50} />
        </Dialogo>
    )
}

export default Form;