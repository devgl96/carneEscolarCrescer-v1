// Carregar função ao iniciar a página
// window.onload = main;
window.onload = dataVencimentoInsert;

function setTitleApp() {
  let headingCarneLeft = document.getElementById("title_carne_left");

  headingCarneLeft.innerHTML = `Carnê ${new Date().getFullYear()}`;
}

function setTitleCapaCarne() {
  let headingCapaCarne = document.getElementsByClassName("capaCarne");

  for (let i = 0; i < headingCapaCarne.length; i++) {
    headingCapaCarne[
      i
    ].children[1].innerHTML = `Carnê Escolar ${new Date().getFullYear()}`;
  }

  // console.log("HeadingCapaCarne: ", headingCapaCarne)
}

function validaForm() {
  var campos = document.forms.meuForm.elements;

  console.log("Campos: ", campos);
  console.log("Nome do Aluno: ", campos.nomeAluno.innerText);
  if (campos.nomeAluno.innerText === "") {
    console.log("Preencha o campo do Nome Completo");
    campos.nomeAluno.focus();
    return false;
  }

  if (campos.turmaAluno.innerHTML === "") {
    console.log("Preencha o campo da Turma do Aluno");
    campos.turmaAluno.focus();
    return false;
  }

  if (campos.valorMensalidade.innerHTML === "") {
    console.log("Preencha o campo da Mensalidade do Aluno");
    campos.valorMensalidade.focus();
    return false;
  }

  return true;
}

function imprimirCarne(tableNameId) {
  console.log("imprimirCarne!!!");
  var paginaPrincipal = document.body.innerHTML;
  var imprimirCarne = document.getElementById(tableNameId).innerHTML;
  // console.log(imprimirCarne);

  // var verifyFieldsForm = validaForm();
  var verifyFieldsForm = true;

  if (verifyFieldsForm) {
    console.log("Tudo OKAY!");
    if (tableNameId === "carneFevNovPrint" || tableNameId === "mesDezPrint") {
      //alert("Estou aqui => " + tableNameId);
      document.body.innerHTML =
        '<html lang="pt-BR"><head><meta charset="UTF-8"><link rel="stylesheet" href="stylePrint.css" type="text/css"><title>Imprimir Carnê</title></head><body><table id=' +
        tableNameId +
        ">" +
        imprimirCarne +
        "</table></body>";
    } else {
      //alert("Estou aqui => " + tableNameId);
      document.body.innerHTML =
        '<html lang="pt-BR"><head><meta charset="UTF-8"><link rel="stylesheet" href="stylePrinter.css" type="text/css"><title>Imprimir Carnê</title></head><body><table id=' +
        tableNameId +
        ">" +
        imprimirCarne +
        "</table></body>";
    }

    window.focus();
    window.print();
    document.body.innerHTML = paginaPrincipal;
  } else {
    console.log("Verifique os campos!");
  }
}

// Inserir Nome do aluno no carnê
function nomeInsert() {
  var nomeAluno = document.getElementsByClassName("alunoCarne");

  for (var i = 0; i < nomeAluno.length; i++) {
    nomeAluno[i].innerHTML = `<b>Aluno: </b> ${
      document.getElementById("nomeAluno").value
    }`;
  }
}

var dataVencimentoInsert = function () {
  main();
  // console.log("Inserindo datas de vencimento \n");
  var datasPag = new Array();
  //var meses = ["(Fevereiro)", "(Março)", "(Abril)", "(Maio)", "(Junho)", "(Julho)", "(Agosto)", "(Setembro)", "(Outubro)", "(Novembro)", "(Dezembro)"];
  var ano = new Date().getFullYear();
  var mes = "01";
  var dia = "08";
  var dataVencimento = document.getElementsByClassName("vencimentoCarne");

  for (var i = 1, j = 0; i <= 12; i++, j++) {
    if (i < 10) dataPagamento = dia + "/0" + parseInt(mes) + "/" + ano;
    //dataPagamento = dia + "/" + meses[j].toString() + "/" + ano + "<br>";
    else dataPagamento = dia + "/" + parseInt(mes) + "/" + ano;
    //dataPagamento = dia + "/" + meses[j].toString()  + "/" + ano + "<br>";

    datasPag[j] = dataPagamento;
    mes = parseInt(i) + 1;
  }

  // Inserindo dados no Carnê
  for (
    var i = 0, j = 0;
    i < dataVencimento.length * 2 && i <= 22;
    i += 2, j++
  ) {
    if (datasPag[j]) {
      dataVencimento[i].innerHTML = `<b>Vencimento: </b> ${datasPag[j]}`;
      dataVencimento[i + 1].innerHTML = `<b>Vencimento: </b> ${datasPag[j]}`;
    }
  }
};

// Inserir turma no carnê
function turmaInsert() {
  var turmaSelect = document.getElementById("turmaAluno").value;
  var turmaAluno = document.getElementsByClassName("turmaCarne");

  // console.log(turmaSelect)

  for (var i = 0; i < turmaAluno.length; i++) {
    turmaAluno[i].innerHTML = `<b>Turma:</b> ${turmaSelect}`;
  }
}

