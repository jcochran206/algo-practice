#assignment is to create BankAccount Class with an initial constructor and 
#4 methods (deposit, withdraw, display, interest)
class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
        

    def deposit(self, amount):
        self.balance += amount
        print(f'your deposit of {amount} is complete')
        return self

    def withdraw(self, amount):
        if(self.balance < 0):
            self.balance -= 5
            print(f'"Insufficient funds: Charging a $5 fee"{self.balance}')
        else:
            self.balance -= amount
        return self
    
    def display_account_info(self):
        print(f'balance is: {self.balance}')
        return self
    
    def yield_interest(self):
        if(self.balance > 0):
            interst_rate_amount = self.balance * self.int_rate 
            self.balance += interst_rate_amount 
        else:
            print(f'insufficient funds {self.balance}')
        return self
## create 2 accounts
acct1 = BankAccount(0.01,5000)
acct2 = BankAccount(0.01,6000)
print('----create 2 accounts')
print(acct1.balance)
print(acct2.balance)
#1st account actions
acct1.deposit(325).deposit(200).deposit(150).withdraw(200).display_account_info()
print('------2nd actions------')
acct2.deposit(200).deposit(200).withdraw(150).withdraw(160).withdraw(170).withdraw(180).yield_interest().display_account_info()
print('------end------')