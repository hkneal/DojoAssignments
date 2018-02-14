class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList(object):
    def __init__(self):
        self.head = None
        self.numOfNodes = 0

    def addToFront(self, newNode):
        newNode.next = self.head
        self.head = newNode
        self.numOfNodes += 1

    def deleteFromFront(self):
        if self.head is None:
            print ("The list is empty!")
        else:
            currentNode = self.head
            self.head = currentNode.next
            del currentNode
            self.numOfNodes -= 1

    def addToEnd(self, newNode):
        if self.head is None:  #if there is an empty list
            self.head = newNode
        else:
            lastNode = self.head
            while True:
                if lastNode.next is None:
                    break
                lastNode = lastNode.next
            lastNode.next = newNode
        self.numOfNodes += 1

    def deleteFromEnd(self):
        if self.head is None:
            print ("The list is empty!")
        else:
            lastNode = self.head
            while True:
                if lastNode.next is None:
                        previousNode.next = None;
                        del lastNode
                        self.numOfNodes -= 1
                        break
                previousNode = lastNode
                lastNode = lastNode.next

    def insertAt(self, newNode, position):
        #if position > numNodes calls addToEnd(self, newNode)
        currentNode = self.head
        currentPosition = 1
        while True:
            if currentNode.next is None:
                self.addToEnd(newNode)
                break
            if position == 1:
                self.addToFront(newNode)
                break
            if currentPosition == position:
                previousNode.next = newNode
                newNode.next = currentNode
                self.numOfNodes += 1
                break
            previousNode = currentNode
            currentNode = currentNode.next
            currentPosition += 1

    def printList(self):
        currentNode = self.head
        while True:
            print currentNode.data
            if currentNode.next is None:
                break
            currentNode = currentNode.next

    def getNumOfNodes(self):
        return self.numOfNodes

linkedList = LinkedList()
firstNode = Node("Hiram")
secondNode = Node("Kevin")
linkedList.addToFront(firstNode)
linkedList.addToFront(secondNode)
linkedList.addToEnd(Node("Neal"))
linkedList.addToEnd(Node("Alana"))
linkedList.insertAt(Node("Coleman"), 9)
linkedList.printList()
print linkedList.getNumOfNodes()
linkedList.deleteFromFront()
linkedList.printList()
print linkedList.getNumOfNodes()
linkedList.deleteFromEnd()
linkedList.printList()
print linkedList.getNumOfNodes()
