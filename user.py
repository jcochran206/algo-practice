# Assignment is to create a user class
# todo create a user
# todo withdrawal(self, amount)
# todo display_user_balance(self)
# Bonus: transfer_money(self, other_user, amount)

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        # account balance
        self.account_balance = 0

    #method to display user balance
    def display_user_balance(self):
        print(f'{self.name} balance is: {self.account_balance}')
    #method to deposit to account
    def deposit(self, amount):
        #add money to account
        self.account_balance += amount
        print(f'{self.name} deposited: {amount}')
    #method to withdraw amount
    def make_withdrawal(self, amount): 
        self.account_balance -= amount
        print(f'{self.name} withdrew : {amount}')
    #method to transfer
    def tranfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        print(f'{self.name} transfered {amount} to {other_user.name}')
        print(f'{self.name} new balance is: {self.account_balance}')

John = User("John", "john@email.com")
Todd = User("Todd", "Todd@email.com")
Sarah = User("Sarah", "Sarah@email.com")
print('-----------')
print(John.name)
print(Todd.name)
print(Sarah.name)
print('-----------')
#1st user to make 3 deposits
print('-----1st user------')
John.deposit(500)
John.deposit(200)
John.deposit(300)
John.make_withdrawal(50)
John.display_user_balance()
print('----------------')
#2nd user to make 3 deposits
print('-----2nd user------')
Todd.deposit(300)
Todd.deposit(200)
Todd.make_withdrawal(10)
Todd.make_withdrawal(50)
Todd.display_user_balance()
print('----------------')
#2nd user to make 3 deposits
print('-----3rd user------')
Sarah.deposit(1000)
Sarah.make_withdrawal(300)
Sarah.make_withdrawal(50)
Sarah.make_withdrawal(80)
Sarah.display_user_balance()
print('----------------')
John.tranfer_money(Todd,200)
