
/**
* Binary Search Tree Implementation
*/
var BINARYTREE = function(){

  //root of the tree
  this.root = null;

  //set root
  this.setRoot = function(root){
    this.root = root;
  };

  //get root
  this.getRoot = function(){
    return this.root;
  };

  //set left child
  //@param: parent parent node
  //@param: node node to be inserted
  this.setLeftChild = function(parent = new BINARYNODE.Node(0), node = new BINARYNODE.Node(0)){
    if( parent == null
        || parent.getLeft() != null){
      console.log("Runtime Error: setLeftChild");
      return;
    }
    parent.setLeft(node);
  };

  //set right child
  //@param: parent parent node
  //@param: node node to be inserted
  this.setRightChild = function(parent = new BINARYNODE.Node(0), node = new BINARYNODE.Node(0)){
    if( parent == null
        || parent.getRight() != null){
      console.log("Runtime Error: setChild");
      return;
    }
    parent.setRight(node);
  };

  //insert an object into the binary search tree
  //if there is a duplicate then call operate on node
  this.insertBSTDup = function(i = ""){

    var p = null;
    var q = null;
    var r = new BINARYNODE.Node(i);
    //if
    if(this.root == null){
      this.root = r;
    //else
    }else{

      p = this.root;
      q = this.root;
      //begin of while loop
      while(q != null && r.compare(p) != 0){
        p = q;
        if(r.compare(p) < 0){
          q = p.getLeft();
        }else{
          q = p.getRight();
        }

      }
      //end of while loop

      //if
      if(r.compare(p) < 0){
        this.setLeftChild(p, r);
      }else if(r.compare(p) > 0){
        this.setRightChild(p, r);
      }else{
        p.operate();
      }
      //end if

    }
    //end if

  };

  //insert an object into the binary search tree
  //even if there is a duplicate it will be added
  this.insertBST = function(i = ""){

    var p = null;
    var q = null;
    var r = new BINARYNODE.Node(i);
    //if
    if(this.root == null){
      this.root = r;
    //else
    }else{

      p = this.root;
      q = this.root;
      //begin of while loop
      while(q != null){
        p = q;
        if(r.compare(p) < 0){
          q = p.getLeft();
        }else{
          q = p.getRight();
        }

      }
      //end of while loop

      //if
      if(r.compare(p) < 0){
        this.setLeftChild(p, r);
      }else{
        this.setRightChild(p, r);
      }
      //end if

    }
    //end if

  };

  //search BST
  this.searchBST = function(i){

    var p = null;

    //var num = 0;

    BINARYNODE.predefinedNode.setInfo(i);

    if(this.root != null){
      p = this.root;
      while(p != null){
        if(BINARYNODE.predefinedNode.compare(p) < 0){
          p = p.getLeft();
          //num++;
        }else if(BINARYNODE.predefinedNode.compare(p) > 0){
          p = p.getRight();
          //num++;
        }else{
          //console.log("Total Comparisons: "+num);
          return p;
        }
      }

    }

    //console.log(num);

    return null;

  };

  //intraverse
  this.inTraverse = function(node){
    if(node != null){
      this.inTraverse(node.getLeft());
      node.visit();
      this.inTraverse(node.getRight());
    }
  };

  //delete a node
  //deletes the first occurrence of i in the tree
  this.delete = function(i){
    var s, t, v;
    var found = false;

    var r = new BINARYNODE.Node(i);
    var p = this.root;
    var q = null;
    //start the loop
    while(p != null && !found){
      if(r.compare(p) == 0){
        found = true;
      }else{
        q = p;
        if(r.compare(p) < 0){
          p = p.getLeft();
        }else{
          p = p.getRight();
        }
      }
    }
    //end of loop

    //if found
    if(found){

      if(p.getLeft() == null){
        v = p.getRight();
      }else if(p.getRight() == null){
        v = p.getLeft();
      }else{
        t = p;
        v = p.getRight();
        s = v.getLeft();
        //loop
        while(s != null){
          t = v;
          v = s;
          s = v.getLeft();
        }
        //end of loop
        if(t != p){
          t.setLeft(v.getRight());
          v.setRight(p.getRight());
        }
        v.setLeft(p.getLeft());
      }
      //end of else

      if(q == null){
        this.root = v;
      }else if(p == q.getLeft()){
        q.setLeft(v);
      }else{
        q.setRight(v);
      }

    }

  };

  //pretraverse
  this.preTraverse = function(node){
    if(node != null){
      node.visit();
      this.inTraverse(node.getLeft());
      this.inTraverse(node.getRight());
    }
  };

  //postTraverse
  this.postTraverse = function(node){
    if(node != null){
      this.inTraverse(node.getLeft());
      this.inTraverse(node.getRight());
      node.visit();
    }
  };

};
//end of binary search tree

/**
* Binary tree node
*/
var BINARYNODE = {};
BINARYNODE.Node = function(info){

  this.info = info;
  this.left = null;
  this.right= null;

  //set info
  this.setInfo = function(info){
    this.info = info;
  };

  //get info
  this.getInfo = function(){
    return this.info;
  };

  //set left child
  this.setLeft = function(node){
    this.left = node;
  };

  //set right child
  this.setRight = function(node){
    this.right = node;
  };

  //get right child
  this.getRight = function(){
    return this.right;
  };

  //get left child
  this.getLeft = function(){
    return this.left;
  };

  //visit
  this.visit = BINARYNODE.visit == null?function(){console.log(this.info);}: BINARYNODE.visit;

  //operate
  this.operate = BINARYNODE.operate == null?function(){console.log("skipping adding "+this.info+" since it has been already added.");}:BINARYNODE.operate;

  //compare
  this.compare = BINARYNODE.compare == null?
  function(o){
    if(this.info > o.getInfo()){
      return 1;
    }else if(this.info < o.getInfo()){
      return -1;
    }
    return 0;
  }: BINARYNODE.compare;

  return this;

};

//predefined node so if there is only an info supplied
BINARYNODE.predefinedNode = new BINARYNODE.Node(0);
