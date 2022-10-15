import axios from 'axios';

const getData = async (userId) => {
    const { data: getUser } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    const { data: getPosts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    
    let user = getUser;
    let userPosts = getPosts;
    
    user.posts = userPosts;
    return user;
}

export default getData;