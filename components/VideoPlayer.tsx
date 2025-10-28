"use client";

import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
	videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const [progress, setProgress] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [showControls, setShowControls] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);
	const progressBarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const updateProgress = () => {
			const progress = (video.currentTime / video.duration) * 100;
			setProgress(progress);
			setCurrentTime(video.currentTime);
		};

		const updateDuration = () => {
			setDuration(video.duration);
		};

		video.addEventListener("timeupdate", updateProgress);
		video.addEventListener("loadedmetadata", updateDuration);

		return () => {
			video.removeEventListener("timeupdate", updateProgress);
			video.removeEventListener("loadedmetadata", updateDuration);
		};
	}, []);

	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;

		if (isPlaying) {
			video.pause();
		} else {
			video.play();
		}
		setIsPlaying(!isPlaying);
	};

	const toggleMute = () => {
		const video = videoRef.current;
		if (!video) return;

		video.muted = !isMuted;
		setIsMuted(!isMuted);
	};

	const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const video = videoRef.current;
		const progressBar = progressBarRef.current;
		if (!video || !progressBar) return;

		const rect = progressBar.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const percentage = clickX / rect.width;
		video.currentTime = percentage * video.duration;
	};

	const formatTime = (time: number): string => {
		if (isNaN(time)) return "0:00";
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	return (
		<div
			className="relative group bg-black aspect-video"
			onMouseEnter={() => setShowControls(true)}
			onMouseLeave={() => setShowControls(false)}
		>
			<video
				ref={videoRef}
				src={videoUrl}
				className="w-full h-full object-contain"
				onClick={togglePlay}
				loop
				playsInline
			/>

			{/* Play/Pause Overlay */}
			{!isPlaying && (
				<div className="absolute inset-0 flex items-center justify-center bg-black/30">
					<button
						onClick={togglePlay}
						className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
					>
						<svg className="w-8 h-8 ml-1" fill="white" viewBox="0 0 24 24">
							<path d="M8 5v14l11-7z" />
						</svg>
					</button>
				</div>
			)}

			{/* Controls */}
			<div
				className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-200 ${
					showControls || !isPlaying ? "opacity-100" : "opacity-0"
				}`}
			>
				{/* Progress Bar */}
				<div
					ref={progressBarRef}
					className="w-full h-1 bg-gray-600 rounded-full cursor-pointer mb-3 hover:h-1.5 transition-all"
					onClick={handleProgressBarClick}
				>
					<div
						className="h-full bg-blue-500 rounded-full relative"
						style={{ width: `${progress}%` }}
					>
						<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
					</div>
				</div>

				{/* Control Buttons */}
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						{/* Play/Pause */}
						<button
							onClick={togglePlay}
							className="p-1 hover:bg-white/20 rounded-full transition-colors"
						>
							{isPlaying ? (
								<svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
									<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
								</svg>
							) : (
								<svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
									<path d="M8 5v14l11-7z" />
								</svg>
							)}
						</button>

						{/* Mute/Unmute */}
						<button
							onClick={toggleMute}
							className="p-1 hover:bg-white/20 rounded-full transition-colors"
						>
							{isMuted ? (
								<svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
									<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
								</svg>
							) : (
								<svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
									<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
								</svg>
							)}
						</button>

						{/* Time */}
						<span className="text-sm text-white">
							{formatTime(currentTime)} / {formatTime(duration)}
						</span>
					</div>

					{/* Fullscreen */}
					<button
						onClick={() => {
							if (videoRef.current) {
								if (document.fullscreenElement) {
									document.exitFullscreen();
								} else {
									videoRef.current.requestFullscreen();
								}
							}
						}}
						className="p-1 hover:bg-white/20 rounded-full transition-colors"
					>
						<svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
							<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
