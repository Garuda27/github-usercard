/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// {
//   "login": "Garuda27",
//   "id": 51134692,
//   "node_id": "MDQ6VXNlcjUxMTM0Njky",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/51134692?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/Garuda27",
//   "html_url": "https://github.com/Garuda27",
//   "followers_url": "https://api.github.com/users/Garuda27/followers",
//   "following_url": "https://api.github.com/users/Garuda27/following{/other_user}",
//   "gists_url": "https://api.github.com/users/Garuda27/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/Garuda27/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/Garuda27/subscriptions",
//   "organizations_url": "https://api.github.com/users/Garuda27/orgs",
//   "repos_url": "https://api.github.com/users/Garuda27/repos",
//   "events_url": "https://api.github.com/users/Garuda27/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/Garuda27/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Preston Middleton",
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "public_repos": 20,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2019-05-28T19:02:54Z",
//   "updated_at": "2019-06-04T23:26:21Z"
// }

axios.get("https://api.github.com/users/garuda27")
  .then (data => {
    const myProfile = data.data;
    const cards = document.querySelector("cards");
    const cardInfo = cardMaker(myProfile);
    console.log(cardInfo);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];
i=0;
followersArray.forEach(function(user, i) {
  axios.get(`https://api.github.com/users/${followersArray[i]}`)
    .then (data => {
      const myInfo = data.data;
      const cards = document.querySelector('.cards');
      const cardInfo = cardMaker(myInfo);
      console.log(cardInfo);
    }), i++;
})
/* Step 3: Create a function that accepts a single object as its only objument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
const cards = document.querySelector(".cards");
function cardMaker(obj){
  //Create Elements
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const user = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const link = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  //Add Classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  user.classList.add("user-name");
  //Sort Child's
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(user);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  //Fill with Content
  img.src = obj.avatar_url;
  location.textContent = obj.location;
  name.textContent = obj.name;
  user.textContent = obj.login;
  const alink = obj.html_url;
  link.innerHTML = alink.link(obj.html_url);
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = obj.bio;

  return card;
}
// console.log(cardMaker);
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
