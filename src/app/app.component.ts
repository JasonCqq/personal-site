import { Component } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  videoSrc: string;
  appHref: string;
  githubHref: string;
  iconsHTML: string[];
  showDesc: boolean;
  showVid: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {}

  // Allow Urls
  safeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleVideo(id: number): void {
    this.projects[id].showVid = !this.projects[id].showVid;
  }

  toggleDescription(id: number): void {
    this.projects[id].showDesc = !this.projects[id].showDesc;
  }

  projectID: number = 0;
  projects: Project[] = [
    {
      id: 0,
      title: "LinkStorage",
      image: "../assets/661shots_so.png",
      videoSrc: "https://www.youtube.com/embed/0C5lZlLnrcs?si=9su4ICICZM77-SvF",
      description:
        "Linkstorage is a web app to store links with screenshots/thumbnails. You can even share your folders to the world. Check one out here: (linkstorage.net/public/1). Linkstorage provides features such as Rich Previews, Folders, Searching, Sharing, Mass editing, Bookmarks and more...",
      appHref: "https://linkstorage.net",
      githubHref: "https://github.com/JasonCqq/link-saver",
      iconsHTML: [
        "Angular",
        "PostgreSQL",
        "Prisma",
        "Express",
        "Node",
        "Typescript",
        "HTML",
        "SCSS",
      ],
      showDesc: false,
      showVid: false,
    },

    {
      id: 1,
      title: "minBlog",
      image: "../assets/296_1x_shots_so.png",
      videoSrc: "https://www.youtube.com/embed/J5s9PAta4V0",
      description:
        "minBlog is a reading platform, and a blog sharing platform with short 1500 character blogs. With features like REST API, secure authentication with bcrypt, passport/sessions along with blog searching, filtering, and pagination",

      appHref: "https://minblog21715.netlify.app/",
      githubHref: "https://github.com/JasonCqq/minBlog",
      iconsHTML: ["React", "MongoDB", "Express", "Node", "Typescript"],
      showDesc: false,
      showVid: false,
    },
    {
      id: 2,
      title: "Jwitter",
      image: "../assets/111_1x_shots_so.png",
      videoSrc: "https://www.youtube.com/embed/hJ5OKDj8ZxE",
      description:
        "Jwitter is a Twitter clone that replicates the core features of Twitter such as realtime tweets, follow system, and likes. This project was developed from scratch without relying on tutorials to practice full stack skills.",
      appHref: "https://main--chipper-gnome-4de1e9.netlify.app/",
      githubHref: "https://github.com/JasonCqq/Jwitter",
      iconsHTML: ["React", "Typescript", "Firebase"],
      showDesc: false,
      showVid: false,
    },
  ];
}
