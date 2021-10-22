let axios = require("axios");


async function fun(){
    let gitHubUsers = await axios.get("https://api.github.com/users/vasudevsinghal")
    console.log(gitHubUsers.data)
}
fun()

// // console.log(gitHubUsers);

// gitHubUsers.then(function(res){
//     console.log(gitHubUsers);
//     // console.log(res.data);
// }).catch(function(err){
//     console.log(gitHubUsers);
//     // console.log(err)
// })

// axios
//   .get("https://api.github.com/users/sayantani11")
//   .then(function (res) {
//     // console.log(gitHubUsers);
//     console.log(res.data);
//   })
//   .catch(function (err) {
//     console.log(gitHubUsers);
//     // console.log(err)
//   });
