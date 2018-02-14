myList = [4,6,2,9,13]

def sumList(myList):
	return sum(myList)

def sumList2(myList):
	sum = 0
	for num in myList:
	       sum += num
	return sum

print sumList(myList)
print sumList2(myList)


def match_words(words):
  ctr = 0

  for word in words:
    if len(word) > 1 and word[0] == word[-1]:
      ctr += 1
  return ctr

print(match_words(['abc', 'xyz', 'aba', '1221']))

def sortTuple(myList):
    return sorted(myList, key=lambda myList: myList[-1])

print sortTuple([(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)])
