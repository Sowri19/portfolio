## Introduction:
This is the my second version of personal portfolio website which showcases my skills, projects,to potential employers.

## The technologies and tools used in this project:

Tools: VS Code, Git, Github, Figma, Arc Browser Dev Tools, vite (build tool and development server for modern web apps - vite is an alternative for npm create-react-webpack-- it provides lighting fast server for the development)

## Libraries: 
React(javascript library), React Slick(carousal component library), React Icons, Framer Motion(Complex animations in React)

### React Features:
React Hooks(useState, useEffect, useRef and Custom)

### CSS pre-processor: 
SASS/SCSS with modular css (with responsive design)

we are using Header.module.scss we can specify same class name in the different module without thinking about their clashes of their css properties.

## Project Structure: 
Modal View Controller
## Slick slider links
  * https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css
  
  * https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css

## Installation and setup instructions:

Clone the git repository by using `git clone git@github.com:Sowri19/portfolio.git` command in your terminal.

Open the cloned folder in your favorite code editor.

Before installing the dependencies make sure you have nodejs installed in your system.(check node version using node -v command in your terminal - https://nodejs.org/en/download/)

Install the dependencies by using `npm install or yarn add` command in your terminal.

Run the vite app by using `npm run dev or yarn run dev` command in your terminal.

Open [http://localhost:5173] to view it in the browser.

## Deployment:

### firebase hosting:
I have deployed this project using firebase hosting service.

In order to install the firebase cli in your system use the following command in your terminal `npm install -g firebase-tools`

Login to your firebase account using `firebase login` command in your terminal.

Initialize the firebase project using `firebase init` command in your terminal.

Select the Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys and then select the project you want to deploy.

Select the public directory as dist and configure as a single-page app (rewrite all urls to /index.html?y) and then select the project you want to deploy.

Build the project using `npm run build or yarn build` command in your terminal.

Deploy the project using `firebase deploy` command in your terminal.

The webapp is available in the following url: https://sowrii.web.app/

### cloudflare pages (hosting):

I have deployed this project using cloudflare pages hosting service.

I have used the `yarn build` to build the project.

I have then dragged and dropped the dist folder in the cloudflare pages.

The webapp is available in the following url: https://sowri.pages.dev/

## Git commands:

git add .

git commit -m "commit message"

git push origin portfolio-v2