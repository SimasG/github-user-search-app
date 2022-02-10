const searchContainer = document.querySelector('.search-container');

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let value = 'simasg';

async function getUserData () {
    const response = await fetch(`https://api.github.com/users/${value}`);
    return await response.json();
}

displayUserData = async () => {
    // getUserData();

    // async function getUserData () {
    //     const response = await fetch(`https://api.github.com/users/${value}`);
    //     return await response.json();
    // }

    const data = await getUserData();
    console.log(data)
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
    
    const form = document.querySelector('form');

    form.addEventListener('input', async (e) => {
        const value = e.target.value;
        console.log(value);
        console.log(`https://api.github.com/users/${value}`);

        const response = await fetch(`https://api.github.com/users/${value}`);
        return await response.json();
    })
}

displayUserData();