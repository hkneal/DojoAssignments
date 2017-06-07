class Car(object):

    def display_all(self):
        print "Price: $" + str(self.price)
        print "Speed: " + str(self.speed) + "mph"
        print "Fuel: " + self.fuel
        print "Mileage: " + str(self.mileage) + "mph"
        print "Tax: " + str(self.tax)
        print " "

    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = .15
        else: self.tax = .12
        self.display_all()

corolla = Car(2000, 35, "Full", 15)
prius = Car(2000, 5, "Not Full", 105)
avalon = Car(2000, 15, "Kind of Full", 95)
lexus = Car(2000, 25, "Full", 25)
cherokee = Car(2000, 45, "Empty", 35)
lambo = Car(20000000, 35, "Empty", 15)
