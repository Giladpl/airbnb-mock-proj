import { asyncStorageService } from './asyncStorageService.js';
import { utilService } from './utilService.js';
import { storageService } from './storageService.js';
// import { httpService } from './httpService.js';

const KEY = 'stayDB';

const staysDB = [
	{
		_id: utilService.makeId(),
		name: "The Cozy Cabin",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/25763045/30ce195a_original.jpg",
			"https://a0.muscache.com/im/pictures/25763210/2a6057c1_original.jpg",
			"https://a0.muscache.com/im/pictures/25763328/4686b1fd_original.jpg",
			"https://a0.muscache.com/im/pictures/25763421/582a702c_original.jpg",
			"https://a0.muscache.com/im/pictures/25763514/814512fc_original.jpg",
		],
		price: 80.0,
		summary: "Entire guesthouse hosted by Billy",
		properties: {
			accommodates: 2,
			type: "1 bedroom",
			bad: 1,
			bath: 1,
		},
		amenities: ["TV", "Wifi", "Kitchen", "Cooking basics", "Indoor fireplace"],
		host: {
			_id: utilService.makeId(),
			fullname: "Billy Joel",
			imgUrl:
				"https://a0.muscache.com/im/users/4874888/profile_pic/1359366541/original.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Eilat, Israel",
			lat: 29.556676,
			lng: 34.9452312,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "If you want a cool place and nice people, this is for you :)",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 5.0 },
					{ property: "Check-in", val: 5.0 },
					{ property: "Accuracy", val: 4.0 },
					{ property: "Location", val: 4.6 },
					{ property: "Value", val: 4.4 },
				],
				createAt: 1620210973319,
				by: {
					_id: utilService.makeId(),
					fullname: "Diana Mark",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/2f1e6661-798e-4891-996d-de1a582e1679.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Amazing place. Amazing people. Will come again, no doubt!",
				rate: [
					{ property: "Cleanliness", val: 4.3 },
					{ property: "Communication", val: 4.6 },
					{ property: "Check-in", val: 4.0 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 5.0 },
				],
				createAt: 1620210972353,
				by: {
					_id: utilService.makeId(),
					fullname: "Taylor Morales",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/0c4a1d75-929f-48e8-a95e-8b212d938ca9.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Billy was very helpful and the place was very nice and cozy. A great place to come and explore Eilat",
				rate: [
					{ property: "Cleanliness", val: 4.0 },
					{ property: "Communication", val: 5.0 },
					{ property: "Check-in", val: 4.8 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.7 },
					{ property: "Value", val: 4.3 },
				],
				createAt: 1620210971356,
				by: {
					_id: utilService.makeId(),
					fullname: "Sam Manning",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/cd49ba9e-58cb-44f8-8923-6247f105cb3d.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "great space , nice people , very clean , good location , free parking .",
				rate: [
					{ property: "Cleanliness", val: 4.8 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.8 },
					{ property: "Accuracy", val: 4.0 },
					{ property: "Location", val: 4.6 },
					{ property: "Value", val: 3.9 },
				],
				createAt: 1620210972111,
				by: {
					_id: utilService.makeId(),
					fullname: "Christina Weeks",
					imgUrl:
						"https://a0.muscache.com/im/users/13926270/profile_pic/1396732091/original.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Beautiful and convenient location, friendly and comfortable.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.4 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.2 },
					{ property: "Location", val: 4.7 },
					{ property: "Value", val: 3.6 },
				],
				createAt: 1620210972223,
				by: {
					_id: utilService.makeId(),
					fullname: "Ada Santiago",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/cbe40234-012c-4265-8792-4958b8055ff3.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Beutiful place that is walking distance to the beach. Great hosts and very accommodating",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 4.6 },
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 4.5 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210972212,
				by: {
					_id: utilService.makeId(),
					fullname: "Tamar Goland",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/4afb7f39-93be-4c94-beab-e64a29996599.jpg?im_w=240",
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: "Red Sea - Yellow Studio 28",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/39ecce63-70fa-4bed-a0ae-0552fa71da51.jpg",
			"https://a0.muscache.com/im/pictures/9b6a09d0-ae37-4c28-a189-023177fc65dd.jpg",
			"https://a0.muscache.com/im/pictures/a66105bb-bcde-4d06-8403-82617355a451.jpg",
			"https://a0.muscache.com/im/pictures/5be04c34-17f7-4683-bc04-478b44b4e617.jpg",
			"https://a0.muscache.com/im/pictures/b134f129-ac35-49b6-b9e0-88861bd13c16.jpg",
		],
		price: 150.0,
		summary: "Studio completely renovated in a building of a popular neighborhood of Eilat. Transfer from Ramon airport to the Central bus station of Eilat - Egged Line 30. Parking in front of the building - FREE.	Large supermarket nearby. First beach at 15 minutes walking ditance .	Bus stop down the street .Don't miss Petra - Wadi Rum, we wok with Desert Eco Tours.",
		properties: {
			accommodates: 2,
			type: "1 bedroom",
			bad: 1,
			bath: 1,
		},
		amenities: [
			"TV",
			"Wifi",
			"Kitchen",
			"Cooking basics",
			"Smoking allowed",
			"Pets allowed",
			"Air conditioning",
		],
		host: {
			_id: utilService.makeId(),
			fullname: "Viviane Lamor",
			imgUrl:
				"https://a0.muscache.com/im/pictures/user/6848d583-b46b-4bae-9e26-5c37a93f75b6.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Eilat, South District, Israel",
			lat: 29.55609338955626,
			lng: 34.94006558294276,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "Worked great for us.",
				rate: [
					{ property: "Cleanliness", val: 4.3 },
					{ property: "Communication", val: 4.0 },
					{ property: "Check-in", val: 3.5 },
					{ property: "Accuracy", val: 4.6 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210973419,
				by: {
					_id: utilService.makeId(),
					fullname: "Sam Manning",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/50ac6682-246b-4c64-adbf-c4e3523b13df.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "The apartment itself is reasonably priced and has everything you could need, including a washer, refrigerator, television, and air conditioning in both the living room and the bedroom.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.2 },
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 4.2 },
					{ property: "Location", val: 4.4 },
					{ property: "Value", val: 3.7 },
				],
				createAt: 1620210972153,
				by: {
					_id: utilService.makeId(),
					fullname: "Seana Shelton",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/e0926791-80a8-4ec9-85ad-d3ae729fa81a.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Cozy space that's easy to find. Viviane takes pride in providing a clean space and was helpful with local tips.",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 4.5 },
					{ property: "Check-in", val: 4.3 },
					{ property: "Accuracy", val: 4.6 },
					{ property: "Location", val: 3.9 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210971336,
				by: {
					_id: utilService.makeId(),
					fullname: "Richard Frank",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/c9e09b0c-de1d-46d1-98be-71b9f1a4204f.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Viviane was a friendly fantastic host and her place was great. Super clean, functional space that was very convenient as well. Highly recommend!",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 4.5 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210971111,
				by: {
					_id: utilService.makeId(),
					fullname: "Ariel Zilberg",
					imgUrl:
						"https://a0.muscache.com/im/users/4306643/profile_pic/1354493320/original.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Vivian and her husband are very welcoming and accommodating.",
				rate: [
					{ property: "Cleanliness", val: 4.7 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.6 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.0 },
				],
				createAt: 1620210972293,
				by: {
					_id: utilService.makeId(),
					fullname: "Budi Morris",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/893ecf61-d194-4fbe-bf19-f773e6726100.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Viviane was fantastic. A very gracious host, and super friendly. We only stayed one night but would definitely recommend!! Its cute and very clean and has everything you need even for an extended stay!!",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 3.9 },
					{ property: "Check-in", val: 4.6 },
					{ property: "Accuracy", val: 4.2 },
					{ property: "Location", val: 4.0 },
					{ property: "Value", val: 4.5 },
				],
				createAt: 1620210971212,
				by: {
					_id: utilService.makeId(),
					fullname: "Joaquin Stark",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/5a8853ba-62ce-459a-b9ef-6fae457386a2.jpg?im_w=240",
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: "CORAL",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/287d3662-7aae-4664-8555-33f27f2a2d52.jpg",
			"https://a0.muscache.com/im/pictures/52563657-5f52-48c8-9d4a-11f48b91727a.jpg",
			"https://a0.muscache.com/im/pictures/beafb969-bdc8-48dc-b561-f8f1a7ae8bec.jpg",
			"https://a0.muscache.com/im/pictures/a8cbf2b9-bf64-49b9-91b9-dd181c99e90f.jpg",
			"https://a0.muscache.com/im/pictures/decb6ac7-a5fc-4a11-85d0-2ef59c27b2c0.jpg",
		],
		price: 80.0,
		summary: "The best room what you can find in Eilat! 5 minutes walk from the beach and from the tourist area! The dream place for couples or friends!:)",
		properties: {
			accommodates: 4,
			type: "1 bedroom",
			bad: 1,
			bath: 1,
		},
		amenities: [
			"TV",
			"Wifi",
			"Kitchen",
			"Cooking basics",
			"Air conditioning",
			"Hangers",
		],
		host: {
			_id: utilService.makeId(),
			fullname: "Viviane Lamor",
			imgUrl:
				"https://a0.muscache.com/im/pictures/user/6848d583-b46b-4bae-9e26-5c37a93f75b6.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Eilat, South District, Israel",
			lat: 29.5497415555017,
			lng: 34.94955560389164,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "Very nice apartment, great host, would be happy to stay there again.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.3 },
					{ property: "Check-in", val: 3.9 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.5 },
					{ property: "Value", val: 4.0 },
				],
				createAt: 1620210973929,
				by: {
					_id: utilService.makeId(),
					fullname: "Anton Kogan",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/4715fc30-4469-4543-964b-5a3fe5021f6b.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Raise your expectations, cause the apartment will answer them.",
				rate: [
					{ property: "Cleanliness", val: 4.6 },
					{ property: "Communication", val: 4.7 },
					{ property: "Check-in", val: 4.4 },
					{ property: "Accuracy", val: 4.7 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210972171,
				by: {
					_id: utilService.makeId(),
					fullname: "Idan Yaron",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/e7439e32-5a44-4dc8-b803-6528b5a31dbf.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "My friend and I had a lovely stay here. The apartment was sparkling clean and very comfortable. The owner was very good about communicating and was happy to answer all my touristy questions about Eilat. This apartment made for a perfect get away!",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.7 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 5.0 },
					{ property: "Value", val: 4.8 },
				],
				createAt: 1620210972336,
				by: {
					_id: utilService.makeId(),
					fullname: "Abby Miller",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/2d793723-4baf-4159-95b3-c5f51430ce2e.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Wonderful studio to stay in. Great location - very central to everything we did in Eilat. The place was clean, comfortable, and Niki was extremely helpful and a wonderful host!",
				rate: [
					{ property: "Cleanliness", val: 4.7 },
					{ property: "Communication", val: 4.2 },
					{ property: "Check-in", val: 4.3 },
					{ property: "Accuracy", val: 4.0 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210971111,
				by: {
					_id: utilService.makeId(),
					fullname: "Danielle Kind",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/95b98ed5-89d9-4aa7-8e9d-5bfca4fe363f.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "a great host ensuring our arrival with map and directions. The apartment is beautiful, with a fantastic view of the red-sea. She was very accommodating with check in and out.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.0 },
					{ property: "Check-in", val: 4.8 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210971393,
				by: {
					_id: utilService.makeId(),
					fullname: "Leora Manor",
					imgUrl:
						"https://a0.muscache.com/im/users/57802/profile_pic/1323541658/original.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "It's always a pleasure staying here. The place is immaculate and has everything you could need and more for a weekend away. Host is super attentive and is always available to help. We will always choose this place when visiting Eilat.",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 4.3 },
					{ property: "Check-in", val: 4.7 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 4.5 },
					{ property: "Value", val: 4.7 },
				],
				createAt: 1620210971511,
				by: {
					_id: utilService.makeId(),
					fullname: "Shani Rabin",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/3719cbed-86f3-4fdc-8a18-b2af20464189.jpg?im_w=240",
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: "The five stars",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/50b4fc25-5169-4be5-b2b0-f2f28dd83ead.jpg",
			"https://a0.muscache.com/im/pictures/3b689a0d-e948-4b08-b839-181679015875.jpg",
			"https://a0.muscache.com/im/pictures/d3d73dd9-a3e4-4329-b2d2-b61fa24a55ef.jpg",
			"https://a0.muscache.com/im/pictures/aeae840f-1345-4943-b955-50859157404f.jpg",
			"https://a0.muscache.com/im/pictures/e579261d-80cf-4d28-b60a-5250191af29a.jpg",
		],
		price: 65.0,
		summary: "The best room what you can find in Eilat! 5 minutes walk from the beach and from the tourist area! The dream place for couples or friends!:)",
		properties: {
			accommodates: 1,
			type: "1 bedroom",
			bad: 2,
			bath: 1,
		},
		amenities: [
			"TV",
			"Wifi",
			"Kitchen",
			"Pets allowed",
			"Air conditioning",
			"Hangers",
			"Free parking on premises",
		],
		host: {
			_id: utilService.makeId(),
			fullname: "Niki Jones",
			imgUrl:
				"https://a0.muscache.com/im/pictures/user/5b06e55a-5695-47e8-bbab-c4288a1c6e85.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Eilat, South District, Israel",
			lat: 29.564522857428432,
			lng: 34.95891103161243,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "Niki’s place is so lovely and nice! It’s an easy walk from the bus station and close to stores and bus stops. I loved the apartment- it was cute, cozy and comfortable. I wish I could stay forever!",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 4.7 },
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 4.6 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.7 },
				],
				createAt: 1620210973876,
				by: {
					_id: utilService.makeId(),
					fullname: "Ruth Thompson",
					imgUrl:
						"https://a0.muscache.com/im/users/3973443/profile_pic/1442704960/original.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Niki is wonderful as a host and as a person, she took the greatest care of us! She is the standard for Airbnb, we truly wish all Airbnb places and hosts were like Niki and her place!",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.3 },
					{ property: "Check-in", val: 4.6 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.3 },
					{ property: "Value", val: 4.6 },
				],
				createAt: 1620210973171,
				by: {
					_id: utilService.makeId(),
					fullname: "Dennis Gibson",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/2e94c771-8417-4d06-9902-d38abd820767.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "A lovely little pied-a-terre with very effective air cond. and always nice and quiet. Highly recommended",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 4.2 },
					{ property: "Check-in", val: 4.7 },
					{ property: "Accuracy", val: 4.2 },
					{ property: "Location", val: 5.4 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210972636,
				by: {
					_id: utilService.makeId(),
					fullname: "Tom Frank",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/24fe6e68-5e25-418d-9572-dd262a69e68a.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Niki is very friendly and helpful in visiting Eilat",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.2 },
					{ property: "Check-in", val: 4.4 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 3.7 },
					{ property: "Value", val: 4.6 },
				],
				createAt: 1620210972111,
				by: {
					_id: utilService.makeId(),
					fullname: "Walter Roberts",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/e3b98eda-0317-4ac3-accc-ebae57d8d44b.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "We had great time in Eilat,thanks to Nikki.The place where we stay was very comfortable,clean and in quiet neighborhood.The apartment has nice kitchen and (Website hidden by Airbnb) was very helpful and gave us some advices what to see in Eilat.I would definitely recommend stay in Nikki's apartment!",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.7 },
					{ property: "Location", val: 4.5 },
					{ property: "Value", val: 3.8 },
				],
				createAt: 1620210971713,
				by: {
					_id: utilService.makeId(),
					fullname: "Joaquin Stark",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/2d793723-4baf-4159-95b3-c5f51430ce2e.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Great room, NIki is very helpful and friendly. The room is very clean well equipped so you can make breakfast or light lunch. Plenty of parking. There is a supermarket in walking distance.",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 4.5 },
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 4.2 },
					{ property: "Location", val: 4.3 },
					{ property: "Value", val: 4.9 },
				],
				createAt: 1620210972511,
				by: {
					_id: utilService.makeId(),
					fullname: "Amit Dagan",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/c35717f3-c0d7-4be1-8886-39da283b922f.jpg?im_w=240",
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: "Hilo - Hawaii Luxury studio suite",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/2498bce2-44ec-4289-ad04-2cd516bd822f.jpg",
			"https://a0.muscache.com/im/pictures/b8ac1177-bff3-4710-897c-87341e4c720e.jpg",
			"https://a0.muscache.com/im/pictures/2b357dba-5259-4a6b-b78e-4117b3d24e35.jpg",
			"https://a0.muscache.com/im/pictures/miso/Hosting-33925715/original/6c31dcb2-ebf4-40d9-8512-ba282e359fa7.jpeg",
			"https://a0.muscache.com/im/pictures/miso/Hosting-33925715/original/90702fe8-e752-4181-8a36-3385af552b91.jpeg",
		],
		price: 65.0,
		summary: "Hawaii Luxury Suites is a large variety of high-class holiday apartments. Our apartments offer unparalleled service. Most of the luxury apartments at the Hawaii Luxury Suites come with a garden or balcony with a seating area. All apartments are equipped with a huge 65' flat-screen TV with satellite, Free wifi, air conditioners, bed linen, towels, and a kitchen equipped with Espresso machine, Microwave, Toaster Oven, Toaster and cooking utensils.",
		properties: {
			accommodates: 3,
			type: "Studio",
			bad: 2,
			bath: 1,
		},
		amenities: [
			"TV",
			"Wifi",
			"Kitchen",
			"Pets allowed",
			"Cooking basics",
			"Air conditioning",
			"Hangers",
			"Free parking on premises",
		],
		host: {
			_id: utilService.makeId(),
			fullname: "Chaim Graham",
			imgUrl:
				"https://a0.muscache.com/im/pictures/user/ac872bcc-1d30-47ed-a259-b3cd1759eb46.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Eilat, South District, Israel",
			lat: 29.5412230309723,
			lng: 34.94117915475612,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "Place was nice. Clean. Good location. Host was very helpful and quick to get what I needed. If u use air conditioner it will trip the breaker. U can flip it back on in panel above switch to turn on hot water. Had a good stay thanks!",
				rate: [
					{ property: "Cleanliness", val: 4.3 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.7 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 3.9 },
				],
				createAt: 1620210971876,
				by: {
					_id: utilService.makeId(),
					fullname: "Audrina Avila",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/77b33fb6-fd04-4951-967f-f941c9c7fcf5.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "The stay at Omer was great! Our host was very helpful when we had questions, but otherwise gave us lots of privacy and space. The location was convenient, all around wonderful stay!",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.3 },
					{ property: "Check-in", val: 4.6 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.3 },
					{ property: "Value", val: 4.6 },
				],
				createAt: 1620210973113,
				by: {
					_id: utilService.makeId(),
					fullname: "Maximillian Walters",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/c340c512-d637-4b08-a749-2dd1603c6a5e.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "The hospitality is amazing",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.7 },
					{ property: "Check-in", val: 4.3 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 5.1 },
					{ property: "Value", val: 4.6 },
				],
				createAt: 1620210972614,
				by: {
					_id: utilService.makeId(),
					fullname: "Heidy Bradshaw",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/9e84abb3-83f8-4e6c-bc8b-606f2aa27237.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "The hosts were great and helping, the place was very clean but too tiny, and no view from the windows.",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 5.0 },
					{ property: "Check-in", val: 3.9 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 3.9 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210973214,
				by: {
					_id: utilService.makeId(),
					fullname: "Cassie Armstrong",
					imgUrl:
						"https://a0.muscache.com/im/users/6551201/profile_pic/1369473698/original.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Really cute apartment walking distance to everything. Had an incredible stay and highly recommend. Shoutout to my contact Daniel who made it really exceptional. Thanks! Looking forward to staying with Yalarent again!",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 4.3 },
					{ property: "Check-in", val: 4.7 },
					{ property: "Accuracy", val: 4.2 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210926713,
				by: {
					_id: utilService.makeId(),
					fullname: "Annika Russo",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/fc484686-b73c-429b-ab79-8681f3fd4dd1.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "indulgent suite to stay, more than most of the suites around. will make the difference for your holiday....",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.2 },
					{ property: "Check-in", val: 4.7 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 3.6 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210975111,
				by: {
					_id: utilService.makeId(),
					fullname: "Shane Ramsey",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/e25492f0-b0f8-4616-94c5-f5a605c055d0.jpg?im_w=240",
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: "Studio Eilot 89",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/90749553/f7179131_original.jpg?im_w=1200",
			"https://a0.muscache.com/im/pictures/90749125/837e9bff_original.jpg?im_w=720",
			"https://a0.muscache.com/im/pictures/78084810/cc51066b_original.jpg?im_w=720",
			"https://a0.muscache.com/im/pictures/90749799/be11216d_original.jpg?im_w=720",
			"https://a0.muscache.com/im/pictures/90749198/54a53844_original.jpg?im_w=720",
		],
		price: 35.0,
		summary: "Hawaii Luxury Suites is a large variety of high-class holiday apartments. Our apartments offer unparalleled service. Most of the luxury apartments at the Hawaii Luxury Suites come with a garden or balcony with a seating area. All apartments are equipped with a huge 65' flat-screen TV with satellite, Free wifi, air conditioners, bed linen, towels, and a kitchen equipped with Espresso machine, Microwave, Toaster Oven, Toaster and cooking utensils.",
		properties: {
			accommodates: 2,
			type: "Studio",
			bad: 1,
			bath: 1,
		},
		amenities: [
			"TV",
			"Wifi",
			"Kitchen",
			"Cooking basics",
			"Air conditioning",
			"Free parking on premises",
		],
		host: {
			_id: utilService.makeId(),
			fullname: "Melvin Knox",
			imgUrl:
				"https://a0.muscache.com/im/pictures/user/ac815892-d365-4621-87e6-86bb93ffaab7.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Eilat, South District, Israel",
			lat: 29.537065965027328,
			lng: 34.93438314865661,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "Place was nice. Clean. Good location. Host was very helpful and quick to get what I needed. If u use air conditioner it will trip the breaker. U can flip it back on in panel above switch to turn on hot water. Had a good stay thanks!",
				rate: [
					{ property: "Cleanliness", val: 4.3 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.7 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 3.9 },
				],
				createAt: 1620210971876,
				by: {
					_id: utilService.makeId(),
					fullname: "Audrina Avila",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/77b33fb6-fd04-4951-967f-f941c9c7fcf5.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "A nice place but small for two people , good location .",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.6 },
					{ property: "Accuracy", val: 4.6 },
					{ property: "Location", val: 3.9 },
					{ property: "Value", val: 3.5 },
				],
				createAt: 1620210971713,
				by: {
					_id: utilService.makeId(),
					fullname: "Chen Margo",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/3c927781-be0c-431c-9a3b-5a214bd5b709.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "The hospitality is amazing",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.7 },
					{ property: "Check-in", val: 4.3 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 5.1 },
					{ property: "Value", val: 4.6 },
				],
				createAt: 1620210972614,
				by: {
					_id: utilService.makeId(),
					fullname: "Heidy Bradshaw",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/9e84abb3-83f8-4e6c-bc8b-606f2aa27237.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Incredible- conversation with host was very helpful. space. location great. clean.",
				rate: [
					{ property: "Cleanliness", val: 4.6 },
					{ property: "Communication", val: 5.0 },
					{ property: "Check-in", val: 4.9 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.4 },
				],
				createAt: 1620210973154,
				by: {
					_id: utilService.makeId(),
					fullname: "Nina Gross",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/83e1033f-c917-4e82-8bcc-2c17c738ad04.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Dani leaves next door and happy to help with anything! He and his wife are amazing!",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 3.7 },
					{ property: "Check-in", val: 4.3 },
					{ property: "Accuracy", val: 4.7 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.7 },
				],
				createAt: 1620210926722,
				by: {
					_id: utilService.makeId(),
					fullname: "Adi Dratler",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/b3631f58-5f4d-47fb-bb04-41579f6ef4bc.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "the room is very close to the center of the city. you can walk (10 min max) to everything you have to do and see in the city. you wont need a car/ bus/ taxi. very quiet neighborhood. the price was reasonable. as a girl who traveled alone i felt very safe in this place and in the neighborhood (i came with my dog).",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 4.2 },
					{ property: "Check-in", val: 4.3 },
					{ property: "Accuracy", val: 4.6 },
					{ property: "Location", val: 4.6 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210976111,
				by: {
					_id: utilService.makeId(),
					fullname: "Rotem Meiron",
					imgUrl:
						"https://a0.muscache.com/im/users/20712502/profile_pic/1444203592/original.jpg?im_w=240",
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: "Desert View. A House with a Bedouin tent",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/f1089c69-906e-46c8-9614-d0e069cd91d4.jpg",
			"https://a0.muscache.com/im/pictures/3818197d-8cc7-44fb-bae7-ff7b0aeef18a.jpg",
			"https://a0.muscache.com/im/pictures/a4595445-5150-43e7-859f-5775c9baa857.jpg",
			"https://a0.muscache.com/im/pictures/f5e6a663-09f1-4d94-82fb-b8689514e260.jpg",
			"https://a0.muscache.com/im/pictures/b79b7998-7338-4f00-b23c-7364b3743611.jpg",
		],
		price: 50.0,
		summary: "We are 25 minutes from Masada, Dead Sea and Ein Gedi . We only have one guest at a time!! The guests are getting the whole place to themselves including the apartment,bedouin tent, garden and terrace with spectacular panoramic view overlooking Jerusalem, Hebron and the Judean desert.",
		properties: {
			accommodates: 8,
			type: "Guesthouse",
			bad: 4,
			bath: 2,
		},
		amenities: [
			"TV",
			"Kitchen",
			"Cooking basics",
			"Free parking on premises",
		],
		host: {
			_id: utilService.makeId(),
			fullname: "Lea Rupin",
			imgUrl:
				"https://a0.muscache.com/im/pictures/user/f9feaf02-5903-4703-a49f-db88196a0b42.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Arad, South District, Israel",
			lat: 31.271717940521086,
			lng: 35.211149873892595,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "If you're looking for a home base in Arad that's as inviting as the local attractions, this is your place. Lea and David are warm and welcoming hosts. They feel like friends, and their place feels like home, the moment you arrive.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 3.9 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.6 },
					{ property: "Location", val: 4.0 },
					{ property: "Value", val: 4.9 },
				],
				createAt: 1620210973876,
				by: {
					_id: utilService.makeId(),
					fullname: "Heidy Bradshaw",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/10bcd532-d9ea-4da2-8771-f31d2f66e6fa.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Wonderful place, wonderful hosts, very helpful with local tips for hikes, great local coffee ;) Most of all, an excellent value in a beautiful location. I hope to come back again.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.2 },
					{ property: "Check-in", val: 4.8 },
					{ property: "Accuracy", val: 4.2 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.0 },
				],
				createAt: 1620210971513,
				by: {
					_id: utilService.makeId(),
					fullname: "Shane Ramsey",
					imgUrl:
						"https://a0.muscache.com/im/users/18995295/profile_pic/1406495234/original.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "This was the second time that I visited at Lea's house, and it was even better than before. The house was tidy and clean, and the coffee at the morning next to the fire in front of the great view was amazing. I really recommend Lea's house.",
				rate: [
					{ property: "Cleanliness", val: 4.4 },
					{ property: "Communication", val: 3.1 },
					{ property: "Check-in", val: 3.9 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 5.0 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210972655,
				by: {
					_id: utilService.makeId(),
					fullname: "Tal Katz",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/b2bf6d25-ecb9-450d-96d5-3f6835e9f0a6.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Beautiful view of the desert. Helpful in seeing and finding places, thanks.",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 4.5 },
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.6 },
					{ property: "Value", val: 4.9 },
				],
				createAt: 1620210923154,
				by: {
					_id: utilService.makeId(),
					fullname: "Scott Wolf",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/1f6bb8b0-9408-4f2a-bd1b-e7024b863381.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Should have stayed here for more than a night! Saw beautiful sunset and camels. David provided us tea/coffeeand good tips on quick eats, hike to Masada. Beds were comfortable and stay was pleasant. Definite stay if visiting Masada since it's shorter hike than the snake trail.",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 4.5 },
					{ property: "Check-in", val: 3.8 },
					{ property: "Accuracy", val: 4.2 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 3.9 },
				],
				createAt: 1620210966722,
				by: {
					_id: utilService.makeId(),
					fullname: "Bobby Crosby",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/6a3b13e3-ac28-4a58-9af0-c505d47c2bce.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "David and Lea were great hosts, very friendly but not intrusive. We enjoyed hanging out with them and listening to their stories. They also helped us plan our activities.",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 3.6 },
					{ property: "Location", val: 3.7 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210926111,
				by: {
					_id: utilService.makeId(),
					fullname: "Theodore Mccarty",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/9726ff3e-0e79-43e5-bda2-3903b1c7e5e1.jpg?im_w=240",
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: "Dead Sea Sun Guest House - Double Room",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/53deadb6-fd4a-4143-b877-e53bad47ec28.jpg",
			"https://a0.muscache.com/im/pictures/f30f82dd-5b28-4c84-8680-f9f2b7b814aa.jpg",
			"https://a0.muscache.com/im/pictures/10a678bc-10a7-477c-a0ba-9b3c3dc601be.jpg",
			"https://a0.muscache.com/im/pictures/692cb408-29ea-4001-ba5d-77affcc2b70e.jpg",
			"https://a0.muscache.com/im/pictures/c52f3850-88f4-4da7-8fec-141ebef5b93d.jpg",
		],
		price: 65.0,
		summary: "Private beautiful and stylish room, fully equipped, with kitchenette and bathroom, in a large villa in a quiet area on the outskirts of Arad. Separate entrance, personal veranda with garden furniture, beautiful garden with pleasant evening lighting, lots of greenery and flowers, landscaped yard. If you are looking for cleanliness, style, silence, beauty and peace after a hard day of traveling - our place is for you.Possibility of washing. Fast Wi-Fi, digital TV.",
		properties: {
			accommodates: 2,
			type: "Guesthouse",
			bad: 1,
			bath: 1,
		},
		amenities: [
			"TV",
			"Kitchen",
			"Cooking basics",
			"Free parking on premises",
			'Smoking allowed',
			'Air conditioning'
		],
		host: {
			_id: utilService.makeId(),
			fullname: "Lior Shechter",
			imgUrl:
				"https://a0.muscache.com/im/pictures/user/4a0b364e-4bd2-4946-b6d1-28fef44ef627.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Arad, South District, Israel",
			lat: 31.261996504814885,
			lng: 35.20384913548613,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "thanks for everything, great time!!",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 3.4 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210913876,
				by: {
					_id: utilService.makeId(),
					fullname: "Niv Raz",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/44adba92-0a3c-42bf-92f9-f03574b13c1b.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "This place is wonderful and clean. Beautiful landscaping around the property. Very nice shower and comfy bed. Highly recommend it",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 3.8},
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210971163,
				by: {
					_id: utilService.makeId(),
					fullname: "Daniel Young",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/c5c1dc1a-2996-4956-8740-49bbbba9b227.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Beautiful place with a private outdoor space. Great, quiet neighborhood with free parking. Friendly host. A must stay when coming to the Dead Sea region/ Masada.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.3 },
					{ property: "Check-in", val: 3.1 },
					{ property: "Accuracy", val: 4.7 },
					{ property: "Location", val: 5.0 },
					{ property: "Value", val: 4.5 },
				],
				createAt: 1620210971455,
				by: {
					_id: utilService.makeId(),
					fullname: "Benjamin Franklin",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/d0011f6c-4908-4868-9633-27a67760f23b.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Very clean, nice private patio. Very quiet.",
				rate: [
					{ property: "Cleanliness", val: 5.0 },
					{ property: "Communication", val: 4.4 },
					{ property: "Check-in", val: 3.6 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210923112,
				by: {
					_id: utilService.makeId(),
					fullname: "Karla Turner",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/fa9cd386-ece2-42ba-8beb-6011ab6ed526.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "VERY NICE place! Inside and out. Right off the road to Masada, 20 mins away. The west side climb was easy. Even with knee problems.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 3.4 },
					{ property: "Check-in", val: 3.3 },
					{ property: "Accuracy", val: 4.7 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.4 },
				],
				createAt: 1620210961122,
				by: {
					_id: utilService.makeId(),
					fullname: "Dominic Wyatt",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/c429cabf-6b28-47ef-9b45-f393aa12f8a8.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Really great place, Very clean and tidy, beautiful yard, AND Arkady is a very nice guy, helped us with local tips and everything we needed. Highly recommended",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.6 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210926222,
				by: {
					_id: utilService.makeId(),
					fullname: "Tamir Hardov",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/818908cf-2c1f-4354-9277-9278274bcfc1.jpg?im_w=240",
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: "Perfect apartment - just 20 minutes from Tel Aviv",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/d3281d29-b277-4fab-b9cb-c640dca8b73f.jpg",
			"https://a0.muscache.com/im/pictures/25801128-515a-40b1-9fc8-ec9e7e0e3c5b.jpg",
			"https://a0.muscache.com/im/pictures/e3abf642-114e-4560-a9e0-7d3b3b9acb9b.jpg",
			"https://a0.muscache.com/im/pictures/954db1de-f9ba-4868-8acd-9f8e6c0581d4.jpg",
			"https://a0.muscache.com/im/pictures/bd038315-527d-4510-908a-7834db903a94.jpg",
		],
		price: 45.0,
		summary: "Private beautiful and stylish room, fully equipped, with kitchenette and bathroom, in a large villa in a quiet area on the outskirts of Arad. Separate entrance, personal veranda with garden furniture, beautiful garden with pleasant evening lighting, lots of greenery and flowers, landscaped yard. If you are looking for cleanliness, style, silence, beauty and peace after a hard day of traveling - our place is for you.Possibility of washing. Fast Wi-Fi, digital TV.",
		properties: {
			accommodates: 4,
			type: "Apartment",
			bad: 1,
			bath: 1,
		},
		amenities: [
			"TV",
			"Kitchen",
			"Cooking basics",
			"Free parking on premises",
			'Smoking allowed',
			'Air conditioning',
			'Pets allowed'
		],
		host: {
			_id: utilService.makeId(),
			fullname: "Shimi Tavori",
			imgUrl:
				"https://a0.muscache.com/im/pictures/user/b141ecd4-4c35-40e4-a37b-5c4d005f1a9a.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Rishon LeTsiyon, Center District, Israel",
			lat: 31.953721905283263,
			lng: 34.820950871713464,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "Very good location Very nice host",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 3.3 },
					{ property: "Check-in", val: 3.7 },
					{ property: "Accuracy", val: 4.4 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210913444,
				by: {
					_id: utilService.makeId(),
					fullname: "Kevin Burton",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/3b9e19ee-9bfc-47ce-8c45-80ec7bb7dc37.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Communication was great from start to finish. The place is clean and comfortable. Made the stay in Rishon very pleasant.",
				rate: [
					{ property: "Cleanliness", val: 3.7 },
					{ property: "Communication", val: 4.9},
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.6 },
				],
				createAt: 1620210971555,
				by: {
					_id: utilService.makeId(),
					fullname: "Avva Horn",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/b0e79b25-2206-4c0d-b402-260df663f79e.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "We had some difficulty communicating with the host to get the details of the check-in, but once we got there we were pleased with the apartment.",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 2.5 },
					{ property: "Check-in", val: 3.1 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210971476,
				by: {
					_id: utilService.makeId(),
					fullname: "Samuel Ortega",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/d6a3dd1a-8af5-4211-a5f8-b84c5a7f267e.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Great apartment, nearby everything you'll need, very tastefully designed and accessorized",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 4.5 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210923456,
				by: {
					_id: utilService.makeId(),
					fullname: "Leanna Wang",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/d0dd6b68-496e-47f5-adfc-d6d7d6c2dd1c.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Very communicative host. The apartment has everything you need. In case you are staying in Rishon Le zion this is the place to stay!!",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.7 },
					{ property: "Check-in", val: 4.3 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.3 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210961122,
				by: {
					_id: utilService.makeId(),
					fullname: "Boris Litvak",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/bb060a32-8d8c-4b84-9eef-b0d813fe43a3.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Wonderful place and very nice host.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.3 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.7 },
				],
				createAt: 1620210921222,
				by: {
					_id: utilService.makeId(),
					fullname: "Dominika Gonzalez",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/5d89ba88-9d8b-430d-b530-164ceb5f0e06.jpg?im_w=240",
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: "<-- XXL Studio --- Brand NEW! --- City Center -->",
		imgUrls: [
			"https://a0.muscache.com/im/pictures/344d9a0e-c0b9-4112-826a-ef09fe0b283e.jpg",
			"https://a0.muscache.com/im/pictures/aa407c28-f719-4153-87ec-77e1cabf36e7.jpg",
			"https://a0.muscache.com/im/pictures/4b19093c-2d36-4865-bd61-c0aba3744341.jpg",
			"https://a0.muscache.com/im/pictures/9de7cb9c-f150-49a6-8214-8eba0c389d19.jpg",
			"https://a0.muscache.com/im/pictures/4ff1b534-bada-4c4e-8e73-474548d93ac5.jpg",
		],
		price: 45.0,
		summary: "⭐ A hip and modern little place, PERFECTLY LOCATED ⭐ 1 min from the best cafes, restaurants, and bars ⭐ BRAND NEW! Renovated from scratch at Oct 2019	⭐ Excellent location - quiet street a few steps walk from Tourist's Kingdom	⭐ Supermarkets, shops, ATM - 3 min walk away",
		properties: {
			accommodates: 2,
			type: "Studio",
			bad: 1,
			bath: 1,
		},
		amenities: [
			"TV",
			"Kitchen",
			"Cooking basics",
			"Free parking on premises",
			"Smoking allowed",
			"Air conditioning",
			"Hangers",
			"Wifi"
		],
		host: {
			_id: utilService.makeId(),
			fullname: "Shimi Tavori",
			imgUrl:
				"https://a0.muscache.com/im/pictures/user/f89d0840-1acb-428e-944f-0811d3c3ad31.jpg?im_w=240",
		},
		loc: {
			country: "Israel",
			countryCode: "IL",
			address: "Rishon LeTsiyon, Center District, Israel",
			lat: 31.959774349756522,
			lng: 34.78975946872728,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "The room is a bit small but it's very clean, and the location can't be beat (even better post Corona of course). I had a few requests during my stay and the hosts always answered me within 10 minutes or so. Highly recommended!",
				rate: [
					{ property: "Cleanliness", val: 4.5 },
					{ property: "Communication", val: 4.3 },
					{ property: "Check-in", val: 3.7 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.5 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210913113,
				by: {
					_id: utilService.makeId(),
					fullname: "Jordan Spears",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/b9b12fc6-9254-452d-a32b-7be5c43cffe5.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "I stayed at the apartment for 3 days, it was very clean and comfortable, and I must say the service was exceptional, the hosts were very kind and helpful in moving me to a different unit. self check in and check out went smoothly.",
				rate: [
					{ property: "Cleanliness", val: 4.7 },
					{ property: "Communication", val: 4.2},
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 4.3 },
					{ property: "Location", val: 4.5 },
					{ property: "Value", val: 4.2 },
				],
				createAt: 1620210972155,
				by: {
					_id: utilService.makeId(),
					fullname: "Aviv Haimer",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/ce658a2e-7cd3-4cd3-9230-a509ab52886d.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "A great appartement in a great location. Highly recommended.",
				rate: [
					{ property: "Cleanliness", val: 4.2 },
					{ property: "Communication", val: 3.5 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.2 },
					{ property: "Location", val: 4.3 },
					{ property: "Value", val: 4.6 },
				],
				createAt: 1620210971126,
				by: {
					_id: utilService.makeId(),
					fullname: "Eliran Berko",
					imgUrl:
						"https://a0.muscache.com/im/users/11650919/profile_pic/1390748808/original.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "The place is well organized. With a wonderful location. The silver ware was not as clean.. overall it’s a comfortable choice for a couple of nights stay.",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.1 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.1 },
					{ property: "Location", val: 4.2 },
					{ property: "Value", val: 4.5 },
				],
				createAt: 1620210923432,
				by: {
					_id: utilService.makeId(),
					fullname: "Yoram Gaon",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/fe8454a7-5614-4f75-a28c-129ea29bc2a4.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "The place is small, but real nice and stylish. The bathroom is new and neat. The building is relatively new and the location is just perfect. Strongly recommended!!",
				rate: [
					{ property: "Cleanliness", val: 4.1 },
					{ property: "Communication", val: 4.7 },
					{ property: "Check-in", val: 4.2 },
					{ property: "Accuracy", val: 4.5 },
					{ property: "Location", val: 4.1 },
					{ property: "Value", val: 3.7 },
				],
				createAt: 1620210961132,
				by: {
					_id: utilService.makeId(),
					fullname: "Anna Levine",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/553c591f-304b-4ed3-987d-73a127c97c59.jpg?im_w=240",
				},
			},
			{
				id: utilService.makeId(),
				txt: "Thanks for the great service, highly recommend the apartment. The only thing that was problematic was the old bedding and the smell of urine in the toilet ... besides it was amazing!",
				rate: [
					{ property: "Cleanliness", val: 3.7 },
					{ property: "Communication", val: 3.4 },
					{ property: "Check-in", val: 4.1 },
					{ property: "Accuracy", val: 3.1 },
					{ property: "Location", val: 4.3 },
					{ property: "Value", val: 4.1 },
				],
				createAt: 1620210924322,
				by: {
					_id: utilService.makeId(),
					fullname: "Almog Shemtov",
					imgUrl:
						"https://a0.muscache.com/im/pictures/user/3b923e4a-5655-4f2c-baf5-d56db9c8b2c5.jpg?im_w=240",
				},
			},
		],
	},
];

export const stayService = {
	query,
	getById,
	remove,
	save,
	getEmptyStay,
	getTotalAvgRate,
	getListAvgRate,
};

_createStays();

function query() {
	// return httpService.get("/");
	return asyncStorageService.query(KEY);
}

function getById(id) {
	// return httpService.get("/${id}");
	return asyncStorageService.get(KEY, id);
}

function remove(id) {
	// return httpService.delete("/${id}");
	return asyncStorageService.remove(KEY, id);
}

function save(stay) {
	// if (stay.id) {
	// 	return httpService.put("/${stay.id}", stay);
	// } else {
	// 	return httpService.post("/", stay);
	// }
	const savedStay = stay._id
		? asyncStorageService.put(KEY, stay)
		: asyncStorageService.post(KEY, stay);

	return savedStay;
}

function getTotalAvgRate(stay) {
	return stay.reviews.reduce((acc, review) => {
		let rate = review.rate.reduce((acc, rate) => {
			return (acc += rate.val / review.rate.length);
		}, 0);
		return (acc += rate / stay.reviews.length);
	}, 0);
}

function getListAvgRate(stay) {
	let avgRate = [
		{ property: 'Cleanliness', val: null },
		{ property: 'Communication', val: null },
		{ property: 'Check-in', val: null },
		{ property: 'Accuracy', val: null },
		{ property: 'Location', val: null },
		{ property: 'Value', val: null },
	];

	stay.reviews.forEach((review) => {
		review.rate.forEach((rate) => {
			avgRate.forEach((newRate) => {
				if (rate.property === newRate.property)
					newRate.val += rate.val / stay.reviews.length;
			});
		});
	});

	return avgRate;
}

function getEmptyTrip() {
	return {
		startDate: '',
		endDate: '',
		guests: {
			adults: null,
			kids: null,
		},
		loc: {
			country: '',
			countryCode: '',
			address: '',
			lat: null,
			lng: null,
		},
	};
}

function getEmptyStay(title = '', description = '') {
	return {
		title,
		description,
		createdAt: Date.now(),
	};
}

function _createStays() {
	let stays = storageService.load(KEY);
	if (!stays || !stays.length) {
		// stays = [
		// 	_createStay('Ribeira Charming Duplex'),
		// 	_createStay('stay2'),
		// 	_createStay('stay3'),
		// 	_createStay('stay2342'),
		// 	_createStay('stay2346'),
		// 	_createStay('stay23465'),
		// 	_createStay('stay1213'),
		// 	_createStay('stay66'),
		// 	_createStay('stay5'),
		// ];
		stays = staysDB
		storageService.store(KEY, stays);
	}
	return stays;
}

function _createStay(name) {
	return {
		_id: utilService.makeId(),
		name: name,
		imgUrls: [
			'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
			'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
			'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
			'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
			'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
		],
		price: 80.0,
		summary:
			'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)',
		properties: {
			accommodates: 8,
			type: '1 bedroom',
			bad: 1,
			bath: 3,
		},
		amenities: [
			'TV',
			'Wifi',
			'Kitchen',
			'Smoking allowed',
			'Pets allowed',
			'Cooking basics',
		],
		host: {
			_id: '51399391',
			fullname: 'Davit Pok',
			imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			address: 'Porto, Portugal',
			lat: 41.1413,
			lng: -8.61308,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210973856,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Very helpful hosts. Cooked traditional!!',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210973856,
				by: {
					_id: 'u102',
					fullname: 'user1',
					imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
				},
			},
		],
	};
}

