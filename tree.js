import {
  createUlElement,
  createListElement,
  appendChildLi,
} from "./utils";

class Tree {
  #options;
  constructor(options) {
    if (!options.id) {
      throw new Error("Need id for the tree root element");
    }
    this.#options = options;
  }

  /* This should build the tree */
  buildTree(data) {
    let rootId = this.#options.id;
    let rootElement = document.querySelector(rootId);

    let fragment = document.createDocumentFragment();

    /* This where the document builder logic goes */

    let ul = createUlElement();
    let li = createListElement("this is text");
    let parentUl = appendChildLi(ul, li);

    /* This where the document builder logic goes */

    fragment.appendChild(parentUl);
    rootElement.appendChild(fragment);
  }

  /* This should delete a tree */
  deleteATree() {}
}

export default Tree;
