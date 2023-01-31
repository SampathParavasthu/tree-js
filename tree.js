import {
  createUlElement,
  createListElement,
  appendChildLi,
} from "./utils.js";


function _buildTree(data, parentUl){
  data.forEach(element => {
    let li = createListElement(element.name)
    let ulNode = appendChildLi(parentUl, li);
    if(element.children){
      let ul = createUlElement();
      _buildTree(element.children, ul);
    }
    return ulNode;
  });
}

class Tree {
  #options;
  constructor(options) {
    if (!options.id) {
      throw new Error('Need id for the tree root element');
    }
    this.#options = options;
  }

  /* This should build the tree */
  buildTree(data) {

    if(!data || data.length == 0){
      throw new Error('Please provide data to construct tree');
    }

    let rootId = this.#options.id;
    let rootElement = document.querySelector(rootId);
    let fragment = document.createDocumentFragment();

    let ul = createUlElement();
    ul.classList.add('tree')

    /* This where the document builder logic goes */

    let childNodes = _buildTree(data, ul);

    // let li = createListElement("this is text");
    // let parentUl = appendChildLi(ul, li);

    /* This where the document builder logic goes */

    fragment.appendChild(childNodes);
    rootElement.appendChild(fragment);
  }

  /* This should delete a tree */
  deleteATree() {}
}

export default Tree;
