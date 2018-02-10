sum = 0
checkArray = [5, 0]
for count in range(0, 1000):
    if count % 10 in checkArray:
        print count, " is in checkArray"
        sum += count
    elif (count % 3 == 0) or (count % 5 == 0):
        print count, " is in checkArray"
        sum += count
print sum
