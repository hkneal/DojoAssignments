star = ""
for counter in range(0, 8):
    for count in range(0, 4):
        star += "*  "
    if counter % 2 == 0: #add a line and space after every even line
        star += "\n  "
    else: star += "\n"
print star
