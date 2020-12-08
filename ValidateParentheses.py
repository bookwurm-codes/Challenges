# Validate sets of brackets/parentheses matching in a string

from collections import deque 
  
def IsValid(s):
    stack = deque()
    for c in s:
        if c == '(' or c == '[' or c == '{':
            stack.append(c)
        else:
            prev = stack.pop()
            if c == ')' and prev != '(':
                return False
            elif c == ']' and prev != '[':
                return False
            elif c == '}' and prev != '{':
                return False
    if len(stack) > 0:
        return False        
    return True
    
s = "()(){(())" #False
print(IsValid(s))

s = "" #True
print(IsValid(s))

s = "([{}])()" #True
print(IsValid(s))