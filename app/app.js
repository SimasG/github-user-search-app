const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const input = document.querySelector('#search');
const noResults = document.querySelector('.no-results');

const avatar = document.querySelector('#profile-picture');
const userName = document.querySelector('.name');
const handle = document.querySelector('.handle');
const joinDate = document.querySelector('.join-date');
const bio = document.querySelector('.bio');
const publicRepos = document.querySelector('.repos');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const userLocation = document.querySelector('.location');
const website = document.querySelector('.website');
const twitterUsername = document.querySelector('.twitter')
const company = document.querySelector('.company');

const locationIcon = document.querySelector('.location-icon');
const websiteIcon = document.querySelector('.website-icon');
const twitterIcon = document.querySelector('.twitter-icon');
const companyIcon = document.querySelector('.company-icon');

// don't understand why I can't manipulate multiple icons
// const icons = document.getElementsByClassName('icon');


let username = 'octocat';

// fetching api data
async function getUser (username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    console.log(data);
    displayUser(data);
    displayNoResults(data);
}


// handling the case if user doesn't exist
displayNoResults = (user) => {
    if (user.message === 'Not Found') {
        input.textContent = '';
        input.placeholder = '';
        noResults.classList.remove('hide');
    }
}

removePreviousSearchStyles = () => {
    const allIcons = document.querySelectorAll('.icon');

    // restores SVG icons to their original styles
    allIcons.forEach(icon => {
        icon.style.opacity = '1';
    })

    const socialLinks = document.querySelectorAll('.link-paragraph');

    // deletes link text and href
    socialLinks.forEach(link => {
        link.style.opacity = '1';
        link.href = '';
        link.textContent = '';
    })

}

