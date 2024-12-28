const fetch = require("node-fetch");
const fs = require("fs");

const url = "https://api.github.com/users/xnil6x404";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const readmeContent = `
# 👋 Hi, I'm ${data.login}!

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
