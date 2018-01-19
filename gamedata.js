var roomArray = [
	{
		//Index 0
		title:'...',
		text:'The bright sun light blinds you as your eyes adjust to your surroundings, a beautiful green field with vast mountain ranges surrounding it. You hear the birds chirping in the distant, a melodic tune you swore you heard a street performer playing a few days ago in the subway. The colors of the area seem to radiate and give off their own light. As you you look around you notice you are not alone.\"Mother told me you were coming\" said the cheerful man. He was a tall slender person with bright red hair which looked like he just got out of bed. He wore a blue robe that looked similar to your aunts bathrobe. He had a happy but tired smile to him and his eyes seemed to be closed like he was asleep. His entire being seemed like he just woke up and was in dire need of a coffee.\"Hello I am Hypnos, the God of Sleep',
		choices:[
			{
				text:'\"My name is (insert name)\"',
				index:1
			},
			{
				text:'\"Where am I ?\"',
				index:2
			},
			{
				text:'\"Hello. Tell me about the Oneiroi, especially the one in the area.\"',
				index:3
			},
			{
				text:'\"Hello Hypnos. Where should I begin?\"',
				index:4
			},
			{
				text:'\"I should get going now, I don\'t have much time.\"',
				index:5
			}

		]
	},
  {
		//Index 1
		title:'Hypnos',
		text:'\"It is a pleasure to meat you (insert name) it is rare for people to introduce themselves nowadays, they are always so busy and in a rush.\" He pouted a little which made you wonder who the god has been talking to recently and whether the encounter went well.',
		choices:[
			{
				text:'\"Where am I ?\"',
				index:2
			},
			{
				text:'\"Tell me about the Oneiroi, especially the one in the area.\"',
				index:3
			},
			{
				text:'\"Where should I begin?\"',
				index:4
			},
			{
				text:'\"I should get going now, I don\'t have much time.\"',
				index:5
			}

		]
	},
  {
		//Index 2
		title:'Hypnos',
		text:'\“This place is called Laguna Vale. Pretty, isn\’t it? This is a figment of your subconsciousness. Seems like another version of the vast fields in Switzerland.\" You recall the trip you had a few months ago. It was an amazing holiday where you decided that you would return to the beautiful lakes and the towering alps. \"However, even though it seems pretty be wary as the Melas are the Gods of nightmares and all may not be what it seems.\”',
    choices:[

			{
				text:'\"Tell me about the Oneiroi, especially the one in the area.\"',
				index:3
			},
			{
				text:'\"Where should I begin?\"',
				index:4
			},
			{
				text:'\"I should get going now, I don\'t have much time.\"',
				index:5
			}
		]
	},
  {
		//Index 3
		title:'Hypnos',
		text:'\"We refer to them as the Melas when they are like this. This way the name Oneiroi does not get tainted. The Melas you are hunting in this world is known as Phobetor and they are known as the main God of Nightmares. Not much is known about them but that Phobetor is a shapeshifter. So they can be anywhere in the area.\"',
    choices:[

			{
				text:'\"Where am I?\"',
				index:2
			},
			{
				text:'\"Where should I begin?\"',
				index:3
			},
			{
				text:'\"I should get going now, I don\'t have much time.\"',
				index:5
			}

		]
	},
  {
		//Index 4
		title:'Hypnos',
		text:'\"What you do and where you go is entirely up to you. There is a town not far from here where you can gather some information to help you find the Melas.I cannot accompany you in your adventure but once you find the Melas I can deal with the hard part. There is also a forest to the east and a mountain range to the north. My brothers will be waiting for you there to give you guidance on the Melas that they are hunting. I suggest you should start with the town as Phobetor is most liky going to cause more havoc than the other two Melas.\"',
    choices:[

			{
				text:'\"Where am I?\"',
				index:2
			},
			{
				text:'\"Tell me more about who I have to find.\"',
				index:3
			},
			{
				text:'\"I should get going now, I don\'t have much time.\"',
				index:5
			}

		]
	},
  {
		//Index 5
		title:'Hypnos',
		text:'\"Time is of the esscence here. Just remember to return to me once who find the Melas.Do not try to deal with them on your own. It will not go well.\"',
    choices:[

			{
				text:'Head to the crossroad',
				index:2
			}

		]
	},
  {
		//Index 6
		title:'Crossroads',
    text:'You arrive at a crossroad with the path splitting into four different paths and a sign post stands firmly infront of you. There are four arrows pointing in different directions on the sign post. The writing on it is faded but you can make out the words; the arrow pointing south as the words \"Laguna Town\", to the east \"Aurora Glade\", to the north \"Chesil Peak\" and from the direction you came from the sign reads \"Mallbard Tree\". Where should you go?',
    choices:[

			{
				text:'\"Laguna Town\"',
				index:7
			},
			{
				text:'\"Aurora Glade\"',
				index:8
			},
			{
				text:'\"Chesil Peak\"',
				index:9
			},
			{
				text:'\"Mallbard Tree\"',
				index:57
			},

		]
	},
  {
		//Index 7
		title:'Town Entrance',
    text:'It takes you a few minutes to get to the entrance of the town. A massive sign hangs above you with the words \"Laguna Town\" written in massive black writing.You notice that the town is very small and from what you can see it contains a Tavern, a Library, a General Good Store and a Guard Post yet the one thing it seems to be missing were houses. The town is eerily quiet as well, not a single soul to be seen. Where would you like to go?',
    choices:[

			{
				text:'Head to the Tavern',
				index:10
			},
			{
				text:'Head to the Library',
				index:11
			},
			{
				text:'Head to the General Good Store',
				index:12
			},
			{
				text:'Head to the Guard Post',
				index:13
			}
		]
	},
  {
		//Index 10
		title:'Tavern',
    text:'As you approach the tavern you see it to be an old establishment built with strong lumber, however even though the establishment looks old the timber looks to be new without a single fade in colour.As you walk in you notice the tavern to be empty apart from for people sat in the corner of the room, they looked weathered and tired but they didn\'t look up as you passed them. You reach the bar where a tall, muscled man with dark stubble on his face stood. His hair was ragged and his eyes looked like they had seen much horrors. His sleeves were rolled up and from there you noticed that scars ran along his forearms. He was staring at the flask he was wipping with a cloth and as you get closer he looks up at you and stares you straight in the eye.\"I don\'t believe i\'ve seen you before. Are you new? Can I get you anything?\"',
		    choices:[

			{
				text:'\"I would like a drink please. Anything will do.\"',
				index:14
			},
			{
				text:'\"My name is (insert name) how do you do? \"',
				index:15
			},
			{
				text:'\"Can you tell me some information about the town?\"',
				index:16
			},
			{
				text:'Return to the town entrance',
				index:7
			}
		]
	},
  {
		//Index 14
		title:'Tavern',
    text:'He nods and pors a pint of dark ale the hands it over to you.\"For newcomers it is on the house.\" You thank him and drink the ale. It had a very bitter taste but it sweetened after a period of time. \"Anything else you would like?\"',
		    choices:[
			{
				text:'\"I would like another drink please. Anything will do.\"',
				index:14
			},
			{
				text:'\"My name is (insert name) how do you do? \"',
				index:15
			},
			{
				text:'\"Can you tell me some information about the town?\"',
				index:16
			},
			{
				text:'Return to the town entrance',
				index:7
			}
		]
	},
  {
		//Index 15
		title:'Tavern',
    text:'\"Nice to meet you, the name is Cole. What brings you to our town?\"',
		    choices:[
			{
				text:'\"Can you tell me some information about the town?\"',
				index:16
			},
			{
				text:'\"Is there anything you can tell me about the townsfolk? Anything weird about them? \"',
				index:17
			},
			{
				text:'Leave abruptly. (This annoys Cole)',
				index:7
			}
		]
	},
  {
		//Index 16
		title:'Tavern',
    text:'Coles face changed slightly. It looked stern and on edge.\"It is a quiet place, with good people.\" He said whilst wiping a pint glass. \" People that don\'t like strangers asking questions.\"',
		    choices:[
			{
				text:'\"Is there anything you can tell me about the townsfolk? Anything weird about them? \"',
				index:17
			},
			{
				text:'Apologise and leave',
				index:7
			}
		]
	},
  {
		//Index 17
		title:'Tavern',
    text:'Cole looked worried and semmed to looked shock. \"And what is it to you ?  Who are you really? Why are you snooping around?\"',
		    choices:[
			{
				text:'\"Alright I will just tell you straight right now. We are in a dream world, my dream world. I\'ve been pulled away from my own world into this one by the Melas, the Gods of Nightmares. \" We are all in grave danger and you need to help me find the Melas.',
				index:18
			},
			{
				text:'\"I am a demon hunter sent by the church to wander these planes till all manners of demons are removed from this world.\" It has come to my attention that there seems to be a demon roaming this area and I am sworn to hunt it down and kill it. So if I were you, I would help me.',
				index:19
			},
			{
				text:'\"Look I cannot tell you everything but I am in need of someone to rain me infighting monsters. I fear there may be some chasing me.\"',
				index:20
			},
			{
				text:'You leave abrupty and head outside the tavern',
				index:7
			}
		]
	},
  {
		//Index 18
		title:'Tavern',
    text:'Cole lets out a deep sigh \“Look there, I don’t know what you have been smoking but that story sounds crazy. This world is a dream? Your dream? Buddy I don’t even know you and now you are telling me that I am not real? You are definitely on something. You should go see Luca in the library to help you find a way to come down from whatever it is you are on.\” He shakes his head \“Well if you excuse me I have customers to serve.\” He gives a little nod and walks away.',
		choices:
		[
			{
				text:'You thank him and head outside.',
				index:7
			}
	]
	},
  {
		//Index 19
		title:'Tavern',
    text:'\“Demons? Here? Oh Gods. And the Church sent you? This is bad, this is serious. I am afraid I cannot help you much as I don’t really leave the Tavern. You should go to the Guard Post and talk to Arnette, she has more experience than me when it comes to hunting demons. But if you ask me the General Goods Store would probably be a good place to start looking.\"',
		choices:
		[
			{
				text:'You thank him and head outside.',
				index:7
			}
	]
	},
  {
		//Index 20
		title:'Tavern',
    text:'Coles face twists in that of anger.\“Monsters? You want to talk about monsters? Well I can tell you one thing and that there aren’t any here. You are looking in the wrong place.\” He begins to take deep breaths and seems to have calmed himself down. \“Sorry, it’s just that a few years back lots of people were killed in this town because strangers thought we were monsters. If you ask me I think they are the monsters. No if you do not mind I think yoi should take your leave.\"',
		choices:
		[
			{
				text:'You thank him and head outside.',
				index:7
			}
	]
	},
  {
		//Index 20
		title:'Library',
    text:'It is an old looking building from the outside and it looks like it isn’t structurally intact, however when you enter it seems like a completely different building all together. The inside looked well kept, not a single spec of dust could be seen and there was a certain warmth and coziness that hits you as you walk in which makes you just want to sit and read for hours on end. Sitting down would be difficult however, as the only couch in your current vision was occupied by a young girl, you note that she looks younger than 20, she was laid across the length of the couch reading a book. You can’t make out what book she is reading as the cover is completely tattered. As you look around more you see a plaque with the words “Luca-Librarian”.',
		choices:
		[
			{
				text:'Say hello to her.',
				index:21
			},
			{
				text:'Walk around the Library',
				index:22
			},
			{
				text:'Stand in silence and wait for someone to approach you.',
				index:23
			},
			{
				text:'Leave the Library',
				index:7
			}
	]
	},
  {
		//Index 21
		title:'Library',
    text:'She peers over her book and looks at you straight in the eye. You notice that she has a shaggy chestnut coloured hair that stops just above her shoulders. Her facial features were the definition of petite but what really caught your attention was her eyes, which were just the right shade of purple and blue that it looked like you were staring deep into space. “You are new.” She commented in a soft voice that match her face perfectly.',
		choices:
		[
			{
				text:'Tell her your name.',
				index:24
			},
			{
				text:'Smile and walk around the Library',
				index:22
			},
			{
				text:'Ask her where you can find Luca.',
				index:25
			},
			{
				text:'Leave the Library',
				index:7
			}
	]
	},
  {
		//Index 22
		title:'Library',
    text:'You head straight for the shelves of books. You take a note on how well organised the entire library was. A thought cropped in your head and you walk towards the ancient greek section. You find out that there is only book on the subject and as you begin to pick it up a voice speaks up from behind you.” Did you find one you like?” You turn to see the girl stood behind you.',
		choices:
		[
			{
				text:'\"Actually I have.\" Show her the book \"Can you help me find Luca please.\"',
				index:25
			},
			{
				text:'You put the book down\"No I haven\'t. Do you know where I can find Luca?\"',
				index:25
			},
			{
				text:'You say no and thank her and leave.',
				index:7
			}
	]
	},
  {
		//Index 23
		title:'Library',
    text:'She looked at you defensively \"You are creepy, I would like you to leave please.\"',
		choices:
		[
			{
				text:'Leave.',
				index:7
			}
	]
	},
  {
		//Index 24
		title:'Library',
    text:'She puts the book down and walks up to you. You notice that she is shorter than you however you are fairly tall so you are not surprised. As she walks over you notice that her movements seem so fluid that it is as she is levitating towards you. “Hmm,” she looks at you from bottom to top “You look like you are a weird one.”',
		choices:
		[
			{
				text:'Jokingly thank her. \"Can you tell me where I can find Luca?\"',
				index:25
			},
			{
				text:'\"Weird? I think I look really normal thank you.\"',
				index:26
			},
			{
				text:'Leave.',
				index:7
			}
	]
	},
  {
		//Index 25
		title:'Library',
    text:'“You are standing right in front of her” she said with a smile. “Lucarna Sueño at your service.” she does a little curtsey “But people just call me Luca.”',
		choices:
		[
			{
				text:'\"It is really nice to meet you. Can I have some help please?\"',
				index:27
			},
			{
				text:'\"Aren\'t you too young to run a library?\"',
				index:28
			},
			{
				text:'Look kid stop joking around and tell me where Luca is.',
				index:29
			},
			{
				text:'Leave.',
				index:7
			}
	]
},
{
	//Index 26
	title:'Library',
	text:'She laughs \“I do not see why most people find being called weird offensive. Anyway, my name is Luca, I am the Librarian.\"',
	choices:
	[
		{
			text:'\"It is really nice to meet you. Can I have some help please?\"',
			index:27
		},
		{
			text:'\"Aren\'t you too young to run a library?\"',
			index:28
		},
	]
},
{
	//Index 27
	title:'Library',
	text:'\“Sure, I would love to help. I have extensive knowledge on almost all the topics that this Library covers. I have read every single book in this Library more times than I care to remember. Now what is the problem? Physical? Mental? Emotional?...Girl problems? Boy problems?...\” Her eyes quickly look at me up and down \“Performance issues? Anything you name it.\”',
	choices:
	[
		{
			text:'Shake your head in embarrassement. \"No none of that. I was wondering if you can tell me about the Oneiroi and the Melas.\"',
			index:30
		},
		{
			text:'Shake your head in embarrassement.\"No none of that. I was wondering if you can give me some information on Demons. I am a demon hunter for the church.\"',
			index:31
		},
		{
			text:'Laugh off the comment. \"I am looking for some information on this area and its inhabitants.\"',
		}
	]
},
{
	//Index 28
	title:'Library',
	text:'She smiles at you and she seemed pleased with the comment. \"I am actually a few hundered years old.\" She moves her hair showing her elf ears.\"Elves live for a very long time but technically you are right, I am only 19 in elf years. So how can I help you?\"',
	choices:
	[
		{
			text:'\"Do you think you can tell me about the Oneiroi?\"',
			index:30
		},
		{
			text:'\"Do you think you can tell me about demons?\"',
			index:31
		},
		{
			text:'\"Do you think you can tell me about the people how live here?\"',
		}
	]
},
{
	//Index 29
	title:'Library',
	text:'Her face changes into a serious expression\"I was not joking around, however I dislike being treated like a child. I\'d like for you to leave please.\"',
	choices:
	[
		{
			text:'Leave',
			index:7
		}
	]
},
{
	//Index 30
	title:'Library',
	text:'Her eyes began to sparkle with excitement. \"Greek Mythology, a topic that not many people asks about.Now the Oneiroi in particular yes? Well not much is known about them apart from they are children of Nyx, there are three of them, Morpheus, Phobetor, and Phantasos. They are the Gods of Dreams. Not much else is said about them however Phobetor is said to be able to take shape of any woodland creature. Animal or being.\"',
	choices:
	[
		{
			text:'\"Wow okay that infromation is really useful thank you.\" Leave the area.',
			index:7
		}
	]
},
{
	//Index 31
	title:'Library',
	text:'\"Demon Hunter are we? Well there are a lot of different types that exist in the world. The most common one would be the shadow demon. Shadow demons are known to infect people in their dreams and trap them there. They then possess their bodies and control them to do horrible things. They most commonly reside in mountain caves and feast at night. They can take human form and feed on the weakest first. I hope it helps.\"',
	choices:
	[
		{
			text:'\"Thank you so much.\" Leave.',
			index:7
		}
	]
},
{
	//Index 32
	title:'Library',
	text:'\"They are nice people. I don\'t really know much about them because I spend most of my time in here reading and not many of them come in here to have a conversation. The person I see the most would be Aurien, the old shop keeper at the General Store. We basically grew up togethher. HHe is a nice man and lived here before anyone else, apart from myself of course. You should say hi to him. I haven\'t seen him lately though.\"',
	choices:
	[
		{
			text:'Thank her and leave.',
			index:7
		}
	]
},
{
	//Index 12
		title:'General Good Store',
		text:'You open the door and a bell ding greets you as you enter. You see no one at the shop counter but there is a sign on it that says \“Gone for 5 mins. If urgent please come to the back of the shop\”.',
		choices:
		[
			{
				text:'Scream out to anyone',
				index:33
			},
			{
				text:'Walk around the shop',
				index:34
			},
			{
				text:'Go to the back of the shop',
				index:35
			},
			{
				text:'Leave',
				index:7
			}
		]
	},
	else
	{
		title:'General Good Store',
		text:'The door is locked',
		choices:
		[
			{
				text:'Leave the shop',
				index:7
			}
		]
	}
},
{
	//Index 33
	title:'General Good Store',
	text:'You scream out. No one answers you but you hear a creaking noise from the back if the shop.',
	choices:
	[
		{
			text:'Walk around the shop',
			index:34
		},
		{
			text:'Go to the back of the shop',
			index:35
		},
		{
			text:'Leave the shop',
			index:7
		}
	]
},
{
	//Index 34
	title:'General Good Store',
	text:'You walk around the shop and see that it seems normal yet fake. You smell the faint tinge of iron.',
	choices:
	[
		{
			text:'Scream out.',
			index:33
		},
		{
			text:'Go to the back of the shop',
			index:35
		},
		{
			text:'Leave',
			index:7
		}
	]
},
{
	//Index 35
	title:'General Good Store'
	text:'You begin to hear a loud creaking noise and you push open the door. You see the back door of the shop swinging in the wind wide open. But what really gets your attention is the puddle of blood on the floorboards and a streak of blood that leads out of the back towards the forest.',
	choices:
	[
		{
			text:'Tell Luca',
			index:36
		},
		{
			text:'Tell Arnette',
			index:37
		},
		{
			text:'Investigate room',
			index:38
		},
		{
			text:'Follow the blood trail',
			index:39
		}
	]
},
{
	//Index 36
	title:'Library',
	text:'You rush over to the library and tell Luca what you just saw. She looks at you completely distraught. \“What?! I have to go\” She then rushes off out of the library.',
	choices:
	[
		{
			text:'Run after her',
			index:40
		},
		{
			text:'Tell Arnette',
			index:37
		},
		{
			text:'Follow the blood trail',
			index:39
		}
	]
},
{
	//Index 37
	title:'Guard Tower',
	text:'You rush towards the Guard post. Arnette see you running towards her “What is wrong?” Tell Arnette whats happened. She looks at you angrily \“What?! On my watch?!\” She jumps out of the Guard post and rushes towards the GGS.',
	choices:
	[
		{
			text:'Run after her',
			index:41
		},
		{
			text:'Tell Luca',
			index:36
		},
		{
			text:'Follow the blood trail',
			index:39
		}
	]
},
{
	//Index 38
	title:'General Good Store',
	text:'From what you can tell the blood is about 15 minutes old. There seems to be no signs of struggle and you notice a faint smell of smoke and burning coal coming from the forest.',
	choices:
	[
		{
			text:'Tell Luca',
			index:36
		},
		{
			text:'Tell Arnette',
			index:37
		},
		{
			text:'Follow the blood trail',
			index:39
		}
	]
},
{
	//Index 39
	title:'The Hunt',
	text:'You are staring at thhe trail and conflicted on what to do. Tick. \"Am I strong enough?\".Tock. \"Is it the Melas\". Tick. \"Should I tell Hypnos?\". Tock. You run into the forest. ',
	choices:
	[
		{
			text:'Continue',
			index:42
		}
	]
},
{
	//Index 40
	if (lucaKnowledge=='Lie')
	{
		title:'General Good Store',
		text:'You arrive to see Luca crying as she is collapsed on the floor. \“Why? Who would do this?\” Tears streaming down her face.\“You have to save him, you are a demon hunter right?\”.',
	}
	else if (lucaKnowledge=='Truth')
	{
		title:'General Good Store',
		text:'You arrive to see Luca crying as she is collapsed on the floor. \“Why? Who would do this?\” Tears streaming down her face.\“Did you do this? This is your dream right? Fix it\”.',
	}
	else if (lucaKnowledge=='Mystery')
	{
		title:'General Good Store',
		text:'You arrive to see Luca crying as she is collapsed on the floor. \“Why? Who would do this?\” Tears streaming down her face. \“Please find him\”',
	}
	choices:
	[
		{
			text:'Talk to Arnette',
			index:37
		},
		{
			text:'\"Im sorry that you had to find out about this but I shall find who did this.\"',
			index:41
		}
	]
},
{
	//Index 41
	if (arnetteKnowledge=='Truth')
	{
		title:'General Good Store',
		text:'Arnette looks at the blood on the floor and then at the trail to the forest. She then turns to you and pins you to the wall. \“Was it you? did you kill him? Did you think he was that damned Oneiroi you’ve been looking for?\"',
	}
	else if (arnetteKnowledge=='Lie')
	{
		title:'General Good Store',
		text:'Arnette looks at the blood on the floor and then at the trail to the forest. She then turns to you and pins you to the wall. \“Was it you? did you kill him? Did you think he was one of your demons?\"',
	}
	else if (arnetteKnowledge=='Mystery')
	{
		title:'General Good Store',
		text:'Arnette looks at the blood on the floor and then at the trail to the forest. She then turns to you and pins you to the wall. \“Was it you? did you kill him? I thought it was supicious, a random stranger coming from nowhere asking about the town.',
	}
	choices:
	[
		{
			text:'\"I didn\'t kill him, I have had nothing to do with it. I will find who did this.\" You then rush off towards the blood trail.',
			index:39
		},
		{
			text:'Talk to Luca',
			index:37
		}
	]
},
{
	//Index 42
	title:'Darkness',
	text:'Darkness consumes you comepletly and you cannot see anything. Then from the shadows a figure appears. \"Ah you are finally awake.\" said a voice that changed with every single word. One moment it is a soft spoken voice and the next it was as rough as sand paper. Each word chilled your bones and froze you in place. As the figure appears you notice a great hulking beast standing in front of you, with a skull of a bull rested where a head should be. Its body was long and slender and covered in shaggy hair. It\'s eyes glowed and stared straight in to your soul. \" I believe you are looking for me.\"'
	choices:
	[
		{
			text:'Continue',
			index:
		}
	]
},
{
	//Index 13
	title:'Guard Post',
	text:'You approach the watchtower like structure. It is made of solid stone. You see a red haired female warrior stood on top of it with a bow in her hand and a quiver on her back. ',
	choices:
	[
		{
			text:'Shout hello',
			index:43
		},
		if (visitedLuca==true||visitedCole==true)
		{
			{
				text:'Wave at her',
				index:44
			},

		},
		{
			text:'Leave the area',
			index:7
		}
	]
},
{
	//Index 43
	title:'Guard Post',
	text:'She turns to you looking confused whilst she draws an arrow and points it at you \"Who are you?\"',
	choices:
	[
		{
			text:'Tell her your name',
			index:45
		},
		{
			text:'Tell her you are not an enemy.',
			index:46
		},
		{
			text:'Back away and leave',
			index:7
		}
	]
},
{
	//Index 44
	title:'Guard Post',
	text:'She lowers her bow and jumps down from her post, a jump you wouldn\'t have thought humanly possible to survive from. She looks at you and still on bow \"Do I know you?\"',
	choices:
	[
		if (coleKnowledge=='Lie')
		{
			{
				text:'\"Cole said to talk to you about demon hunting.\"',
				index:47
			},
		},
		if (lucaKnowledge=="Mystery")
		{
			{
				text:'\"Luca said I needed to talk to you if I want to know about this town.\"',
				index:48
			},
		},
		{
			text:'Tell her your name',
			index:45
		},
		{
			text:'Leave',
			index:7
		}
	]
},
{
	//Index 45
	title:'Guard Post',
	text:'\"That is a strange name. One I have definitely have not heard before. I am Arnette and the defender of this Village. State your business before I run you through\”',
	choices:
	[
		{
			text:'Tell her that you are harmless and you just want to talk.',
			index:46
		},
		{
			text:'Apologise and leave',
			index:7
		}
	]
},
{
	//Index 46
	title:'Guard Post',
	text:'She looks at you quizzically then sheaths her weapon. \“You seem unarmed. I\'m sorry if I scared you. You can\’t be too sure.\” She said warily \“How can I help you?\”',
	choices:
	[
		{
			text:'\"We are in a dream world and we are trapped here unless I can find what im searching for. Can you tell me where I can find the Melas.\"',
			index:49
		},
		{
			text:'\"I am a demon hunter sent by the church. I have heard of some disturbing news that there may be a demon in this town and I was hoping you can help me.\"',
			index:50
		},
		{
			text:'\"I am just a wandering person and I would like some infromation on how to fight monsters in case I run into one on my travels.\"',
			index:51
		}
	]
},
{
	//Index 47
	title:'Guard Post',
	text:'\"Cole sent you to me to ask about demon hunting ? Well cole told you right.\"She said with a grunt.\"So how can I help you?\"',
	choices:
	[
		{
			text:'Ask her where there would be a demon most likely in town',
			index:56
		},
		{
			text:'Apologise for wasting her time and leave.',
			index:7
		}
	]
},
{
	//Index 48
	title:'Guard Post',
	text:'\"Luca is a sweet girl, hard to believe she is a few hundred years old. So you want to learn about the town. Anything in particular?\"',
	choices:
	[
		{
			text:'Ask about Cole',
			index:52
		},
		{
			text:'Ask about Luca',
			index:53
		},
		{
			text:'Ask about Aurien',
			index:54
		},
		{
			text:'Ask about her',
			index:55
		},
		{
			text:'Thank her and leave',
			index:7
		}
	]
},
{
	//Index 49
	title:'Guard Post',
	text:'\"Hmm. The story sounds very far fetched however sounds like you mean the town no harm.\” She smiled \“Well from what I can tell everyone seems normal but honestly I really don\’t talk to anyone. If you want to talk to someone who would know then you should talk to Aurien at the GGS\"',
	choices:
	[
		{
			text:'You thank her for her time and leave',
			index:7
		}
	]
},
{
	//Index 50
	title:'Guard Post',
	text:'\"Demon Hunter huh? Well I fought a couple of demons in my past. How can I help ?\"',
	choices:
	[
		{
			text:'Ask her where in town a demon may be residing',
			index:56
		}
	]
},
{
	//Index 51
	title:'Guard Post',
	text:'\"Well I can’t say much on the topic. You should talk to Aurien he would know more about people than anyone.\"',
	choices:
	[
		{
			text:'Thank her and leave',
			index:7
		}
	]
},
{
	//Index 52
	title:'Guard Post',
	text:'\"Cole GrayHawk used to be a mercenary for the Empire. He has seen more bloodshed than I have. Now he is a very wary man with a mild case of PTSD from his time in the army. Anything else?\"',
	choices:
	[
		{
			text:'Ask about the others',
			index:48
		}
	]
},
{
	//Index 53
	title:'Guard Post',
	text:'\"Luca is a wood elf that as been on this earth for hundreds of years. She is very young for an elf but she is very smart. She tends to stay in the Library which gives her a nice view over the town.\"',
	choices:
	[
		{
			text:'Ask about the others',
			index:48
		}
	]
},
{
	//Index 54
	title:'Guard Post',
	text:'\"Aurien is the old man that runs the shop. He was here when the town was first created. He is well loved by the community. You should go visit him he is fun to talk to. Anything else?\"',
	choices:
	[
		{
			text:'Ask about the others',
			index:48
		}
	]
},
{
	//Index 55
	title:'Guard Post',
	text:'\"I was trained as a warrior in the army. My family used to live here but both of them passed away so I reside here to protect the town they love. I can see the entire town from my watch tower and guard for any intruders. Anything else?\"',
	choices:
	[
		{
			text:'Ask about the others',
			index:48
		}
	]
},
{
	//Index 56
	title:'Guard Post',
	text:'\"There is most likely a demon in the tavern disguised as one of the drunks. If I was a demon that is were i’d be. You should get some things from the general store and buy some holy wards to help you find the demon.\"',
	choices:
	[
		{
			text:'Ask about the others',
			index:48
		}
	]
}
