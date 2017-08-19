<!DOCTYPE html>
<html>
<head>
  <title>Binary Search Tree</title>
</head>
<body>

  <div id="add-tab">
    <input id="text" type="text"/>
    <button id="add">Add</button>
  </div>
  <br/>
  <div id="options">
    <button id="pretraverse">Pre Traverse</button>
    <button id="intraverse">In Traverse</button>
    <button id="posttraverse">Post Traverse</button>
  </div>
  <br/>
  <div id="result">

  </div>

  <script src="js/Binary-Tree.js"></script>

  <script>

  var i = 1;

  //binary tree init
  var binaryTree = new BINARYTREE();

  //override the visit of node function
  BINARYNODE.visit = function(){
    console.log("info: "+this.info);
  };
  //end of overriding when a node is visited

  //override the operate of node function
  BINARYNODE.operate = function(){
    console.log("been duplicated: "+this.info);
  };
  //end of overriding when there is duplicate node

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

  binaryTree.insertBSTDup(5);
  binaryTree.insertBSTDup(10);
  binaryTree.insertBSTDup(1);
  console.log("inTraversal");
  binaryTree.inTraverse(binaryTree.getRoot());
  console.log("preTraverse");
  binaryTree.preTraverse(binaryTree.getRoot());
  console.log("PostTraversal");
  binaryTree.postTraverse(binaryTree.getRoot());
  console.log("Searching for: "+i,"Found: "+binaryTree.searchBST(i));

  //listener for the add button
  document.getElementById("add").addEventListener("click", function(){
      var text = document.getElementById("text").value;



  });
  //end of listener to the add button

  </script>

</body>
</html>
