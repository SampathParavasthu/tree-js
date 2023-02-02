function convertToHTML(data) {
  const treeFragment = document.createDocumentFragment();

  for (let i = 0; i < data.length; i++) {
    const route = data[i];
    const routeLi = document.createElement("li");
    const routeCode = document.createElement("code");
    routeCode.textContent = route.name;
    routeLi.appendChild(routeCode);
    routeLi.appendChild(createTree(route.children));
    treeFragment.appendChild(routeLi);
  }

  return treeFragment;
}

function createTree(data) {
  if (!data || !data.length) return document.createDocumentFragment();

  const subTreeFragment = document.createDocumentFragment();
  const subTreeUl = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    const component = data[i];
    const componentLi = document.createElement("li");
    const componentCode = document.createElement("code");
    componentCode.textContent = component.name;
    componentLi.appendChild(componentCode);
    componentLi.appendChild(createTree(component.children));
    subTreeUl.appendChild(componentLi);
  }

  subTreeFragment.appendChild(subTreeUl);
  return subTreeFragment;
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
    

    const treeUl = document.createElement("ul");
    treeUl.classList.add("tree");
    treeUl.appendChild(convertToHTML(data));



    rootElement.appendChild(treeUl);
  }

  /* This should delete a tree */
  deleteATree() {}
}

export default Tree;
