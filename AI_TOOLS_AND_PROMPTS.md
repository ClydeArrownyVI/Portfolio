# AI Tools and Prompts Used

## Tools Used
- **Lovable (lovable.dev)**
- **Gemini (gemini.google.com)**

## Prompts / Instructions Given (lovable.ai)

1. "Make me a simple portfolio and use Final Fantasy 6 pixelated art style as theme and background (No characters, just the scenes and theme), cover all the requirements and make it extensible."
   - Provided academic catalogue and personal details for content.

2. "Use this as background (but remove the magitek soldiers)."
   - Uploaded a pixel art scene from Final Fantasy VI.

3. "Remove the 'Learning to build worlds — one system, one algorithm at a time.'"

4. "Also can you keep the snowfall? Like active?"

5. "Remove the '4th Semester Ongoing' from the title section."

6. "Remove all images except for the home page. Change email to raedrahman2016@gmail.com. Keep the LinkedIn blank for now. Change location to Dhaka, Bangladesh. Update the Plague inc inspired game description: it was in C (raylib), one player infects, the other tries to cure, mathematical disease spread model. Update the horror game description: based on Nyctophobia, exploring dark claustrophobic rooms. Update the redstone computer description: 64-byte data memory, 256-byte instruction memory, 16-byte registers, ALU with ADD, SUB, bitwise ops, NOT, etc. At the very bottom of the page, remove the last line 'Built with ...'. Add every theory course listed in the catalogue up to 4th semester. Update profile to: 'I'm a Computer Science and Engineering student at the Islamic University of Technology in Gazipur, currently nearing the end of my 4th semester. My main interests are: Game Development, Machine Learning, Microprocessors. I am also interested in Graphics Design.' Remove the current roadmap part. GitHub: https://github.com/ClydeArrownyVI"

- **Gemini (Google)** — Conversational AI partner used for troubleshooting build pipelines, Git version control, deployment automation, and framework configurations.

## Prompts / Instructions Given (gemini.google.com)

1. "Ok i have the project as zip, now what do i do? this is my assignment, i need to host it in git"
   - Provided terminal commands to initialize a local Git repository, configure Git remote tracking, establish Vite base paths, and set up GitHub Actions workflows for deployment.

2. "error: remote origin already exists. fatal: unable to access 'https://github.com/<your-username>/<repo-name>.git/': The requested URL returned error: 400"
   - Diagnosed placeholder URL error and generated `git remote set-url` commands to link the repository to `https://github.com/ClydeArrownyVI/Portfolio.git`.

3. "Give me the new vite code"
   - Provided TanStack Start / Nitro server configuration updates for static prerendering inside `vite.config.ts`.

4. "https://github.com/ClydeArrownyVI/Portfolio/tree/main — Is there a way for you to check wether this works? If it doesnt then how do I make the site appear?"
   - Guided inspection of GitHub Actions tabs, workflow trigger status, and evaluated alternative deployment workflows.

5. "Get started with GitHub Actions [Screenshot]"
   - Provided a complete GitHub Actions CI/CD deployment script (`deploy.yml`) utilizing the `bun` runtime for TanStack Start / Nitro.

6. "Create deploy.yml #1 failed [Screenshots]"
   - Analyzed failure logs during the build process, pinpointing TanStack Start SSR runtime incompatibilities with static GitHub Pages hosting.

7. "Vercel GitHub App authorization & deployment [Screenshots]"
   - Guided deployment through Vercel to support TanStack Start / Nitro SSR builds natively.

8. "give me the full code for vite.config.ts"
   - Reverted Vite base path modifications to standard TanStack Start entry defaults for proper Nitro Vercel production bundling.
