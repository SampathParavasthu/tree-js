import Tree from "./tree.js";

let options = {
  id: "#root-tree",
  rootTitle: 'component'
};

let rootTree = new Tree(options);


rootTree.buildTree();

console.log(rootTree)