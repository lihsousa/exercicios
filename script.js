

//  Captura dos elementos h1,a,ul, ol
let titulo = document.getElementById('titulo');
let link = document.querySelector('a');
let listaNaoOrdenada = document.querySelector("ul");
let listaOrdenada = document.getElementById("ol");


// InnerText para adicionar conteúdo textual aos elementos h e a.
titulo.innerText = " Conteudo innerTex e innerHTML";
link.innerText = " Site Proz";

//Adicionando  itens simples na lista não ordenada com innerHtml.

listaNaoOrdenada.innerHTML = `
<li>Home</li>
<li>Cursos</li>
<li>Aulas</li>
`
// Adicionando  itens com links com innerHTML.
link.innerHTML = `
<li><a href="https:// www.instagram.com.br">Instagram</a></li>
<li><a href="https:// www.facebook.com.br">Facebook</a></li>
<li><a href="https:// www.linkedin.com.br">linkedin</a></li>

`