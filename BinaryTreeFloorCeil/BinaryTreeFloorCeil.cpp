// BinaryTreeFloorCeil.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include "Node.h"

void findCeilingFloor(Node* root, int k, int &floor, int &ceiling);

int main()
{
    // Build example binary tree
    //            8
    //         /    \
    //        4      12
    //      /  \    /  \
    //     2    6  10  14
    Node* root = &Node(8);
    root->left = &Node(4);
    root->right = &Node(12);
    root->left->left = &Node(2);
    root->left->right = &Node(6);
    root->right->left = &Node(10);
    root->right->right = &Node(14);

    int floor;
    int ceiling;

    // Find numbers closest to 5  (4 and 6)
    findCeilingFloor(root, 5, floor, ceiling);
    // Expected Output: Floor: 4    Ceiling: 6
    std::cout << "Floor: " << floor << "\tCeiling: " << ceiling << "\n\n";
}

// This function will find the closest numbers above and below a chosen number 'k' in a binary tree
// Inputs
//      root    Root of binary tree
//      k       Chosen number to target
//
// Outputs
//      floor       Closest number below k
//      ceiling     Closest number above k
void findCeilingFloor(Node* root, int k, int &floor, int &ceiling) {
    Node* currNode = root;
    int minFloor = abs(k - root->value);
    int minCeil = abs(root->value - k);
    floor = root->value;
    ceiling = root->value;

    // Search binary tree for k until we reach the bottom nodes
    // Save closest above (ceiling) and closest below (floor) as we go
    while (currNode != nullptr) {
        if (currNode->value <= k) {
            int currFloor = abs(k - currNode->value);
            if (currFloor < minFloor) {
                minFloor = currFloor;
                floor = currNode->value;
            }
            currNode = currNode->right;
        } else {
            int currCeil = abs(k - currNode->value);
            if (currCeil < minCeil) {
                minCeil = currCeil;
                ceiling = currNode->value;
            }
            currNode = currNode->left;
        }
    }
}