let tweet = document.getElementById('post-tweet').value;
console.log(tweet)
function getData() {
    fetch('http://localhost:3000/tweets', {
        method: 'post',
        body: new URLSearchParams(tweet),

    }).then(res => {
        console.log(`status code:${res.status}`);
        console.log(`response:  ${res}`)

    })
        .catch(err => console.log(err))


}
window.onload = function () {
    let myButton = document.getElementById("postTweet");
    myButton.addEventListener('click', getData);
}
    

    