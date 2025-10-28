# Tweet Clone - Video Post Player

A Twitter-style video post clone built with Next.js, React, and Tailwind CSS. Features a custom video player with controls, engagement stats, and ready to deploy on Vercel.

## Features

- 🎥 Custom video player with controls
- 📊 Interactive engagement stats (likes, retweets, comments, views)
- 📱 Fully responsive design
- 🎨 Twitter-like UI with smooth animations
- 🔄 Auto-looping videos
- 🔇 Mute/unmute controls
- ⏯️ Play/pause functionality
- ⏱️ Progress bar with seek functionality
- 🖼️ Fullscreen support
- 🎬 Uses Google test videos

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deploy on Vercel

The easiest way to deploy this project is using the [Vercel Platform](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── TweetPost.tsx    # Tweet post component
│   └── VideoPlayer.tsx  # Custom video player
├── data/
│   └── tweets.ts        # Mock tweet data
└── public/              # Static assets
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google Test Videos** - Sample video content

## Customization

### Adding More Tweets

Edit `data/tweets.ts` to add more tweet posts with different videos and stats.

### Styling

Modify `tailwind.config.js` and component styles to customize the appearance.

### Video Sources

Replace the Google test video URLs in `data/tweets.ts` with your own video URLs.

## License

MIT
