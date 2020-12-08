# Given 2 numbers as a list of single digit nodes, add the 2 numbers and return as a list of digits

# linked list node
class Node(object):
    def __init__(self, x):
        self.val = x
        self.next = None

def addTwoNumsRecur(l1, l2, c=0):
    
    if l1==None and l2==None:
        if c:
            return Node(c)
        return None
    elif l1==None:
        l2.val += c
        return l2    
    elif l2==None:
        l1.val += c
        return l1
    
    sum = Node(l1.val + l2.val + c)
    if sum.val >= 10:
        sum.val -= 10
        c = 1
    sum.next = addTwoNumsRecur(l1.next, l2.next, c)
    return sum
    
def addTwoNumsIter(l1, l2):
    c = 0
    head = Node(0)
    sum = head
    while l1 and l2:
        if not sum:
            sum = Node(0)
        sum.val = l1.val + l2.val + c
        c = 0
        if sum.val >= 10:
            sum.val -= 10
            c = 1
            
        sum = sum.next
        l1 = l1.next
        l2 = l2.next
        
    if l1:
        l1.val += c
        sum.next = l1
    elif l2:
        l2.val += c
        sum.next = l2
    elif c:
        sum = Node(c)
        
    return head

l1 = Node(2)
l1.next = Node(4)
l1.next.next = Node(7)

l2 = Node(5)
l2.next = Node(6)
l2.next.next = Node(4)

result = addTwoNumsIter(l1, l2)
while result:
    print(result.val)
    result = result.next
    # 7 0 1 1