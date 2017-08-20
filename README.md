# Binary-Search-Tree
javascript implementation of a Binary Search Tree

# Create an instance of the Binary tree

  //binary tree init
  var binaryTree = new BINARYTREE();
  
# Override methods
  //override the visit of node function
  BINARYNODE.visit = function(){
    console.log("info: "+this.info);
  };
  //end of overriding when a node is visited
  
  //override the operate of node function, when there is a duplicate node
  BINARYNODE.operate = function(){
    console.log("been duplicated: "+this.info);
  };
  //end of overriding when there is a duplicate node
  
  //override the compare of node function
  BINARYNODE.compare = function(o){
    if(this.info > o.getInfo()){
      return 1;
    }else if(this.info < o.getInfo()){
      return -1;
    }
    return 0;
  };
  //end of overriding when a node is compared
  
# Insert an object and trigger operate method when there is a duplicate
  binaryTree.insertBSTDup(5);
  binaryTree.insertBSTDup(10);
  binaryTree.insertBSTDup(1);
  
# Insert an object but if there is duplicates it is added anyways
  binaryTree.insertBST(43);
  binaryTree.insertBST(1);
  
# Traverse the tree
console.log("inTraversal");
binaryTree.inTraverse(binaryTree.getRoot());
console.log("preTraverse");
binaryTree.preTraverse(binaryTree.getRoot());
console.log("PostTraversal");
binaryTree.postTraverse(binaryTree.getRoot());

# Search for an object in the tree
console.log("Searching for: "+i,"Found: "+binaryTree.searchBST(i));

# Delete an object from the tree
binaryTree.delete(i);
