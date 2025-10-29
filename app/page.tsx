import type { Metadata } from "next";
import TweetPost from "@/components/TweetPost";
import { tweets } from "@/data/tweets";

const tweet = tweets[0];

const formatShort = (n: number) => {
	if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
	if (n >= 1000) return (n / 1000).toFixed(1) + "K";
	return String(n);
};

export const metadata: Metadata = {
	title: `${tweet.author.name} — ${tweet.content.slice(0, 80)}`,
	description: `${tweet.content} · Views: ${
		tweet.stats.views
	} · ♥ ${formatShort(tweet.stats.likes)} · 💬 ${
		tweet.stats.comments
	} · 🔁 ${formatShort(tweet.stats.retweets)}`,
	openGraph: {
		title: `${tweet.author.name} — ${tweet.content.slice(0, 80)}`,
		description: `${tweet.content} · Views: ${
			tweet.stats.views
		} · ♥ ${formatShort(tweet.stats.likes)} · 💬 ${
			tweet.stats.comments
		} · 🔁 ${formatShort(tweet.stats.retweets)}`,
		type: "video.other",
		url: tweet.videoUrl,
		siteName: "Tweet Clone",
		images: [
			{
				url: `https://via.placeholder.com/1200x630.png?text=${encodeURIComponent(
					"Big Buck Bunny"
				)}`,
				width: 1200,
				height: 630,
				alt: "Big Buck Bunny",
			},
		],
		videos: [
			{
				url: tweet.videoUrl,
				secureUrl: tweet.videoUrl,
				type: "video/mp4",
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		card: "player",
		title: `${tweet.author.name} — ${tweet.content.slice(0, 80)}`,
		description: `${tweet.content} · Views: ${
			tweet.stats.views
		} · ♥ ${formatShort(tweet.stats.likes)} · 💬 ${tweet.stats.comments}`,
		// note: twitter player meta tags may be restricted but this helps downstream parsers
		images: [`https://via.placeholder.com/1200x630.png?text=Big+Buck+Bunny`],
	},
};

export default function Home() {
	return (
		<main className="min-h-screen bg-black">
			<div className="max-w-2xl mx-auto border-x border-gray-800">
				{/* Header */}
				<div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-gray-800 p-4">
					<h1 className="text-xl font-bold">Home</h1>
				</div>

				{/* Single Tweet */}
				<div>
					<TweetPost tweet={tweet} />
				</div>
			</div>
		</main>
	);
}
