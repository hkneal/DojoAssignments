a = [None] * 10

print len(a)
print type(a[0])

for i in a:
    print type(i)
    a.insert(a[i], "3")
print a
