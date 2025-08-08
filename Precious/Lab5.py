class BacterialSpecies:
    def __init__(self, name, pop, growth):
        self.name = name
        self.pop = pop
        self.growth = growth

    def grow(self):
        self.pop *= (1 + self.growth)

    def compete(self, other, rate):
        self.pop -= self.pop * rate * other.pop
        other.pop -= other.pop * rate * self.pop

class BacterialCommunity:
    def __init__(self):
        self.species = []

    def add(self, s):
        self.species.append(s)

    def simulate(self, steps=1, rate=0.00001):
        for _ in range(steps):
            for s in self.species: s.grow()
            for i in range(len(self.species)):
                for j in range(i + 1, len(self.species)):
                    self.species[i].compete(self.species[j], rate)

    def show(self):
        for s in self.species:
            print(f"{s.name}: {s.pop:.2f} cells")

# Example
c = BacterialCommunity()
c.add(BacterialSpecies("E.coli", 1000, 0.05))
c.add(BacterialSpecies("Salmonella", 800, 0.03))

print("Before:")
c.show()
c.simulate()
print("\nAfter:")
c.show()
