# Binary-Search-Tree
javascript implementation of a Binary Search Tree

# Create an instance of the Binary tree
  //binary tree init<br/>
  var binaryTree = new BINARYTREE();
  
# Override methods
  //override the visit of node function<br/>
  BINARYNODE.visit = function(){<br/>
    console.log("info: "+this.info);<br/>
  };<br/>
  //end of overriding when a node is visited<br/>
  
  //override the operate of node function, when there is a duplicate node<br/>
  BINARYNODE.operate = function(){<br/>
    console.log("been duplicated: "+this.info);<br/>
  };<br/>
  //end of overriding when there is a duplicate node<br/>
  <br/>
  //override the compare of node function<br/>
  BINARYNODE.compare = function(o){<br/>
    if(this.info > o.getInfo()){<br/>
      return 1;<br/>
    }else if(this.info < o.getInfo()){<br/>
      return -1;<br/>
    }<br/>
    return 0;<br/>
  };<br/>
  //end of overriding when a node is compared<br/>
  
# Insert an object and trigger operate method when there is a duplicate
  binaryTree.insertBSTDup(5);<br/>
  binaryTree.insertBSTDup(10);<br/>
  binaryTree.insertBSTDup(1);<br/>
  
# Insert an object but if there is a duplicate it will be added
  binaryTree.insertBST(43);<br/>
  binaryTree.insertBST(1);<br/>
  
# Traverse the tree
console.log("inTraversal");<br/>
binaryTree.inTraverse(binaryTree.getRoot());<br/>
console.log("preTraverse");<br/>
binaryTree.preTraverse(binaryTree.getRoot());<br/>
console.log("PostTraversal");<br/>
binaryTree.postTraverse(binaryTree.getRoot());<br/>

# Search for an object in the tree
console.log("Searching for: "+i,"Found: "+binaryTree.searchBST(i));<br/>

# Delete an object from the tree
binaryTree.delete(i);<br/>
