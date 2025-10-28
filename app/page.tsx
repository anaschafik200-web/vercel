import TweetPost from "@/components/TweetPost";
import { tweets } from "@/data/tweets";

export default function Home() {
	return (
		<main className="min-h-screen bg-black">
			<div className="max-w-2xl mx-auto border-x border-gray-800">
				{/* Header */}
				<div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-gray-800 p-4">
					<h1 className="text-xl font-bold">Home</h1>
				</div>

				{/* Tweet Posts */}
				<div>
					{tweets.map((tweet) => (
						<TweetPost key={tweet.id} tweet={tweet} />
					))}
				</div>
			</div>
		</main>
	);
}
