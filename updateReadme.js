// Use dynamic import for node-fetch (ESM)
import("node-fetch").then(({ default: fetch }) => {
  const fs = require("fs");

  const url = "https://api.github.com/users/xnil6x404";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const readmeContent = `

##  👋 Hi, I'm [${data.login}!](https://www.facebook.com/xnil6x404) 👋
<h2 align="center">I am a student and i am from BANGLADESH.
Welcome to my GitHub profile! Here's a quick overview of my activities and stats.</h2>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=xnil6x404&label=Views&color=blue&style=plastic" alt="ntkhang" /> </p>

<a href="https://twitter.com/xnil6x">
  <img align="left" alt="XNIL6X's Twitter" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"/>
</a>
<a href="https://github.com/xnil6x404">
  <img align="left" alt="XNIL6X's Github" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
</a>
<a href="https://instagram.com/xnil6x">
  <img align="left" alt="XNIL6X's Instagram" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
</a>
<a href="https://www.facebook.com/xnil6x404">
  <img align="left" alt="XNIL6X's Facebook" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" />
<br/>
<br/>

![Profile Picture](${data.avatar_url})


## 📫 How to reach me:

| Facebook | Telegram | Twitter | Youtube | 
| :---: | :---: | :---: | :---: |
| [![image](https://raw.githubusercontent.com/ntkhang03/ntkhang03/main/sources/qr-fb.svg)](https://www.facebook.com/xnil6x404) <p><b><a href="https://www.facebook.com/xnil6x404">XNIL6X</a><b></p> | [![image](https://raw.githubusercontent.com/ntkhang03/ntkhang03/main/sources/qr-tele.svg)](https://t.me/xnil6x) <p><b><a href="https://t.me/xnil6x">XNIL6X</a><b></p> | [![image](https://raw.githubusercontent.com/ntkhang03/ntkhang03/main/sources/qr-tw.svg)](https://twitter.com/xnil6x) <p><b><a href="https://twitter.com/xnil6x">XNIL6X</a><b></p>
<!-- email -->
**✉️ Email:** xnilxhowdhury@gmail.com

[![Twitter: XNIL6X](https://img.shields.io/twitter/follow/xnil6x?style=social)](https://twitter.com/xnil6x)
[![GitHub: XNIL6X 404](https://img.shields.io/github/followers/xnil6x404?label=follow&style=social)](https://github.com/xnil6x404)

<!-- ngôn ngữ đã học -->
**Learned Languages and Frameworks:**
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" style="background: #000;"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"></code>

**Tools used:**
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"></code>

### 🌟 About Me
- **Username:** [${data.login}](${data.html_url})
- **GitHub ID:** ${data.id}
- **Member Since:** ${new Date(data.created_at).toDateString()}
- **Last Active:** ${new Date(data.updated_at).toDateString()}

---

### 🚀 My GitHub Stats
- **Public Repositories:** ${data.public_repos}  
- **Public Gists:** ${data.public_gists}  
- **Followers:** ${data.followers}  
- **Following:** ${data.following}  

---

### 📬 Contact Me
Feel free to check out my profile at [GitHub Profile](${data.html_url}).

---

### 💡 Fun Fact
GitHub has been part of my journey since **${new Date(data.created_at).getFullYear()}**, and I'm always learning and sharing new projects.
`;

      // Write the updated README.md file
      fs.writeFileSync("README.md", readmeContent, "utf8");

      console.log("README.md file updated!");
    })
    .catch((error) => console.error("Error fetching data:", error));
})
.catch((error) => console.error("Error importing node-fetch:", error));
