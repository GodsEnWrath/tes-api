//PROFILE

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

//FOLLOWING

const fetchFollowing = () => {
  fetch("https://api.github.com/users/godsenwrath/following")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      let getFollowing = document.getElementById("following");
      data.map(item => {
          //img followimg
        let eachList = document.createElement("img");
        let textList = document.createTextNode(item.login);
        eachList.setAttribute("src", item.avatar_url);
        eachList.appendChild(textList);

        //nambah style dan class
        eachList.style.width = "300px"
        eachList.className = "rounded-circle"

        //nambah nama
        let addName = document.createElement("p")
        let name = document.createTextNode(item.login)
        addName.appendChild(name)
        getFollowing.appendChild(eachList);
        getFollowing.appendChild(addName)
      });

      console.log(data);
    });
};


//FOLLOWER
const fetchFollowers = () => {
  fetch("https://api.github.com/users/godsenwrath/followers")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)

    let getFollowers = document.getElementById("followers")
    data.map(item2 => {
      //img follower
      let zlist = document.createElement("img")
      let ylist = document.createTextNode(item2.login)
      zlist.setAttribute("src", item2.avatar_url)
      zlist.appendChild(ylist)

      //nambah style dan class
      zlist.style.width = "300px"
      zlist.className = "rounded-circle"

      //nambah nama
      let addNamae = document.createElement("p")
      let namae = document.createTextNode(item2.login)
      addNamae.appendChild(namae)
      getFollowers.appendChild(zlist)
      getFollowers.appendChild(addNamae)

    });;
    console.log(data)
    });
};
fetchProfile();
fetchFollowing();
fetchFollowers()
