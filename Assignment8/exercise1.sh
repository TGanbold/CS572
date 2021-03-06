	mongo 
        use MWA
	db.restaurants.find({})    //questions 1 
	db.restaurants.find({}, {restaurant_id:1, name:1, district:1, cuisine:1}) //questions 2
	db.restaurants.find({}, {_id:0, restaurant_id:1, name:1, district:1, cuisine:1}) //questions 3
	db.restaurants.find({}, {_id:0, restaurant_id:1, name:1, district:1, "address.zipcode":1}) //questions 4
	db.restaurants.find({district:"Bronx"}) //questions 5
	db.restaurants.find({district:"Bronx"}).limit(5) //questions 6
	db.restaurants.find({district:"Bronx"}).skip(5).limit(5) //questions 7
	db.restaurants.find({"address.coord": {$lt:-95.754168}}) //questions 8
	db.restaurants.find({cuisine:{$ne:"American "}, "grades.score":{$gt:70},"address.coord": {$lt:-65.754168}}) //questions 9
	db.restaurants.find({name: {$regex: /^Wil/}}, {restaurant_id:1, name:1, district:1, cuisine:1}) //questions 10
	db.restaurants.find({name: {$regex: /ces$/}}, {restaurant_id:1, name:1, district:1, cuisine:1}) //questions 11
	db.restaurants.find({name: {$regex: /Reg/}}, {restaurant_id:1, name:1, district:1, cuisine:1})  ////questions 12
	db.restaurants.find({district:"Bronx", cuisine:{$in:["American ", "Chinese"]}}) // questions 13
	db.restaurants.find({district:{$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id:1, name:1, district:1, cuisine:1}) // questions 14
	db.restaurants.find({district:{$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id:1, name:1, district:1, cuisine:1}) ////questions 15
	db.restaurants.find({"grades.score":{$lte:10}}, {restaurant_id:1, name:1, district:1, cuisine:1}) ////questions 16
	db.restaurants.find({"address.coord.1":{$gt:42, $lte:52}}, {restaurant_id:1, name:1, district:1, cuisine:1}) //questions 17
	db.restaurants.find({}).sort({name:1}) // questions 18
	db.restaurants.find({}).sort({name:-1}) //questions 19
	db.restaurants.find({}).sort({cuisine:1, district:-1}) //questions 20
	db.restaurants.find({"address.street":{$exists: true}}) //questions 21
	db.restaurants.find({"address.coord":{$type: "double"}}) //questions 22
	db.restaurants.find({name:{$regex:/^Mad/}}, {name:1, district:1, "address.coord":1, cuisine:1})//questions 23

