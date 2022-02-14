# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Links

- Live Site URL: https://github-user-search-app-simas.netlify.app/

## My process

### Built with

- Vanilla JS
- HTML5 markup (didn't the best job in writing semantic HTML - that'll be a point of focus for the next project)
- SCSS (particularly variables, nesting and partials) 
- Flexbox
- Mobile-first workflow (the goal of this project was to practice my JS skills - that's why I've only built a mobile design)


### What I learned

- Working with Web APIs. Specifically, sending dynamic requests according to user search input. That was definitely the core learning of the project.
- Changing themes. I'm not happy with my clunky solution of that but at least it's functional. Next time, instead of changing every single HTML element one by one, I'll focus on having more generic classes across uniform elements. That should decrease the noise. 
- Default values in case there is no value coming form the API. Simple solution but it was my first time implementing it.
- Reseting default styles before fetching each search result. Again, the solution is straightforward but I haven't encoutered it in the past.
