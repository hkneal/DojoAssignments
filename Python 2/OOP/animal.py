class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100

    def walk(self):
        if self.health >= 1:
            self.health -= 1
        return self

    def run(self):
        if self.health >= 5:
            self.health -= 5
        return self

    def display_health(self):
        print self.name + "'s health is : " + str(self.health)

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self

    def display_health(self):
        super(Dragon, self).display_health()
        print "I am a Dragon"

aCat = Animal("Purrs")
aCat.walk().walk().walk().run().run().display_health()

rudy = Dog("Rudy")
rudy.walk().walk().walk().run().run().pet().display_health()

pete = Dragon("Pete")
pete.walk().walk().walk().run().run().fly().display_health()

aSquirrel = Animal("Alvin")
aSquirrel.display_health()
# aSquirrel.walk().pet()
# aSquirrel.walk().fly()
# rudy.fly()
