import turtle

DIST = 5
turtle.speed(0)
turtle.fill(True)
# turtle.bgcolor("lightblue")
for x in range(0,14):
    print "x", x
    for y in range(1,9):
        turtle.color("violet", "blue")
        turtle.begin_fill()
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(90)
        # advance according to set distance
        turtle.forward(DIST)
        turtle.end_fill()
    # add to set distance
    DIST += 4
for x in range(0,14):
    print "x", x
    for y in range(1,9):
        turtle.color("purple", "red")
        turtle.begin_fill()
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(90)
        # advance according to set distance
        turtle.forward(DIST)
        turtle.end_fill()
    # add to set distance
    DIST += 4
for x in range(0,14):
    print "x", x
    for y in range(1,9):
        turtle.color("blue", "red")
        turtle.begin_fill()
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(90)
        # advance according to set distance
        turtle.forward(DIST)
        turtle.end_fill()
    # add to set distance
    DIST += 4
for x in range(0,14):
    print "x", x
    for y in range(1,9):
        turtle.color("green", "red")
        turtle.begin_fill()
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(90)
        # advance according to set distance
        turtle.forward(DIST)
        turtle.end_fill()
    # add to set distance
    DIST += 4
for x in range(0,14):
    print "x", x
    for y in range(1,9):
        turtle.color("yellow", "red")
        turtle.begin_fill()
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(90)
        # advance according to set distance
        turtle.forward(DIST)
        turtle.end_fill()
    # add to set distance
    DIST += 4
for x in range(0,14):
    print "x", x
    for y in range(1,7):
        turtle.color("orange", "red")
        turtle.begin_fill()
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(90)
        # advance according to set distance
        turtle.forward(DIST)
        turtle.end_fill()
    # add to set distance
    DIST += 4
for x in range(0,14):
    print "x", x
    for y in range(1,9):
        turtle.color("red", "red")
        turtle.begin_fill()
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(90)
        # advance according to set distance
        turtle.forward(DIST)
        turtle.end_fill()
    # add to set distance
    DIST += 4
