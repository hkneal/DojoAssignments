# class User(object):
#     # init is the constuctor
#     def __init__(self, name, email):
#         # set some instance variables. just like any variable we can call these anything
#         self.name = name
#         self.email = email
#         self.logged = False
#     # this is a method we created to help a user login
#     def login(self):
#         self.logged = True
#         print self.name + " is logged in."
#         return self
#
# new_user = User("Anna","anna@anna.com")
#
# print new_user
# print new_user.email
# print new_user.name
class User(object):
      name = "Anna"

anna = User()
print "anna's name: ", anna.name
User.name = "Bob"
print "anna's name after change:", anna.name
bob = User()
print "bob's name:", bob.name
