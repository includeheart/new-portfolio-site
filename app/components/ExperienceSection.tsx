const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Student',
			company: 'CareerFoundry',
			period: '2025',
			highlights: 'Learned full-stack development, specialized in Python',
		},
		{
			role: 'Team Leader',
			company: 'Beacon Commercial Cleaning Services',
			period: '2023 - 2025',
			highlights: 'Delegated tasks to optimize job completion, ensured compliance with all safety regulations in the workplace',
		},
		{
			role: 'Agent',
			company: 'Bloom',
			period: '2022 - 2023',
			highlights: 'Managed payment processing efficiently, conducted patient consultations to help find specialized products for their particular needs.',
		},
		{
			role: 'Assistant Store Manager',
			company: 'The Leather Company',
			period: '2020 - 2022',
			highlights: 'Provided training to new employees on company policies and procedures, supervised cash handling processes to ensure accuracy of transactions.',
		}
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
