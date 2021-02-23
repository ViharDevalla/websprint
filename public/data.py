from random import randint,choice,random
import json
import hashlib
from datetime import datetime,date,time,timedelta
carList = list()
companies = [("Tesla Corporation",["Model S","Model 3","Model X","Model Y"]),("Lamborgini",["Urus"]),("Ferrari",["F8"]),("Porsche",["Taycan"]),("Ford Mustang",["GT Sport"])]

location = ["Bangalore","Chennai","Mumbai","Delhi"]
arrivalTime=datetime.now()



for date in range(1,30):
    for i in range(20):
        if date in range(10):
            date = "0"+str(date)
        out = choice(companies)
        model = choice(out[1])
        locationout = choice(location)
        
        carDetail={
            "company": out[0],
            "model":model,
            "location": locationout,
            "date":f"2021-02-{date}",
            "price": choice([x for x in range(500,1000,100)]),
            "id":str(hashlib.md5(f"Flight{date}{i}{random()}".encode()).hexdigest()),
            "availability": randint(0,100)
        }
        carList.append(carDetail)   

#print(flightList)
with open('car_final.json', 'w') as fout:
    json.dump(carList , fout)