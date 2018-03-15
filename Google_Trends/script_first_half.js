var movies = ["The 40-Year-Old Virgin", "51 Birch Street", "The Adventures of Sharkboy and Lavagirl in 3-D", "Æon Flux", "Aliens of the Deep", "Alone in the Dark", "The Amityville Horror", "Are We There Yet?", "The Aristocrats", "Assault on Precinct 13", "Bad News Bears", "The Ballad of Jack and Rose", "Batman Begins", "The Baxter", "Be Cool", "Beauty Shop", "Because of Winn-Dixie", "Bee Season", "Bewitched", "Bigger Than the Sky", "Boogeyman", "Brick", "Brokeback Mountain", "Broken Flowers", "The Brothers Grimm", "Capote", "Casanova", "The Cave", "Charlie and the Chocolate Factory", "Cheaper by the Dozen 2", "Chicken Little", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "The Chumscrubber", "Cinderella Man", "Coach Carter", "Constantine", "Corpse Bride", "The Crow: Wicked Prayer", "Cruel World", "Cry_Wolf", "Cursed", "Daltry Calhoun", "Dark Water", "Deepwater", "Derailed", "The Derby Stallion", "Deuce Bigalow: European Gigolo", "The Devil\'s Rejects", "Diary of a Mad Black Woman", "Dirty Love", "Dominion: Prequel to the Exorcist", "Domino", "Don\'t Come Knocking", "Doom", "Dreamer", "Duck", "The Dukes of Hazzard", "Duma", "The Dying Gaul", "Elektra", "Elizabethtown", "Enron: The Smartest Guys in the Room", "Everything Is Illuminated", "The Exorcism of Emily Rose", "The Family Stone", "Fantastic Four", "Favela Rising", "Fever Pitch", "First Descent", "Flightplan", "The Fog", "Forty Shades of Blue", "Four Brothers", "Frankenstein vs. the Creature from Blood Cove", "Fun with Dick and Jane", "The Game of Their Lives", "Get Rich or Die Tryin\'", "Getting Played", "Goal!", "The Gospel", "Good Night, and Good Luck", "The Great Raid", "The Greatest Game Ever Played", "Green Street", "Grizzly Man", "Guess Who", "Happy Endings", "Harry Potter and the Goblet of Fire", "Her Minor Thing", "Herbie: Fully Loaded", "Hide and Seek", "A History of Violence", "Hitch", "The Hitchhiker\'s Guide to the Galaxy", "The Honeymooners", "Hoodwinked!", "Hostage", "Hostel", "House of D", "House of Wax", "Hustle & Flow", "The Ice Harvest", "Ice Princess", "In Her Shoes", "In the Mix", "Inside Deep Throat", "Intermedio", "The Interpreter", "Into the Blue", "The Island", "The Jacket", "Jarhead", "Junebug", "Just Friends", "Just Like Heaven", "Kicking & Screaming", "Kids in America", "King Kong", "King\'s Ransom", "Kingdom of Heaven", "Kiss Kiss Bang Bang", "The L.A. Riot Spectacular", "Land of the Dead", "Lassie", "Last Days", "The League of Gentlemen\'s Apocalypse", "The Legend of Zorro", "Lonesome Jim", "Long Distance", "The Longest Yard", "Lord of War", "Lords of Dogtown", "The Lost City", "A Lot Like Love", "Mad Hot Ballroom", "Madagascar", "The Man", "Man of the House", "Marilyn Hotchkiss\' Ballroom Dancing and Charm School", "The Matador", "Match Point", "Me and You and Everyone We Know", "Memoirs of a Geisha", "MirrorMask", "Miss Congeniality 2: Armed and Fabulous", "Monster-in-Law", "The Mostly Unfabulous Social Life of Ethan Green", "Mr. & Mrs. Smith", "Mrs. Palfrey at the Claremont", "Munich", "Murderball", "Must Love Dogs", "Nanny McPhee", "Never Been Thawed", "The New World", "Neverwas", "New York Doll", "Nine Lives", "No Direction Home", "North Country", "Our Very Own", "The Pacifier", "The Perfect Man", "Pooh\'s Heffalump Movie", "Popstar", "Pretty Persuasion", "Prime", "The Prize Winner of Defiance, Ohio", "The Producers", "Proof", "Racing Stripes", "Rebound", "Red Eye", "Rent", "The Ring Two", "The Ringer", "Rize", "Robots", "Roll Bounce", "Rumor Has It...", "Sahara", "Sarah Silverman: Jesus Is Magic", "Saw II", "Serenity", "Shadowboxer", "Shopgirl", "Sin City", "The Sisterhood of the Traveling Pants", "The Sisters", "The Skeleton Key", "Sky High", "Smile", "Son of the Mask", "A Sound of Thunder", "The Squid and the Whale", "Star Wars: Episode III – Revenge of the Sith", "Stay", "Stealth", "Street Fight", "Supercross", "Syriana", "The Thing About My Folks", "The Three Burials of Melquiades Estrada", "Thru the Moebius Strip", "Thumbsucker", "Traci Townsend", "Transamerica", "Transporter 2", "Two for the Money", "Underclassman", "Undiscovered", "An Unfinished Life", "The Upside of Anger", "Venom", "Waiting...", "Walk the Line", "War of the Worlds", "The War Within", "The Weather Man", "Wedding Crashers", "The Wedding Date", "Where the Truth Lies", "White Noise", "Why We Fight", "The World\'s Fastest Indian", "xXx: State of the Union", "Yours, Mine and Ours", "Zathura", "A Prairie Home Companion", "Alien Autopsy", "Apocalypto", "Aquamarine", "Art School Confidential", "Babel", "Basic Instinct 2", "Big Momma\'s House 2", "Blood Diamond", "BloodRayne", "Casino Royale", "Children of Men", "Crossover", "Dave Chappelle\'s Block Party", "Déjà Vu", "Dirty Sanchez: the Movie", "Dreamgirls", "Eight Below", "Employee of the Month", "Eragon", "Everyone\'s Hero", "Fearless", "Final Destination 3", "Firewall", "Flicka", "Flushed Away", "Flyboys", "For Your Consideration", "Freedomland", "Friends with Money", "Garfield: A Tail of Two Kitties", "Grandma\'s Boy", "Gridiron Gang", "Happy Feet", "Harsh Times", "Hoodwinked!", "Hoot", "Hostel", "How to Eat Fried Worms", "Ice Age: The Meltdown", "Idiocracy", "Idlewild", "Invincible", "Jackass Number Two", "John Tucker Must Die", "Just My Luck", "Kenny", "Lady in the Water", "Larry the Cable Guy: Health Inspector", "Last Holiday", "Let\'s Go to Prison", "Lucky Number Slevin", "Madea\'s Family Reunion", "Man of the Year", "Marie Antoinette", "Material Girls", "Miami Vice", "Mission: Impossible III", "Monster House", "My Super Ex-Girlfriend", "Nacho Libre", "Nanny McPhee", "Night at the Museum", "Notes on a Scandal", "One Night with the King", "Open Season", "Over the Hedge", "Pan\'s Labyrinth", "Phat Girlz", "Poseidon", "Rocky Balboa", "Running Scared", "RV", "Saw III", "Scaredy Squirrel", "School for Scoundrels", "Scoop", "See No Evil", "Silent Hill", "Slither", "Snakes on a Plane", "Stay Alive", "Step Up", "Stick It", "Stranger Than Fiction", "Take the Lead", "Talladega Nights: The Ballad of Ricky Bobby", "Tenacious D in The Pick of Destiny", "Thank You for Smoking", "The Descent", "The Fountain", "The Guardian", "The Hills Have Eyes", "The Holiday", "The Illusionist", "The Lake House", "The Last Kiss", "The Marine", "The Night Listener", "The Pink Panther", "The Prestige", "The Pursuit of Happyness", "The Return", "The Santa Clause 3: The Escape Clause", "The Secret", "The Sentinel", "The Shaggy Dog", "The Texas Chainsaw Massacre: The Beginning", "The Wicker Man", "The Wild", "Tom-Yum-Goong", "Trailer Park Boys: The Movie", "Tristan and Isolde", "Turistas", "Ultraviolet", "Underworld: Evolution", "Unidentified", "United 93", "V for Vendetta", "Van Wilder: The Rise of Taj", "Volver", "Waist Deep", "We Are Marshall", "When a Stranger Calls", "You  Me and Dupree", "Zoom", "10 MPH", "The 11th Hour", "1408", "3:10 to Yuma", "30 Days of Night", "300", "Across the Universe", "Adrift in Manhattan", "Adventures of Johnny Tao", "Afghan Knights", "After Sex", "Alibi", "Alice Upside Down", "Aliens vs. Predator: Requiem", "All the Days Before Tomorrow", "Alvin and the Chipmunks", "An American Crime", "American Gangster", "American Pastime", "Americanizing Shelley", "Anamorph", "Aqua Teen Hunger Force Colon Movie Film for Theaters", "Arctic Tale", "Are We Done Yet?", "The Assassination of Jesse James by the Coward Robert Ford", "August Rush", "Autism: The Musical", "Awake", "Balls of Fury", "Because I Said So", "Bee Movie", "Before the Devil Knows You\'re Dead", "Believe", "Beowulf", "Beyond Belief", "Big Stan", "Blades of Glory", "Blonde Ambition", "The Blue Hour", "Blue State", "The Bourne Ultimatum", "Bratz: The Movie", "The Brave One", "Breach", "Bridge to Terabithia", "Broken English", "Brooklyn Rules", "Brotherhood of Blood", "The Brothers Solomon", "The Bucket List", "Cake: A Wedding Story", "Captivity", "Care Bears: Oopsy Does It!", "Cassandra\'s Dream", "Catacombs", "Chapter 27", "Charlie Wilson\'s War", "Chicago 10", "Code Name: The Cleaner", "The Comebacks", "The Condemned", "Control", "Crazy Love", "Cthulhu", "Daddy Day Camp", "Daddy\'s Little Girls", "Dalai Lama Renaissance", "Dan in Real Life", "Darfur Now", "Dark Matter", "Day Zero", "Dead Silence", "Death Sentence", "Delta Farce", "Devil Girl", "Dirty Country", "Disturbia", "The Diving Bell and the Butterfly", "Eastern Promises", "Ed Gein: The Butcher of Plainfield", "Elvis and Anabelle", "Enchanted", "Epic Movie", "Evan Almighty", "Evening", "The Ex", "Extreme Movie", "Fantastic Four: Rise of the Silver Surfer", "Feel the Noise", "Finishing the Game", "Firehouse Dog", "The Flock", "For the Bible Tells Me So", "Fracture", "Freakshow", "Fred Claus", "Freedom Writers", "Full of It", "The Game Plan", "The Gene Generation", "Georgia Rule", "Ghost Rider", "Ghosts of Abu Ghraib", "The Girl in the Park", "Glass Lips", "The Go-Getter", "God\'s Ears", "The Golden Compass", "Gone Baby Gone", "Good Luck Chuck", "The Good Night", "Grace Is Gone", "Gracie", "The Great Debaters", "Grindhouse", "Hairspray", "Halloween", "The Hammer", "Happily N\'Ever After", "Harry Potter and the Order of the Phoenix", "Hear and Now", "The Heartbreak Kid", "Highlander: The Source", "The Hills Have Eyes 2", "The Hitcher", "Hitman", "The Hoax", "Honeydripper", "Hostel: Part II", "Hot Rod", "The Hunting Party", "I Am an American Soldier", "I Am Legend", "I Could Never Be Your Woman", "I Know Who Killed Me", "I Now Pronounce You Chuck and Larry", "I Think I Love My Wife", "I\'m Not There", "In the Land of Women", "In the Valley of Elah", "Interview", "Into the Wild", "The Invasion", "The Invisible", "Itty Bitty Titty Committee", "Joshua", "Juno", "Kickin\' It Old Skool", "Killing Zelda Sparks", "The King of Kong: A Fistful of Quarters", "King of Punk", "The Kingdom", "The Kite Runner", "Knock Knock", "Knocked Up", "Lady Magdalene\'s", "Lake of Fire", "Lars and the Real Girl", "The Last Mimzy", "The Last Sin Eater", "License to Wed", "The Life Before Her Eyes", "Lions for Lambs", "The List", "Live Free or Die Hard", "The Lookout", "Love in the Time of Cholera", "Lucky You", "Lust, Caution", "Manda Bala (Send a Bullet)", "Margot at the Wedding", "Marigold", "Married Life", "Martian Child", "Meet the Robinsons", "The Messengers", "Michael Clayton", "A Mighty Heart", "The Mist", "Mister Lonely", "A Modern Twain Story: The Prince and the Pauper", "Monster Camp", "The Mother of Tears", "Moving McAllister", "Mr. Brooks", "Mr. Magorium\'s Wonder Emporium", "Mr. Schneider Goes to Washington", "Mr. Woodcock", "Mr. Untouchable", "Music and Lyrics", "My Bollywood Bride", "My Sexiest Year", "Nancy Drew", "Nanking", "The Nanny Diaries", "National Treasure: Book of Secrets", "Netherbeast Incorporated", "Next", "No Country for Old Men", "No End in Sight", "No Reservations", "Nobel Son", "Norbit", "Normal Adolescent Behavior", "Numb", "The Number 23", "Ocean\'s Thirteen", "Oh, Saigon", "Only for You", "Operation Homecoming: Writing the Wartime Experience", "P.S. I Love You", "P2", "Padre Nuestro", "Paranoid Park", "Passage to Zarahemla", "Pathfinder", "The Perfect Holiday", "Perfect Stranger", "Persepolis", "Pirates of the Caribbean: At World\'s End", "The Poughkeepsie Tapes", "Premonition", "Press Start", "Pride", "Primeval", "Ratatouille", "The Reaping", "Redline", "Redrum", "Reign Over Me", "Remember the Daze", "Rendition", "Reno 911!: Miami", "Reservation Road", "Resident Evil: Extinction", "Resurrecting the Champ", "Rocket Science", "Rolling", "Rush Hour 3", "Savage Grace", "The Savages", "Saw IV", "The Seeker", "Seraphim Falls", "Shadow Puppets", "Shoot \'Em Up", "Shooter", "ShowBusiness: The Road to Broadway", "Shrek the Third", "Sicko", "The Simpsons Movie", "Sinner", "Sinners", "Sleuth", "Slipstream", "Smiley Face", "Smokin\' Aces", "Socket", "Spider-Man 3", "Spiral", "Stardust", "The Star of Bethlehem", "Starting Out in the Evening", "A State of Vine", "Still Green", "Stomp the Yard", "Strange Culture", "Stuck", "Suburban Girl", "Suffering Man\'s Charity", "Sunshine", "Superbad", "Surf\'s Up", "Sweeney Todd: The Demon Barber of Fleet Street", "Talk to Me", "Taxi to the Dark Side", "The Ten", "There Will Be Blood", "Things We Lost in the Fire", "TMNT", "Transformers", "Underdog", "Vacancy", "Waitress", "Walk Hard: The Dewey Cox Story", "War", "War/Dance", "The Water Horse: Legend of the Deep", "We Are the Strange", "Welcome to Nollywood", "We Own the Night", "What Love Is", "What We Do Is Secret", "Whisper", "White Noise: The Light", "Who\'s Your Caddy?", "Why Did I Get Married?", "Wild Hogs", "Wind Chill", "Year of the Dog", "Year of the Fish", "You Kill Me", "Youth Without Youth", "Zodiac", "10,000 BC", "21", "27 Dresses", "88 Minutes", "The Accidental Husband", "An American Carol", "American Teen", "Appaloosa", "August", "Baby Mama", "Babylon A.D.", "Ballast", "Bangkok Dangerous", "Be Kind Rewind", "Bedtime Stories", "Beer for My Horses", "The Betrayal - Nerakhoon", "Beverly Hills Chihuahua", "Body of Lies", "Bolt", "The Boy in the Striped Pyjamas", "Burn After Reading", "Cadillac Records", "Changeling", "Che", "Choke", "The Chronicles of Narnia: Prince Caspian", "City of Ember", "Cloverfield", "College", "College Road Trip", "The Curious Case of Benjamin Button", "The Dark Knight", "The Day the Earth Stood Still", "Deal", "The Deal", "Death Race", "Deception", "Defiance", "Definitely, Maybe", "Delgo", "Disaster Movie", "Doomsday", "Doubt", "Drillbit Taylor", "Eagle Eye", "Elegy", "Expelled: No Intelligence Allowed", "The Express", "The Eye", "The Family That Preys", "Felon", "Fireflies in the Garden", "Fireproof", "First Sunday", "Flash of Genius", "Fool\'s Gold", "The Forbidden Kingdom", "Forever Strong", "Forgetting Sarah Marshall", "Four Christmases", "Frost/Nixon", "Frozen River", "Funny Games", "The Garden", "Garden Party", "Get Smart", "Ghost Town", "Gran Torino", "Hamlet 2", "Hancock", "Hannah Montana & Miley Cyrus: Best of Both Worlds Concert", "The Happening", "Harold", "Harold & Kumar Escape from Guantanamo Bay", "The Haunting of Molly Hartley", "Hellboy II: The Golden Army", "Henry Poole Is Here", "Hero Wanted", "High School Musical 3: Senior Year", "Horton Hears a Who!", "The Hottie and the Nottie", "The House Bunny", "Igor", "In Bruges", "The Incredible Hulk", "Indiana Jones and the Kingdom of the Crystal Skull", "Inkheart", "Iron Man", "Journey to the Center of the Earth", "Jumper", "Kit Kittredge: An American Girl", "Kung Fu Panda", "Lakeview Terrace", "Last Chance Harvey", "Leatherheads", "The Love Guru", "The Longshots", "The Lucky Ones", "Mad Money", "Madagascar: Escape 2 Africa", "Made of Honor", "Mamma Mia!", "Man on Wire", "Marley & Me", "Max Payne", "Meet Dave", "Meet the Browns", "Meet the Spartans", "The Midnight Meat Train", "Milk", "Miracle at St. Anna", "Mirrors", "The Mummy: Tomb of the Dragon Emperor", "My Best Friend\'s Girl", "My Sassy Girl", "Never Back Down", "Nick and Norah\'s Infinite Playlist", "Nights in Rodanthe", "Nim\'s Island", "Nothing But the Truth", "Nothing Like the Holidays", "One Missed Call", "The Other Boleyn Girl", "Over Her Dead Body", "Passengers", "Pathology", "Patti Smith: Dream of Life", "Pineapple Express", "The Pirates Who Don\'t Do Anything: A VeggieTales Movie", "Pray the Devil Back to Hell", "Pride and Glory", "Prom Night", "The Promotion", "Proud American", "Punisher: War Zone", "Quantum of Solace", "Quarantine", "Rachel Getting Married", "Rambo", "The Reader", "Redbelt", "Religulous", "Rent: Filmed Live on Broadway", "Repo! The Genetic Opera", "Revolutionary Road", "Righteous Kill", "The Rocker", "Role Models", "The Ruins", "Saw V", "The Secret Life of Bees", "Semi-Pro", "Seven Pounds", "Sex and the City", "Sex Drive", "Shutter", "The Sisterhood of the Traveling Pants 2", "Sleepwalking", "Smart People", "Soul Men", "Space Chimps", "Speed Racer", "The Spiderwick Chronicles", "Spike", "The Spirit", "Spy School", "Star Wars: The Clone Wars", "Step Brothers", "Step Up 2: The Streets", "Stop-Loss", "Strange Wilderness", "The Strangers", "Street Kings", "Superhero Movie", "Swing Vote", "Taken", "The Tale of Despereaux", "Traitor", "Tropic Thunder", "Trouble the Water", "Twilight", "U2 3D", "Untraceable", "Valkyrie", "Vantage Point", "Vicky Cristina Barcelona", "Visioneers", "W.", "The Wackness", "WALL-E", "Waltz with Bashir", "Wanted", "War, Inc.", "Welcome Home Roscoe Jenkins", "What Doesn\'t Kill You", "What Happens in Vegas", "What Just Happened", "Witless Protection", "The Women", "The Wrestler", "The X-Files: I Want to Believe", "Yes Man", "You Don\'t Mess with the Zohan", "Zack and Miri Make a Porno", "(500) Days of Summer", "12 Rounds", "17 Again", "2012", "9", "Adam", "Adventureland", "After.Life", "Alien Trespass", "Aliens in the Attic", "All About Steve", "Alvin and the Chipmunks: The Squeakquel", "Amelia", "American Violet", "Angels & Demons", "The Answer Man", "Arcadia Lost", "Armored", "Assassination of a High School President", "Astro Boy", "Avatar", "Away We Go", "The Bad Lieutenant: Port of Call New Orleans", "Bandslam", "Battle for Terra", "Berdella", "Beyond a Reasonable Doubt", "Big Fan", "The Blind Side", "Boogie Town", "The Boondock Saints II: All Saints Day", "The Box", "Bride Wars", "Brothers", "The Brothers Bloom", "Brother\'s War", "Brothers at War", "Brüno", "C Me Dance", "Capitalism: A Love Story", "Carriers", "The Chaos Experiment", "A Christmas Carol", "Cirque du Freak: The Vampire\'s Assistant", "Cloudy with a Chance of Meatballs", "Cold Souls", "The Collector", "Confessions of a Shopaholic", "Coraline", "Couples Retreat", "The Cove", "Crank: High Voltage", "Crazy Heart", "The Cross", "Crossing Over", "Dance Flick", "Did You Hear About the Morgans?", "District 9", "Drag Me to Hell", "Dragonball Evolution", "Duplicity", "Echelon Conspiracy", "Every Little Step", "Everybody\'s Fine", "Extract", "Fame", "Fantastic Mr. Fox", "Fast & Furious", "Fighting", "The Final Destination", "Fired Up!", "Food, Inc.", "Fragments", "Friday the 13th", "Funny People", "G-Force", "G.I. Joe: The Rise of Cobra", "Gallowwalker", "Gamer", "Gentlemen Broncos", "Ghosts of Girlfriends Past", "Gigantic", "The Girlfriend Experience", "The Goods: Live Hard, Sell Hard", "The Great Buck Howard", "The Grudge 3", "Halloween II", "The Hangover", "Hannah Montana: The Movie", "Harry Potter and the Half-Blood Prince", "The Haunting in Connecticut", "He\'s Just Not That Into You", "The Hole", "Homecoming", "Horrorween", "Horsemen", "Hotel for Dogs", "Humpday", "I Can Do Bad All By Myself", "I Hate Valentine\'s Day", "I Hope They Serve Beer in Hell", "The Hurt Locker", "I Love You, Beth Cooper", "I Love You, Man", "Ice Age: Dawn of the Dinosaurs", "Imagine That", "The Imaginarium of Doctor Parnassus", "The Informant!", "The Informers", "Inglourious Basterds", "The International", "Invictus", "An Invisible Sign", "The Invention of Lying", "It Might Get Loud", "It\'s Complicated", "Janky Promoters", "Jennifer\'s Body", "Jonas Brothers: The 3D Concert Experience", "Julie & Julia", "Knowing", "Labor Pains", "Laid to Rest", "Land of the Lost", "The Last House on the Left", "Law Abiding Citizen", "Life During Wartime", "The Lightkeepers", "The Limits of Control", "Love Happens", "Love N\' Dancing", "The Lovely Bones", "Lymelife", "Madea Goes to Jail", "The Maiden Heist", "Management", "Me and Orson Welles", "The Men Who Stare at Goats", "The Merry Gentleman", "The Messenger", "Michael Jackson\'s This Is It", "Miss March", "Monsters vs. Aliens", "Motherhood", "My Bloody Valentine 3D", "My Life in Ruins", "My Sister\'s Keeper", "My One and Only", "New in Town", "New Moon", "New York, I Love You", "Next Day Air", "Night at the Museum: Battle of the Smithsonian", "Nine", "Ninja Assassin", "Not Easily Broken", "Not Forgotten", "Notorious", "Observe and Report", "Obsessed", "Old Dogs", "Opie Gets Laid", "Orphan", "Pandorum", "Paper Heart", "Paul Blart: Mall Cop", "A Perfect Getaway", "Phoebe in Wonderland", "The Pink Panther 2", "Planet 51", "Post Grad", "Powder Blue", "Precious", "The Princess and the Frog", "The Private Lives of Pippa Lee", "The Proposal", "Public Enemies", "Push", "Quantum Quest: A Cassini Space Odyssey", "Race to Witch Mountain", "The Road", "Saw VI", "A Serious Man", "Sherlock Holmes", "Shrink", "Shorts", "A Single Man", "The Slammin\' Salmon", "The Soloist", "Sorority Row", "Spread", "The Star of Bethlehem", "Star Trek", "State of Play", "The Stepfather", "Street Fighter: The Legend of Chun-Li", "Surrogates", "The Taking of Pelham 123", "Taking Woodstock", "Tekken", "Tennessee", "Terminator Salvation", "Tetro", "The Time Traveler\'s Wife", "Transformers: Revenge of the Fallen", "Trick \'r Treat", "True Adolescents", "Tyson", "The Ugly Truth", "The Unborn", "Underworld: Rise of the Lycans", "The Uninvited", "Up", "Up in the Air", "Wah Do Dem", "Watchmen", "We Live in Public", "What Goes Up", "Whatever Works", "Where the Wild Things Are", "Whiteout", "Whip It", "World\'s Greatest Dad", "X Games 3D: The Movie", "X-Men Origins: Wolverine", "Year One", "The Young Victoria", "Zombieland", "127 Hours", "8: The Mormon Proposition", "The A-Team", "A Little Help", "Adventures of Power", "Alice in Wonderland", "All Good Things", "Alpha and Omega", "The American", "The Back-up Plan", "Barry Munday", "BearCity", "Big Money Rustlas", "Black Swan", "Blue Valentine", "The Book of Eli", "Bouncing Cats", "The Bounty Hunter", "Brooklyn\'s Finest", "Brutal Beauty: Tales of the Rose City Rollers", "Buried", "Burlesque", "Case 39", "Casino Jack", "Casino Jack and the United States of Money", "Cats & Dogs: The Revenge of Kitty Galore", "Charlie St. Cloud", "The Chronicles of Narnia: The Voyage of the Dawn Treader", "City Island", "Clash of the Titans", "Client 9: The Rise and Fall of Eliot Spitzer", "The Company Men", "Conviction", "Cop Out", "Countdown to Zero", "Country Strong", "The Crazies", "Crazy on the Outside", "Cyrus", "Date Night", "Darkening Sky", "Daybreakers", "Dead Awake", "Dear John", "Death at a Funeral", "Despicable Me", "Devil", "Diary of a Wimpy Kid", "Dinner for Schmucks", "Dirty Girl", "Due Date", "Easy A", "Eat Pray Love", "The Twilight Saga: Eclipse", "Edge of Darkness", "The Expendables", "The Extra Man", "Extraordinary Measures", "Fair Game", "Faster", "The Fighter", "Flipped", "For Colored Girls", "Freakonomics", "From Paris with Love", "Frozen", "Furry Vengeance", "Game of Death", "Get Him to the Greek", "Get Low", "Going the Distance", "The Good Guy", "The Greatest", "Green Zone", "Greenberg", "Grown Ups", "Gulliver\'s Travels", "Happy Tears", "Hachiko: A Dog\'s Story", "Harry Potter and the Deathly Hallows: Part 1", "Hereafter", "Holy Rollers", "Hot Tub Time Machine", "How Do You Know", "How to Train Your Dragon", "Hubble 3D", "Hurricane Season", "Hyenas", "I Love You Phillip Morris", "I\'m Still Here", "Inception", "Iron Man 2", "It\'s Kind of a Funny Story", "Jack Goes Boating", "Jackass 3-D", "Jonah Hex", "The Joneses", "Just Wright", "Kaboom", "The Karate Kid", "Kick-Ass", "The Kids Are All Right", "The Killer Inside Me", "Killers", "Knight and Day", "Knucklehead", "The Last Airbender", "The Last Exorcism", "The Last Song", "Leap Year", "Legend of the Guardians: The Owls of Ga\'Hoole", "Legendary", "Legion", "Let Me In", "Letters to God", "Letters to Juliet", "Life as We Know It", "Like Dandelion Dust", "Little Fockers", "The Losers", "Lottery Ticket", "Love Ranch", "Love & Other Drugs", "MacGruber", "Machete", "Marmaduke", "Marwencol", "Megamind", "Middle Men", "Mirrors 2", "Morning Glory", "Mother and Child", "My Soul to Take", "Nanny McPhee Returns", "Never Let Me Go", "The Next Three Days", "Night Catches Us", "A Nightmare on Elm Street", "The Other Guys", "Our Family Wedding", "Paper Man"];
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
		fs.appendFile('movies.csv', arr + os.EOL, 'utf8', function(d) {})
		if (i < movies.length) {
			setTimeout(function(){ trends(i + 1) }, 1000);
		}
	})
	.catch(function(error) {
		console.log(error);
	});   
}