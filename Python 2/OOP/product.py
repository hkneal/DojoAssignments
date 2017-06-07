class store(object):
    products = []
    def __init__(self, products, location, owner):
        for product in products:
            self.products.append(product)
        self.location = location
        self.owner = owner

    def add_product(self, product):
        self.products.append(product)
        return self

    def remove_product(self, product_name):
        self.products.remove(product_name)
        return self

    def inventory(self):
        print "Inventory for: " + self.location
        for product in self.products:
            product.display_Info()


class product(object):
    def __init__(self, price, item_name, weight, brand, cost):
        self.price = price
        self.item_name = item_name
        self. weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"
        # self.display_Info()
        self.taxAdded = False

    def sell(self):
        self.status = "sold"
        return self

    def addTax(self, tax):
        if not self.taxAdded:
            self.price = (self.price * tax) + self.price
            self.taxAdded = True
        return self

    def Return(self, reason):
        if reason == "defective":
            self.status = "defective"
            self.price = 0
            return self
        if reason == "returned in box, like new":
            self.status = "for sale"
            return self
        if reason == "open box":
            self.status = "used"
            self.price = self.price * .8
            return self

    def display_Info(self):
        print "Item Price: $" + str(self.price)
        print "Item Name: " + self.item_name
        print "Item Weight: " + str(self.weight) +"lbs"
        print "Brand: " + self.brand
        print "Cost: $" + str(self.cost)
        print "Status: " + self.status
        print " "

bike = product(2000, "mongoose 5000", 13, "Mongoose", 584)
bike.addTax(.09).sell().Return("open box").display_Info()

bike2 = product(2000, "mongoose 5000", 16, "Mongoose", 564)
bike2.addTax(.09).sell().Return("returned in box, like new").display_Info()

bike3 = product(500, "Huffy BMX", 26, "Huffy", 184)
bike2.display_Info()

walmart = store([bike, bike2], "5555 Oakvile Lane", "Micheal Jordan")
walmart.inventory()
walmart.add_product(bike3).remove_product(bike2).inventory()