// populating api data into html
displayUser = async (user) => {

    const date = new Date(user.created_at);

    // const avatar = document.querySelector('#profile-picture');
    if (!user.avatar_url) {
        avatar.src = "https://avatars.githubusercontent.com/u/583231?v=4";
    } else {
        avatar.src = user.avatar_url;
    }

    // const userName = document.querySelector('.name');
    if (!user.name) {
        userName.textContent = 'Not Available';
    } else {
        userName.textContent = user.name;
    }

    // const handle = document.querySelector('.handle');
    if (!user.login) {
        handle.textContent = 'Not Available';
        // noResults.classList.add('active-inline');
    } else {
        handle.textContent = `@${user.login}`;
    }

    // const joinDate = document.querySelector('.join-date');
    if (!user.created_at) {
        joinDate.textContent = 'Not Available';
    } else {
        joinDate.textContent = `Joined ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    }

    // const bio = document.querySelector('.bio');
    if (!user.bio) {
        bio.textContent = 'This profile has no bio'
    } else {
        bio.textContent = user.bio;
    }

    // const publicRepos = document.querySelector('.repos');
    if (!user.public_repos) {
        publicRepos.textContent = 'N/A'
    } else {
        publicRepos.textContent = user.public_repos;
    }

    // const followers = document.querySelector('.followers');
    if (!user.followers) {
        followers.textContent = 'N/A'
    } else {
        followers.textContent = user.followers;
    }

    // const following = document.querySelector('.following');
    if (!user.following) {
        following.textContent = 'N/A'
    } else {
        following.textContent = user.following;
    }

    // const userLocation = document.querySelector('.location');
    if (!user.location) {
        userLocation.textContent = 'Not Available'
        userLocation.style.opacity = '0.5'
        locationIcon.style.opacity = '0.5'
    } else {
        userLocation.textContent = user.location;
    }

    // const website = document.querySelector('.website');
    if (!user.blog) {
        website.textContent = 'Not Available'
        website.style.opacity = '0.5'
        websiteIcon.style.opacity = '0.5'
    } else {
        website.textContent = user.blog;
    }

    // const twitterUsername = document.querySelector('.twitter')
    if (!user.twitter_username) {
        twitterUsername.textContent = 'Not Available'
        twitterUsername.style.opacity = '0.5'
        twitterIcon.style.opacity = '0.5'
    } else {
        twitterUsername.textContent = user.twitter_username;
    }

    // const company = document.querySelector('.company')
    if (!user.company) {
        company.textContent = 'Not Available'
        company.style.opacity = '0.5'
        companyIcon.style.opacity = '0.5'
    } else {
        company.textContent = user.company.slice(1);
    }
}


// Event Listeners

const btn = document.querySelector('.search-button');

btn.addEventListener('click', (e) => {
    // preventDefault prevents the default action from happening (which seems to be reloading the page)
    // not sure why
    e.preventDefault();
    removePreviousSearchStyles();
    // const input = document.querySelector('#search');
    const username = input.value.toLowerCase();
    if (username) {
        getUser(username)
        input.value = '';
    }
})

const form = document.querySelector('form');
// making sure the "no results" error message gets hidden whenever search bar is clicked
form.addEventListener('click', () => {
    noResults.classList.add('hide');
})


getUser(username);



// THEME FUNCTIONALITY
const themeBtn = document.querySelector('.modes');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const lightBtn = document.querySelector('.light');
const darkBtn = document.querySelector('.dark');
const searchContainer = document.querySelector('.search-container');
const mainContainer = document.querySelector('.main-container');
const statsContainer = document.querySelector('.stats-container');
const statsHeading1 = document.querySelector('.stats-heading-1');
const statsHeading2 = document.querySelector('.stats-heading-2');
const statsHeading3 = document.querySelector('.stats-heading-3');

let darkTheme = false;


// using classes would most likely have been easier/more scalable
themeBtn.addEventListener('click', () => {
    if (!darkTheme) {
        darkTheme = true;

        body.style.backgroundColor = '#141D2F';
        logo.style.color = '#FFFFFF';
        lightBtn.classList.remove('hide');
        darkBtn.classList.add('hide');
        input.classList.add('display-placeholder');
        input.style.color = '#FFFFFF';
        searchContainer.style.backgroundColor = '#1E2A47';
        mainContainer.style.backgroundColor = '#1E2A47';
        statsContainer.style.backgroundColor = '#141D2F';
        userName.style.color = '#FFFFFF';
        joinDate.style.color = '#FFFFFF';
        bio.style.color = '#FFFFFF';
        statsHeading1.style.color = '#FFFFFF';
        statsHeading2.style.color = '#FFFFFF';
        statsHeading3.style.color = '#FFFFFF';
    
        publicRepos.style.color = '#FFFFFF';
        followers.style.color = '#FFFFFF';
        following.style.color = '#FFFFFF';
    
        userLocation.style.color = '#FFFFFF';
        locationIcon.style.fill = '#FFFFFF';
        website.style.color = '#FFFFFF';
        websiteIcon.style.fill = '#FFFFFF';
        twitterUsername.style.color = '#FFFFFF';
        twitterIcon.style.fill = '#FFFFFF';
        company.style.color = '#FFFFFF';
        companyIcon.style.fill = '#FFFFFF';

    } else {
        darkTheme = false;

        body.style.backgroundColor = '#F6F8FF';
        logo.style.color = '#222731';
        lightBtn.classList.add('hide');
        darkBtn.classList.remove('hide');
        input.classList.remove('display-placeholder');
        searchContainer.style.backgroundColor = '#FEFEFE';
        mainContainer.style.backgroundColor = '#FEFEFE';
        statsContainer.style.backgroundColor = '#FEFEFE';
        userName.style.color = '#2B3442';
        joinDate.style.color = '#697C9A';
        bio.style.color = '#4B6A9B';
        statsHeading1.style.color = '#4B6A9B';
        statsHeading2.style.color = '#4B6A9B';
        statsHeading3.style.color = '#4B6A9B';
    
        publicRepos.style.color = '#2B3442';
        followers.style.color = '#2B3442';
        following.style.color = '#2B3442';
    
        userLocation.style.color = '#4B6A9B';
        locationIcon.style.fill = '#4B6A9B';
        website.style.color = '#4B6A9B';
        websiteIcon.style.fill = '#4B6A9B';
        twitterUsername.style.color = '#4B6A9B';
        twitterIcon.style.fill = '#4B6A9B';
        company.style.color = '#4B6A9B';
        companyIcon.style.fill = '#4B6A9B';
    }

})