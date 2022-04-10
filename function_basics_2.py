#Assignment is to create the following functions
# Countdown - Create a function that accepts a number as an input. 
# Return a new list that counts down by one, from the number 
# (as the 0th element) down to 0 (as the last element).
# def countdown(num):
#     for num in range(num, 0, -1):
#         print(num)

# countdown(5)

# Print and Return - Create a function 
# that will receive a list with two numbers. 
# Print the first value and return the second.
# def print_and_return(num):
#     for x in num:
#         print(num[0])
#         return num[1]

# print(print_and_return([1,2]))

# First Plus Length - Create a function that accepts a list and 
# returns the sum of the first value in the list plus the list's length.
# def firstLength(num):
#     print(f'first value is: + {num[0]} + length is: {len(num)}')

# firstLength([1,2,3,4,5])

# Values Greater than Second - Write a function that accepts a list 
# and creates a new list containing only the values from the 
# original list that are greater than its 2nd value. 
# Print how many values this is and then return the new list. 
# If the list has less than 2 elements, have the function return False ##
def valGreaterthanSecond(array):
    arr = [] #new array
    if len(array) >= 2:
        for i in range(len(array)):
            if array[i] > array[1]:
                arr.append(array[i])
    else: 
        return False 
    print(f"length of array is {len(arr)}: results are: {arr}" )
    return arr
    

valGreaterthanSecond([1,2,3,4,5]) # 345


# This Length, That Value - Write a function that accepts two integers as parameters: 
# size and value. The function should create and return a list whose length is 
# equal to the given size, and whose values are all the given value.
# def lengthValue(num1,num2): 
#     arr = []
#     for i in range(num1):
#         arr.append(num2)
#     return arr

# print(lengthValue(3,4))
