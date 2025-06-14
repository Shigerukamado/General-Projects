def check_point(x):
    temp = 9/5 * x + 32
    print(f'your temp in fahrenheit is {temp}')
    if temp > 212:
        print(f'your temperature is above boiling point')
    elif temp < 32:
        print(f'your temperature is below freezing point')


f_temp =  float(input('enter your temperature in celsius: '))
check_point(f_temp)