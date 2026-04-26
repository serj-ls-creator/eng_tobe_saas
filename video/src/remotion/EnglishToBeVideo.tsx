import {
	interpolate,
	useCurrentFrame,
} from 'remotion';

// Phone frame component
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
	<div
		style={{
			width: 320,
			height: 640,
			background: '#000000',
			borderRadius: '40px',
			border: '8px solid #1F2937',
			boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
			overflow: 'hidden',
			position: 'relative',
		}}
	>
		{/* Phone notch */}
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: '50%',
				transform: 'translateX(-50%)',
				width: 120,
				height: 25,
				background: '#000000',
				borderRadius: '0 0 15px 15px',
				zIndex: 10,
			}}
		/>
		{children}
	</div>
);

// App shell component
const AppShell = ({ children }: { children: React.ReactNode }) => (
	<div
		style={{
			height: '100%',
			background: '#050505',
			display: 'flex',
			flexDirection: 'column',
		}}
	>
		<div
			style={{
				flex: 1,
				overflowY: 'auto',
				padding: '16px',
			}}
		>
			{children}
		</div>
		{/* Bottom navigation */}
		<div
			style={{
				height: 80,
				background: 'rgba(5, 5, 5, 0.95)',
				borderTop: '1px solid rgba(255, 255, 255, 0.1)',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				padding: '0 20px',
			}}
		>
			{['Home', 'Recall', 'Profile', 'Store', 'More'].map((item, index) => (
				<div
					key={index}
					style={{
						textAlign: 'center',
						opacity: index === 0 ? 1 : 0.6,
					}}
				>
					<div
						style={{
							width: 20,
							height: 20,
							background: index === 0 ? '#00E5FF' : '#6B7280',
							borderRadius: '4px',
							margin: '0 auto 4px',
						}}
					/>
					<span style={{ fontSize: '8px', color: '#ffffff' }}>{item}</span>
				</div>
			))}
		</div>
	</div>
);

// Home screen component
const HomeScreen = ({ progress }: { progress: number }) => {
	const opacity = interpolate(progress, [0, 0.3], [0, 1]);
	const slideUp = interpolate(progress, [0, 0.3], [30, 0]);
	const quickLinksOpacity = interpolate(progress, [0.3, 0.5], [0, 1]);
	const wordOfDayOpacity = interpolate(progress, [0.7, 0.9], [0, 1]);

	const quickLinks = [
		{ title: 'Words', subtitle: '8 categories', color: '#00E5FF' },
		{ title: 'Sentences', subtitle: 'A1 to C2', color: '#FF3D71' },
		{ title: 'Idioms', subtitle: '7 topics', color: '#FFD93D' },
		{ title: 'Games', subtitle: 'Wordle & more', color: '#A855F7' },
	];

	return (
		<div
			style={{
				opacity,
				transform: `translateY(${slideUp}px)`,
			}}
		>
			{/* Streak bar */}
			<div
				style={{
					background: 'rgba(255, 255, 255, 0.08)',
					border: '1px solid rgba(255, 255, 255, 0.15)',
					borderRadius: '14px',
					padding: '12px',
					marginBottom: '16px',
					textAlign: 'center',
				}}
			>
				<span style={{ fontSize: '12px', color: '#9CA3AF' }}>🔥 5 day streak!</span>
			</div>

			{/* Title */}
			<h2
				style={{
					fontSize: '14px',
					fontWeight: '600',
					color: '#ffffff',
					marginBottom: '12px',
				}}
			>
				Quick Learning
			</h2>

			{/* Quick links grid */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: '12px',
					marginBottom: '16px',
					opacity: quickLinksOpacity,
				}}
			>
				{quickLinks.map((link, index) => (
					<div
						key={index}
						style={{
							background: 'rgba(255, 255, 255, 0.08)',
							border: '1px solid rgba(255, 255, 255, 0.15)',
							borderRadius: '14px',
							padding: '16px',
						}}
					>
						<div style={{ marginBottom: '8px', color: link.color, fontSize: '20px' }}>📚</div>
						<div style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff', marginBottom: '4px' }}>
							{link.title}
						</div>
						<div style={{ fontSize: '10px', color: '#9CA3AF' }}>{link.subtitle}</div>
					</div>
				))}
			</div>

			{/* Word of the day */}
			<div
				style={{
					background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(168, 85, 247, 0.1))',
					border: '1px solid rgba(255, 255, 255, 0.2)',
					borderRadius: '14px',
					padding: '16px',
					opacity: wordOfDayOpacity,
				}}
			>
				<div style={{ fontSize: '10px', color: '#9CA3AF', marginBottom: '8px' }}>WORD OF THE DAY</div>
				<div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>simple → advanced</div>
				<div style={{ fontSize: '16px', fontWeight: '600', color: '#00E5FF', marginBottom: '4px' }}>sophisticated</div>
				<div style={{ fontSize: '10px', color: '#9CA3AF' }}>Having great knowledge of the world</div>
			</div>
		</div>
	);
};

