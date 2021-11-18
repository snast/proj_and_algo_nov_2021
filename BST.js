class BSTNode{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    size(curNode) {
        if(curNode == null) {
            return 0;
        }
        return this.size(this.root.left) + this.size(this.root.right) + 1;
    }
    // Create add method for BST
    add(val) {
        var newNode = new BSTNode(val);
        //If statement for very first node to be inserted in BST
        if(this.root == null) {
            this.root = newNode;
            return this;
        }

        var curr = this.root;
        // if val is greater than curr than try to go right
        // if curr.right does not exist, insert new node as curr.right, curr.right = newNode
        // if curr.right exists, make curr = curr.right, and repeat
        // if val is less than curr than try to go left
        // if curr.left does not exist, insert new node as curr.left, curr.left = newNode
        // if curr.left exists, make curr = curr.left

        while(curr) {
            // val is greater than curr.val
            if(curr.val < val) {
                //curr.right does not exist
                if(curr.right == null) {
                    curr.right = newNode;
                    return this;
                }
                //curr.right does exist, right child exists for curr
                curr = curr.right;
            } else {
                if(curr.left == null) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left;
            }
        }
    }
}

var myNode = new BSTNode(4);
var myBST = new BST();
myBST.add(7).add(3).add(10);
console.log(myBST);