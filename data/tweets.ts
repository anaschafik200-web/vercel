export interface Tweet {
	id: string;
	author: {
		name: string;
		username: string;
		avatar: string;
		verified: boolean;
	};
	content: string;
	timestamp: string;
	videoUrl: string;
	stats: {
		views: string;
		comments: number;
		retweets: number;
		likes: number;
		bookmarks: number;
	};
}

// Using Google's test videos
const testVideos = [
	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
];

export const tweets: Tweet[] = [
	{
		id: "1",
		author: {
			name: "Sarah Chen",
			username: "sarahchen",
			avatar: "👩‍💻",
			verified: true,
		},
		content:
			"Just finished this amazing animation project! The detail in Big Buck Bunny is incredible. Check it out! 🎬✨",
		timestamp: "2h",
		videoUrl: testVideos[0],
		stats: {
			views: "1.2M",
			comments: 234,
			retweets: 1823,
			likes: 8945,
			bookmarks: 432,
		},
	},
	{
		id: "2",
		author: {
			name: "Tech Mike",
			username: "techmike",
			avatar: "🚀",
			verified: true,
		},
		content:
			"Elephants Dream - a classic open source film that still holds up today! The visuals are stunning 🐘💭",
		timestamp: "4h",
		videoUrl: testVideos[1],
		stats: {
			views: "856K",
			comments: 156,
			retweets: 934,
			likes: 5623,
			bookmarks: 287,
		},
	},
	{
		id: "3",
		author: {
			name: "Creative Studios",
			username: "creativestudios",
			avatar: "🎨",
			verified: false,
		},
		content:
			"For Bigger Blazes - When you need that perfect fire effect in your video! 🔥🎥",
		timestamp: "6h",
		videoUrl: testVideos[2],
		stats: {
			views: "2.3M",
			comments: 445,
			retweets: 2341,
			likes: 12456,
			bookmarks: 789,
		},
	},
	{
		id: "4",
		author: {
			name: "Adventure Seeker",
			username: "adventureseek",
			avatar: "🏔️",
			verified: true,
		},
		content:
			"Escape into nature with this beautiful footage. Sometimes we all need a bigger escape 🌄",
		timestamp: "8h",
		videoUrl: testVideos[3],
		stats: {
			views: "645K",
			comments: 198,
			retweets: 756,
			likes: 4234,
			bookmarks: 312,
		},
	},
	{
		id: "5",
		author: {
			name: "Fun Times",
			username: "funtimes",
			avatar: "🎉",
			verified: false,
		},
		content:
			"Life is meant for bigger fun! Check out this awesome video and let me know what you think! 🎊🎈",
		timestamp: "10h",
		videoUrl: testVideos[4],
		stats: {
			views: "1.8M",
			comments: 567,
			retweets: 3421,
			likes: 15678,
			bookmarks: 923,
		},
	},
];
