class City: 
    def __init__ (self, name, population): 
        self.name = name
        self.population = population

    def increase_population(self, amount):
        self.population += amount

name = input("Enter the name of the city: ")
population = int(input("Enter the current population: "))
city = City(name, population)
print(f"\n Current population of {city.name}: {city.population}")
increase = int(input("Enter the number to increase the population by: "))
city.increase_population(increase)
print(f"\n Updated population of {city.name}: {city.population}")