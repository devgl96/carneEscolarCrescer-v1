// Carregar função ao iniciar a página
window.onload = dataVencimentoInsert;

function validaForm() {
  var campos =
    document.forms["meuForm"]["nomeCompleto"]["turma"]["valor"].value;
  if (document.meuForm.nomeCompleto == "") {
    alert("Preencha o campo do Nome Completo");
    document.meuForm.nomeCompleto.focus();
    return false;
  }

  if (document.meuForm.turma == "") {
    alert("Preencha o campo da Turma do Aluno");
    document.meuForm.turma.focus();
    return false;
  }

  if (document.meuForm.valorMensalidade == "") {
    alert("Preencha o campo da Mensalidade do Aluno");
    document.meuForm.valorMensalidade.focus();
    return false;
  }

  return true;
}

function imprimirCarne(tableNameId) {
  var paginaPrincipal = document.body.innerHTML;
  var imprimirCarne = document.getElementById(tableNameId).innerHTML;
  console.log(imprimirCarne);

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
}

// Inserir Nome do aluno no carnê
function nomeInsert() {
  var nomeAluno = document.getElementsByClassName("alunoCarne");

  for (var i = 0; i < nomeAluno.length; i++) {
    nomeAluno[i].innerHTML =
      "<b>Aluno: </b>" + document.getElementById("nomeAluno").value;
  }
}

var dataVencimentoInsert = function() {
  hideAll();
  console.log("Inserindo datas de vencimento \n");
  var datasPag = new Array();
  //var meses = ["(Fevereiro)", "(Março)", "(Abril)", "(Maio)", "(Junho)", "(Julho)", "(Agosto)", "(Setembro)", "(Outubro)", "(Novembro)", "(Dezembro)"];
  var ano = "2021";
  var mes = "02";
  var dia = "08";
  var dataVencimento = document.getElementsByClassName("vencimentoCarne");

  for (var i = 2, j = 0; i <= 12; i++, j++) {
    if (i < 10) dataPagamento = dia + "/0" + parseInt(mes) + "/" + ano;
    //dataPagamento = dia + "/" + meses[j].toString() + "/" + ano + "<br>";
    else dataPagamento = dia + "/" + parseInt(mes) + "/" + ano;
    //dataPagamento = dia + "/" + meses[j].toString()  + "/" + ano + "<br>";

    datasPag[j] = dataPagamento;
    mes = parseInt(i) + 1;
  }

  // Inserindo dados no Carnê
  for (var i = 0, j = 0; i < dataVencimento.length * 2; i += 2, j++) {
    dataVencimento[i].innerHTML = "<b>Vencimento: </b>" + datasPag[j];
    dataVencimento[i + 1].innerHTML = "<b>Vencimento: </b>" + datasPag[j];
  }
};

// Inserir turma no carnê
function turmaInsert() {
  var turmaAluno = document.getElementsByClassName("turmaCarne");

  for (var i = 0; i < turmaAluno.length; i++) {
    turmaAluno[i].innerHTML =
      "<b>Turma:</b> " + document.getElementById("turmaAluno").value;
  }
}

// Inserir valor no carnê
function valorInsert() {
  var valorMensalidade = document.getElementsByClassName("valorCarne");

  for (var i = 0; i < valorMensalidade.length; i++) {
    valorMensalidade[i].innerHTML =
      "<b>Valor: R$</b> " + document.getElementById("valorMensalidade").value;
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

  //alert('Selecionado: ' + radBut[select].value);

  return radBut[select].value;
}

function showDiv(nameDiv) {
  var oneDiv = document.getElementById(nameDiv);
  var divs = ["coverCarnePrint", "carneFevNovPrint", "mesDezPrint"];
  var form = document.getElementById("formInput");

  for (var i = 0; i < divs.length; i++) {
    if (oneDiv != document.getElementById(divs[i])) {
      document.getElementById(divs[i]).style.display = "none";
    }
  }

  oneDiv.style.display = "";

  // Mostrar o form
  if (nameDiv !== "coverCarnePrint") {
    console.log("Display do Form: " + form.style.display);
    form.style.display = "";

    if (showValue() === "mesDezPrint") {
      document.getElementById("nomeAluno").onkeyup = null;
      document.getElementById("turmaAluno").onkeyup = null;
      document.getElementById("valorMensalidade").onkeyup = null;
    }
  } else {
    form.style.display = "none";
  }
}

var addRowDez = function() {
  var nameAluno = document.getElementById("nomeAluno").value;
  var turmaAluno = document.getElementById("turmaAluno").value;
  var valorMensalidade = document.getElementById("valorMensalidade").value;

  var table = document.getElementById("mesDezPrint");
  var newRow = table.insertRow(table.rows.length);

  // Data de Dezembro
  var diaDez = "08";
  var mesDez = "12";
  var anoDez = 2021;

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
    console.log("Clear field - Nome");
    nameAluno.value = "";
  }

  if (turmaAluno !== "") {
    console.log("Clear field - Turma");
    turmaAluno.value = "";
  }

  if (valorMensalidade !== "") {
    console.log("Clear field - Valor");
    valorMensalidade.value = "";
  }
};

function hideTable(nameId) {
  var hide = document.getElementById(nameId);
  hide.style.display = "none";
}

var hideAll = function() {
  hideTable("carneFevNovPrint");
  hideTable("coverCarnePrint");
  hideTable("mesDezPrint");
  hideTable("formInput");
};