// Inserir valor no carnê
function valorInsert() {
  var valorMensalidade = document.getElementsByClassName("valorCarne");

  for (var i = 0; i < valorMensalidade.length; i++) {
    valorMensalidade[i].innerHTML = `<b>Valor: R$</b> ${
      document.getElementById("valorMensalidade").value
    }`;
  }
}

// Selecionar o que deseja fazer através dos radio buttons
function showValue() {
  var radBut = document.getElementsByName("selectOption");
  var lenRadBut = radBut.length;

  for (var i = 0; i < lenRadBut; i++) {
    if (radBut[i].checked) {
      var select = i;
    }
  }

  return radBut[select].value;
}

function showDiv(nameDiv) {
  var oneDiv = document.getElementById(nameDiv);

  var divs = ["coverCarnePrint", "coverCarneWithNamePrint", "carneFevNovPrint"];

  var form = document.getElementById("formInput");
  var formCover = document.getElementById("formInputCover");

  let buttons = ["button1", "button2"];

  for (var i = 0; i < divs.length; i++) {
    if (nameDiv !== divs[i]) {
      console.log("divs[i]", divs[i]);
      document.getElementById(divs[i]).style.display = "none";
    }
  }

  oneDiv.style.display = "";

  console.log("showDiv ===> oneDiv: ", oneDiv);

  // Mostrar o form
  if (nameDiv !== "coverCarnePrint") {
    console.log("ShowValue: " + showValue());
    form.style.display = "";

    if (showValue() === "coverCarneWithNamePrint") {
      form.style.display = "none";
      formCover.style.display = "";
      document.getElementsByClassName("button button1")[0].style.display =
        "block";
      document.getElementsByClassName("button button2")[0].style.display =
        "block";
      document.getElementById("nomeAluno").onkeyup = null;
    } else {
      formCover.style.display = "none";
      form.style.display = "";
      document.getElementsByClassName("button1")[0].style.display = "block";
      document.getElementsByClassName("button button2")[0].style.display =
        "none";
    }
  } else {
    document.getElementsByClassName("button button1")[0].style.display =
      "block";
    document.getElementsByClassName("button button2")[0].style.display = "none";
    form.style.display = "none";
    formCover.style.display = "none";
  }
}

var addRowDez = function () {
  var nameAluno = document.getElementById("nomeAluno").value;
  var turmaAluno = document.getElementById("turmaAluno").value;
  var valorMensalidade = document.getElementById("valorMensalidade").value;

  var table = document.getElementById("mesDezPrint");
  var newRow = table.insertRow(table.rows.length);

  // Data de Dezembro
  var diaDez = "08";
  var mesDez = "12";
  var anoDez = new Date().getFullYear();

  for (var i = 0; i < 2; i++) {
    var cel = newRow.insertCell(i);

    cel.innerHTML =
      '<h3>Escola Crescer</h3><p class="alunoCarne"><b>Aluno: </b> ' +
      nameAluno +
      ' </p><p class="vencimentoCarne"><b>Vencimento: </b> ' +
      diaDez +
      "/" +
      mesDez +
      "/" +
      anoDez +
      ' </p><p class="turmaCarne"><b>Turma: </b> ' +
      turmaAluno +
      ' </p><p class="valorCarne"><b>Valor: R$ </b> ' +
      valorMensalidade +
      ' </p><p class="totalCarne"><b>Total: R$</b> </p>';
  }

  if (nameAluno.value !== "") {
    // console.log("Clear field - Nome");
    nameAluno.value = "";
  }

  if (turmaAluno !== "") {
    // console.log("Clear field - Turma");
    turmaAluno.value = "";
  }

  if (valorMensalidade !== "") {
    // console.log("Clear field - Valor");
    valorMensalidade.value = "";
  }
};

var addNewRowCover = function () {
  var nameAluno = document.getElementById("nomeAlunoCover").value;
  var table = document.getElementById("coverCarneWithNamePrint");

  table.innerHTML +=
    "<tr>" +
    "<td colspan='2' class='capaCarne'>" +
    "<img src='img/logo.png' alt='Logotipo Escola Crescer' />" +
    "<h2>Carnê Escolar 2021</h2>" +
    "<p class='nameAlunoCover'>" +
    nameAluno +
    "</p>" +
    "</td>" +
    "</tr>";

  if (nameAluno.value !== "") {
    // console.log("Clear field - Nome");
    nameAluno.value = "";
  }
};

function hideElement(nameId) {
  var hide = document.getElementById(nameId);
  console.log("hideElement ===> hide: ", hide);
  hide.style.display = "none";
}

var hideAll = function () {
  setTitleApp();
  setTitleCapaCarne();
  hideElement("carneFevNovPrint");
  hideElement("coverCarnePrint");
  hideElement("formInput");
  hideElement("formInputCover");
};

var main = async () => {
  await setTitleApp();
  await setTitleCapaCarne();
  hideElement("carneFevNovPrint");
  hideElement("coverCarnePrint");
  hideElement("formInput");
  hideElement("formInputCover");
};
