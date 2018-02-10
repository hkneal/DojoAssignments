# input
l = ['hello','world','my','name','is','Anna', 'Ann']
char = 'e'
# output
n = ['hello','world']
myList = []
for count in range(0, len(l)):
    if char in l[count].lower(): #reduces letters to lowercase
        myList.append(l[count])
print myList
