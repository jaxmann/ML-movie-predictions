var movies = ["Carrie", "CBGB", "Charlie Countryman", "Cheech & Chong\'s Animated Movie", "Chilling Visions: 5 Senses of Fear", "Clark: A Gonzomentary", "The Cloth", "Cloudy with a Chance of Meatballs 2", "Coffin Baby", "Company of Heroes", "The Company You Keep", "Computer Chess", "Concussion", "The Conjuring", "Contest", "Continental", "Contracted", "The Contractor", "The Counselor", "The Croods", "Cutie and the Boxer", "Dallas Buyers Club", "Dark Skies", "A Dark Truth", "Dead Man Down", "Despicable Me 2", "Disconnect", "Dirty Wars", "Don Jon", "Don\'t Stop Believin\': Everyman\'s Journey", "Dracula: The Dark Prince", "Drinking Buddies", "Elysium", "Emperor", "Empire State", "Ender\'s Game", "The English Teacher", "Enough Said", "Epic", "Erased", "Escape from Planet Earth", "Escape Plan", "Europa Report", "Evil Dead", "The Face of Love", "Family Weekend", "Far Marfa", "Fast & Furious 6", "The Fifth Estate", "Five Dances", "Foodfight!", "Frances Ha", "The Frankenstein Theory", "Free Birds", "Fright Night 2: New Blood", "Frozen", "The Frozen Ground", "Fruitvale Station", "G.B.F.", "G.I. Joe: Retaliation", "Gangster Squad", "Generation Iron", "Geography Club", "Getaway", "The Ghost Army", "Girl Most Likely", "A Glimpse Inside the Mind of Charles Swan III", "Go for Sisters", "A Good Day to Die Hard", "Grace Unplugged", "Gravity", "The Great Gatsby", "The Green Inferno", "Greetings from Tim Buckley", "Grow Up, Tony Phillips", "Grown Ups 2", "Grudge Match", "The Hangover Part III", "Hansel & Gretel", "Hansel & Gretel Get Baked", "Hansel & Gretel: Witch Hunters", "Hansel & Gretel: Warriors of Witchcraft", "Hatchet III", "Hateship, Loveship", "A Haunted House", "The Haunting in Connecticut 2: Ghosts of Georgia", "He\'s Way More Famous Than You", "The Heat", "Hell Baby", "Her", "Hit & Stay", "The Hobbit: The Desolation of Smaug", "Home Run", "Homefront", "The Hospital", "The Host", "The Hot Flashes", "Hours", "House of Dust", "How to Lose Your Virginity", "How to Be a Man", "The Hunger Games: Catching Fire", "I Am Divine", "I\'m in Love with a Church Girl", "I Know That Voice", "I Spit on Your Grave 2", "I Used to Be Darker", "The Iceman", "Identity Thief", "In a World...", "InAPPropriate Comedy", "The Incredible Burt Wonderstone", "Indescribable", "Inequality for All", "The Inevitable Defeat of Mister & Pete", "Inside Llewyn Davis", "Insidious: Chapter 2", "The Internship", "Iron Man 3", "ISteve", "It\'s a Disaster", "Jack the Giant Killer", "Jack the Giant Slayer", "Jackass Presents: Bad Grandpa", "Java Heat", "Jay & Silent Bob\'s Super Groovy Cartoon Movie", "Jayne Mansfield\'s Car", "Jobs", "John Dies at the End", "Joe", "Jug Face", "Justice League: The Flashpoint Paradox", "Justin Bieber\'s Believe", "Kevin Hart: Let Me Explain", "Kick-Ass 2", "Kill Your Darlings", "Killing Season", "The Kings of Summer", "Kink", "Kiss of the Damned", "Knife Fight", "Koch", "Lake Windfall", "Last Call", "The Last Exorcism Part II", "The Last of Robin Hood", "The Last Stand", "Last Vegas", "Last Weekend", "The Legend of Jimi Lazer", "Let the Fire Burn", "Liars All", "Life of Crime", "The Lifeguard", "Lil Bub & Friendz", "Little Feet", "The Lone Ranger", "The Lords of Salem", "The Lost Medallion: The Adventures of Billy Stone", "Lovelace", "Lone Survivor", "Lucky Them", "LUV", "Machete Kills", "A Madea Christmas", "Magic Magic", "Manhattan Romance", "Man of Steel", "Manhunt: The Search for Bin Laden", "The Marine 3: Homefront", "Masterminds", "McCanick", "Medora", "The Men Who Lost China", "Metallica Through the Never", "Monsters University", "The Mortal Instruments: City of Bones", "Movie 43", "Much Ado About Nothing", "Mud", "Nebraska", "No One Lives", "Now You See Me", "Oblivion", "Officer Down", "Oldboy", "Olympus Has Fallen", "One Direction: This Is Us", "Out of the Furnace", "Oz the Great and Powerful", "Pacific Rim", "The Package", "Pain & Gain", "Palominas", "Half Life", "Paradise", "Paranoia", "The Pardon", "Parker", "Parkland", "Pawn", "Pawn Shop Chronicles", "Penthouse North", "Percy Jackson: Sea of Monsters", "Phantom", "Philomena", "Pit Stop", "The Place Beyond the Pines", "Planes", "Plush", "Plus One", "The Power Inside", "The Pretty One", "Prince Avalanche", "Prisoners", "Project 2x1", "Proxy", "The Punk Singer", "The Purge", "Rapture-Palooza", "The Red Robin", "RED 2", "A Resurrection", "Riddick", "R.I.P.D.", "Roadside", "Robosapien: Rebooted", "Robotech: Love Live Alive", "Runner Runner", "Safe Haven", "Salinger", "The Saratov Approach", "Savannah", "Saving Lincoln", "Saving Mr. Banks", "Saving Santa", "Scary Movie 5", "Scenic Route", "Scrapper", "Season of Miracles", "Sex Boss", "The Secret Life of Walter Mitty", "Sexy Evil Genius", "Shadow People", "She Wants Me", "Short Term 12", "Shotgun Wedding", "Side Effects", "A Single Shot", "Skinwalker Ranch", "The Smurfs 2", "The Smurfs: The Legend of Smurfy Hollow", "Snitch", "Some Velvet Morning", "Sound City", "The Spectacular Now", "Spiders 3D", "Spirit of the Marathon II", "Spring Breakers", "Standing Up", "Stand Up Guys", "Star Trek Into Darkness", "The Starving Games", "Stoker", "Straight A\'s", "Struck by Lightning"];
// Thanks jonathan for example on how to save the file
var fs = require('fs');
var os = require("os");

var googleTrendsApi = require("google-trends-api")
var Promise = require("bluebird")
trends(0);

function trends(i) {
	console.log(movies[i]);
	googleTrendsApi.interestByRegion({
	keyword: movies[i],  
	resolution: 'COUNTRY'})
	.then(function(results) {
		results = JSON.parse(results);
		var arr = [];
		var data = results.default.geoMapData;
		for (var key in data) {
			d = data[key];
			var g = [];
			g.push(d.geoName, d.value);
			arr.push(g);
			arr.sort();
		}
		fs.appendFile('movies_second_half.csv', arr + os.EOL, 'utf8', function(d) {})
		if (i < movies.length) {
			setTimeout(function(){ trends(i + 1) }, 1000);
		}
	})
	.catch(function(error) {
		console.log(error);
	});   
}