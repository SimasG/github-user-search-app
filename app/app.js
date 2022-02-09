const searchContainer = document.querySelector('.search-container');

async function getUserData () {
    const response = await fetch('https://api.github.com/users/octocat');
    return await response.json();
}

displayUserData = async () => {
    getUserData();
    const data = await getUserData();
    console.log(data);
    console.log(data.created_at);

    // dateJson = data.created_at;
    // dateParsedJson = dateJson.toUTCString();
    // console.log(dateParsedJson);

    document.querySelector('#profile-picture').src = data.avatar_url;
    document.querySelector('.name').textContent = data.name;
    document.querySelector('.handle').textContent = `@${data.login}`;
    document.querySelector('.repos').textContent = data.public_repos;
    document.querySelector('.followers').textContent = data.followers;
    document.querySelector('.following').textContent = data.following;
    document.querySelector('.location').textContent = data.location;
    document.querySelector('.website').textContent = data.blog;
    // fix null value display
    document.querySelector('.twitter').textContent = data.twitter_username;
    document.querySelector('.company').textContent = data.company;



}

displayUserData();
