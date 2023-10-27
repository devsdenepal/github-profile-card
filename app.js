const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('user');
const card = document.getElementById("card");
const image = document.createElement("img");
const container = document.createElement("div");
container.className = "container";
const card_title = document.createElement("h4");
card_title.className = "card_title"
const card_badge = document.createElement("div");
card_badge.className = "card_badge"
const card_text = document.createElement("p");
card_text.className = "card_text";
function reward(badge,icon){
    console.log(badge);
    card_badge.innerHTML = "<i class='fa-solid "+ icon+" '> "+badge+ " </i>";
}
function generate_level(repo_count,followers){
    if(repo_count>30 && followers>55){
        reward("pioneer", "fa-ranking-star");
    }
    else if(repo_count>20 && followers>32){
        reward("achiever", "fa-trophy");
    }
    else if(repo_count>10 && followers>12){
        reward("explorer","fa-canadian-maple-leaf");
    }
    else if(repo_count>5 && followers>5){
        reward("new_comer","fa-baby");
    }
    // else{
    //     reward("error! user has "+ repo_count + " repo and " + followers + " followers")
    // }
}
function generate_card() {
            var user = JSON.parse(this.responseText);
            // Update the card content with user data
            image.src = user.avatar_url;
            card_title.textContent = user.name;
            card_text.textContent = user.bio;
            generate_level(user.public_repos,user.followers)
        }
 function get_user(user){
    var request = new XMLHttpRequest();
        request.onload = generate_card;
        request.open('get', 'https://api.github.com/users/'+user, true);
        request.send();
 }
get_user(user);
card.appendChild(image);
card.appendChild(container);
container.appendChild(card_title);
container.appendChild(card_badge);
container.appendChild(card_text);
