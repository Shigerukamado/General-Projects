# # # # # #income= float(input('Enter your daily income:'))
# # # # # #cost= float(input(" Enter Your daily cost:"))

# # # # # #if income >= cost:
# # # # #   #  Profit = income-cost
# # # # #  #   print(Profit)
# # # # # #elif income < cost:
# # # # #   #  Loss= cost-income
# # # # #  #   print(Loss)
# # # # #  # = int(input('Enter the number of n: '))
# # # # #  # if Num % 2 == 0  :
# # # # #   #    print(int(Num/2))
# # # # #  # elif Num % 3 == 0:
# # # # #  #     print(int(Num/3 +1))
# # # # #  # els:
# # # # #   #    print(Num, "is not even or odd"

# # # # # #Nigeria_States= {
# # # # #  #   "Abia": "Umuahia",
# # # # #  #   "Akwa Ibom": "Uyo",
# # # # # #    "Anambra": "Awka",
# # # # # #    "Bauchi": "Bauchi",
# # # # # #    "Bayelsa": "Yenagoa",
# # # # # #@    "Benue": "Makurdi",
# # # # # #  "Borno": "Maiduguri",
# # # # # #    "Cross River": "Calabar",
# # # # # #    "Delta": "Asaba",
# # # # # #    "Ebonyi": "Abakaliki",
# # # # # #    "Edo": "Benin City",
# # # # # #    "Ekiti": "Ado-Ekiti",
# # # # # #    "Enugu": "Enugu",
# # # # # #    "Gombe": "Gombe",
# # # # # #    "Imo": "Owerri",
# # # # # #    "Jigawa": "Dutse",
# # # # # #    "Kaduna": "Kaduna",
# # # # # #    "Kano": "Kano",
# # # # # #    "Katsina": "Katsina",
# # # # # #    "Kebbi": "Birnin Kebbi",
# # # # # #    "Kogi": "Lokoja",
# # # # # #    "Kwara": "Ilorin",
# # # # # #   "Lagos": "Ikeja",
# # # # # #    "Nasarawa": "Lafia",
# # # # # #    "Niger": "Minna",
# # # # # #    "Ogun": "Abeokuta",
# # # # #  #   "Ondo": "Akure",
# # # # #  #   "Osun": "Osogbo",
# # # # #  #   "Oyo": "Ibadan",
# # # # #  #   "Plateau": "Jos",
# # # # #  ##   "Rivers": "Port Harcourt",
# # # # #   # "Sokoto": "Sokoto",
# # # # # #   "Taraba": "Jalingo",
# # # # #  #   "Yobe": "Damaturu",
# # # # # #    "Zamfara": "Gusau",
# # # # # #    "FCT": "Abuja"}

# # # # # #State_Name = input("Enter the State Name that's in Nigeria: ").strip().title()

# # # # # #if State_Name in Nigeria_States:
# # # # #     #print("The State and capital is", State_Name, "and", Nigeria_States[State_Name])  
# # # # # #else: 
# # # # #    # print("Invalid State name. Please enter a correct Nigeria State")

# # # # # #Square = {}

# # # # # #for i in range (1,16):
# # # # #  # Square[i]= i**2
# # # # # #print(Square)

# # # # # def Squareitems(List):
# # # # #     Squareitems = dict()
# # # # #     for items in List:
# # # # #         Squareitems[items]=items**2
# # # # #     return Squareitems
# # # # # items =[1,2,3,4,5,6,7,8,9,10]
# # # # # Squareitems=Squareitems(items)
# # # # # print(Squareitems)
# # # # def lists(n):
# # # #     return {i:i**2 for i in range(1,n+1)}
# # # # square = lists(int(input("Enter a value here:")))
# # # # print(square) 

# # # # #def swap(a,b):
# # # # #    return b,a
# # # # #swapped_data = swap(10,3)
# # # # #print(swapped_data)

# # # # import math
# # # # class RightAngleTriangle:
# # # #     def __init__(self, base, hypotenus, height):
# # # #         self.base = base
# # # #         self.height = height

# # # #         def area(self):
# # # #             return 0.5 * self.base * self.height
        
# # # # a = float(input("Enter the of a= "))
# # # # b = float(input("Enter the of b= "))
# # # # S = a * b 
# # # # print("Area of a retangle is", S )
# # # # P = 2*(a+b)
# # # # print("Perimeter of a retangle is", P )


# # # # def times(x, y):
# # # #    return(x*y)
# # # # times(2,4)

# # # x = int(input("Enter a number: "))
# # # for i in range(0, 100):
# # #     a = x*i
# # #     print("2 *", i, "=", a)

# # num1= float(input("Enter your first number: "))
# # num2= float(input("Enter your first number: "))
# # num3= float(input("Enter your first number: "))

# # if (num1>=num2) and (num1>=num3):
# #     Largest = num1
# # elif (num2>=num1) and (num2>=num3):
# #     Largest = num2
# # else:
# #     Largest = num3
# # print("The largest number is: " Largest)

# # import math

# # Radius= float(input("Enter the value of your radius: "))

# # Area =  math.pi * Radius * Radius
# # print(Area) 


# # attendees = ["Tolu Grey", "Niyi Oladele", "Seyi Vibes"]

# # attendee_dict = {}

# # for full_name in attendees:
# #     first_name, last_name = full_name.split()
# #     attendee_dict[last_name] = first_name


# # print(attendee_dict)  
# class Animal:
#     def __init__(self, name, age, sound):
#         self.name = name
#         self.age = age
#         self.sound = sound

#     def speak(self):
#         print(f"The {self.name} {self.sound} at {self.age} years old")

# animal1= Animal("Lion","15","Roars")
# animal2= Animal("DOg", "16", "Barks")
# animal3= Animal("Goat", "17", "Bleat")
# animal1.speak()
# animal2.speak()
# animal3.speak()

import random

# Example list of 14 people with their genders
people = [
    {"name": "Akerejola Divine Olawale ", "gender": "male"},
    {"name": "Olatokunbo David Olamide", "gender": "male"},
    {"name": "Duru-Mgbeoji Onyedikachukwu Paul ", "gender": "male"},
    {"name": "Ramoni Sulaimon Oluwatobiloba", "gender": "male"},
    {"name": "Oyewale Ayooluwa", "gender": "male"},
    {"name": "Abdullah Olawale Bashir", "gender": "male"},
    {"name": "Opaniyi Abdullahi Ayomide", "gender": "male"},
    {"name": "Chinedu Chinagorom Udeze", "gender": "male"},
    {"name": "Olomola Praise Oluwadamilare", "gender": "male"},
    {"name": "Badmus Abdullahi Olayinka ", "gender": "male"},
    {"name": "Alawode Ezekiel Temidayo", "gender": "male"},
    {"name": "Lamid Faizah Ayomide", "gender": "female"},
    {"name": "Emmanuel chinemerem victory", "gender": "female"},
    {"name": "Akeju Taiwo Joseph", "gender": "male"},
    {"name": "Ibrahim Aishah ", "gender": "female"}
]

# Separate males and females
males = [p for p in people if p["gender"] == "male"]
females = [p for p in people if p["gender"] == "female"]

# Randomly select one male and one female
male_speaker = random.choice(males)
female_speaker = random.choice(females)

print("Selected speakers:")
print(f"Male: {male_speaker['name']}")
print(f"Female: {female_speaker['name']}")

