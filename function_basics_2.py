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
def print_and_return(num):
    for x in num:
        print(num[0])
        return num[1]

print(print_and_return([1,2]))

# First Plus Length - Create a function that accepts a list and 
# returns the sum of the first value in the list plus the list's length.
def firstLength(num):
    print(f'first value is: + {num[0]} + length is: {len(num)}')

firstLength([1,2,3,4,5])