// Words list screen component
const WordsListScreen = ({ progress }: { progress: number }) => {
	const opacity = interpolate(progress, [0, 0.3], [0, 1]);
	const slideUp = interpolate(progress, [0, 0.3], [30, 0]);
	const itemsOpacity = interpolate(progress, [0.3, 0.5], [0, 1]);

	const categories = [
		{ name: 'Basic -&gt; Advanced', description: 'Upgrade everyday words', color: '#00E5FF', isFree: true },
		{ name: 'Pronounce', description: 'Sounds and stress patterns', color: '#FF3D71', isFree: true },
		{ name: 'Antonyms', description: 'Opposite meanings', color: '#A855F7', isFree: true },
		{ name: 'Rude -&gt; Polite', description: 'Sound more respectful', color: '#FF3D71', isFree: false },
	];

	return (
		<div
			style={{
				opacity,
				transform: `translateY(${slideUp}px)`,
			}}
		>
			{/* Back button */}
			<div style={{ marginBottom: '16px' }}>
				<span style={{ fontSize: '12px', color: '#9CA3AF' }}>← Back to Home</span>
			</div>

			{/* Title */}
			<h2
				style={{
					fontSize: '20px',
					fontWeight: '600',
					color: '#ffffff',
					marginBottom: '16px',
				}}
			>
				Words
			</h2>

			{/* Categories list */}
			<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: itemsOpacity }}>
				{categories.map((category, index) => (
					<div
						key={index}
						style={{
							background: 'rgba(255, 255, 255, 0.08)',
							border: '1px solid rgba(255, 255, 255, 0.15)',
							borderRadius: '14px',
							padding: '16px',
						}}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
							<div
								style={{
									width: 40,
									height: 40,
									background: `${category.color}25`,
									borderRadius: '10px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<div
									style={{
										width: 20,
										height: 20,
										background: category.color,
										borderRadius: '50%',
									}}
								/>
							</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>
									{category.name}
									{!category.isFree && (
										<span style={{ 
											marginLeft: '8px',
											padding: '2px 6px',
											background: 'rgba(255, 215, 61, 0.2)',
											borderRadius: '4px',
											fontSize: '8px',
											color: '#FFD93D'
										}}>
											PREMIUM
										</span>
									)}
								</div>
								<div style={{ fontSize: '11px', color: '#9CA3AF' }}>{category.description}</div>
							</div>
							<div style={{ fontSize: '16px', color: '#6B7280' }}>→</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

// Basic-Advanced expanded screen component
const BasicAdvancedScreen = ({ progress }: { progress: number }) => {
	const opacity = interpolate(progress, [0, 0.3], [0, 1]);
	const slideUp = interpolate(progress, [0, 0.3], [30, 0]);
	const itemsOpacity = interpolate(progress, [0.3, 0.5], [0, 1]);

	const topics = [
		{ name: 'People', description: 'Advanced vocabulary for describing people', wordCount: '100 words' },
		{ name: 'World', description: 'Global and cultural vocabulary', wordCount: '100 words' },
		{ name: 'Digital', description: 'Modern technology and internet vocabulary', wordCount: '100 words' },
	];

	return (
		<div
			style={{
				opacity,
				transform: `translateY(${slideUp}px)`,
			}}
		>
			{/* Back button */}
			<div style={{ marginBottom: '16px' }}>
				<span style={{ fontSize: '12px', color: '#9CA3AF' }}>← Back to Words</span>
			</div>

			{/* Category header */}
			<div style={{ marginBottom: '20px' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
					<div
						style={{
							width: 40,
							height: 40,
							background: 'rgba(0, 229, 255, 0.25)',
							borderRadius: '10px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								width: 20,
								height: 20,
								background: '#00E5FF',
								borderRadius: '50%',
							}}
						/>
					</div>
					<div>
						<h2
							style={{
								fontSize: '18px',
								fontWeight: '600',
								color: '#ffffff',
								margin: 0,
							}}
						>
							Basic -&gt; Advanced
						</h2>
						<div style={{ fontSize: '11px', color: '#9CA3AF' }}>Upgrade everyday words</div>
					</div>
				</div>
			</div>

			{/* Topics list */}
			<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: itemsOpacity }}>
				{topics.map((topic, index) => (
					<div
						key={index}
						style={{
							background: 'rgba(255, 255, 255, 0.08)',
							border: '1px solid rgba(255, 255, 255, 0.15)',
							borderRadius: '14px',
							padding: '16px',
						}}
					>
						<div style={{ marginBottom: '8px' }}>
							<div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>
								{topic.name}
							</div>
							<div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '4px' }}>
								{topic.description}
							</div>
							<div style={{ fontSize: '10px', color: '#00E5FF', fontWeight: '500' }}>
								{topic.wordCount}
							</div>
						</div>
						<div style={{ fontSize: '16px', color: '#6B7280', textAlign: 'right' }}>→</div>
					</div>
				))}
			</div>
		</div>
	);
};

// Main composition
export const EnglishToBeVideo = () => {
	const frame = useCurrentFrame();
	const duration = 150; // 5 seconds at 30fps

	const progress = frame / duration;

	// Screen transitions
	// 0-60 frames (0-2 seconds): Home screen
	// 60-90 frames (2-3 seconds): Words list  
	// 90-150 frames (3-5 seconds): Basic-Advanced expanded

	const homeOpacity = interpolate(progress, [0, 0.4], [1, 0]);
	const wordsOpacity = interpolate(progress, [0.4, 0.6, 0.8], [0, 1, 0]);
	const basicOpacity = interpolate(progress, [0.6, 0.8], [0, 1]);

	const homeProgress = Math.min(progress / 0.4, 1);
	const wordsProgress = Math.min(Math.max((progress - 0.4) / 0.2, 0), 1);
	const basicProgress = Math.min(Math.max((progress - 0.6) / 0.4, 0), 1);

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: '#050505',
				color: '#ffffff',
				fontFamily: 'Inter, sans-serif',
				position: 'relative',
				overflow: 'hidden',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<PhoneFrame>
				<AppShell>
					{/* Home Screen */}
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 80,
							opacity: homeOpacity,
						}}
					>
						<HomeScreen progress={homeProgress} />
					</div>

					{/* Words List Screen */}
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 80,
							opacity: wordsOpacity,
						}}
					>
						<WordsListScreen progress={wordsProgress} />
					</div>

					{/* Basic-Advanced Screen */}
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 80,
							opacity: basicOpacity,
						}}
					>
						<BasicAdvancedScreen progress={basicProgress} />
					</div>
				</AppShell>
			</PhoneFrame>
		</div>
	);
};
