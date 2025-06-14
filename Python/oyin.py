class Temperature:
    def __init__(self, fahrenheit):
        self.fahrenheit = fahrenheit

    def to_celsius(self):
        celsius = (self.fahrenheit - 32) * 5 / 9
        return celsius
    
temp = Temperature(98.6)
print(f"{temp.fahrenheit} is {temp.to_celsius(): .2f}")