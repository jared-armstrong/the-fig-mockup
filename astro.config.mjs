// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Base path for GitHub Pages deployment
	// Change this to '/' if deploying to username.github.io (main repo)
	// or keep as '/the-fig-mockup' for project pages
	base: '/the-fig-mockup',
	site: 'https://jared-armstrong.github.io',
	output: 'static',
});
