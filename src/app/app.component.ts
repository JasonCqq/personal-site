import { Component } from "@angular/core";
import { DomSanitizer, SafeHtml, SafeUrl } from "@angular/platform-browser";

interface Project {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
  appHref: string;
  githubHref: string;
  iconsHTML: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {}

  tab: string = "Projects";
  switchTab(tabName: string): void {
    this.tab = tabName;
  }

  safeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  safe(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  nextProject(): void {
    if (this.projectID === 2) {
      return;
    }
    this.projectID++;
  }

  previousProject(): void {
    if (this.projectID === 0) {
      return;
    }
    this.projectID--;
  }
  projectID: number = 0;
  projects: Project[] = [
    {
      id: 0,
      title: "LinkStorage",
      videoSrc: "https://www.youtube.com/embed/HkUMs601Ak0?si=c12NkK2xfN8A9EQR",
      description:
        "Linkstorage is a web app to store links you want to revisit. You can even share your folders to the world. Check one out here: linkstorage.net/public/1. Linkstorage provides many features such as Rich Previews, Folders, Searching, Sharing, Mass editing, Bookmarks and more...",
      appHref: "https://linkstorage.net",
      githubHref: "https://github.com/JasonCqq/link-saver",
      iconsHTML: `
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
      <img  width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />           
      `,
    },
    {
      id: 1,
      title: "minBlog",
      videoSrc: "https://www.youtube.com/embed/J5s9PAta4V0",
      description:
        "minBlog is a reading platform, and a blog sharing platform with short ~1500chars) blogs. With features like REST API, secure authentication with bcrypt, passport/sessions along with blog searching, filtering, and pagination",
      appHref: "https://minblog21715.netlify.app/",
      githubHref: "https://github.com/JasonCqq/minBlog",
      iconsHTML: `
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
      <img  width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />           
      `,
    },
    {
      id: 2,
      title: "Jwitter",
      videoSrc: "https://www.youtube.com/embed/hJ5OKDj8ZxE",
      description:
        "Jwitter is a Twitter clone that replicates the core features of Twitter such as realtime tweets, follow system, and likes. This project was developed from scratch without relying on tutorials to practice full stack skills.",
      appHref: "https://main--chipper-gnome-4de1e9.netlify.app/",
      githubHref: "https://github.com/JasonCqq/Jwitter",
      iconsHTML: `
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
      <img  width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />           
      <img  width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
      `,
    },
  ];
}
