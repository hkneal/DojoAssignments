# for row in range(0, 13):
#     printRow = ""
#     for col in range(0,13):
#         if((col == 0) and (row == 0)):
#             printRow += "x  "
#         elif(row == 0):
#             printRow += str(col * 1) + "  "
#         elif(col == 0):
#             printRow += str(row) + "  "
#         else: printRow += str(row * col) + "  "
#     printRow += "\n"
#     print printRow

for row in range(0, 13):
    for col in range(0,13):
        if((col == 0) and (row == 0)):
            print '%3s' % "x",
        elif(row == 0):
            x = str(col * 1)
            print '%3s' % x,
        elif(col == 0):
            x = str(row)
            print '%3s' % x,
        else:
            x = str(row * col)
            print '%3s' % x,
    print "\n"
