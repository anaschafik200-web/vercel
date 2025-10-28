import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Tweet Clone - Video Post",
	description: "A Twitter-style video post clone",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-black text-white">{children}</body>
		</html>
	);
}
