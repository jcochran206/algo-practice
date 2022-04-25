from Pet import Pet

class Ninja():
    def __init__( self, first_name , last_name , treats , pet_food , pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet = Pet("shadow", "dog", "runner", "howl")
        self.pet_food = pet_food
    
# implement the following methods:
    def walk(self):
        self.pet.play()

    def feed(self):
        self.pet.eat()

    def bathe(self):
        self.pet.noise()

treats = ['Chicken','Bacon',"Tenders"]
pet_food = ['Blue','Kibbles']

shadow = Pet("shadow","Dog",['fast burst of speed','kunai attacks'],"Howl")

Ray = Ninja("Ray","Den",treats,pet_food, shadow)

Ray.feed()
Ray.feed()
Ray.feed()