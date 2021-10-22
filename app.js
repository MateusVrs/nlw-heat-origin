const socialMediaLinks = {
    github: "mateusvrs",
    instagram: "mateusvrs",
    twitter: "mateusvrs"
}

function changeUserLinks() {
    const socialLinks = document.getElementById("social-links")

    for (let li of socialLinks.children) {
        let social = li.getAttribute("class")
        li.firstChild.href = `https://${social}.com/${socialMediaLinks[social]}`
    }
}

changeUserLinks()

function getGithubProfileInfo() {
    const url = `https://api.github.com/users/${socialMediaLinks.github}`

    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        profilePhoto.src = data.avatar_url
        userGithub.textContent = data.login
        githubLink.href = data.html_url
    })
}

getGithubProfileInfo()
