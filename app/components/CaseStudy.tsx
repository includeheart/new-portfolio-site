import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

// Static image imports to preserve intrinsic dimensions (prevents blur from upscaling)
import codeImage from '../../public/code.jpg';
import djangoInstallation from '../../public/django-installation-complete.png';
import learningRopes from '../../public/learning-the-ropes.png';
import viewsCode from '../../public/views-code.png';
import templatesAndApps from '../../public/templates-and-apps.png';
import loginPage from '../../public/login-page.png';
import contributeRecipeForm from '../../public/contribute-recipe-form.png';
import recipesList from '../../public/recipes.png';

type Section = {
	id: string;
	title: string;
	body: string[];
	layout?: 'left' | 'right';
	gallery?: { src: StaticImageData; alt: string; caption?: string }[];
};
const sections: Section[] = [
	{
		id: 'challenge',
		title: 'Challenge',
		body: [
			'I set out to build a simple yet functional recipe application where users could create an account, log in, and access a database of food recipes. The challenge was to apply my newly acquired skills in Python and Django to create a project that wasn’t just a tutorial exercise, but something I could design, build, and expand upon myself.',
		],
		layout: 'left',
		gallery: [{ src: djangoInstallation, alt: 'Django installation success' }],
	},
	{
		id: 'action',
		title: 'Action',
		body: ['To meet this challenge, I learned the fundamentals of Django, including app structure, template rendering, URL routing, and form handling. This included everything from the simple step of installing Django and learning how to use a virtual environment (something I was completely unfamiliar with.) CareerFoundry taught me the basics of creating a Django project, creating apps within the project, and what these terms really mean. It helped to view Django as a straightforward sort of building project. The apps are just pieces of the whole, which I could easily "plug-in" to the main project. CareerFoundry offered a great deal of freedom to experiment, which helped me to not only build my base knowledge, but also learn how to use resources (documentation, AI, etc.) to expedite my workflow. I then applied this knowledge to incrementally build my own recipe app. Starting with a basic home page and recipe list, I expanded the app with login functionality, user registration, and recipe creation forms.'],
		layout: 'left',
		gallery: [{ src: learningRopes, alt: 'Learning milestone' }],
	},
	{
		id: 'result',
		title: 'Result',
		body: [
			'The end result was a fully functioning recipe website where registered users can create an account, log in, and upload their own recipes to share with others. While the design is intentionally simple, the project serves as a strong foundation for my growth as a developer and demonstrates my ability to take an idea from concept to implementation. Some of my recent attempts to build on this have been learning how to use and integrate CSS to give things like my recipe form a more user-friendly feeling. I’ve begun to view this exercise as a good exercise in true Full-Stack development, working on both the user experience and the inner workings of the app itself.',
		],
		layout: 'left',
		gallery: [{ src: viewsCode, alt: 'Views code sample' }],
	},
	{
		id: 'step_1',
		title: 'Step 1: Learning the Basics',
		body: ['I began by learning the Django framework — setting up apps within a project, working with templates, and connecting URLs. This gave me the scaffolding I needed to start building a real project. Simple, given steps like when to create an app and when not, where all new concepts to me. I was able to recognize the patterns in Django’s logical framework, which made things much easier.'],
		layout: 'left',
	},
	{
		id: 'step_2',
		title: 'Step 2: Building the Foundation',
		body: ['I created a home page that displayed a list of recipes managed through Django’s admin interface. This helped me understand how models, views, and templates connect.'],
		layout: 'left',
		gallery: [{ src: templatesAndApps, alt: 'Templates and apps separation' }],
	},
	{
		id: 'step_3',
		title: 'Step 3: Adding User Authentication',
		body: ['To allow users to access recipes, I learned how to use Django forms to create a login page. This was my first exposure to integrating user authentication into a project. Altering the settings in the specified Python file gave me insight into the potential complexity of apps built in a framework like Django.'],
		layout: 'left',
		gallery: [{ src: loginPage, alt: 'Login page' }],
	},
	{
		id: 'step_4',
		title: 'Step 4: Expanding Features',
		body: ['With the basics working, I began planning additional features to make the app more interactive. The most impactful addition was creating a registration page so that new users could easily sign up with just a username and password. I have always appreciated websites with minimal flipping between different pages and simple registration processes. This also allowed me to, for the first time, send my project out to friends and family who weren’t knowledgeable about coding to test it for themselves and provide me feedback on their experience trying it.'],
		layout: 'left',
	},
	{
		id: 'step_5',
		title: 'Step 5: Enabling User Generated Content',
		body: ['To make the app more dynamic, I added a recipe form where registered users could create and upload their own recipes. This turned the app from a static recipe list into a collaborative platform.'],
		gallery: [{ src: contributeRecipeForm, alt: 'Contribute recipe form' }],
		layout: 'left',
	},
	{
		id: 'retrospective',
		title: 'Retrospective',
		body: ['Building this recipe app was both a technical and personal milestone. It gave me practical experience with Django’s ecosystem, from handling templates and URLs to implementing authentication and user-generated content. The project also taught me how to approach development iteratively — starting with a simple foundation and gradually layering on functionality. Even though the current design is straightforward, I now see it as a launchpad for more ambitious projects. Most importantly, the process gave me confidence. Learning how to solve problems, test my work, and build something functional from scratch left me with a strong sense of accomplishment. Going forward, I plan to iterate further by adding search functionality, recipe categorization, and improved styling to enhance the overall user experience.'],
		gallery: [{ src: recipesList, alt: 'Recipe list' }],
		layout: 'left',
	},
];

