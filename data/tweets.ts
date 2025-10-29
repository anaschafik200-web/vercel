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
	videoWidth: number;
	videoHeight: number;
	videoThumbnail: string;
	stats: {
		views: string;
		comments: number;
		retweets: number;
		likes: number;
		bookmarks: number;
	};
}

// Single Google test video (Big Buck Bunny)
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
		videoUrl:
			"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		videoWidth: 1280,
		videoHeight: 720,
		videoThumbnail:
			"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
		stats: {
			views: "1.2M",
			comments: 234,
			retweets: 1823,
			likes: 8945,
			bookmarks: 432,
		},
	},
];
