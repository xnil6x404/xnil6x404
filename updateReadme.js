// Use dynamic import for node-fetch (ESM)
import("node-fetch").then(({ default: fetch }) => {
  const fs = require("fs");

  const url = "https://api.github.com/users/xnil6x404";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const readmeContent = `

##  👋 Hi, I'm [${data.login}!](https://www.facebook.com/xnil6x404) 👋
<h3 align="center">I am a student and i am from BANGLADESH.</h3>

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

Welcome to my GitHub profile! Here's a quick overview of my activities and stats.

---

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
