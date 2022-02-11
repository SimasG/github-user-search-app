const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const input = document.querySelector('#search');
const noResults = document.querySelector('.no-results');


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

// populating api data into html
displayUser = async (user) => {
    const date = new Date(user.created_at);

    const avatar = document.querySelector('#profile-picture');
    if (!user.avatar_url) {
        avatar.src = "https://avatars.githubusercontent.com/u/583231?v=4";
    } else {
        avatar.src = user.avatar_url;
    }

    const userName = document.querySelector('.name');
    if (!user.name) {
        userName.textContent = 'Not Available';
    } else {
        userName.textContent = user.name;
    }

    const handle = document.querySelector('.handle');
    if (!user.login) {
        handle.textContent = 'Not Available';
        // noResults.classList.add('active-inline');
    } else {
        handle.textContent = `@${user.login}`;
    }

    const joinDate = document.querySelector('.join-date');
    if (!user.created_at) {
        joinDate.textContent = 'Not Available';
    } else {
        joinDate.textContent = `Joined ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    }

    const bio = document.querySelector('.bio');
    if (!user.bio) {
        bio.textContent = 'Not Available'
    } else {
        bio.textContent = user.bio;
    }

    const publicRepos = document.querySelector('.repos');
    if (!user.public_repos) {
        publicRepos.textContent = 'N/A'
    } else {
        publicRepos.textContent = user.public_repos;
    }

    const followers = document.querySelector('.followers');
    if (!user.followers) {
        followers.textContent = 'N/A'
    } else {
        followers.textContent = user.followers;
    }

    const following = document.querySelector('.following');
    if (!user.following) {
        following.textContent = 'N/A'
    } else {
        following.textContent = user.following;
    }

    const location = document.querySelector('.location');
    if (!user.location) {
        location.textContent = 'Not Available';
    } else {
        location.textContent = user.location;
    }

    const website = document.querySelector('.website');
    if (!user.blog) {
        website.textContent = 'Not Available'
    } else {
        website.textContent = user.blog;
    }

    const twitterUsername = document.querySelector('.twitter')
    if (!user.twitter_username) {
        twitterUsername.textContent = 'Not Available'
    } else {
        twitterUsername.textContent = user.twitter_username;
    }

    document.querySelector('.company').textContent = user.company;
    const company = document.querySelector('.company')
    if (!user.company) {
        company.textContent = 'Not Available'
    } else {
        company.textContent = user.company;
    }
}


// Event Listeners

const btn = document.querySelector('.search-button');

btn.addEventListener('click', (e) => {
    // preventDefault prevents the default action from happening (which seems to be reloading the page)
    // not sure why
    e.preventDefault();
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