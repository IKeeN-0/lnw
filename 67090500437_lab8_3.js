function fetchUser(userID) {
    return Promise.resolve({id: userID});
}

function fetchPosts(username) {
    return Promise.resolve("Post");
}

async function getUserData(userID) {
    const user = await fetchUser(userID);
    const posts = await fetchPosts(user.username);
    return {
        user,
        posts
    };
}

getUserData()   //ใส่id
.then(data => console.log(data));