import datetime, time
from time import strftime
class Call(object):
    id_num = 0

    def __init__(self, caller_name, caller_phone_num, call_reason):
        self.caller_name = caller_name
        self.caller_phone_num = caller_phone_num
        self.call_time = datetime.datetime.now()
        self.call_reason = call_reason
        self.id_num = self.id_num + 1;

    def displayCall(self):
        print "Caller Name: " + self.caller_name
        print "Caller's Phone Numer: " + self.caller_phone_num
        print "Call Time: " + str(self.call_time.strftime("%a, %b %d, %Y, %I:%M%p"))
        print "Call Reason: " + self.call_reason
        print "Call Id: " + str(self.id_num)
        print " "
        print "Call Time:" + str(self.call_time)
        return self

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queue_size = 0

    def add(self, call):
        self.calls.append(call)
        self.queue_size = len(self.calls)
        return self

    def remove(self, caller):
        self.calls.remove(caller)
        self.queue_size = len(self.calls)
        return self

    def removeByPhoneNum(self, caller_phone_num):
        for call in self.calls:
            if call.caller_phone_num == caller_phone_num:
                self.calls.remove(call)
                self.queue_size = len(self.calls)
        return self

    def info(self):
        print " "
        if len(self.calls) == 0:
            print "There aren't any calls in the queue!"
        if len(self.calls) == 1:
            print "There is 1 call in the queue:"
        else:
            print "There are " + str(len(self.calls)) + " calls in the queue:"
        for call in self.calls:
            print "Caller Name: " + call.caller_name + ", Phone Numer: " + call.caller_phone_num
        return self

    def sort(self):
        self.calls.sort(key=lambda call: call.call_time, reverse=True)
        # self.calls.sort(key=lambda call: call.call_time)
        return self

caller1 = Call("Hiram Neal", "(428) 986-6754", "Testing my call function").displayCall()
caller2 = Call("Justin Beiber", "(206) 236-4567", "Calling Mommie").displayCall()
caller3 = Call("Steph Curry", "(958) 666-7575", "Calling Game 7").displayCall()
cs1 = CallCenter().add(caller1).add(caller3).add(caller2).info()
cs1.remove(caller1).info()
cs1.add(caller1).removeByPhoneNum("(958) 666-7575").info()
cs1.add(caller3).sort().info()
