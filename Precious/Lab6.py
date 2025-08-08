import numpy as np
import random

class PetriDish:
    def __init__(self, size=10, initial=10):
        self.size = size
        self.grid = np.zeros((size, size), dtype=int)
        for _ in range(initial):
            x, y = random.randint(0, size-1), random.randint(0, size-1)
            self.grid[x][y] = 1

    def display(self):
        print(self.grid)

    def step(self):
        new = self.grid.copy()
        for i in range(self.size):
            for j in range(self.size):
                n = sum(self.grid[(i+di)%self.size][(j+dj)%self.size]
                        for di in [-1,0,1] for dj in [-1,0,1] if not (di == dj == 0))
                if self.grid[i][j] == 1 and (n < 2 or n > 3): new[i][j] = 0
                if self.grid[i][j] == 0 and n == 3: new[i][j] = 1
        self.grid = new
 dish = PetriDish(10, 20)
for _ in range(5):
    dish.display()
    dish.step()
    print()
 