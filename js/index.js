let getIptNome          = () => document.getElementById('ipt-nome');
let getIptEmail         = () => document.getElementById('ipt-email');
let getIptTelefone      = () => document.getElementById('ipt-telefone');
let getIptComentario    = () => document.getElementById('ipt-comentario');
let getFormContato      = () => document.getElementById('form-contato');
let getBtnForm          = () => document.getElementById('btn-submit');


let mask = (o, f) => {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
        o.value = v;
        }
    }, 1);
}

let mphone = (v) => {
    return v.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{5})\d+?$/, '$1');
}

let validaForm = () => {
    let error = "";
    if (getIptNome().value === "") {
        error += "\n O campo Nome não pode ser vazio";
    }
    if (getIptEmail().value === "") {
        error += "\n O campo Email não pode ser vazio";
    }
    if (getIptTelefone().value === "") {
        error += "\n O campo Telefone não pode ser vazio";
    }
    if (getIptComentario().value === "") {
        error += "\n O campo Comentario não pode ser vazio";
    }
    if (error !== "") {
        alert(error);
        return;
    }
    alert("Informações enviadas com sucesso!");
}