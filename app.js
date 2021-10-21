const socialMediaLinks = {
    github: "mateusvrs",
    instagram: "mateusvrs",
    twitter: "mateusvrs"
}

function changeUserLinks() {
    document.getElementById("userName").textContent = "Mateus Vieira"
    const socialLinks = document.getElementById("social-links")

    for (let li of socialLinks.children) {
        let social = li.getAttribute("class")
        li.firstChild.href = `https://${social}.com/${socialMediaLinks[social]}`
    }
}

changeUserLinks()
