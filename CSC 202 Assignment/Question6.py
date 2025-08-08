import numpy as np
import matplotlib.pyplot as plt

# Parameters
alpha = 1.2e-5  # coefficient of linear expansion (per °C), e.g. for steel
L0 = 1.0        # original length in meters

# Temperature range from 0°C to 100°C
temperatures = np.linspace(0, 100, 100)

# Calculate change in length for each temperature
delta_L = alpha * L0 * temperatures

# Calculate final length at each temperature
final_lengths = L0 + delta_L

# Display first 5 results   
print("Temperature (°C) | Final Length (m)")
for T, L in zip(temperatures[:5], final_lengths[:5]):
    print(f"{T:15.2f} | {L:.6f}")

# Optional: Plot the expansion
plt.plot(temperatures, final_lengths)
plt.title("Thermal Expansion of Material")
plt.xlabel("Temperature (°C)")
plt.ylabel("Length (m)")
plt.grid(True)
plt.show()
    