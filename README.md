# Webpage-2024!

[Check it Out!](https://philotfarnsworth.github.io/webpage-2024/)

## What's it all about
Webpage-2024 is yet another personal website, with the fun feature that the user can customize the theme of the website though the settings page.  Font, coloring, background svgs and animations are all available to be customized through a form that is hooked up to the current theme.  Users can also click the "Create New Theme" button and start from scratch.  Finally users can export their themes to JSON and maybe just email me something cool.

## How's it built?
Webpage 2024 is built with svelte-kit, which utilizes svelte files on the front end while organizing server side rendering through svelte-kit.  While there were some svelte specific patterns that took a little time to grok, for the most part I found it a pretty easy experience to iterate and get going.  I tried to keep the work on the site limited to a single week in my off time, and to that point I think I spent most of the time developing the 'theme' feature, which speaks to the ease in which I got going.

That said, I do think I would need additional time to really think through how to optimize performance with server side rendering.  I definitely noticed some latency in opening the settings page, that perhaps if this was a single page app, I could mitigate through loading certain form components asynchronously.  So there's certainly definitely more to explore in svelte-kit, which I hope to do in future projects.  

## Deploying locally
IF you want to mess around with this repo, feel free to download and deploy.

This is app is created with the create-svelte package, so once you have downloaded the repo, you can ```npm install``` and then run the command ```npm run dev```.  The app will then be available at ```http://localhost:5173/```.  Forms used in the settings page can be found in ```src/lib/components/forms```, while main theming functionality can be fount in the ```+layout.svelte``` in the routes directory, along with ```background.svelte``` and ```floater.svelte```.  