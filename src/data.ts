// Content shared by more than one page. Edit here, not in the components.

export const SITE = {
	email: 'northline.technologies@gmail.com',
	location: 'Vancouver, BC',
	// TODO(owner): confirm this is a promise Northline can keep before launch.
	replyTime: 'two business days',
};

// Experience is the founder's own — never present it as Northline clients or projects (spec §37.3).
export const FOUNDER = {
	name: 'James Yoo',
	firstName: 'James',
	title: 'Founder',
	previously: 'a software engineer at Samsung Canada',
	// TODO(owner): drafted for you — rewrite in your own words if it doesn't sound like you.
	why: "After four years working on Samsung Knox's web platforms, I started Northline to bring the same standard — tested, documented, built to be maintained — to organizations that need software done properly without building a full engineering team first.",
	experience: [
		'4+ years as a software engineer at Samsung Canada',
		'Worked on samsungknox.com, the public marketing site for Samsung Knox',
		'Worked on partner.samsungknox.com, the Samsung Knox partner portal',
		'Worked on an internal gateway service behind Samsung Knox systems',
	],
	// TODO(owner): LinkedIn profile URLs are usually linkedin.com/in/<handle> — confirm this one opens your profile.
	linkedin: 'https://www.linkedin.com/jamesyoo',
	github: '',
};

export const services = [
	{
		slug: 'full-stack',
		name: 'Full-Stack Development',
		summary: 'Web applications built end to end, database to interface, as one system.',
		description: 'End-to-end web applications — from the database up through the interface people use every day.',
		detail:
			'Most projects start as one problem area — a customer portal, an internal ops tool, a booking system — and grow from there. We build the whole stack as one coherent system instead of a frontend team and a backend team talking past each other.',
		bullets: ['React, TypeScript & Node.js as the default stack', 'Data models designed around how the data is actually used', 'One team end to end — no handoff gaps'],
	},
	{
		slug: 'frontend',
		name: 'Frontend Engineering',
		summary: 'Fast, accessible interfaces that hold up on any device and any input.',
		description: "Interfaces that load fast, work on any device, and don't fall apart the first time someone tabs through them.",
		detail:
			'We treat accessibility and performance as part of the build, not a separate pass at the end. A slow or confusing interface is a bug, same as broken logic.',
		bullets: ['Built responsive from 320px up, not scaled down from desktop', 'Keyboard and screen-reader tested, not just visually reviewed', 'No unnecessary JavaScript shipped to the browser'],
	},
	{
		slug: 'api',
		name: 'API & Backend Development',
		summary: 'Documented, versioned services designed to be integrated with.',
		description: 'Services and APIs designed to be integrated with — by your other systems, a partner, or a future team.',
		detail:
			'An API is a promise to whoever calls it next. We document what we build, version what changes, and design around the failure cases as much as the happy path.',
		bullets: ['REST APIs with clear versioning and documentation', 'Authentication and authorization built in from day one', 'Schemas designed to not need a rewrite at 10x the data'],
	},
	{
		slug: 'cloud',
		name: 'Cloud & Infrastructure',
		summary: 'Pipelines and environments that make every release routine.',
		description: 'Deployment pipelines and cloud environments set up so a release is routine, not a Friday-afternoon gamble.',
		detail:
			"Infrastructure is code here, checked into the same repository as the application. If it isn't reproducible from a fresh environment, we don't consider it done.",
		bullets: ['CI/CD pipelines that run tests before every deploy', 'Containerized environments that match dev to production', 'Infrastructure defined in code, not clicked together by hand'],
	},
	{
		slug: 'consulting',
		name: 'Technology Consulting',
		summary: 'An outside technical opinion before you commit budget and months.',
		description: "An outside, technical opinion on the decision you're about to make — before you've committed budget and months to it.",
		detail:
			'Sometimes the most useful thing we can do is tell you what not to build, or point to a cheaper path to the same outcome. This is advisory work — it stands on its own, whether or not Northline ends up building anything.',
		bullets: [],
	},
];

export const timelines = ['As soon as possible', 'Within 1–3 months', '3+ months out', 'Just exploring'];

// The four stages: what the client does, what Northline does, and what the client walks away with.
export const stages = [
	{
		slug: 'understand',
		title: 'Understand',
		copy: "We start with questions, not a proposal template — who actually uses this, what's the current workaround, what happens if we get it wrong.",
		you: 'Describe the problem, the people it affects, and the workaround you live with today.',
		us: 'Ask the questions that expose the real constraints before anything is proposed.',
		outcome: 'A shared, written picture of the problem and what success looks like.',
	},
	{
		slug: 'plan',
		title: 'Plan',
		copy: "Scope, architecture, and a realistic timeline, written down rather than implied. You'll know roughly what's being built and when, before any code exists.",
		you: 'Review the scope and approve it, or push back while change is free.',
		us: 'Write the scope, the architecture, and a realistic timeline.',
		outcome: 'A written scope, architecture outline, and timeline.',
	},
	{
		slug: 'build',
		title: 'Build',
		copy: 'Regular, working increments instead of a black box for months — so you can see progress and redirect it early, while a change is still cheap.',
		you: 'Try each increment and redirect it early, while a change is still cheap.',
		us: 'Ship working software in regular increments you can see and use.',
		outcome: 'Working software at regular intervals that you can review and steer.',
	},
	{
		slug: 'deliver',
		title: 'Deliver',
		copy: "The project doesn't end at launch. We hand off documentation, not just a repository, and stay reachable as requirements change.",
		you: 'Own the code, the infrastructure, and the documentation outright.',
		us: 'Hand over documentation, not just a repository, and stay reachable.',
		outcome: 'Documentation, a clean handover, and a direct line for what comes next.',
	},
];
