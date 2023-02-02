import Tree from "./tree.js";
import data from './data.js';

let options = {
  id: "#root-tree",
  rootTitle: 'component'
};

let rootTree = new Tree(options);
rootTree.buildTree(data);
