"use client";

import { useState } from "react";
import { Tweet } from "@/data/tweets";
import VideoPlayer from "./VideoPlayer";

interface TweetPostProps {
	tweet: Tweet;
}

export default function TweetPost({ tweet }: TweetPostProps) {
	const [liked, setLiked] = useState(false);
	const [retweeted, setRetweeted] = useState(false);
	const [bookmarked, setBookmarked] = useState(false);

	const formatNumber = (num: number): string => {
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1) + "M";
		}
		if (num >= 1000) {
			return (num / 1000).toFixed(1) + "K";
		}
		return num.toString();
	};

	return (
		<article className="border-b border-gray-800 p-4 hover:bg-gray-900/30 transition-colors">
			<div className="flex gap-3">
				{/* Avatar */}
				<div className="flex-shrink-0">
					<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
						{tweet.author.avatar}
					</div>
				</div>

				{/* Content */}
				<div className="flex-1 min-w-0">
					{/* Header */}
					<div className="flex items-center gap-1 flex-wrap">
						<span className="font-bold hover:underline cursor-pointer">
							{tweet.author.name}
						</span>
						{tweet.author.verified && (
							<svg
								className="w-5 h-5 text-blue-500"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
							</svg>
						)}
						<span className="text-gray-500">@{tweet.author.username}</span>
						<span className="text-gray-500">·</span>
						<span className="text-gray-500">{tweet.timestamp}</span>
					</div>

					{/* Tweet text */}
					<p className="mt-2 text-[15px] leading-5 whitespace-pre-wrap break-words">
						{tweet.content}
					</p>

					{/* Video */}
					<div className="mt-3 rounded-2xl overflow-hidden border border-gray-800">
						<VideoPlayer videoUrl={tweet.videoUrl} />
					</div>

					{/* Stats - Views */}
					<div className="mt-3 text-gray-500 text-sm">
						<span className="font-semibold text-white">
							{tweet.stats.views}
						</span>{" "}
						Views
					</div>

					{/* Action buttons */}
					<div className="mt-3 flex items-center justify-between max-w-md">
						{/* Comments */}
						<button className="group flex items-center gap-2 hover:text-blue-500 transition-colors">
							<div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
								<svg
									className="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</div>
							<span className="text-sm">
								{formatNumber(tweet.stats.comments)}
							</span>
						</button>

						{/* Retweets */}
						<button
							onClick={() => setRetweeted(!retweeted)}
							className={`group flex items-center gap-2 transition-colors ${
								retweeted ? "text-green-500" : "hover:text-green-500"
							}`}
						>
							<div
								className={`p-2 rounded-full transition-colors ${
									retweeted ? "bg-green-500/10" : "group-hover:bg-green-500/10"
								}`}
							>
								<svg
									className="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
									/>
								</svg>
							</div>
							<span className="text-sm">
								{formatNumber(tweet.stats.retweets + (retweeted ? 1 : 0))}
							</span>
						</button>

						{/* Likes */}
						<button
							onClick={() => setLiked(!liked)}
							className={`group flex items-center gap-2 transition-colors ${
								liked ? "text-pink-600" : "hover:text-pink-600"
							}`}
						>
							<div
								className={`p-2 rounded-full transition-colors ${
									liked ? "bg-pink-600/10" : "group-hover:bg-pink-600/10"
								}`}
							>
								<svg
									className="w-5 h-5"
									fill={liked ? "currentColor" : "none"}
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<span className="text-sm">
								{formatNumber(tweet.stats.likes + (liked ? 1 : 0))}
							</span>
						</button>

						{/* Share */}
						<button className="group flex items-center gap-2 hover:text-blue-500 transition-colors">
							<div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
								<svg
									className="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
									/>
								</svg>
							</div>
						</button>

						{/* Bookmark */}
						<button
							onClick={() => setBookmarked(!bookmarked)}
							className={`group flex items-center gap-2 transition-colors ${
								bookmarked ? "text-blue-500" : "hover:text-blue-500"
							}`}
						>
							<div
								className={`p-2 rounded-full transition-colors ${
									bookmarked ? "bg-blue-500/10" : "group-hover:bg-blue-500/10"
								}`}
							>
								<svg
									className="w-5 h-5"
									fill={bookmarked ? "currentColor" : "none"}
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
									/>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}
