import type { Metadata } from "next";
import TweetPost from "@/components/TweetPost";
import { tweets } from "@/data/tweets";

const tweet = tweets[0];

const formatShort = (n: number) => {
	if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
	if (n >= 1000) return (n / 1000).toFixed(1) + "K";
	return String(n);
};

// Apply FxEmbed's Discord video size fix
// Discord doesn't render videos >1920px well, and renders small videos (<400px) poorly
let sizeMultiplier = 1;
if (tweet.videoWidth > 1920 || tweet.videoHeight > 1920) {
	sizeMultiplier = 0.5;
}
if (tweet.videoWidth < 400 && tweet.videoHeight < 400) {
	sizeMultiplier = 2;
}

const adjustedWidth = Math.round(tweet.videoWidth * sizeMultiplier);
const adjustedHeight = Math.round(tweet.videoHeight * sizeMultiplier);

export const metadata: Metadata = {
	metadataBase: new URL("https://vercel-inky-nu.vercel.app"),
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
		siteName: "Tweet Clone",
		images: [
			{
				url: tweet.videoThumbnail,
				width: adjustedWidth,
				height: adjustedHeight,
				alt: "Video thumbnail",
			},
		],
		videos: [
			{
				url: tweet.videoUrl,
				secureUrl: tweet.videoUrl,
				type: "video/mp4",
				width: adjustedWidth,
				height: adjustedHeight,
			},
		],
	},
	twitter: {
		card: "player",
		title: `${tweet.author.name} — ${tweet.content.slice(0, 80)}`,
		description: `${tweet.content} · Views: ${
			tweet.stats.views
		} · ♥ ${formatShort(tweet.stats.likes)} · 💬 ${tweet.stats.comments}`,
		images: ["0"], // FxEmbed trick: twitter:image = "0" forces Discord to show video player
	},
	other: {
		// Raw metadata tags for Discord video embedding (FxEmbed approach)
		"twitter:player:stream": tweet.videoUrl,
		"twitter:player:stream:content_type": "video/mp4",
		"twitter:player:width": String(adjustedWidth),
		"twitter:player:height": String(adjustedHeight),
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
