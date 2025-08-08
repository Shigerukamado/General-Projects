import math
input_file = "angles.txt"
output_file = "outputfile.txt"

with open(input_file, 'w') as infile:
  numbers = range(0,361)
  for i in numbers:
    infile.write(f"{i}\n")

with open(input_file,'r') as infile:
  lines = infile.readlines()

radiansline = []
for line in lines:
    radians = math.radians(float(line))
    radiansline.append(f"{radians}\n")
    
with open(output_file, 'w') as outputfile:
   outputfile.writelines(radiansline)