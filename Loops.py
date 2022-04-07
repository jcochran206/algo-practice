# Print all integars from 0 to 150
for i in range(0, 151): # 
    print(i)

#Multiples of 5 Print all multiples of 5 from 5 to 1000
for i in range(0, 1001, 5):
    print(i)

# counting the Dojo way if divisible by 5 print Coding, if divisible by 10 print coding dojo
for i in range(100):
    if i % 10 == 0:
        print('coding dojo')
        continue
    elif i % 5 == 0:
        print('Coding')
    else: 
        print(i)

# add odd integars from 0 to 500000
sum = 0
for i in range(500001):
    if(i % 2 != 0):
        sum += i
print(sum)

# counting down by 4 starting at 2018
for i in range(2018, 0, -4): # range (start, end, step)
    print(i)
    
#flexible counter low high multiple
#output should be 3 6 9 
lowNum = 2
highNum = 9
mult = 3 
for i in range(lowNum, highNum, mult):
    if i % mult == 0:
        print(i)
    else:
        print(i)
