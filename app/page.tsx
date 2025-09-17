import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';

export default function MinimalistPortfolio() {
	return (
		<main className="min-h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
			{/* Sticky Top Navigation */}
			<div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-6">
					<a href="#profile" className="text-sm font-semibold tracking-tight text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">moriCode</a>
					<nav className="ml-auto flex flex-wrap gap-4 text-sm">
						<a href="#profile" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Profile</a>
						<a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
						<a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
						<a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
					</nav>
				</div>
			</div>
			<div className="flex-1 grid grid-cols-1 md:grid-cols-5 items-stretch min-h-screen">
				{/* Left Column - Profile */}
				<section id="profile" className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 scroll-mt-24 self-stretch min-h-full bg-white dark:bg-gray-900">
					<div className="h-full md:flex md:items-center">
						<ProfileSection />
					</div>
				</section>

				{/* Right Column - Skills and Experience */}
				<div className="md:col-span-3 flex flex-col md:justify-center h-full min-h-full">
					{/* Skills Section */}
					<section id="skills" className="scroll-mt-24">
						<SkillsSection />
					</section>

					{/* Projects Section */}
					<section id="projects" className="scroll-mt-24">
						<ProjectSection />
					</section>

					{/* Experience Section */}
					<section id="experience" className="scroll-mt-24">
						<ExperienceSection />
					</section>
				</div>
			</div>
		</main>
	);
}
