# Assignment is to create a user class
# todo create a user
# todo withdrawal(self, amount)
# todo display_user_balance(self)
# Bonus: transfer_money(self, other_user, amount)
# updated with BankAccount Class
from BankAccount import BankAccount

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        # account balance
        self.account = BankAccount(0.02, 0)
        print(self.account.balance)
    #method to display user balance
    def display_user_balance(self):
        print(f'{self.name} balance is: {self.account.balance}')
        return self #needed to chain method
    #method to deposit to account
    def deposit(self, amount):
        #add money to account
        self.account.balance += amount
        print(f'{self.name} deposited: {amount}')
        return self #need to chain method
    #method to withdraw amount
    def make_withdrawal(self, amount): 
        self.account.balance -= amount
        print(f'{self.name} withdrew : {amount}')
        return self #need to chain
    #method to transfer
    def tranfer_money(self, other_user, amount):
        self.account.balance -= amount
        other_user.account.balance += amount
        print(f'{self.name} transfered {amount} to {other_user.name}')
        print(f'{self.name} new balance is: {self.account.balance}')
        return self #needed to chain

John = User("John", "john@email.com")
Todd = User("Todd", "Todd@email.com")
Sarah = User("Sarah", "Sarah@email.com")
print('-----------')
print(John.name)
print(Todd.name)
print(Sarah.name)
print('-----------')
#1st user to make 3 deposits
print('-----1st user------') #refactored for chain methods
John.deposit(500).deposit(200).deposit(300).make_withdrawal(50).display_user_balance()
print('----------------')
#2nd user to make 3 deposits
print('-----2nd user------') #refactored for chain methods
Todd.deposit(300).deposit(200).make_withdrawal(10).make_withdrawal(50).display_user_balance()
print('----------------')
#2nd user to make 3 deposits
print('-----3rd user------') #refactored for chain methods
Sarah.deposit(1000).make_withdrawal(300).make_withdrawal(50).make_withdrawal(80).display_user_balance()
print('----------------')
John.tranfer_money(Todd,200)