const navItems = sections.map(s => ({ href: `#${s.id}`, label: s.title }));

const CaseStudy = () => {
	return (
		<div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
			<span id="top" />
			{/* Sticky top bar nav */}
			<div className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
				<div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center gap-6">
					<div className="flex items-center gap-3">
						<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700">
							<svg className="w-5 h-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M4 4h9l7 7v9a0 0 0 0 1 0 0H4a0 0 0 0 1 0 0V4z" />
								<path d="M13 4v6h6" />
							</svg>
						</span>
						<h1 className="text-lg font-bold tracking-tight">Recipe App Case Study</h1>
					</div>
					<nav className="ml-auto flex flex-wrap gap-4 text-sm">
						{navItems.map(item => (
							<a key={item.href} href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</div>

			{/* Hero / Intro full width */}
			<section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
				<div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid gap-8 lg:grid-cols-12 items-center">
					<div className="lg:col-span-6 space-y-6">
						<h2 className="text-3xl lg:text-4xl font-bold leading-tight">Designing a Maintainable Recipe Platform</h2>
						<p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-prose">
							I built this Recipe App to move beyond guided tutorials and prove I could design, structure, and ship a functional Django application end‑to‑end. Starting from a blank project, I learned how to organize apps, wire templates and URLs, implement authentication, and enable real user‑generated content. What began as a simple recipe list evolved iteratively into a maintainable, extensible foundation—one I now use as a sandbox to keep sharpening both my backend reasoning and user experience instincts.
						</p>
						<div className="flex flex-wrap gap-2 pt-2">
							{['Python','Django','SQLite','HTML','CSS'].map(tag => (
								<span key={tag} className="px-2.5 py-1 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700">{tag}</span>
							))}
						</div>
						<div className="pt-4 flex gap-4 text-sm">
							<Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">← Back</Link>
							<a href="#retrospective" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Jump to Retrospective</a>
						</div>
					</div>
					<div className="lg:col-span-6">
						<Image
							src={codeImage}
							alt="Code editor example from the project"
							priority
							className="rounded-md ring-1 ring-gray-200 dark:ring-gray-700 w-auto h-auto max-w-full object-contain mx-auto"
						/>
					</div>
				</div>
			</section>

			{/* Section grid F/Z pattern */}
			<div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
				{sections.map((s, idx) => {
					const isAlt = false; // Force all sections to left alignment (no alternation)
					return (
						<section
							key={s.id}
							id={s.id}
							className={`grid lg:grid-cols-12 gap-10 items-start ${isAlt ? 'lg:[&>*:first-child]:order-2' : ''}`}
						>
							<div className="lg:col-span-3 relative">
								<div className="sticky top-24 space-y-4">
									<h2 className="text-xl font-semibold">{s.title}</h2>
									<div className="hidden lg:block h-1 w-10 bg-blue-500 rounded" />
								</div>
							</div>
							<div className="lg:col-span-9 space-y-5">
								{s.body.map((p,i)=>(<p key={i} className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{p}</p>))}
								{s.gallery && (
									<div className="grid sm:grid-cols-2 gap-6">
										{s.gallery.map(g => (
											<figure key={g.src.src} className="space-y-2 flex flex-col items-center">
												<Image
													src={g.src}
													alt={g.alt}
													className="h-auto w-auto max-w-full object-contain rounded-md ring-1 ring-gray-200 dark:ring-gray-700"
													style={{ maxWidth: g.src.width, maxHeight: g.src.height }}
												/>
												{g.caption && <figcaption className="text-xs text-gray-500 dark:text-gray-400 text-center">{g.caption}</figcaption>}
											</figure>
										))}
									</div>
								)}
							</div>
						</section>
					);
				})}

				{/* Footer / Next Steps CTA duplication for end scanning */}
				<div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
					<div className="space-y-2 max-w-prose">
						<h3 className="text-lg font-semibold">Thanks for reading</h3>
						<p className="text-sm text-gray-600 dark:text-gray-400">Return to the portfolio or explore repository details for deeper implementation specifics.</p>
					</div>
					<div className="flex gap-4 text-sm">
						<Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">← Portfolio</Link>
						<a
							href="https://github.com/includeheart/recipe-app"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							GitHub Repo
						</a>
						<a href="#top" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Back to top</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudy;