students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def printNames(myList):
    for obj in myList:
        print obj["first_name"],obj["last_name"]

def printUsers(myDict):
    count = 0
    for key, value in myDict.items():
        print key
        count = 1
        for nameList in value:
            print "\033[35m", str(count),"\033[37m","-", nameList["first_name"],nameList["last_name"], "-","\033[35m", len(nameList["first_name"]) + len(nameList["last_name"]),"\033[37m"
            count += 1

printNames(students)
print "******************************"
printUsers(users)

# formatters = {
#     'RED': '\033[91m',
#     'GREEN': '\033[92m',
#     'END': '\033[0m',
#     'PURPLE': '\033[35m'
# }
#
# print 'Master is currently {RED}red{END}!'.format(**formatters)
# print 'Help make master {GREEN}green{END} again!'.format(**formatters)

# print "{PURPLE}"str(count)"{END}".format(**formatters), "-", nameList["first_name"],nameList["last_name"], "-"
# print ("\033[35m" str(count), "-", nameList["first_name"],nameList["last_name"], "-")
