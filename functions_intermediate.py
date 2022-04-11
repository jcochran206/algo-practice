# Description: Practice writing functions and looping over dictionaries
# Date 10 APR 2022
# created by Jonathan Cochran 
"""
Update values in Dictionaries and List
Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
Change the last_name of the first student from 'Jordan' to 'Bryant'
In the sports_directory, change 'Messi' to 'Andres'
Change the value 20 in z to 30
"""
# variables 
x = [ [5,2,3], [10,8,9] ] 
x[1][0] = 15
print(x[1][0]) #output x = [[5,2,3], [15,8,9]]
print(x)




students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students[0]["last_name"]="Bryant"
print(students) # output updated student Michael Bryant

sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory['soccer'][0] = "Andres"
print(sports_directory) #output changed soccer 1st val to Andres

z = [ {'x': 10, 'y': 20} ]
z[0]['y'] = 30 
print(z)

"""
Iterate Through a List of Dictionaries
Create a function iterateDictionary(some_list) that, 
given a list of dictionaries, the function loops through each 
dictionary in the list and prints each key and the associated value. 
For example, given the following list:
"""
students2 = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def iterateDict(myList):
    for i in range(len(myList)):
        print(myList[i])

iterateDict(students2)

"""
Get Values From a List of Dictionaries
Create a function iterateDictionary2(key_name, some_list) that, 
given a list of dictionaries and a key name, the function prints 
the value stored in that key for each dictionary. 
For example, iterateDictionary2('first_name', students) should output:
"""
# def iterateDict2(val,mylist):
#     for i in range(len(mylist)):
#         print(mylist[i][val])

# iterateDict2("first_name", students2) #output Michael John ..
# iterateDict2("last_name",students2) #output Jordan Rosales ..

"""
Iterate Through a Dictionary with List Values
Create a function printInfo(some_dict) that given a dictionary 
whose values are all lists, prints the name of each key along 
with the size of its list, and then prints the associated 
values within each key's list.
"""
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(myList): 
    for i in range(len(myList)):
        print(myList)

printInfo(dojo)
# output:

