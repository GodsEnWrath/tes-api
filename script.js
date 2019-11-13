const fetchProfile = () => {
  fetch("https://api.github.com/users/godsenwrath")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      let getProfile = document.getElementById("prof");
      let newH2 = document.createElement("H2");
      let newTextH2 = document.createTextNode(data.login);
      let addH2 = newH2.appendChild(newTextH2);

      let namaProfile = document.getElementById("nama");
      let profileP = document.createElement("P");
      let newProfileP = document.createTextNode(data.name);
      let addNama = profileP.appendChild(newProfileP);

      //   let profileImg = document.getElementById("profileImage");
      //   let newImg = document.createElement("img");
      //   newImg.setAttribute("src", data.avatar_url);
      //   newImg.appendChild(profileImg);

      //   profileImg.appendChild(newImg);
      getProfile.appendChild(addH2);
      namaProfile.appendChild(addNama);
      document
        .getElementById("profileImage")
        .setAttribute("src", data.avatar_url);
    });
};

const fetchFollowing = () => {
  fetch("https://api.github.com/users/godsenwrath/following")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      let getFollowing = document.getElementById("following");
      data.map(item => {
          //img follower
        let eachList = document.createElement("img");
        let textList = document.createTextNode(item.login);
        eachList.setAttribute("src", item.avatar_url);
        eachList.appendChild(textList);
        //nambah nama
        let addName = document.createElement("p")
        let name = document.createTextNode(item.login)
        addName.appendChild(name)
        getFollowing.appendChild(eachList);
        getFollowing.appendChild(name)
      });

      console.log(data);
    });
};

// const fetchFollowers = () => {
//     fetch("https://api.github.com/users/godsenwrath/followers");
//     then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
// };
fetchProfile();
fetchFollowing();
// fetchFollowers()
