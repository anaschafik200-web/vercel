import TweetPost from "@/components/TweetPost";
import { tweets } from "@/data/tweets";

export default function EmbedPage({ params }: { params: { id: string } }) {
	const id = params.id;
	const tweet = tweets.find((t) => t.id === id) || tweets[0];

	return (
		<html>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{tweet.author.name} — embed</title>
				<style>{`body{margin:0;background:#000;color:#fff;font-family:system-ui,Arial}
        .container{display:flex;align-items:center;justify-content:center;height:100vh;padding:16px}`}</style>
			</head>
			<body>
				<div className="container">
					<div style={{ width: "100%", maxWidth: 800 }}>
						<TweetPost tweet={tweet} />
					</div>
				</div>
			</body>
		</html>
	);
}
