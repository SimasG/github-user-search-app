const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let username = 'octocat';

// fetching api data
async function getUser (username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    console.log(data);
    displayUser(data);
}

// populating api data into html
displayUser = async (user) => {
    const date = new Date(user.created_at);

    // document.querySelector('#profile-picture').src = user.avatar_url;
    const avatar = document.querySelector('#profile-picture');
    if (!user.avatar_url) {
        avatar.src = "https://avatars.githubusercontent.com/u/583231?v=4";
    } else {
        avatar.src = user.avatar_url;
    }

    // document.querySelector('.name').textContent = user.name;
    const userName = document.querySelector('.name');
    if (!user.name) {
        userName.textContent = 'Not Available';
    } else {
        userName.textContent = user.name;
    }



    // document.querySelector('.handle').textContent = `@${user.login}`;
    const handle = document.querySelector('.handle');
    if (!user.login) {
        handle.textContent = 'Not Available';
    } else {
        handle.textContent = `@${user.login}`;
    }

    // document.querySelector('.join-date').textContent = `Joined ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    const joinDate = document.querySelector('.join-date');
    if (!user.created_at) {
        joinDate.textContent = 'Not Available';
    } else {
        joinDate.textContent = `Joined ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    }

    // document.querySelector('.bio').textContent = user.bio;
    const bio = document.querySelector('.bio');
    if (!user.bio) {
        bio.textContent = 'Not Available'
    } else {
        bio.textContent = user.bio;
    }

    // document.querySelector('.repos').textContent = user.public_repos;
    const publicRepos = document.querySelector('.repos');
    if (!user.public_repos) {
        publicRepos.textContent = 'Not Available'
    } else {
        publicRepos.textContent = user.public_repos;
    }

    // document.querySelector('.followers').textContent = user.followers;
    const followers = document.querySelector('.followers');
    if (!user.followers) {
        followers.textContent = 'Not Available'
    } else {
        followers.textContent = user.followers;
    }

    // document.querySelector('.following').textContent = user.following;
    const following = document.querySelector('.following');
    if (!user.following) {
        following.textContent = 'Not Available'
    } else {
        following.textContent = user.following;
    }

    // document.querySelector('.location').textContent = user.location;
    const location = document.querySelector('.location');
    if (!user.location) {
        location.textContent = 'Not Available';
    } else {
        location.textContent = user.location;
    }

    // document.querySelector('.website').textContent = user.blog;
    const website = document.querySelector('.website');
    if (!user.blog) {
        website.textContent = 'Not Available'
    } else {
        website.textContent = user.blog;
    }

    // document.querySelector('.twitter').textContent = user.twitter_username;
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

const btn = document.querySelector('.search-button');


btn.addEventListener('click', (e) => {
    // const value = e.target.value;
    // console.log(value);
    // console.log(`https://api.github.com/users/${value}`);

    e.preventDefault();

    const input = document.querySelector('#search');
    const username = input.value.toLowerCase();

    if (username) {
        getUser(username)
        input.value = '';
    }
})

getUser(username);