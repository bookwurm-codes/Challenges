#pragma once

// Class for binary tree node
class Node
{
public:
	int value;
	Node* left;
	Node* right;

	Node(int val) : value{ val } {
		left = nullptr;
		right = nullptr;
	}
};

