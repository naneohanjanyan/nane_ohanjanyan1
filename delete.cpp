#include <iostream>

using namespace std;

class Node {
 public:
  int date;
  Node *left;
  Node *right;
  Node(int date = 0, Node *left = nullptr, Node *right = nullptr) {
    this->date = date;
    this->left = left;
    this->right = right;
  }
};

class Tree {
 private:
  Node *root;

  void insert(Node *&node, int value) {
    if (node == nullptr) {
      node = new Node(value);
    } else {
      if (value < node->date) {
        insert(node->left, value);
      } else {
        insert(node->right, value);
      }
    }
  }
  void printNode(Node *temp) {
    if (temp != nullptr) {  // es ham karja hamel ajman kargova tpum
      printNode(temp->left);
      cout << temp->date << ", ";
      printNode(temp->right);
    }
  }

  //   void printNode(Node *temp) {
  //     if (temp == nullptr) {
  //       return;
  //     }
  //     cout << temp->date << ", ";

  //     printNode(temp->left);
  //     printNode(temp->right);
  //   }

 public:
  Tree() { root = nullptr; }

  void printTree() { printNode(root); }

  void insertNode(int date) {
    insert(root, date);

    // if (root == nullptr) {
    //   root = new Node(date);
    // } else {
    //   Node *temp = root;
    //   while (true) {
    //     if (date <= temp->date) {
    //       if (temp->left == nullptr) {
    //         temp->left = new Node(date);
    //         break;
    //       }
    //       temp = temp->left;
    //     } else {
    //       if (temp->right == nullptr) {
    //         temp->right = new Node(date);
    //         break;
    //       }
    //       temp = temp->right;
    //     }
    //   }
    // }
  }

  Node *searchDate(int date) {
    if (root == nullptr) {
      cout << endl;
      return root;
    } else {
      Node *temp = root;
      while (temp) {
        if (date < temp->date) {
          if (temp->left->date == date) {
            return temp->left;
          }
          temp = temp->left;
        } else {
          if (temp->right->date == date) {
            return temp->right;
          }
          temp = temp->right;
        }
      }

      cout << endl;
      return root;
    }
  }

  Node *searchPreviousDate(int date) {
    if (root == nullptr) {
      cout << endl;
      return root;
    } else {
      Node *temp = root;
      while (temp) {
        if (date < temp->date) {
          if (temp->left->date == date) {
            return temp;
          }
          temp = temp->left;
        } else {
          if (temp->right->date == date) {
            return temp;
          }
          temp = temp->right;
        }
      }

      cout << endl;
      return root;
    }
  }

  // void deleted(int a) {
  //   Node *temp = searchDate(a);
  //   Node *curr;
  //   Node *previous = searchPreviousDate(a);

  //   curr = temp->right;
  //   Node *temp2;
  //   while (curr->left) {
  //     temp2 = curr;
  //     curr = curr->left;
  //   }

  //   if (curr->right == nullptr) {
  //     curr->left = temp->left;
  //     curr->right = temp->right;
  //     previous->left = curr;
  //     temp = nullptr;
  //     // delete temp;
  //   } else {
  //     temp2->left = curr->right;
  //     curr->left = temp->left;
  //     curr->right = temp->right;
  //     previous->left = curr;
  //     temp = nullptr;
  //   }
  // }

  void deleted(int a) {
    Node *temp = searchDate(a);
    Node *curr;
    curr = temp->right;
    Node *previous;
    if (curr != nullptr) {
      if (curr->right->left == nullptr) {
        temp->date = curr->date;
        temp->right = curr->right;
        delete curr;
      } else {
        previous = temp;
        while (curr->left) {
          previous = curr;
          curr = curr->left;
        }
        temp->date = curr->date;
        previous->left = curr->right;

        delete curr;
      }
    } else {
      previous = searchPreviousDate(a);
      previous->left = temp->left;
      delete temp;
    }
  }
};

int main() {
  Tree a1;

  a1.insertNode(19);
  a1.insertNode(77);
  a1.insertNode(9);
  a1.insertNode(444);
  a1.insertNode(450);
  a1.insertNode(445);
  a1.insertNode(449);
  a1.insertNode(499);
  a1.insertNode(11);
  a1.insertNode(12);
  a1.insertNode(442);
  // a1.insertNode(443);
  a1.insertNode(1);
  a1.insertNode(2);

  a1.printTree();
  a1.deleted(9);

  cout << endl;
  a1.printTree();
  cout << endl;

  /*   Node *x1 = a1.searchDate(444);
    cout << x1->date;
    cout << endl; */

  return 0;
}
