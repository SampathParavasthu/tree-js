function _createTextNode(text){
  return document.createTextNode(text);
}

function _createUlElement(){
  return document.createElement('ul');
}

function _createListElement(text){
  let li = document.createElement('li');
  let code = document.createElement('code');
  code.appendChild(_createTextNode(text))
  li.appendChild(code);
  return li;
}

function _appendLi(ul, li) {
  ul.appendChild(li);
  return ul;
}


class Tree {
  #options;
  constructor(options){
   if(!options.id){
     throw new Error('Need id for the tree root element');
   }
  this.#options = options;
  } 
 
  /* This should build the tree */
  buildTree(data){
    let rootId = this.#options.id;
    let rootElement = document.querySelector(rootId);

    let fragment = document.createDocumentFragment();

    /* This where the document builder logic goes */

    let ul = _createUlElement();
    let li = _createListElement('this is text');
    let b = _appendLi(ul, li);


    /* This where the document builder logic goes */

    fragment.appendChild(b);
    rootElement.appendChild(fragment);
  }
  
  /* This should delete a tree */
  deleteATree(){
 
  }
 
 }
 
 export default Tree;