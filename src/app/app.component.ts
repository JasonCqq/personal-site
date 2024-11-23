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
  showVid: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {}

  showE: boolean = false;
  toggleEmail() {
    setTimeout(() => {
      this.showE = false;
    }, 10000);
    this.showE = !this.showE;
  }

  // Allow Urls
  safeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleVideo(id: number): void {
    this.projects[id].showVid = !this.projects[id].showVid;
  }

  show: boolean = false;

  showMore() {
    this.show = !this.show;
    if (this.show === true) {
      this.projects.push(
        {
          id: 3,
          title: "Jwitter",
          image: "../assets/jwitter.png",
          videoSrc:
            "https://www.youtube.com/embed/hJ5OKDj8ZxE?si=3VvpDTXYR4fWYPD_",
          description:
            "Twitter clone that replicates the core features of old Twitter. This project was developed from scratch without relying on tutorials to practice full stack skills.",
          appHref: "https://main--chipper-gnome-4de1e9.netlify.app/",
          githubHref: "https://github.com/JasonCqq/Jwitter",
          iconsHTML: ["React", "Typescript", "Firebase"],
          showVid: false,
        },

        {
          id: 4,
          title: "Wimmelbilder",
          image: "../assets/wimmel.png",
          videoSrc:
            "https://www.youtube.com/embed/X6CBm3JiTpw?si=oEIt9r47LMV1-K0H",
          description:
            "Very simple where's waldo inspired game, has fun features like leaderboard",
          appHref: "https://main--nimble-cendol-ef155b.netlify.app/#/",
          githubHref: "https://github.com/JasonCqq/Wimmelbilder",
          iconsHTML: ["React", "Typescript", "Firebase"],
          showVid: false,
        }
      );
    } else if (this.show === false) {
      this.projects.pop();
      this.projects.pop();
    }
  }

  projects: Project[] = [
    {
      id: 0,
      title: "Linkstorage",
      image: "../assets/1.png",
      videoSrc: "https://www.youtube.com/embed/OrvRE0zM_QY?si=C6OLIz7M43Z7aYKq",
      description:
        "Store URLs with thumbnails. Has an active userbase and includes many features such as url bank (plain text urls), folder system, folder sharing, link searching/sorting by visits. Visit the live app to see the rest of the features.",
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
      showVid: false,
    },

    {
      id: 1,
      title: "Project0 (Private)",
      image: "../assets/project0.png",
      videoSrc: "https://www.youtube.com/embed/tRKLOirIqDw?si=cd--hdmPZsVExS-i",
      description:
        "Team communication and management platform similar to Slack for video/content creators. Includes real-time collaboration on video drafts, sharing video editing files, activity logs for each member, and chatrooms for videos",
      appHref: "",
      githubHref: "",
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
      showVid: false,
    },

    {
      id: 2,
      title: "minBlog",
      image: "../assets/23.png",
      videoSrc: "https://www.youtube.com/embed/J5s9PAta4V0?si=TyCnC-xOPs1JOwRn",
      description:
        "Blog sharing and reading platform with short blogs (max 1500 chars). With features such as user authentication, and basic CMS features: user profiles, blog searching, commenting, filtering, and pagination",
      appHref: "https://minblog21715.netlify.app/",
      githubHref: "https://github.com/JasonCqq/minBlog",
      iconsHTML: ["React", "MongoDB", "Express", "Node", "Typescript"],
      showVid: false,
    },
  ];
}
