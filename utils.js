function createTextNode(text){
  return document.createTextNode(text);
}

function createUlElement(){
  return document.createElement('ul');
}

function createListElement(text){
  let li = document.createElement('li');
  let code = document.createElement('code');
  code.appendChild(createTextNode(text));
  li.appendChild(code);
  return li;
}

function appendChildLi(ul, li) {
  ul.appendChild(li);
  return ul;
}

export default {
  createTextNode,
  createUlElement,
  createListElement,
  appendChildLi
}