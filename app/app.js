// const searchContainer = document.querySelector('.search-container');

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


let username = 'octocat';

async function getUser (username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    console.log(data);
    displayUser(data);
}

displayUser = async () => {
    const data = await getUser();
    const date = new Date(data.created_at);

    document.querySelector('#profile-picture').src = data.avatar_url;
    document.querySelector('.name').textContent = data.name;
    document.querySelector('.handle').textContent = `@${data.login}`;
    document.querySelector('.join-date').textContent = `Joined ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    document.querySelector('.bio').textContent = data.bio;
    document.querySelector('.repos').textContent = data.public_repos;
    document.querySelector('.followers').textContent = data.followers;
    document.querySelector('.following').textContent = data.following;
    document.querySelector('.location').textContent = data.location;
    document.querySelector('.website').textContent = data.blog;
    // fix null value display
    document.querySelector('.twitter').textContent = data.twitter_username;
    document.querySelector('.company').textContent = data.company;

    // const date = new Date(user.created_at);

    // document.querySelector('#profile-picture').src = user.avatar_url;
    // document.querySelector('.name').textContent = user.name;
    // document.querySelector('.handle').textContent = `@${user.login}`;
    // document.querySelector('.join-date').textContent = `Joined ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    // document.querySelector('.bio').textContent = user.bio;
    // document.querySelector('.repos').textContent = user.public_repos;
    // document.querySelector('.followers').textContent = user.followers;
    // document.querySelector('.following').textContent = user.following;
    // document.querySelector('.location').textContent = user.location;
    // document.querySelector('.website').textContent = user.blog;
    // // fix null value display
    // document.querySelector('.twitter').textContent = user.twitter_username;
    // document.querySelector('.company').textContent = user.company;
}

const form = document.querySelector('form');

form.addEventListener('click', async (e) => {
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

// getUser(username);
// displayUser();