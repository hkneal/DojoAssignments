class bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print "Price: $" + str(self.price)
        print "Max Speed: " + str(self.max_speed) + "mph"
        print "Miles: " + str(self.miles)

    def ride(self):
        print "Riding"
        self.miles += 10
        return self

    def reverse(self):
        print "Reversing"
        if(self.miles >= 5):
            self.miles -= 5
        else: self.miles = 0
        return self

mongoose = bike(350, 118)
diamondback = bike(325, 175)
huffy = bike(150, 85)

mongoose.ride().ride().ride().reverse().displayInfo()
diamondback.ride().ride().reverse().reverse().displayInfo()
huffy.reverse().reverse().reverse().displayInfo()
