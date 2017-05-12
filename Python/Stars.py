def drawStars(numList):
    output = ""
    for cnt in range(0,len(numList)):
        if type(numList[cnt]) == int:
            for val in range(0,numList[cnt]):
                output += "*"
            output += "\n"
        elif type(numList[cnt]) == str:
            for val in range(len(numList[cnt])):
                output += numList[cnt][0].lower()
            output += "\n"
    print output

x = [4, 6, 1, 3, 5, 7, 25]
drawStars(x)

y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStars(y)
