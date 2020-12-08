# Invert a binary tree
#   right children become left children and left children become right

class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value
    def printTree(self):
        print(self.value,end=' ')
        if self.left:
            self.left.printTree()
        else:
            print(self.value+'_NoLeft',end=' ')
        if self.right:
            self.right.printTree()
        else:
            print(self.value+'_NoRight',end=' ')



def invertTreeRecurs(node):
    #fill in
    temp = node.left
    node.left = node.right
    node.right = temp
    if node.left:
        invertTreeRecurs(node.left)
    if node.right:
        invertTreeRecurs(node.right)

def invertTreeIter(root):

    st = [root]
    while(st):
        node = st.pop()
        temp = node.left
        node.left = node.right
        node.right = temp
        if node.right:
            st.append(node.right)
        if node.left:
            st.append(node.left)
        

root = Node('a')
root.left = Node('b')
root.right = Node('c')
root.left.left = Node('d')
root.left.right = Node('e')
root.right.left = Node('f')

root.printTree()

print('\n')

invertTreeRecurs(root)
root.printTree()

print('\n')

invertTreeIter(root)
root.printTree()

