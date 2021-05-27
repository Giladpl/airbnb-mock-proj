import { asyncStorageService } from './asyncStorageService.js';
import { utilService } from './utilService.js';
import { storageService } from './storageService.js';
// import { httpService } from './httpService.js';

const KEY = 'stayDB';

const staysDB = [
	{
		_id: utilService.makeId(),
		name: 'Nature Cabin in Klil',
		imgUrls: [
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621411351/airbnb-proj/NatureCabinInKlil-1_ne2fh4.jpg',
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621411352/airbnb-proj/NatureCabinInKlil-2_jgqmj0.jpg',
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621411344/airbnb-proj/NatureCabinInKlil-3_tjdvqg.jpg',
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621411344/airbnb-proj/NatureCabinInKlil-4_xhijqc.jpg',
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621411344/airbnb-proj/NatureCabinInKlil-5_jt4e44.jpg',
		],
		price: 125.0,
		summary:
			"A stunning new cabin in the ecological village of Klil in the Western Galillee. The cabin is surrounded by an olive grove and offers guests a private, peaceful and comfortable getaway in nature. Perfect for romantic holidays or some time away with the family. The uniquely designed cabin features an open space plan with lots of light and views of the surrounding nature. Larger groups can book together with our nearby property 'Beautiful Galillee Getaway'.",
		properties: {
			accommodates: 4,
			type: '1 bedroom',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'TV',
			'Wifi',
			'Kitchen',
			'Hangers',
			'Air conditioning',
			'Cooking basics',
			'Heating',
		],
		host: {
			_id: '51399392',
			fullname: 'Emma Levi',
			imgUrl: 'https://randomuser.me/api/portraits/women/20.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Klil, North District, Israel',
			lat: 32.9855303,
			lng: 35.2004778,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "Maximum Serenity! Beautiful Unit, tastefully decorated, very comfortable and spacious. I strongly recommend Emma's place, probably the best BNB I have ever stayed at. Surrounded with beautiful olive trees, very quiet and private.",
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u105',
					fullname: 'Robert Choen',
					imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Emma’s yurt is unique beautiful and at an amazing location :) we had a wonderful stay, had everything we needed and the place was very well equipped and sparkling clean. We’ll definitely come back!',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u103',
					fullname: 'Tom Marshall',
					imgUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "If you love nature and quiet you have come to the right place. We spent a whole weekend with our three children in Ema and Gedalia's yurt. The yurt is equipped to a high standard, very clean and special. The hosts made sure to guide us regarding hiking trails in the area and were available for any of our requests. The only hard thing about the vacation was leaving! We will definitely be back again!",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u102',
					fullname: 'Odin Black',
					imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'What a lovely place. Everything was as described and we also used a local service for breakfast to door that added to the experience. Do note that in summer months the area is not as green as in pictures (but with lovey olive trees). Also recommend to bring anti-repellent as there were many flies/mosquitos',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u101',
					fullname: 'Yoav Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Had a great time at Emma's place. Quiet, peacefull, great view, full privacy, the place was spotless clean, and had everything we could want. Cosy, spacious and welcoming, and the hosts were very responsive. Also not very far from the beach, great restaurants nearby, all you could want for a wonderful Gallillee vacation.",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u108',
					fullname: 'Cassandra Hester',
					imgUrl: 'https://randomuser.me/api/portraits/women/84.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "The Yurt was amazing, it's brand new, and has everything you might need. It's located perfectly, isolated enough to have privacy, and also with an amazing view in the middle of nature. We had a rainy stay, but the fireplace made it the perfect winter getaway, staying warm and cozy inside, while looking at the rain hit the field outside. Gedaliah and Emma, were super communicative, making sure we've arrived safely and having a good stay. All in all, highly recommended.",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1010',
					fullname: 'Uri Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Kedma, stunning hut in the nature',
		imgUrls: [
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621412968/airbnb-proj/Kedma-1_ntcsb2.jpg',
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621412967/airbnb-proj/Kedma-2_g53wb1.jpg',
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621412962/airbnb-proj/Kedma-3_bpfuvk.jpg',
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621412963/airbnb-proj/Kedma-4_vgdc4k.jpg',
			'https://res.cloudinary.com/zinamichailov/image/upload/v1621412962/airbnb-proj/Kedma-5_eprbl1.jpg',
		],
		price: 150.0,
		summary:
			"A small hiker's cabin on the border of a 10-square meter nature reserve and another 10-square meter balcony. Jury adventurers who love to sleep in the outdoors with no electricity. Outdoor kitchen, compost and a hot shower outside under the trees. Big summer pool, slow tab and sauna for cold days. Plenty of hiking trails around, cliffs to climb from the best in the country. The cabin without power( there is a place to charge ) without WiFi music is not possible and the silence must be kept in place.",
		properties: {
			accommodates: 2,
			type: '1 bedroom',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'Wifi',
			'Kitchen',
			'Smoking allowed',
			'Air conditioning',
			'Cooking basics',
			'Heating',
			'Free parking on premises',
		],
		host: {
			_id: '51399322',
			fullname: 'Bradyn Dickson',
			imgUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Gita, North District, Israel',
			lat: 32.9672482,
			lng: 35.249074,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'We had a great time at Daya guesthouse. Beautiful, quiet and close to nature! we will definitely come back.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u105',
					fullname: 'Robert Choen',
					imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'This is the definition of Glamping. The cabin is in the middle of the woods, amazing view, the shared facilities are simply perfect. I loved it. Perfect for couples who want to sleep under the stars.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u103',
					fullname: 'Tom Marshall',
					imgUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "The property is exactly as described and was above our expectations. Hardly recommend to visit here if you're looking for a place to connect with the nature and leave your problems behind. It is placed in amazing location, under the trees. The facilities are in high quality, everything is well maintained and super clean.",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u102',
					fullname: 'Odin Black',
					imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'This is the definition of Glamping. The cabin is in the middle of the woods, amazing view, the shared facilities are simply perfect. I loved it. Perfect for couples who want to sleep under the stars.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u101',
					fullname: 'Yoav Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Lihi and Adi were amazing hosts. The clean, cozy, and details oriented hut was wonderful. The only thing that would make it better is a stronger heater. We will definitely come back (on another full moon night, in the spring time).',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u1011',
					fullname: 'Molly Taylor',
					imgUrl: 'https://randomuser.me/api/portraits/women/56.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "If you're looking for a really special experience this is the place. basically there's nothing there but a beautiful glass room, in the middle of the woods but we the atmosphere is really special and unique.. we will come back for sure",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1012',
					fullname: 'Arthur Macias',
					imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Kedma, stunning hut in the nature',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/ecebdfd3-2f24-448c-b13a-040e7fd3f157.jpg',
			'https://a0.muscache.com/im/pictures/631b50de-8646-4571-be8d-cb156ebbfdb8.jpg',
			'https://a0.muscache.com/im/pictures/0a922301-e080-41c2-b52d-df918901c669.jpg',
			'https://a0.muscache.com/im/pictures/ba82843c-4225-4a04-bee5-332d7b24144a.jpg',
			'https://a0.muscache.com/im/pictures/307dcae9-5267-4c75-aede-527b8118bb09.jpg',
		],
		price: 155.0,
		summary:
			'Enjoy a million stars in five-star conditions, meet nature up close, rest from the fast pace of life, and admire the beauty of creation. The spacious and indulgent new yurt (38 sq.m.) resides in Gita, a charming, quiet little settlement in the heart of the mountains of the western cylinder, equipped with maximum comfort, bordered directly on the first line by the wilderness preserve Goethe Cliffs and Wadi House Valley, and located right on the border of the beautiful wild grove, amidst spectacular landscapes, endless peace, and a rare and untouched nature enveloped from all over.',
		properties: {
			accommodates: 4,
			type: 'Studio',
			bad: 4,
			bath: 1,
		},
		amenities: [
			'Kitchen',
			'Smoking allowed',
			'Wifi',
			'Air conditioning',
			'Indoor fireplace',
			'Heating',
			'Free parking on premises',
			'Pets allowed',
		],
		host: {
			_id: '51399322',
			fullname: 'Phillip Freeman',
			imgUrl: 'https://randomuser.me/api/portraits/men/61.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Gita, North District, Israel',
			lat: 32.9672492,
			lng: 35.249084,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "We enjoyed our stay at Shira's place. The unit is very comfortable and spacious. Communication with the host was excellent. We strongly recommend staying at Shira's place.",
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u105',
					fullname: 'Robert Choen',
					imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great place and great location! Shira was pleasant and attentive to our needs. The instructions and recommendations sent to us prior to our arrival covered everything we had to know. We enjoyed our staying very much!',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u102',
					fullname: 'Odin Black',
					imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The yort was amazing!! Beautiful, very clean, nice and comfortable bed, and a perfect hot tub outside that overlook the beautiful surrounding. Shira thought about all the small details, even picked up tea leaves from the garden. We had the best time there!! Highly recommended',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u103',
					fullname: 'Tom Marshall',
					imgUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Shira is a great host. great communication and gets all your needs. One thing that was a bit of an upset was the bed. It's not really a twin bed and is quiet small. It would make the vacation all better if the yurt is equipped with a real double bed. Otherwise all was great",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u1013',
					fullname: 'Dan Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "We had a lovely time in Shira's yurt,the instructions were clear and easy to find, the self check-in was easy and the yurt itself was super clean had all the amenities and is very nicely decorated and right on the edge of a nature reserve, where you can go on walks without getting into a car, we loved it! The hot tub outside between the trees was a great bonus <3",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.8 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u1011',
					fullname: 'Molly Taylor',
					imgUrl: 'https://randomuser.me/api/portraits/women/56.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Our 2-nights stay at Shira’s place was beyond amazing. The yurt was sparkly clean, spacious and welcoming. The view from the beautiful deck was just what we were looking for - a relaxing yet exciting vacation. The pool was the perfect refreshment for a hot sunny day. We used the hidden deck (she’ll tell you all about it and how to find it!) for coffee breaks, meditation and some yoga practicing. It was beyond dreamy. A special thanks for Shira’s recommendations - all of them were perfect and well thought. We would definitely want to come back. Thank you for hosting us so kindly!',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1012',
					fullname: 'Arthur Macias',
					imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'THE SEA OF GLILIEE CABINS',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/d591897f-e8b1-4b2c-ba7c-7cebead70112.jpg',
			'https://a0.muscache.com/im/pictures/dcaddcb2-703d-4b36-9e48-47cc2a3d72a0.jpg',
			'https://a0.muscache.com/im/pictures/839503bf-9c6c-4b6c-b56e-133f8aa2b8b6.jpg',
			'https://a0.muscache.com/im/pictures/2871a430-ae8d-4bce-a256-798e5f7e142c.jpg',
			'https://a0.muscache.com/im/pictures/03ace7c3-b8b4-4696-8d7a-f7e8cb0fb044.jpg',
		],
		price: 130.0,
		summary:
			'Two beautiful cabins. 100% Privacy. From the cabins you can see the magical view of the Sea of Galilee, the Golan Heights and Arbel cliff.',
		properties: {
			accommodates: 2,
			type: '1 bedroom',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'TV',
			'Wifi',
			'Kitchen',
			'Hangers',
			'Air conditioning',
			'Cooking basics',
			'Heating',
		],
		host: {
			_id: '51399392',
			fullname: 'Kendall Castaneda',
			imgUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Kahal, North District, Israel',
			lat: 32.8913179,
			lng: 35.5107113,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Lovely location, amazing and warm reception/service. Delicious breakfast. A lovely, quiet get away with a wonderful host. Haim was so kind, welcoming and helpful.',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.6 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u105',
					fullname: 'Robert Choen',
					imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "The cleanest and neatest cabin we've been to. Amazing value for money, and Haim was kind and responsive. Definitely recommend!",
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u103',
					fullname: 'Tom Marshall',
					imgUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Thanks for a wonderful vacation! We enjoyed our stay, the great breakfast and the thoughtfulness of Haim. Highly recommend!',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u102',
					fullname: 'Odin Black',
					imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Haim's place is very clean and Haim is very freindly and welcoming. we enjoyed a lot while our stay there.",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u101',
					fullname: 'Yoav Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great and communicative host, and an amazing place for the price! Also a great view. 100% recommended.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u108',
					fullname: 'Cassandra Hester',
					imgUrl: 'https://randomuser.me/api/portraits/women/84.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Quiet and cosy little cabin in the middle of Kahal village. You really do feel like you're away from everything when you're here and the wooden cabin, during a cold winters day, is the perfect cosy setting to just enjoy with your partner. Wifi was initially an issue but was fixed up. He serves a lovely breakfast each morning, plenty of food and well presented. Nice for a romantic weekend away or a bit of rest and relaxation.",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1010',
					fullname: 'Uri Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'The Lovers Cabin - With private pool',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/cf2ecd5f-307a-4602-a6a8-1a49780c24da.jpg',
			'https://a0.muscache.com/im/pictures/ca85ac68-734d-40c2-b907-546071caa8f8.jpg',
			'https://a0.muscache.com/im/pictures/1b7933c8-0877-465f-abf3-34d42a06a5cb.jpg',
			'https://a0.muscache.com/im/pictures/310a57d4-8153-4465-803d-8b204110680a.jpg',
			'https://a0.muscache.com/im/pictures/6a53b463-2ee6-461c-8a5f-9316ba24e618.jpg',
		],
		price: 140.0,
		summary:
			'Our cabins are on the mountain side, overlooking the Sea of Galilee, with wonderful views and fresh, unpolluted air. Each cabin has a heated pool, 3m diameter, a large Jacuzzi, AC, a log fireplace, a fully equipped kitchenette, a dining area, a separate shower and a comfortable bed.',
		properties: {
			accommodates: 3,
			type: '1 bedroom',
			bad: 2,
			bath: 1,
		},
		amenities: [
			'TV',
			'Wifi',
			'Free parking on premises',
			'Kitchen',
			'Hangers',
			'Air conditioning',
			'Cooking basics',
			'Heating',
		],
		host: {
			_id: '513977392',
			fullname: 'Tristan Payne',
			imgUrl:
				'https://a0.muscache.com/im/users/19180880/profile_pic/1406751408/original.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Amirim, North District, Israel',
			lat: 32.9374962,
			lng: 35.4499969,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'If you are looking for a quiet, tranquil, luxurious getaway , this is it. The space was so clean and beautiful. The host provides a lovely sage tea, wine, candles for the tub with bubble bath and as much firewood and kindling as you could want. I loved every minute of my stay, it was amazing! I highly recommend this destination in Northern Israel.',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u1015',
					fullname: 'Molly Mahoney',
					imgUrl: 'https://randomuser.me/api/portraits/women/0.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "The cleanest and neatest cabin we've been to. Amazing value for money, and Haim was kind and responsive. Definitely recommend!",
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u103',
					fullname: 'Tom Marshall',
					imgUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Shalom’s place is AMAZING for couples looking for a quite, romantic and beautiful place.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u1016',
					fullname: 'Danielle Foley',
					imgUrl: 'https://randomuser.me/api/portraits/men/24.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Haim's place is very clean and Haim is very freindly and welcoming. we enjoyed a lot while our stay there.",
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u101',
					fullname: 'Yoav Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great and communicative host, and an amazing place for the price! Also a great view. 100% recommended.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u108',
					fullname: 'Cassandra Hester',
					imgUrl: 'https://randomuser.me/api/portraits/women/84.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "You really do feel like you're away from everything when you're here and the wooden cabin, during a cold winters day, is the perfect cosy setting to just enjoy with your partner. Wifi was initially an issue but was fixed up. He serves a lovely breakfast each morning, plenty of food and well presented. Nice for a romantic weekend away or a bit of rest and relaxation.",
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1017',
					fullname: 'Julie Reed',
					imgUrl: 'https://randomuser.me/api/portraits/women/58.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'The Olive Trees Cabin',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/d5b87549-43f8-4d5e-af14-4504d5d1b05c.jpg',
			'https://a0.muscache.com/im/pictures/b3db5d45-52e8-4fe1-848a-844edc3e8fea.jpg',
			'https://a0.muscache.com/im/pictures/baea598c-fa4a-448d-8b97-1cdc6a8b15b1.jpg',
			'https://a0.muscache.com/im/pictures/746a3253-7465-4fa3-9d51-7b18976f2a6d.jpg',
			'https://a0.muscache.com/im/pictures/9f671243-7157-43f3-8946-9bf5fad59a0c.jpg',
		],
		price: 100.0,
		summary:
			'Beautiful and spacious cabin in the organic Klil village in the Galillee close to the mediterranean sea. Built in an olive grove with traditional stone verandas paved around it, its a peaceful space combining modern and village styles. A 60 square meter studio space full of light, air and silence.',
		properties: {
			accommodates: 5,
			type: 'Studio',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'Free parking on premises',
			'Wifi',
			'Cooking basics',
			'Hangers',
			'TV',
			'Air conditioning',
			'Heating',
			'Kitchen',
		],
		host: {
			_id: '512277392',
			fullname: 'Dennis Harvey',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/629fe61a-08e4-4d9b-985a-f2e0d27e2880.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Klil, North District, Israel',
			lat: 32.9855305,
			lng: 35.200488,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Dennis Harvey yurt is luxurious yet low key. You have everything you need (plus great water pressure!) It was wonderful to escape the hustle and bustle of city life and just enjoy quiet amongst the olive trees. All the dogs in the area tend to bark at night but nothing anyone can do about that.',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u1015',
					fullname: 'Molly Mahoney',
					imgUrl: 'https://randomuser.me/api/portraits/women/0.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Beyond expectations - great vibe in the area and Dennis’s place was very comfortable and spacious. Would definitely recommend for those that are looking for a peaceful getaway with plenty of nature activities in the area.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u103',
					fullname: 'Tom Marshall',
					imgUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Nice and beautiful home, a bit rural design which made our stay special. Big windows, comfortable beds, everything you need for bathroom or kitchen was easy to find. A host was super responsive and gave a detailed explanation about everything! This area is ecologic, so we could not switch on an air-conditioner after 10 PM, but there were three big ceiling fans that did their job My husband still felt a bit hot that night, but a pleasant wind from windows made it more comfortable.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u1016',
					fullname: 'Danielle Foley',
					imgUrl: 'https://randomuser.me/api/portraits/men/24.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Dennis’s Klil place is a great getaway for Tel Avivans who seek a quieter corner of Israel. Klil is off the grid, both literally and metaphorically. Stylish furnishings, peaceful patio, we lacked nothing. Recommend Silverman’s Bakery, a pleasant 20-minute stroll into “downtown” Klil (it is about the only business).',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u101',
					fullname: 'Yoav Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Wow. Not only is this space gorgeous, romantic, stylish, and clean but it is in a town very much worth seeing. My husband and I actually got rained in for half a day and the yurt was the perfect place to get stuck for awhile. We couldn’t have loved it more!',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u108',
					fullname: 'Cassandra Hester',
					imgUrl: 'https://randomuser.me/api/portraits/women/84.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Amazing stay as always. This was my second time staying here and is my go-to place to stay when in Klil.',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620218977796,
				by: {
					_id: 'u1017',
					fullname: 'Julie Reed',
					imgUrl: 'https://randomuser.me/api/portraits/women/58.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Sea Breeze Studio on the 15 floor',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/d56688a7-28a5-4293-b35f-6d2ce81ccf1f.jpg',
			'https://a0.muscache.com/im/pictures/5946fda3-d093-4abe-8793-a7b9d11c4878.jpg',
			'https://a0.muscache.com/im/pictures/6cdc8404-63f5-43ae-81fc-6cbd8416a243.jpg',
			'https://a0.muscache.com/im/pictures/7fe990db-9abe-4efc-a1b3-a30f369a2236.jpg',
			'https://a0.muscache.com/im/pictures/46a7d1d3-e277-4d99-b393-be0f4c3bd88e.jpg',
		],
		price: 100.0,
		summary:
			'For many years Royal Apartments has been pleased with its customers with quality service and has established itself as a reliable partner in the field of tourism. We offer a wide range of services for tourists in Netanya. Plenty of premium apartments in the best areas by the sea, excursions, private beach, car rental - trust us with your vacation and we will make it unforgettable!',
		properties: {
			accommodates: 4,
			type: 'Studio',
			bad: 2,
			bath: 2,
		},
		amenities: [
			'Wifi',
			'Kitchen',
			'Smoking allowed',
			'Air conditioning',
			'Cooking basics',
			'Heating',
			'Free parking on premises',
		],
		host: {
			_id: '51399322',
			fullname: 'Krish Hebert',
			imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Netanya, Center District, Israel',
			lat: 32.3286181,
			lng: 34.8566246,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Great apartment in a great area from a great host. Evgeni made it as easy as possible me to really enjoy my much needed vacation.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u105',
					fullname: 'Adison Armstrong',
					imgUrl: 'https://randomuser.me/api/portraits/women/93.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great location and beautiful view! Was about a 20 minute walk from the beach, food, etc.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u103',
					fullname: 'Tom Marshall',
					imgUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The apartment is really sweet, it’s clean, pretty and perfect for a couple. The view from the apartment is stunning. The host was really nice and friendly and accommodated all our needs. It’s not too far from the main area in Netanya. It was a perfect stay. Would definitely go back',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u102',
					fullname: 'Odin Black',
					imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great os not enough to describe the view. Complete apartment with everything you need, kitchen, bath towels and even a hair dryer. The only issue is that I was able to smell someone smoking through the central air conditioning.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u101',
					fullname: 'Yoav Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The view is absolutely amazing. The communication was very good with Lea. We had a great stay in the flat.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u1011',
					fullname: 'Molly Taylor',
					imgUrl: 'https://randomuser.me/api/portraits/women/56.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "If you're looking for a really special experience this is the place. basically there's nothing there but a beautiful glass room, in the middle of the woods but we the atmosphere is really special and unique.. we will come back for sure",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1012',
					fullname: 'Arthur Macias',
					imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Beachfront Studio Sea View',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/8122cbab-ece1-438a-bd44-375a501595b3.jpg',
			'https://a0.muscache.com/im/pictures/4b809c12-6ab4-4fa2-8498-c6f516ddc1d8.jpg',
			'https://a0.muscache.com/im/pictures/7e095cf1-e856-4a1a-aa2f-ca19c3f08b8d.jpg',
			'https://a0.muscache.com/im/pictures/55074993-a7f6-4514-83b8-b40df914c159.jpg',
			'https://a0.muscache.com/im/pictures/8a04f3e8-0b52-4746-b92b-958275e33b44.jpg',
		],
		price: 95.0,
		summary:
			'Luxury Top Floor Beachfront Boutique Studio Apartment with Sea View Located in The Daniel Hotel in Herzliya Pituah. Amazing Views and THE BEST Location! Beach front access are just steps away.',
		properties: {
			accommodates: 4,
			type: 'Studio',
			bad: 3,
			bath: 2,
		},
		amenities: [
			'Heating',
			'Wifi',
			'Hangers',
			'Air conditioning',
			'Cooking basics',
			'Kitchen',
			'Free parking on premises',
		],
		host: {
			_id: '51399322',
			fullname: 'Elizabeth Reynolds',
			imgUrl: 'https://randomuser.me/api/portraits/women/82.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Herzliya, Center District, Israel',
			lat: 32.1656255,
			lng: 34.8469023,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "Ami's place is beautiful and offers access to the Daniel Hotel which was great. Ami was very nice and quick to respond to any questions. Would definitely go back!",
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u1018',
					fullname: 'Christopher Daugherty',
					imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great location...right on the beach. Hotel also has awesome pool with direct beach access. Convenient to stores etc. We really enjoyed...and Ami organized a late checkout which was extremely helpful.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u1019',
					fullname: 'Katie Lynch',
					imgUrl: 'https://randomuser.me/api/portraits/women/42.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great modern suite! Ami was easy to get through to and very accomodating. Best location right by the beach! We will definitely be back.',
				rate: [
					{ property: 'Cleanliness', val: 4.7 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u1020',
					fullname: 'Charlee Garcia',
					imgUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Elizabeth was a wonderful host to us. We had great communication with him and he was quick to reply. If there is an issue, he will handle it immediately. Thank you for a great stay, we really enjoyed it.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u1021',
					fullname: 'Dillan Petty',
					imgUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Very good location, very clean and modern apartment. Had an amazing time there, definitely will come back.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u1011',
					fullname: 'Molly Taylor',
					imgUrl: 'https://randomuser.me/api/portraits/women/56.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'This place is incredible and has everything you would want in an apartment plus more. Feels like your feeling in a very expensive apartment for a very reasonable price. Ami was very responsive and included everything. Would recommend to anyone. 10/10.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1022',
					fullname: 'Alani Barker',
					imgUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'PORT CITY - DOWNTOWN STUDIO',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/b17e01aa-77df-4a30-8529-519aae82f63d.jpg',
			'https://a0.muscache.com/im/pictures/ba9fe816-c26f-4fef-9cf1-821437230a51.jpg',
			'https://a0.muscache.com/im/pictures/e2f20d7b-96ad-43bd-8e21-cc6bb84defa8.jpg',
			'https://a0.muscache.com/im/pictures/c4588326-eb10-456f-adcc-9a9af7db2860.jpg',
			'https://a0.muscache.com/im/pictures/a14a364f-9370-4fc1-b6b3-df3c22def522.jpg',
		],
		price: 60.0,
		summary:
			'the most unique & stylish space in downtown haifa! . Designed with a modern and cozy style, fully equipped with all you might need. a studio appartment that located in the heart of haifa most touristic area.',
		properties: {
			accommodates: 2,
			type: 'Studio',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'Heating',
			'Wifi',
			'Hangers',
			'Air conditioning',
			'Cooking basics',
			'Kitchen',
			'Free parking on premises',
		],
		host: {
			_id: '51399322',
			fullname: 'Jay Lopez',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/4a55d268-f3fc-464f-be5e-daca4925654f.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Haifa, Haifa District, Israel',
			lat: 32.8191218,
			lng: 34.9983856,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'GREAT location, close within all great sites in Haifa! We walked in and the place was above clean and ready. Itamar was amazingly helpful when we reached out. A really great price for a truly wonderful place.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u1018',
					fullname: 'Christopher Daugherty',
					imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Fantastic location! Can’t get any better. Very clean and stylish. This is a unit only for Airbnb and is VERY sparse. We only had one small towel and hand towel each - no extras in the room. No rugs in room or bathroom which made the floors cold and especially difficult in bathroom with no towel or rug for floor. Also, great little coffee maker but only one pod of coffee for each of us and no creamer. Things you need: paper towels, blow dryer, shampoo and conditioner and extra towels and umbrella if raining. I would definitely go back if these things were provided or if I had them. Spot on communication and easy check in.',
				rate: [
					{ property: 'Cleanliness', val: 4.7 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u1020',
					fullname: 'Charlee Garcia',
					imgUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Perfect location for those who come to enjoy Haifa's night life. Bars and restaurants at walking distance. Practical studio appartment.",
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u1019',
					fullname: 'Katie Lynch',
					imgUrl: 'https://randomuser.me/api/portraits/women/42.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great place located at the heart of Haifa downtown near by many great attractions, restaurants, bars, great & fast communication, will definitely suggest the place to everyone.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u1021',
					fullname: 'Dillan Petty',
					imgUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The flat is clean, nicely furnished, equipped with all useful things and located in the perfect place near almost all possible public transport stops. The check-in/check-out procedures are fast and easy, the communication with the host is perfect.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1022',
					fullname: 'Alani Barker',
					imgUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Very good location, very clean and modern apartment. Had an amazing time there, definitely will come back.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u1011',
					fullname: 'Molly Taylor',
					imgUrl: 'https://randomuser.me/api/portraits/women/56.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Modern Apartment with Lake View',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/75ae5f4f-4ea8-419a-8380-284e5cc2bc9b.jpg',
			'https://a0.muscache.com/im/pictures/f049f615-5767-411d-85f1-784a2af0fc09.jpg',
			'https://a0.muscache.com/im/pictures/7bed0dc2-603b-4d7f-82cd-8390e10b2a7f.jpg',
			'https://a0.muscache.com/im/pictures/ca814da2-941b-44b4-9ebe-90a1cd16748e.jpg',
			'https://a0.muscache.com/im/pictures/1d7b4b20-9cd5-440d-ab64-179f5aaa33cb.jpg',
		],
		price: 130.0,
		summary:
			'The “Modern apartment with lake view” apartment is located in the Lower Galilee, at the northern part of Tiberias on a mountainside facing the Sea of Galilee and the Golan Heights. We recently *renewed* the apartment completely.',
		properties: {
			accommodates: 6,
			type: '2 bedrooms',
			bad: 3,
			bath: 2,
		},
		amenities: [
			'TV',
			'Wifi',
			'Kitchen',
			'Hangers',
			'Air conditioning',
			'Cooking basics',
			'Heating',
		],
		host: {
			_id: '51399392',
			fullname: 'Maximilian Fitzgerald',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/cbd1ea95-3cd8-4edb-a903-cf4a26eb47ab.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Tiberias, North District, Israel',
			lat: 32.789214,
			lng: 35.521343,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Staying at Tal’s beautiful place made our trip to Galilee extraordinary special. The view is incredible!!! It is very nice, clean and the beds are super comfortable. An added touch was the “hot and cold water filter” saving time and extra costs for bottled water. Tal is also a wonderful host with impecable detail and very throughout. Just follow his instructions and directions and the (Hidden by Airbnb) “pin” (directions) and you will find it easily. I highly recommend staying here.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u108',
					fullname: 'Cassandra Hester',
					imgUrl: 'https://randomuser.me/api/portraits/women/84.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Beautiful home and views. Tal responds promptly and kindly to all inquiries. Americans, you must always turn on boilers in this country to have hot water-Simple light switch type button on a wall. Beds are firm. I hope Tal implements my recommendations, then this place will be 5 star!',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u103',
					fullname: 'Tom Marshall',
					imgUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Beautiful view of the lake. Very spacious apartment. Close to everything. Quick responses from host',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.6 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u105',
					fullname: 'Robert Choen',
					imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Tals place is amazing! It looks just like the pictures and the view is absolutely spectacular! Would highly recommend!',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u102',
					fullname: 'Odin Black',
					imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'You will absolutely love the views, the open layout, and the short drive to the city.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u101',
					fullname: 'Yoav Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Staying at Tals place felt like staying at 5 star hotel. The place was sparkling clean and had very nice decorations. The view of the Sea of Galilee was simply amazing. Every living space was furnished with very modern furniture. A rental car is required as there is no close public transportation. Parking is very accessible.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1010',
					fullname: 'Uri Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'XXL Studio - City Center',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/344d9a0e-c0b9-4112-826a-ef09fe0b283e.jpg',
			'https://a0.muscache.com/im/pictures/aa407c28-f719-4153-87ec-77e1cabf36e7.jpg',
			'https://a0.muscache.com/im/pictures/9de7cb9c-f150-49a6-8214-8eba0c389d19.jpg',
			'https://a0.muscache.com/im/pictures/4b19093c-2d36-4865-bd61-c0aba3744341.jpg',
			'https://a0.muscache.com/im/pictures/4ff1b534-bada-4c4e-8e73-474548d93ac5.jpg',
		],
		price: 110.0,
		summary:
			"⭐ A hip and modern little place, PERFECTLY LOCATED right next to the famous Rothschild Boulevards!.⭐ 1 min from the best cafes, restaurants, and bars in Tel Aviv.⭐ BRAND NEW! Renovated from scratch at Oct 2019.⭐ Excellent location - quiet street a few steps walk from 'Tourist's Kingdom'.⭐ Supermarkets, shops, ATM - 3 min walk away.⭐ 12 min walk to the beach.⭐ Super easy SELF CHECK-IN",
		properties: {
			accommodates: 2,
			type: 'Studio',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'Heating',
			'Wifi',
			'Hangers',
			'Pets allowed',
			'Air conditioning',
			'Cooking basics',
			'Kitchen',
		],
		host: {
			_id: '51394322',
			fullname: 'Lincoln Roth',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/f89d0840-1acb-428e-944f-0811d3c3ad31.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Tel Aviv-Yafo, Tel Aviv District, Israel',
			lat: 32.081634521484375,
			lng: 34.77982711791992,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "The room is a bit small but it's very clean, and the location can't be beat (even better post Corona of course). I had a few requests during my stay and the hosts always answered me within 10 minutes or so. Highly recommended!",
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u1019',
					fullname: 'Katie Lynch',
					imgUrl: 'https://randomuser.me/api/portraits/women/42.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'I stayed at the apartment for 3 days, it was very clean and comfortable, and I must say the service was exceptional, the hosts were very kind and helpful in moving me to a different unit. self check in and check out went smoothly.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 5.0 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u1018',
					fullname: 'Christopher Daugherty',
					imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'A great appartement in a great location. Highly recommended.',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u1020',
					fullname: 'Charlee Garcia',
					imgUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'A nice stay st this apartment, located perfectly in the heart of Tel Aviv. it was not perfect - the apartment was very dusty and I had a mini flood after first using the shower - but the team wss very responsive and the overall stay was pleasant.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u1021',
					fullname: 'Dillan Petty',
					imgUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'I really enjoyed my staying and for sure it will not be the last time of me there, thank you very much for everything !! Grate hospitality :)',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1022',
					fullname: 'Alani Barker',
					imgUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The place is well organized. With a wonderful location. The silver ware was not as clean.. overall it’s a comfortable choice for a couple of nights stay.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.8 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u1011',
					fullname: 'Molly Taylor',
					imgUrl: 'https://randomuser.me/api/portraits/women/56.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Sea of Galilee Tiberias Lake view 3 ',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/98038413-72dc-4e31-92af-98d2ba10b5f0.jpg',
			'https://a0.muscache.com/im/pictures/5ce6fc09-093a-4d9d-9ca5-2f40bcf80d7c.jpg',
			'https://a0.muscache.com/im/pictures/5fbc878b-95f3-47ef-9fa2-bc4730e9e17c.jpg',
			'https://a0.muscache.com/im/pictures/57a6ca02-c096-4819-bb3c-84072e375dba.jpg',
			'https://a0.muscache.com/im/pictures/bb1b1214-90db-4aba-8f39-023aa20c02b8.jpg',
		],
		price: 90.0,
		summary:
			'Amazing 3 rooms apartment with 2 bedrooms and living area, with balcony and sea view. the apartment located in a new building with 2 elevators, offers accommodations with all amenities needed for a comfortable, relaxing stay! the balcony also offers a BBQ grill. Perfect for couples, lone travelers, executives, friends, and families.',
		properties: {
			accommodates: 6,
			type: '2 bedrooms',
			bad: 3,
			bath: 1,
		},
		amenities: [
			'Wifi',
			'Heating',
			'Free parking on premises',
			'Air conditioning',
			'Cooking basics',
			'Hangers',
			'Kitchen',
		],
		host: {
			_id: '51394322',
			fullname: 'Jordan Coffey',
			imgUrl: 'https://randomuser.me/api/portraits/men/24.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Tiberias, North District, Israel',
			lat: 32.779339,
			lng: 35.521359,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Come alone, on a romantic getaway or a friends gathering....this place accommodates it all. Great vibe and chill space. Friendly owners that really care about making sure you feel at home.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.8 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u1022',
					fullname: 'Cortez Wilcox',
					imgUrl: 'https://randomuser.me/api/portraits/men/93.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great stylish apartment in amazing location close to the lake.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 4.7 },
					{ property: 'Location', val: 4.8 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u1023',
					fullname: 'Milagros Graham',
					imgUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'A great appartement in a great location. Highly recommended.',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u1020',
					fullname: 'Charlee Garcia',
					imgUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'I really enjoyed my staying and for sure it will not be the last time of me there, thank you very much for everything !! Grate hospitality :)',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1022',
					fullname: 'Alani Barker',
					imgUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'A nice stay st this apartment, located perfectly. it was not perfect - the apartment was very dusty and I had a mini flood after first using the shower - but the team wss very responsive and the overall stay was pleasant.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u1024',
					fullname: 'Lukas Bird',
					imgUrl: 'https://randomuser.me/api/portraits/men/86.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The place is well organized. With a wonderful location. The silver ware was not as clean.. overall it’s a comfortable choice for a couple of nights stay.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.8 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u1025',
					fullname: 'Aleena Mclean',
					imgUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Cozy apartment in center of Haifa',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/272fd108-b8ef-4024-b030-3afe86efcc3b.jpg',
			'https://a0.muscache.com/im/pictures/d4164afc-4ffa-465e-a323-7ce38b72d954.jpg',
			'https://a0.muscache.com/im/pictures/93ab542d-6fc7-48fb-a0b9-4b35e94824c6.jpg',
			'https://a0.muscache.com/im/pictures/7b31e55c-ca5d-419d-a2fe-752be13f4ba6.jpg',
			'https://a0.muscache.com/im/pictures/2d7cdd6b-1c51-4c87-a1ce-8a36b98c0729.jpg',
		],
		price: 95.0,
		summary:
			"Beatiful comfortable apartment in downtown Haifa. A fully equipped with all you might need and freshly renovated with a plenty of natural light.Perfect location for exploring Haifa's main touristic attractions! The house is located in close proximity from train station, bus stops, the entrance to the Baha'i gardens,the German Colony which is probably the best attraction in Haifa, plenty of bars,restorants, coffee shops..",
		properties: {
			accommodates: 3,
			type: 'Studio',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'Wifi',
			'Hangers',
			'Free parking on premises',
			'Air conditioning',
			'Pets allowed',
			'Heating',
			'Kitchen',
		],
		host: {
			_id: '51394322',
			fullname: 'Krystal Khan',
			imgUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Haifa, Haifa District, Israel',
			lat: 32.8091218,
			lng: 34.9883856,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'This apartment is everything you need in Haifa. Located next to the train, bars, restaurants and only blocks away from the tourist area. Will stay there again!',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1022',
					fullname: 'Alani Barker',
					imgUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Krystal and Sergey were extremely helpful and allowed me to check in early. Everything was super smooth and easy. I would gladly stay their again. The bed was comfy, the water was hot and super strong, and the AC worked great. I loved the neighborhood and centrality of the location.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.8 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u1022',
					fullname: 'Cortez Wilcox',
					imgUrl: 'https://randomuser.me/api/portraits/men/93.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'This was a great place to stay and it was very easy to communicate with the host!',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 4.7 },
					{ property: 'Location', val: 4.8 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u1023',
					fullname: 'Milagros Graham',
					imgUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Amazing stay in haifa! My wife and I really enjoyed our stay in this spotless and stylish apartment. Communication with Irena was excellent. Highly recommended. We would definitely stay here again.',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u1020',
					fullname: 'Charlee Garcia',
					imgUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'This was a great find! The apartment had everything we needed and more. 10/10 would recommend to a friend!',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u1024',
					fullname: 'Lukas Bird',
					imgUrl: 'https://randomuser.me/api/portraits/men/86.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Krystal's place was immaculate! Probably the cleanest Airbnb that I’ve ever stayed in. They left coffee, tea, apples, and oranges. It was very comfortable and homey. I will definitely stay here again next time that I’m in Haifa!",
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.8 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u1025',
					fullname: 'Aleena Mclean',
					imgUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Rahash Hagalim - Tal Family Cabin',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/4ce5004c-f3c6-4787-a117-0afe1e74a1f8.jpg',
			'https://a0.muscache.com/im/pictures/7a00a5ba-157d-4f5e-992e-d9943cfb5d8c.jpg',
			'https://a0.muscache.com/im/pictures/079a266d-45b4-46be-b1d7-c0cf6770d424.jpg',
			'https://a0.muscache.com/im/pictures/234c5673-ca41-4860-a913-1cc2cf52aced.jpg',
			'https://a0.muscache.com/im/pictures/47aec5fd-ab00-4baf-bd7c-67ae3a2e5e99.jpg',
		],
		price: 150.0,
		summary:
			'Boasting a garden and a terrace, rahash hagalim is set in Dor , 300 m (5 min walk) from Dor Beach. A hot tub is available for guests. Free WiFi & private parking are accessible at this property.All units are equipped with a flat-screen TV. All rooms are fitted with a private bathroom with a bath. A continental breakfast is available with exra charge. Ask the host at the property. The nearest airport is Ben Gurion Airport, 68 km from the property.',
		properties: {
			accommodates: 5,
			type: '2 bedrooms',
			bad: 4,
			bath: 1,
		},
		amenities: [
			'Wifi',
			'Hangers',
			'Free parking on premises',
			'Air conditioning',
			'Heating',
			'Kitchen',
			'Smoking allowed',
		],
		host: {
			_id: '51394322',
			fullname: 'Frankie Walter',
			imgUrl: 'https://randomuser.me/api/portraits/men/27.jpg',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Dor, Haifa District, Israel',
			lat: 32.6075668,
			lng: 34.9230461,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'What a lovely place. Everything was as described and we also used a local service for breakfast to door that added to the experience. Do note that in summer months the area is not as green as in pictures (but with lovey olive trees). Also recommend to bring anti-repellent as there were many flies/mosquitos',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218977896,
				by: {
					_id: 'u101',
					fullname: 'Yoav Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'This apartment is everything you need in Dor. Will stay there again!',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1022',
					fullname: 'Alani Barker',
					imgUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Frankie were extremely helpful and allowed me to check in early. Everything was super smooth and easy. I would gladly stay their again. The bed was comfy, the water was hot and super strong, and the AC worked great. I loved the neighborhood and centrality of the location.',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.8 },
				],
				createAt: 1620210976656,
				by: {
					_id: 'u1022',
					fullname: 'Cortez Wilcox',
					imgUrl: 'https://randomuser.me/api/portraits/men/93.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Had a great time at Frankie's place. Quiet, peacefull, great view, full privacy, the place was spotless clean, and had everything we could want. Cosy, spacious and welcoming, and the hosts were very responsive. Also not very far from the beach, great restaurants nearby.",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.9 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218973216,
				by: {
					_id: 'u108',
					fullname: 'Cassandra Hester',
					imgUrl: 'https://randomuser.me/api/portraits/women/84.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'This was a great place to stay and it was very easy to communicate with the host!',
				rate: [
					{ property: 'Cleanliness', val: 4.9 },
					{ property: 'Communication', val: 4.8 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 4.7 },
					{ property: 'Location', val: 4.8 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210999956,
				by: {
					_id: 'u1023',
					fullname: 'Milagros Graham',
					imgUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'If you love nature and quiet you have come to the right place. We spent a whole weekend with our three children. The yurt is equipped to a high standard, very clean and special. The hosts made sure to guide us regarding hiking trails in the area and were available for any of our requests. The only hard thing about the vacation was leaving! We will definitely be back again!',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 4.9 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218976656,
				by: {
					_id: 'u102',
					fullname: 'Odin Black',
					imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
				},
			},
			{
				id: utilService.makeId(),
				txt: "The vaction was amazing, it's brand new, and has everything you might need. It's located perfectly, isolated enough to have privacy, and also with an amazing view in the middle of nature. We had a rainy stay, but the fireplace made it the perfect winter getaway, staying warm and cozy inside, while looking at the rain hit the field outside. were super communicative, making sure we've arrived safely and having a good stay. All in all, highly recommended.",
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.8 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620218956796,
				by: {
					_id: 'u1010',
					fullname: 'Uri Dickson',
					imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'The Cozy Cabin',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/25763045/30ce195a_original.jpg',
			'https://a0.muscache.com/im/pictures/25763210/2a6057c1_original.jpg',
			'https://a0.muscache.com/im/pictures/25763328/4686b1fd_original.jpg',
			'https://a0.muscache.com/im/pictures/25763421/582a702c_original.jpg',
			'https://a0.muscache.com/im/pictures/25763514/814512fc_original.jpg',
		],
		price: 80.0,
		summary: 'Entire guesthouse hosted by Billy',
		properties: {
			accommodates: 2,
			type: '1 bedroom',
			bad: 1,
			bath: 1,
		},
		amenities: ['TV', 'Wifi', 'Kitchen', 'Cooking basics', 'Indoor fireplace'],
		host: {
			_id: utilService.makeId(),
			fullname: 'Billy Joel',
			imgUrl:
				'https://a0.muscache.com/im/users/4874888/profile_pic/1359366541/original.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Eilat, Israel',
			lat: 29.556676,
			lng: 34.9452312,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'If you want a cool place and nice people, this is for you :)',
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 5.0 },
					{ property: 'Accuracy', val: 4.0 },
					{ property: 'Location', val: 4.6 },
					{ property: 'Value', val: 4.4 },
				],
				createAt: 1620210973319,
				by: {
					_id: utilService.makeId(),
					fullname: 'Diana Mark',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/2f1e6661-798e-4891-996d-de1a582e1679.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Amazing place. Amazing people. Will come again, no doubt!',
				rate: [
					{ property: 'Cleanliness', val: 4.3 },
					{ property: 'Communication', val: 4.6 },
					{ property: 'Check-in', val: 4.0 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 5.0 },
				],
				createAt: 1620210972353,
				by: {
					_id: utilService.makeId(),
					fullname: 'Taylor Morales',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/0c4a1d75-929f-48e8-a95e-8b212d938ca9.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Billy was very helpful and the place was very nice and cozy. A great place to come and explore Eilat',
				rate: [
					{ property: 'Cleanliness', val: 4.0 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 4.3 },
				],
				createAt: 1620210971356,
				by: {
					_id: utilService.makeId(),
					fullname: 'Sam Manning',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/cd49ba9e-58cb-44f8-8923-6247f105cb3d.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'great space , nice people , very clean , good location , free parking .',
				rate: [
					{ property: 'Cleanliness', val: 4.8 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.0 },
					{ property: 'Location', val: 4.6 },
					{ property: 'Value', val: 3.9 },
				],
				createAt: 1620210972111,
				by: {
					_id: utilService.makeId(),
					fullname: 'Christina Weeks',
					imgUrl:
						'https://a0.muscache.com/im/users/13926270/profile_pic/1396732091/original.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Beautiful and convenient location, friendly and comfortable.',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.4 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.2 },
					{ property: 'Location', val: 4.7 },
					{ property: 'Value', val: 3.6 },
				],
				createAt: 1620210972223,
				by: {
					_id: utilService.makeId(),
					fullname: 'Ada Santiago',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/cbe40234-012c-4265-8792-4958b8055ff3.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Beutiful place that is walking distance to the beach. Great hosts and very accommodating',
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 4.6 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 4.5 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210972212,
				by: {
					_id: utilService.makeId(),
					fullname: 'Tamar Goland',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/4afb7f39-93be-4c94-beab-e64a29996599.jpg?im_w=240',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Red Sea - Yellow Studio 28',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/39ecce63-70fa-4bed-a0ae-0552fa71da51.jpg',
			'https://a0.muscache.com/im/pictures/9b6a09d0-ae37-4c28-a189-023177fc65dd.jpg',
			'https://a0.muscache.com/im/pictures/a66105bb-bcde-4d06-8403-82617355a451.jpg',
			'https://a0.muscache.com/im/pictures/5be04c34-17f7-4683-bc04-478b44b4e617.jpg',
			'https://a0.muscache.com/im/pictures/b134f129-ac35-49b6-b9e0-88861bd13c16.jpg',
		],
		price: 150.0,
		summary:
			"Studio completely renovated in a building of a popular neighborhood of Eilat. Transfer from Ramon airport to the Central bus station of Eilat - Egged Line 30. Parking in front of the building - FREE.	Large supermarket nearby. First beach at 15 minutes walking ditance .	Bus stop down the street .Don't miss Petra - Wadi Rum, we wok with Desert Eco Tours.",
		properties: {
			accommodates: 2,
			type: '1 bedroom',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'TV',
			'Wifi',
			'Kitchen',
			'Cooking basics',
			'Smoking allowed',
			'Pets allowed',
			'Air conditioning',
		],
		host: {
			_id: utilService.makeId(),
			fullname: 'Viviane Lamor',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/6848d583-b46b-4bae-9e26-5c37a93f75b6.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Eilat, South District, Israel',
			lat: 29.55609338955626,
			lng: 34.94006558294276,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Worked great for us.',
				rate: [
					{ property: 'Cleanliness', val: 4.3 },
					{ property: 'Communication', val: 4.0 },
					{ property: 'Check-in', val: 3.5 },
					{ property: 'Accuracy', val: 4.6 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210973419,
				by: {
					_id: utilService.makeId(),
					fullname: 'Sam Manning',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/50ac6682-246b-4c64-adbf-c4e3523b13df.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The apartment itself is reasonably priced and has everything you could need, including a washer, refrigerator, television, and air conditioning in both the living room and the bedroom.',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.2 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 4.2 },
					{ property: 'Location', val: 4.4 },
					{ property: 'Value', val: 3.7 },
				],
				createAt: 1620210972153,
				by: {
					_id: utilService.makeId(),
					fullname: 'Seana Shelton',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/e0926791-80a8-4ec9-85ad-d3ae729fa81a.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Cozy space that's easy to find. Viviane takes pride in providing a clean space and was helpful with local tips.",
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 4.5 },
					{ property: 'Check-in', val: 4.3 },
					{ property: 'Accuracy', val: 4.6 },
					{ property: 'Location', val: 3.9 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210971336,
				by: {
					_id: utilService.makeId(),
					fullname: 'Richard Frank',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/c9e09b0c-de1d-46d1-98be-71b9f1a4204f.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Viviane was a friendly fantastic host and her place was great. Super clean, functional space that was very convenient as well. Highly recommend!',
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 4.5 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210971111,
				by: {
					_id: utilService.makeId(),
					fullname: 'Ariel Zilberg',
					imgUrl:
						'https://a0.muscache.com/im/users/4306643/profile_pic/1354493320/original.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Vivian and her husband are very welcoming and accommodating.',
				rate: [
					{ property: 'Cleanliness', val: 4.7 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.6 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.0 },
				],
				createAt: 1620210972293,
				by: {
					_id: utilService.makeId(),
					fullname: 'Budi Morris',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/893ecf61-d194-4fbe-bf19-f773e6726100.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Viviane was fantastic. A very gracious host, and super friendly. We only stayed one night but would definitely recommend!! Its cute and very clean and has everything you need even for an extended stay!!',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 3.9 },
					{ property: 'Check-in', val: 4.6 },
					{ property: 'Accuracy', val: 4.2 },
					{ property: 'Location', val: 4.0 },
					{ property: 'Value', val: 4.5 },
				],
				createAt: 1620210971212,
				by: {
					_id: utilService.makeId(),
					fullname: 'Joaquin Stark',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/5a8853ba-62ce-459a-b9ef-6fae457386a2.jpg?im_w=240',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'CORAL',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/287d3662-7aae-4664-8555-33f27f2a2d52.jpg',
			'https://a0.muscache.com/im/pictures/52563657-5f52-48c8-9d4a-11f48b91727a.jpg',
			'https://a0.muscache.com/im/pictures/beafb969-bdc8-48dc-b561-f8f1a7ae8bec.jpg',
			'https://a0.muscache.com/im/pictures/a8cbf2b9-bf64-49b9-91b9-dd181c99e90f.jpg',
			'https://a0.muscache.com/im/pictures/decb6ac7-a5fc-4a11-85d0-2ef59c27b2c0.jpg',
		],
		price: 80.0,
		summary:
			'The best room what you can find in Eilat! 5 minutes walk from the beach and from the tourist area! The dream place for couples or friends!:)',
		properties: {
			accommodates: 4,
			type: '1 bedroom',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'TV',
			'Wifi',
			'Kitchen',
			'Cooking basics',
			'Air conditioning',
			'Hangers',
		],
		host: {
			_id: utilService.makeId(),
			fullname: 'Viviane Lamor',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/6848d583-b46b-4bae-9e26-5c37a93f75b6.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Eilat, South District, Israel',
			lat: 29.5497415555017,
			lng: 34.94955560389164,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Very nice apartment, great host, would be happy to stay there again.',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.3 },
					{ property: 'Check-in', val: 3.9 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.5 },
					{ property: 'Value', val: 4.0 },
				],
				createAt: 1620210973929,
				by: {
					_id: utilService.makeId(),
					fullname: 'Anton Kogan',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/4715fc30-4469-4543-964b-5a3fe5021f6b.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Raise your expectations, cause the apartment will answer them.',
				rate: [
					{ property: 'Cleanliness', val: 4.6 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.4 },
					{ property: 'Accuracy', val: 4.7 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210972171,
				by: {
					_id: utilService.makeId(),
					fullname: 'Idan Yaron',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/e7439e32-5a44-4dc8-b803-6528b5a31dbf.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'My friend and I had a lovely stay here. The apartment was sparkling clean and very comfortable. The owner was very good about communicating and was happy to answer all my touristy questions about Eilat. This apartment made for a perfect get away!',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.8 },
				],
				createAt: 1620210972336,
				by: {
					_id: utilService.makeId(),
					fullname: 'Abby Miller',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/2d793723-4baf-4159-95b3-c5f51430ce2e.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Wonderful studio to stay in. Great location - very central to everything we did in Eilat. The place was clean, comfortable, and Niki was extremely helpful and a wonderful host!',
				rate: [
					{ property: 'Cleanliness', val: 4.7 },
					{ property: 'Communication', val: 4.2 },
					{ property: 'Check-in', val: 4.3 },
					{ property: 'Accuracy', val: 4.0 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210971111,
				by: {
					_id: utilService.makeId(),
					fullname: 'Danielle Kind',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/95b98ed5-89d9-4aa7-8e9d-5bfca4fe363f.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'a great host ensuring our arrival with map and directions. The apartment is beautiful, with a fantastic view of the red-sea. She was very accommodating with check in and out.',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.0 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210971393,
				by: {
					_id: utilService.makeId(),
					fullname: 'Leora Manor',
					imgUrl:
						'https://a0.muscache.com/im/users/57802/profile_pic/1323541658/original.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: "It's always a pleasure staying here. The place is immaculate and has everything you could need and more for a weekend away. Host is super attentive and is always available to help. We will always choose this place when visiting Eilat.",
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 4.3 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 4.5 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620210971511,
				by: {
					_id: utilService.makeId(),
					fullname: 'Shani Rabin',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/3719cbed-86f3-4fdc-8a18-b2af20464189.jpg?im_w=240',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'The five stars',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/50b4fc25-5169-4be5-b2b0-f2f28dd83ead.jpg',
			'https://a0.muscache.com/im/pictures/3b689a0d-e948-4b08-b839-181679015875.jpg',
			'https://a0.muscache.com/im/pictures/d3d73dd9-a3e4-4329-b2d2-b61fa24a55ef.jpg',
			'https://a0.muscache.com/im/pictures/aeae840f-1345-4943-b955-50859157404f.jpg',
			'https://a0.muscache.com/im/pictures/e579261d-80cf-4d28-b60a-5250191af29a.jpg',
		],
		price: 65.0,
		summary:
			'The best room what you can find in Eilat! 5 minutes walk from the beach and from the tourist area! The dream place for couples or friends!:)',
		properties: {
			accommodates: 1,
			type: '1 bedroom',
			bad: 2,
			bath: 1,
		},
		amenities: [
			'TV',
			'Wifi',
			'Kitchen',
			'Pets allowed',
			'Air conditioning',
			'Hangers',
			'Free parking on premises',
		],
		host: {
			_id: utilService.makeId(),
			fullname: 'Niki Jones',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/5b06e55a-5695-47e8-bbab-c4288a1c6e85.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Eilat, South District, Israel',
			lat: 29.564522857428432,
			lng: 34.95891103161243,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Niki’s place is so lovely and nice! It’s an easy walk from the bus station and close to stores and bus stops. I loved the apartment- it was cute, cozy and comfortable. I wish I could stay forever!',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 4.6 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620210973876,
				by: {
					_id: utilService.makeId(),
					fullname: 'Ruth Thompson',
					imgUrl:
						'https://a0.muscache.com/im/users/3973443/profile_pic/1442704960/original.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Niki is wonderful as a host and as a person, she took the greatest care of us! She is the standard for Airbnb, we truly wish all Airbnb places and hosts were like Niki and her place!',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.3 },
					{ property: 'Check-in', val: 4.6 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.3 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620210973171,
				by: {
					_id: utilService.makeId(),
					fullname: 'Dennis Gibson',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/2e94c771-8417-4d06-9902-d38abd820767.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'A lovely little pied-a-terre with very effective air cond. and always nice and quiet. Highly recommended',
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 4.2 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.2 },
					{ property: 'Location', val: 5.4 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210972636,
				by: {
					_id: utilService.makeId(),
					fullname: 'Tom Frank',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/24fe6e68-5e25-418d-9572-dd262a69e68a.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Niki is very friendly and helpful in visiting Eilat',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.2 },
					{ property: 'Check-in', val: 4.4 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 3.7 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620210972111,
				by: {
					_id: utilService.makeId(),
					fullname: 'Walter Roberts',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/e3b98eda-0317-4ac3-accc-ebae57d8d44b.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: "We had great time in Eilat,thanks to Nikki.The place where we stay was very comfortable,clean and in quiet neighborhood.The apartment has nice kitchen and (Website hidden by Airbnb) was very helpful and gave us some advices what to see in Eilat.I would definitely recommend stay in Nikki's apartment!",
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.7 },
					{ property: 'Location', val: 4.5 },
					{ property: 'Value', val: 3.8 },
				],
				createAt: 1620210971713,
				by: {
					_id: utilService.makeId(),
					fullname: 'Joaquin Stark',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/2d793723-4baf-4159-95b3-c5f51430ce2e.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Great room, NIki is very helpful and friendly. The room is very clean well equipped so you can make breakfast or light lunch. Plenty of parking. There is a supermarket in walking distance.',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 4.5 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 4.2 },
					{ property: 'Location', val: 4.3 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210972511,
				by: {
					_id: utilService.makeId(),
					fullname: 'Amit Dagan',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/c35717f3-c0d7-4be1-8886-39da283b922f.jpg?im_w=240',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Hilo - Hawaii Luxury studio suite',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/2498bce2-44ec-4289-ad04-2cd516bd822f.jpg',
			'https://a0.muscache.com/im/pictures/b8ac1177-bff3-4710-897c-87341e4c720e.jpg',
			'https://a0.muscache.com/im/pictures/2b357dba-5259-4a6b-b78e-4117b3d24e35.jpg',
			'https://a0.muscache.com/im/pictures/miso/Hosting-33925715/original/6c31dcb2-ebf4-40d9-8512-ba282e359fa7.jpeg',
			'https://a0.muscache.com/im/pictures/miso/Hosting-33925715/original/90702fe8-e752-4181-8a36-3385af552b91.jpeg',
		],
		price: 65.0,
		summary:
			"Hawaii Luxury Suites is a large variety of high-class holiday apartments. Our apartments offer unparalleled service. Most of the luxury apartments at the Hawaii Luxury Suites come with a garden or balcony with a seating area. All apartments are equipped with a huge 65' flat-screen TV with satellite, Free wifi, air conditioners, bed linen, towels, and a kitchen equipped with Espresso machine, Microwave, Toaster Oven, Toaster and cooking utensils.",
		properties: {
			accommodates: 3,
			type: 'Studio',
			bad: 2,
			bath: 1,
		},
		amenities: [
			'TV',
			'Wifi',
			'Kitchen',
			'Pets allowed',
			'Cooking basics',
			'Air conditioning',
			'Hangers',
			'Free parking on premises',
		],
		host: {
			_id: utilService.makeId(),
			fullname: 'Chaim Graham',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/ac872bcc-1d30-47ed-a259-b3cd1759eb46.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Eilat, South District, Israel',
			lat: 29.5412230309723,
			lng: 34.94117915475612,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Place was nice. Clean. Good location. Host was very helpful and quick to get what I needed. If u use air conditioner it will trip the breaker. U can flip it back on in panel above switch to turn on hot water. Had a good stay thanks!',
				rate: [
					{ property: 'Cleanliness', val: 4.3 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 3.9 },
				],
				createAt: 1620210971876,
				by: {
					_id: utilService.makeId(),
					fullname: 'Audrina Avila',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/77b33fb6-fd04-4951-967f-f941c9c7fcf5.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The stay at Omer was great! Our host was very helpful when we had questions, but otherwise gave us lots of privacy and space. The location was convenient, all around wonderful stay!',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.3 },
					{ property: 'Check-in', val: 4.6 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.3 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620210973113,
				by: {
					_id: utilService.makeId(),
					fullname: 'Maximillian Walters',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/c340c512-d637-4b08-a749-2dd1603c6a5e.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The hospitality is amazing',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.3 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 5.1 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620210972614,
				by: {
					_id: utilService.makeId(),
					fullname: 'Heidy Bradshaw',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/9e84abb3-83f8-4e6c-bc8b-606f2aa27237.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The hosts were great and helping, the place was very clean but too tiny, and no view from the windows.',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 3.9 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 3.9 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210973214,
				by: {
					_id: utilService.makeId(),
					fullname: 'Cassie Armstrong',
					imgUrl:
						'https://a0.muscache.com/im/users/6551201/profile_pic/1369473698/original.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Really cute apartment walking distance to everything. Had an incredible stay and highly recommend. Shoutout to my contact Daniel who made it really exceptional. Thanks! Looking forward to staying with Yalarent again!',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 4.3 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.2 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210926713,
				by: {
					_id: utilService.makeId(),
					fullname: 'Annika Russo',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/fc484686-b73c-429b-ab79-8681f3fd4dd1.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'indulgent suite to stay, more than most of the suites around. will make the difference for your holiday....',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.2 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 3.6 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210975111,
				by: {
					_id: utilService.makeId(),
					fullname: 'Shane Ramsey',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/e25492f0-b0f8-4616-94c5-f5a605c055d0.jpg?im_w=240',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Studio Eilot 89',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/90749553/f7179131_original.jpg?im_w=1200',
			'https://a0.muscache.com/im/pictures/90749125/837e9bff_original.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/78084810/cc51066b_original.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/90749799/be11216d_original.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/90749198/54a53844_original.jpg?im_w=720',
		],
		price: 35.0,
		summary:
			"Hawaii Luxury Suites is a large variety of high-class holiday apartments. Our apartments offer unparalleled service. Most of the luxury apartments at the Hawaii Luxury Suites come with a garden or balcony with a seating area. All apartments are equipped with a huge 65' flat-screen TV with satellite, Free wifi, air conditioners, bed linen, towels, and a kitchen equipped with Espresso machine, Microwave, Toaster Oven, Toaster and cooking utensils.",
		properties: {
			accommodates: 2,
			type: 'Studio',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'TV',
			'Wifi',
			'Kitchen',
			'Cooking basics',
			'Air conditioning',
			'Free parking on premises',
		],
		host: {
			_id: utilService.makeId(),
			fullname: 'Melvin Knox',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/ac815892-d365-4621-87e6-86bb93ffaab7.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Eilat, South District, Israel',
			lat: 29.537065965027328,
			lng: 34.93438314865661,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Place was nice. Clean. Good location. Host was very helpful and quick to get what I needed. If u use air conditioner it will trip the breaker. U can flip it back on in panel above switch to turn on hot water. Had a good stay thanks!',
				rate: [
					{ property: 'Cleanliness', val: 4.3 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.7 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 3.9 },
				],
				createAt: 1620210971876,
				by: {
					_id: utilService.makeId(),
					fullname: 'Audrina Avila',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/77b33fb6-fd04-4951-967f-f941c9c7fcf5.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'A nice place but small for two people , good location .',
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.6 },
					{ property: 'Accuracy', val: 4.6 },
					{ property: 'Location', val: 3.9 },
					{ property: 'Value', val: 3.5 },
				],
				createAt: 1620210971713,
				by: {
					_id: utilService.makeId(),
					fullname: 'Chen Margo',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/3c927781-be0c-431c-9a3b-5a214bd5b709.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The hospitality is amazing',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.3 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 5.1 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620210972614,
				by: {
					_id: utilService.makeId(),
					fullname: 'Heidy Bradshaw',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/9e84abb3-83f8-4e6c-bc8b-606f2aa27237.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Incredible- conversation with host was very helpful. space. location great. clean.',
				rate: [
					{ property: 'Cleanliness', val: 4.6 },
					{ property: 'Communication', val: 5.0 },
					{ property: 'Check-in', val: 4.9 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.4 },
				],
				createAt: 1620210973154,
				by: {
					_id: utilService.makeId(),
					fullname: 'Nina Gross',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/83e1033f-c917-4e82-8bcc-2c17c738ad04.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Dani leaves next door and happy to help with anything! He and his wife are amazing!',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 3.7 },
					{ property: 'Check-in', val: 4.3 },
					{ property: 'Accuracy', val: 4.7 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620210926722,
				by: {
					_id: utilService.makeId(),
					fullname: 'Adi Dratler',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/b3631f58-5f4d-47fb-bb04-41579f6ef4bc.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'the room is very close to the center of the city. you can walk (10 min max) to everything you have to do and see in the city. you wont need a car/ bus/ taxi. very quiet neighborhood. the price was reasonable. as a girl who traveled alone i felt very safe in this place and in the neighborhood (i came with my dog).',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 4.2 },
					{ property: 'Check-in', val: 4.3 },
					{ property: 'Accuracy', val: 4.6 },
					{ property: 'Location', val: 4.6 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210976111,
				by: {
					_id: utilService.makeId(),
					fullname: 'Rotem Meiron',
					imgUrl:
						'https://a0.muscache.com/im/users/20712502/profile_pic/1444203592/original.jpg?im_w=240',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Desert View. A House with a Bedouin tent',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/f1089c69-906e-46c8-9614-d0e069cd91d4.jpg',
			'https://a0.muscache.com/im/pictures/3818197d-8cc7-44fb-bae7-ff7b0aeef18a.jpg',
			'https://a0.muscache.com/im/pictures/a4595445-5150-43e7-859f-5775c9baa857.jpg',
			'https://a0.muscache.com/im/pictures/f5e6a663-09f1-4d94-82fb-b8689514e260.jpg',
			'https://a0.muscache.com/im/pictures/b79b7998-7338-4f00-b23c-7364b3743611.jpg',
		],
		price: 50.0,
		summary:
			'We are 25 minutes from Masada, Dead Sea and Ein Gedi . We only have one guest at a time!! The guests are getting the whole place to themselves including the apartment,bedouin tent, garden and terrace with spectacular panoramic view overlooking Jerusalem, Hebron and the Judean desert.',
		properties: {
			accommodates: 8,
			type: 'Guesthouse',
			bad: 4,
			bath: 2,
		},
		amenities: ['TV', 'Kitchen', 'Cooking basics', 'Free parking on premises'],
		host: {
			_id: utilService.makeId(),
			fullname: 'Lea Rupin',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/f9feaf02-5903-4703-a49f-db88196a0b42.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Arad, South District, Israel',
			lat: 31.271717940521086,
			lng: 35.211149873892595,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "If you're looking for a home base in Arad that's as inviting as the local attractions, this is your place. Lea and David are warm and welcoming hosts. They feel like friends, and their place feels like home, the moment you arrive.",
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 3.9 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.6 },
					{ property: 'Location', val: 4.0 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210973876,
				by: {
					_id: utilService.makeId(),
					fullname: 'Heidy Bradshaw',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/10bcd532-d9ea-4da2-8771-f31d2f66e6fa.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Wonderful place, wonderful hosts, very helpful with local tips for hikes, great local coffee ;) Most of all, an excellent value in a beautiful location. I hope to come back again.',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.2 },
					{ property: 'Check-in', val: 4.8 },
					{ property: 'Accuracy', val: 4.2 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.0 },
				],
				createAt: 1620210971513,
				by: {
					_id: utilService.makeId(),
					fullname: 'Shane Ramsey',
					imgUrl:
						'https://a0.muscache.com/im/users/18995295/profile_pic/1406495234/original.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: "This was the second time that I visited at Lea's house, and it was even better than before. The house was tidy and clean, and the coffee at the morning next to the fire in front of the great view was amazing. I really recommend Lea's house.",
				rate: [
					{ property: 'Cleanliness', val: 4.4 },
					{ property: 'Communication', val: 3.1 },
					{ property: 'Check-in', val: 3.9 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210972655,
				by: {
					_id: utilService.makeId(),
					fullname: 'Tal Katz',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/b2bf6d25-ecb9-450d-96d5-3f6835e9f0a6.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Beautiful view of the desert. Helpful in seeing and finding places, thanks.',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 4.5 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.6 },
					{ property: 'Value', val: 4.9 },
				],
				createAt: 1620210923154,
				by: {
					_id: utilService.makeId(),
					fullname: 'Scott Wolf',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/1f6bb8b0-9408-4f2a-bd1b-e7024b863381.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Should have stayed here for more than a night! Saw beautiful sunset and camels. David provided us tea/coffeeand good tips on quick eats, hike to Masada. Beds were comfortable and stay was pleasant. Definite stay if visiting Masada since it's shorter hike than the snake trail.",
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 4.5 },
					{ property: 'Check-in', val: 3.8 },
					{ property: 'Accuracy', val: 4.2 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 3.9 },
				],
				createAt: 1620210966722,
				by: {
					_id: utilService.makeId(),
					fullname: 'Bobby Crosby',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/6a3b13e3-ac28-4a58-9af0-c505d47c2bce.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'David and Lea were great hosts, very friendly but not intrusive. We enjoyed hanging out with them and listening to their stories. They also helped us plan our activities.',
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 3.6 },
					{ property: 'Location', val: 3.7 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210926111,
				by: {
					_id: utilService.makeId(),
					fullname: 'Theodore Mccarty',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/9726ff3e-0e79-43e5-bda2-3903b1c7e5e1.jpg?im_w=240',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Dead Sea Sun Guest House - Double Room',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/53deadb6-fd4a-4143-b877-e53bad47ec28.jpg',
			'https://a0.muscache.com/im/pictures/f30f82dd-5b28-4c84-8680-f9f2b7b814aa.jpg',
			'https://a0.muscache.com/im/pictures/10a678bc-10a7-477c-a0ba-9b3c3dc601be.jpg',
			'https://a0.muscache.com/im/pictures/692cb408-29ea-4001-ba5d-77affcc2b70e.jpg',
			'https://a0.muscache.com/im/pictures/c52f3850-88f4-4da7-8fec-141ebef5b93d.jpg',
		],
		price: 65.0,
		summary:
			'Private beautiful and stylish room, fully equipped, with kitchenette and bathroom, in a large villa in a quiet area on the outskirts of Arad. Separate entrance, personal veranda with garden furniture, beautiful garden with pleasant evening lighting, lots of greenery and flowers, landscaped yard. If you are looking for cleanliness, style, silence, beauty and peace after a hard day of traveling - our place is for you.Possibility of washing. Fast Wi-Fi, digital TV.',
		properties: {
			accommodates: 2,
			type: 'Guesthouse',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'TV',
			'Kitchen',
			'Cooking basics',
			'Free parking on premises',
			'Smoking allowed',
			'Air conditioning',
		],
		host: {
			_id: utilService.makeId(),
			fullname: 'Lior Shechter',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/4a0b364e-4bd2-4946-b6d1-28fef44ef627.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Arad, South District, Israel',
			lat: 31.261996504814885,
			lng: 35.20384913548613,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'thanks for everything, great time!!',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 3.4 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210913876,
				by: {
					_id: utilService.makeId(),
					fullname: 'Niv Raz',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/44adba92-0a3c-42bf-92f9-f03574b13c1b.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'This place is wonderful and clean. Beautiful landscaping around the property. Very nice shower and comfy bed. Highly recommend it',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 3.8 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210971163,
				by: {
					_id: utilService.makeId(),
					fullname: 'Daniel Young',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/c5c1dc1a-2996-4956-8740-49bbbba9b227.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Beautiful place with a private outdoor space. Great, quiet neighborhood with free parking. Friendly host. A must stay when coming to the Dead Sea region/ Masada.',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.3 },
					{ property: 'Check-in', val: 3.1 },
					{ property: 'Accuracy', val: 4.7 },
					{ property: 'Location', val: 5.0 },
					{ property: 'Value', val: 4.5 },
				],
				createAt: 1620210971455,
				by: {
					_id: utilService.makeId(),
					fullname: 'Benjamin Franklin',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/d0011f6c-4908-4868-9633-27a67760f23b.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Very clean, nice private patio. Very quiet.',
				rate: [
					{ property: 'Cleanliness', val: 5.0 },
					{ property: 'Communication', val: 4.4 },
					{ property: 'Check-in', val: 3.6 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210923112,
				by: {
					_id: utilService.makeId(),
					fullname: 'Karla Turner',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/fa9cd386-ece2-42ba-8beb-6011ab6ed526.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'VERY NICE place! Inside and out. Right off the road to Masada, 20 mins away. The west side climb was easy. Even with knee problems.',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 3.4 },
					{ property: 'Check-in', val: 3.3 },
					{ property: 'Accuracy', val: 4.7 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.4 },
				],
				createAt: 1620210961122,
				by: {
					_id: utilService.makeId(),
					fullname: 'Dominic Wyatt',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/c429cabf-6b28-47ef-9b45-f393aa12f8a8.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Really great place, Very clean and tidy, beautiful yard, AND Arkady is a very nice guy, helped us with local tips and everything we needed. Highly recommended',
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.6 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210926222,
				by: {
					_id: utilService.makeId(),
					fullname: 'Tamir Hardov',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/818908cf-2c1f-4354-9277-9278274bcfc1.jpg?im_w=240',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: 'Perfect apartment - just 20 minutes from Tel Aviv',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/d3281d29-b277-4fab-b9cb-c640dca8b73f.jpg',
			'https://a0.muscache.com/im/pictures/25801128-515a-40b1-9fc8-ec9e7e0e3c5b.jpg',
			'https://a0.muscache.com/im/pictures/e3abf642-114e-4560-a9e0-7d3b3b9acb9b.jpg',
			'https://a0.muscache.com/im/pictures/954db1de-f9ba-4868-8acd-9f8e6c0581d4.jpg',
			'https://a0.muscache.com/im/pictures/bd038315-527d-4510-908a-7834db903a94.jpg',
		],
		price: 45.0,
		summary:
			'Private beautiful and stylish room, fully equipped, with kitchenette and bathroom, in a large villa in a quiet area on the outskirts of Arad. Separate entrance, personal veranda with garden furniture, beautiful garden with pleasant evening lighting, lots of greenery and flowers, landscaped yard. If you are looking for cleanliness, style, silence, beauty and peace after a hard day of traveling - our place is for you.Possibility of washing. Fast Wi-Fi, digital TV.',
		properties: {
			accommodates: 4,
			type: 'Apartment',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'TV',
			'Kitchen',
			'Cooking basics',
			'Free parking on premises',
			'Smoking allowed',
			'Air conditioning',
			'Pets allowed',
		],
		host: {
			_id: utilService.makeId(),
			fullname: 'Shimi Tavori',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/b141ecd4-4c35-40e4-a37b-5c4d005f1a9a.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Rishon LeTsiyon, Center District, Israel',
			lat: 31.953721905283263,
			lng: 34.820950871713464,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: 'Very good location Very nice host',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 3.3 },
					{ property: 'Check-in', val: 3.7 },
					{ property: 'Accuracy', val: 4.4 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210913444,
				by: {
					_id: utilService.makeId(),
					fullname: 'Kevin Burton',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/3b9e19ee-9bfc-47ce-8c45-80ec7bb7dc37.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Communication was great from start to finish. The place is clean and comfortable. Made the stay in Rishon very pleasant.',
				rate: [
					{ property: 'Cleanliness', val: 3.7 },
					{ property: 'Communication', val: 4.9 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620210971555,
				by: {
					_id: utilService.makeId(),
					fullname: 'Avva Horn',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/b0e79b25-2206-4c0d-b402-260df663f79e.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'We had some difficulty communicating with the host to get the details of the check-in, but once we got there we were pleased with the apartment.',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 2.5 },
					{ property: 'Check-in', val: 3.1 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210971476,
				by: {
					_id: utilService.makeId(),
					fullname: 'Samuel Ortega',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/d6a3dd1a-8af5-4211-a5f8-b84c5a7f267e.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: "Great apartment, nearby everything you'll need, very tastefully designed and accessorized",
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 4.5 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210923456,
				by: {
					_id: utilService.makeId(),
					fullname: 'Leanna Wang',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/d0dd6b68-496e-47f5-adfc-d6d7d6c2dd1c.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Very communicative host. The apartment has everything you need. In case you are staying in Rishon Le zion this is the place to stay!!',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.3 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.3 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210961122,
				by: {
					_id: utilService.makeId(),
					fullname: 'Boris Litvak',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/bb060a32-8d8c-4b84-9eef-b0d813fe43a3.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Wonderful place and very nice host.',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.3 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.7 },
				],
				createAt: 1620210921222,
				by: {
					_id: utilService.makeId(),
					fullname: 'Dominika Gonzalez',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/5d89ba88-9d8b-430d-b530-164ceb5f0e06.jpg?im_w=240',
				},
			},
		],
	},
	{
		_id: utilService.makeId(),
		name: '<-- XXL Studio --- Brand NEW! --- City Center -->',
		imgUrls: [
			'https://a0.muscache.com/im/pictures/344d9a0e-c0b9-4112-826a-ef09fe0b283e.jpg',
			'https://a0.muscache.com/im/pictures/aa407c28-f719-4153-87ec-77e1cabf36e7.jpg',
			'https://a0.muscache.com/im/pictures/4b19093c-2d36-4865-bd61-c0aba3744341.jpg',
			'https://a0.muscache.com/im/pictures/9de7cb9c-f150-49a6-8214-8eba0c389d19.jpg',
			'https://a0.muscache.com/im/pictures/4ff1b534-bada-4c4e-8e73-474548d93ac5.jpg',
		],
		price: 45.0,
		summary:
			"⭐ A hip and modern little place, PERFECTLY LOCATED ⭐ 1 min from the best cafes, restaurants, and bars ⭐ BRAND NEW! Renovated from scratch at Oct 2019	⭐ Excellent location - quiet street a few steps walk from Tourist's Kingdom	⭐ Supermarkets, shops, ATM - 3 min walk away",
		properties: {
			accommodates: 2,
			type: 'Studio',
			bad: 1,
			bath: 1,
		},
		amenities: [
			'TV',
			'Kitchen',
			'Cooking basics',
			'Free parking on premises',
			'Smoking allowed',
			'Air conditioning',
			'Hangers',
			'Wifi',
		],
		host: {
			_id: utilService.makeId(),
			fullname: 'Shimi Tavori',
			imgUrl:
				'https://a0.muscache.com/im/pictures/user/f89d0840-1acb-428e-944f-0811d3c3ad31.jpg?im_w=240',
		},
		loc: {
			country: 'Israel',
			countryCode: 'IL',
			address: 'Rishon LeTsiyon, Center District, Israel',
			lat: 31.959774349756522,
			lng: 34.78975946872728,
		},
		reviews: [
			{
				id: utilService.makeId(),
				txt: "The room is a bit small but it's very clean, and the location can't be beat (even better post Corona of course). I had a few requests during my stay and the hosts always answered me within 10 minutes or so. Highly recommended!",
				rate: [
					{ property: 'Cleanliness', val: 4.5 },
					{ property: 'Communication', val: 4.3 },
					{ property: 'Check-in', val: 3.7 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.5 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210913113,
				by: {
					_id: utilService.makeId(),
					fullname: 'Jordan Spears',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/b9b12fc6-9254-452d-a32b-7be5c43cffe5.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'I stayed at the apartment for 3 days, it was very clean and comfortable, and I must say the service was exceptional, the hosts were very kind and helpful in moving me to a different unit. self check in and check out went smoothly.',
				rate: [
					{ property: 'Cleanliness', val: 4.7 },
					{ property: 'Communication', val: 4.2 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 4.3 },
					{ property: 'Location', val: 4.5 },
					{ property: 'Value', val: 4.2 },
				],
				createAt: 1620210972155,
				by: {
					_id: utilService.makeId(),
					fullname: 'Aviv Haimer',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/ce658a2e-7cd3-4cd3-9230-a509ab52886d.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'A great appartement in a great location. Highly recommended.',
				rate: [
					{ property: 'Cleanliness', val: 4.2 },
					{ property: 'Communication', val: 3.5 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.2 },
					{ property: 'Location', val: 4.3 },
					{ property: 'Value', val: 4.6 },
				],
				createAt: 1620210971126,
				by: {
					_id: utilService.makeId(),
					fullname: 'Eliran Berko',
					imgUrl:
						'https://a0.muscache.com/im/users/11650919/profile_pic/1390748808/original.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The place is well organized. With a wonderful location. The silver ware was not as clean.. overall it’s a comfortable choice for a couple of nights stay.',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.1 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.1 },
					{ property: 'Location', val: 4.2 },
					{ property: 'Value', val: 4.5 },
				],
				createAt: 1620210923432,
				by: {
					_id: utilService.makeId(),
					fullname: 'Yoram Gaon',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/fe8454a7-5614-4f75-a28c-129ea29bc2a4.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'The place is small, but real nice and stylish. The bathroom is new and neat. The building is relatively new and the location is just perfect. Strongly recommended!!',
				rate: [
					{ property: 'Cleanliness', val: 4.1 },
					{ property: 'Communication', val: 4.7 },
					{ property: 'Check-in', val: 4.2 },
					{ property: 'Accuracy', val: 4.5 },
					{ property: 'Location', val: 4.1 },
					{ property: 'Value', val: 3.7 },
				],
				createAt: 1620210961132,
				by: {
					_id: utilService.makeId(),
					fullname: 'Anna Levine',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/553c591f-304b-4ed3-987d-73a127c97c59.jpg?im_w=240',
				},
			},
			{
				id: utilService.makeId(),
				txt: 'Thanks for the great service, highly recommend the apartment. The only thing that was problematic was the old bedding and the smell of urine in the toilet ... besides it was amazing!',
				rate: [
					{ property: 'Cleanliness', val: 3.7 },
					{ property: 'Communication', val: 3.4 },
					{ property: 'Check-in', val: 4.1 },
					{ property: 'Accuracy', val: 3.1 },
					{ property: 'Location', val: 4.3 },
					{ property: 'Value', val: 4.1 },
				],
				createAt: 1620210924322,
				by: {
					_id: utilService.makeId(),
					fullname: 'Almog Shemtov',
					imgUrl:
						'https://a0.muscache.com/im/pictures/user/3b923e4a-5655-4f2c-baf5-d56db9c8b2c5.jpg?im_w=240',
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

async function query(filterBy) {
	// const stays = httpService.get("/");
	let staysToReturn = await asyncStorageService.query(KEY);
	if (filterBy?.location) {
		const regex = new RegExp(filterBy.location.trim(), 'i');
		staysToReturn = staysToReturn.filter((stay) => regex.test(stay.loc.address))
	}
	console.log(staysToReturn);
	return staysToReturn;
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
		stays = staysDB;
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
