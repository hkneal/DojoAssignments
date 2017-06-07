class MathDojo(object):
    def __init__(self):
        self.num = 0

    def add(self, *nums):
        for i in range(0, len(nums)):
            if type(nums[i]) == tuple:
                for j in range(0, len(nums[i])):
                    if type(nums[i][j]) == list:
                        self.num += sum(nums[i][j])
                    else: self.num += nums[i][j]
            elif type(nums[i]) == list:
                self.num += sum(nums[i])
            else: self.num += nums[i]
        #use math.fsum for floating point values
        return self

    def subtract(self, *nums):
        for i in range(0, len(nums)):
            if type(nums[i]) == tuple:
                for j in range(0, len(nums[i])):
                    if type(nums[i][j]) == list:
                        self.num -= sum(nums[i][j])
                    else: self.num -= nums[i][j]
            elif type(nums[i]) == list:
                self.num -= sum(nums[i])
            else: self.num -= nums[i]
        return self

    def result(self):
        print self.num

# md = MathDojo().add([1, 2, 3], 2).result()
# PART 1
# md = MathDojo().add(2).add(2, 5).subtract(3, 2).result()
# PART 2
# md = MathDojo().add([1], 3, 4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3],[1.1, 2.3]).result()
# PART 3
md = MathDojo().add((1, 4, 3, 5), (2, 3), [3, 4, 2], 1, ([3, 2], 5)).subtract(3, [6, 5, 3], (2, 1), ).result()
