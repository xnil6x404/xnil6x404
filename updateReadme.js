// Use dynamic import for node-fetch (ESM)
import("node-fetch").then(({ default: fetch }) => {
  const fs = require("fs");

  const url = "https://api.github.com/users/xnil6x404";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const readmeContent = `

# 👋 Hi, I'm [${data.login}](https://www.facebook.com/xnil6x404) 👋
<h2 align="center">I am a student from BANGLADESH.</h2>
<h3 align="center">Welcome to my GitHub profile! Here's a quick overview of my activities and stats.</h3>

<p align="center"> 
  <img src="https://komarev.com/ghpvc/?username=xnil6x404&label=Profile%20Views&color=blue&style=plastic" alt="Profile views" /> 
</p>

<p align="center">
  <a href="https://twitter.com/xnil6x">
    <img alt="Twitter" width="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"/>
  </a>
  <a href="https://github.com/xnil6x404">
    <img alt="GitHub" width="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
  </a>
  <a href="https://instagram.com/xnil6x">
    <img alt="Instagram" width="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
  </a>
  <a href="https://www.facebook.com/xnil6x404">
    <img alt="Facebook" width="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" />
  </a>
  <a href="https://www.linkedin.com/in/xnil6x404/">
    <img alt="LinkedIn" width="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
  </a>
</p>

<br/><br/>

![Profile Picture](${data.avatar_url})

---
## 📫 How to reach me:

| Facebook | Telegram | Twitter | Youtube | 
| :---: | :---: | :---: | :---: |
| [![image](https://raw.githubusercontent.com/ntkhang03/ntkhang03/main/sources/qr-fb.svg)](https://www.facebook.com/xnil6x404) <p><b><a href="https://www.facebook.com/xnil6x404">XNIL6X</a><b></p> | [![image](https://raw.githubusercontent.com/ntkhang03/ntkhang03/main/sources/qr-tele.svg)](https://t.me/xnil6x) <p><b><a href="https://t.me/xnil6x">XNIL6X</a><b></p> | [![image](https://raw.githubusercontent.com/ntkhang03/ntkhang03/main/sources/qr-tw.svg)](https://twitter.com/xnil6x) <p><b><a href="https://twitter.com/xnil6x">XNIL6X</a><b></p> | [![image](https://raw.githubusercontent.com/ntkhang03/ntkhang03/main/sources/qr-ytb.svg)](https://www.youtube.com/c/xnil6x) <p><b><a href="https://www.youtube.com/c/xnil6x">XNIL6X</a><b></p>  |
<!-- email -->
**✉️ Email:** xnilxhowdhury@gmail.com

[![Twitter: XNIL6X](https://img.shields.io/twitter/follow/xnil6x?style=social)](https://twitter.com/xnil6x)
[![GitHub: XNIL6X](https://img.shields.io/github/followers/xnil6x404?label=follow&style=social)](https://github.com/xnil6x404)
---

### 🛠️ Technologies & Tools:
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"></code>

**Other Tools:**
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"></code>

---

### 📈 GitHub Activity
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=xnil6x404">
  <br>
  <br>
<a href="https://github.com/ntkhang03">
    <img align="center" src="https://github-readme-stats.vercel.app/api?username=xnil6x404&show_icons=true&theme=github_dark&line_height=27" alt="XNIL6X404's github stats" style="margin-top: 10px;"/>
  </a>
  <br>
  <br>
  

### 🌐 Most Used Languages
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=xnil6x404&langs_count=10&layout=compact&theme=radical)

---

### 📋 Pinned Repositories
[![My Repository] <a href="https://github.com/xnil6x404/Goatbot-v2">
   <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=xnil6x&repo=GOATBoT--V2&theme=github_dark" style="margin-top: 10px;"/>
  </a>
---
## 🌟 About Me
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
- **Stars:** ${data.starred_at} ⭐ (This is a placeholder for your stars)

---

### 💡 Fun Fact
GitHub has been part of my journey since **${new Date(data.created_at).getFullYear()}**, and I'm always learning and sharing new projects.

---

### 🎓 Achievements:
- **[Certificate Name](https://example.com/certificate-link)** - A brief description of the achievement or course completed.
- **[Another Achievement](https://example.com/another-link)** - Another cool accomplishment or certification.

`;

      // Write the updated README.md file
      fs.writeFileSync("README.md", readmeContent, "utf8");

      console.log("README.md file updated!");
    })
    .catch((error) => console.error("Error fetching data:", error));
})
.catch((error) => console.error("Error importing node-fetch:", error));
