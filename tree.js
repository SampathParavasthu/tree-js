import {
  createUlElement,
  createListElement,
  appendChildLi,
} from "./utils";


function _buildTree(data){
  data.forEach(element => {
    element.name
    if(data.children){
      _buildTree(data.children);
    }
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

    let rootId = this.#options.id,
        rootElement = document.querySelector(rootId),
        fragment = document.createDocumentFragment();

    /* This where the document builder logic goes */

      _buildTree(data);    

    // let ul = createUlElement();
    // let li = createListElement("this is text");
    // let parentUl = appendChildLi(ul, li);

    /* This where the document builder logic goes */

    fragment.appendChild();
    rootElement.appendChild(fragment);
  }

  /* This should delete a tree */
  deleteATree() {}
}

export default Tree;
