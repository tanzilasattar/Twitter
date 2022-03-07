const userform = document.getElementById('postTweet');
console.log(userform);
console.log('hello');
userform.addEventListener('click', (e) => {
    console.log("tweet2");
    //prevents form from being submitted
    e.preventDefault();
    console.log("Prevented");

    // const output='';
    // for( let i in tweets){
    //     output+=`<div class="col-12 d-flex flex-row ">
    //     <div class="col-12" id="tweet">
    //         <h2 class="tweet">${tweets[i].tweet}</h2>
    //     </div>
    //     `
    // }
    // document.getElementById("tweet").innerHTML='output';


    let tweet = document.getElementById('post-tweet').value;
    console.log(tweet)
    if (tweet) {
        fetch('http://localhost:3000/tweets', {
            method: 'post',
            body: new URLSearchParams(userform),
            
            }). then(res => {
                    console.log(`status code:${res.status}`);
                    console.log(`response:  ${res}`)
                    
                })
                .catch(err => console.log(err))
                

            }

            })
    