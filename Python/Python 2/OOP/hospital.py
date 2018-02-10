import itertools

class Patient(object):
    newid = itertools.count().next

    def __init__(self, name, allergies):
        #Patient Constuctor, assigns the patent name and allergies
        self.name = name
        self.id_num = Patient.newid() +1
        self.bed_num = "None"
        self.allergies = []
        #if there is only one alergy just save as a string, else save as a list
        if(type(allergies) == str):
            self.allergies = allergies
            #print self.allergies
        else:
            for alergy in allergies:
                self.allergies.append(alergy)

    def listPatients(self):
        print "Name of Patient: " + self.name
        print "List of Allergies: "
        #Print the string if only one alergy, else iterate through the list
        if(type(self.allergies) == str ):
            print self.allergies
        else:
            for alergy in self.allergies:
                print alergy
        print "Patient id Number: " + str(self.id_num)
        print "Patient bed Number: " + str(self.bed_num)
        print " "
        return self

class Hospital(object):
    def __init__(self, hospital_name, capacity):
        self.hospital_name = hospital_name
        self.capacity = capacity
        self.patients = []
        self.bed_slots = ["Open"] * capacity

    def admit(self, patient):
        for bed in range(0, self.capacity):
            if self.bed_slots[bed] == "Open":
                self.patients.insert(bed, patient)
                patient.bed_num = bed
                self.bed_slots[bed] = "Occupied"
                print "Patient " + patient.name + " has been admitted to bed number " + str(patient.bed_num + 1)
                print " "
                return self
        print "This Hospital is Full!"
        print " "
        return self

    def discharge(self, patient_name):
        for patient in self.patients:
            if patient.name == patient_name:
                self.patients.remove(patient)
                self.bed_slots[patient.bed_num] = "Open"
                patient.bed_num = "None"
                print "Patient " + patient.name + "Has been dischared from Hospital " + self.hospital_name
                print ""
        return self

    def listPatients(self):
        print "Hospital Name: " + self.hospital_name
        print "Hospital Capacity: " + str(self.capacity)
        print "List of Patients:"
        for i in range(0, len(self.patients)):
            print "Patient Name: " + self.patients[i].name
            print "Patients Bed Number: " + str(self.patients[i].bed_num + 1)
        print " "
        return self

patient1 = Patient("Hiram K Neal", "None")
patient1.listPatients()
patient2 = Patient("Jeff Madix", "Milk")
patient2.listPatients()
patient3 = Patient("Roger Moore", "Gin")
patient3.listPatients()
patient4 = Patient("Onion Pit", ["people", "onions", "penacillin", "air"])
patient4.listPatients()
hospital1 = Hospital("Kaiser", 2)
hospital2 = Hospital("Seattle Grace Mercy West", 2000)
hospital2.admit(patient4).listPatients()
hospital2.listPatients()
hospital1.listPatients().admit(patient1).admit(patient3).listPatients()
hospital1.admit(patient2).listPatients().discharge("Roger Moore").listPatients().admit(patient3).listPatients()
