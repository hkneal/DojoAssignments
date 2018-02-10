import numpy as np

myArr = np.array([6, 7, 8])
print myArr
print "Number of axes of myArray: ", myArr.ndim
print "Dimensions of myArray: ", myArr.shape
print "Total number of elements in myArray (size): ", myArr.size

myArr = np.arange(1000).reshape(10, 10, 10)
print myArr
print "Number of axes of myArray: ", myArr.ndim
print "Dimensions of myArray: ", myArr.shape
print "Total number of elements in myArray (size): ", myArr.size
