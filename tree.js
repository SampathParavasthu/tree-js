

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
  }
  
  /* This should delete a tree */
  deleteATree(){
 
  }
 
 }
 
 export default Tree;