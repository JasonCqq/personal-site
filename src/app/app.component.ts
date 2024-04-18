import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

interface Project {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
  appHref: string;
  githubHref: string;
  iconsHTML: string[];
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    public breakpointObserver: BreakpointObserver
  ) {}

  public showComponent: boolean = false;
  // Show components if width < 1030px

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((state) => {
        const breakpoints = state.breakpoints;

        if (breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.XSmall]) {
          this.showComponent = true;
        } else {
          this.showComponent = false;
        }
      });
  }

  // Allow Urls
  safeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Navigation
  tab: string = "Projects";
  switchTab(tabName: string): void {
    this.tab = tabName;
  }

  // Projects navigation
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

  // Projects
  projectID: number = 0;
  projects: Project[] = [
    {
      id: 0,
      title: "LinkStorage",
      videoSrc: "https://www.youtube.com/embed/HkUMs601Ak0?si=2nFLi0kP850Dk7Uz",
      description:
        "Linkstorage is a web app to store links you want to revisit. You can even share your folders to the world. Check one out here: linkstorage.net/public/1. Linkstorage provides many features such as Rich Previews, Folders, Searching, Sharing, Mass editing, Bookmarks and more...",
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
    },

    {
      id: 1,
      title: "minBlog",
      videoSrc: "https://www.youtube.com/embed/J5s9PAta4V0",
      description:
        "minBlog is a reading platform, and a blog sharing platform with short ~1500chars) blogs. With features like REST API, secure authentication with bcrypt, passport/sessions along with blog searching, filtering, and pagination",
      appHref: "https://minblog21715.netlify.app/",
      githubHref: "https://github.com/JasonCqq/minBlog",
      iconsHTML: ["React", "MongoDB", "Express", "Node", "Typescript"],
    },
    {
      id: 2,
      title: "Jwitter",
      videoSrc: "https://www.youtube.com/embed/hJ5OKDj8ZxE",
      description:
        "Jwitter is a Twitter clone that replicates the core features of Twitter such as realtime tweets, follow system, and likes. This project was developed from scratch without relying on tutorials to practice full stack skills.",
      appHref: "https://main--chipper-gnome-4de1e9.netlify.app/",
      githubHref: "https://github.com/JasonCqq/Jwitter",
      iconsHTML: ["React", "Typescript", "Firebase"],
    },
  ];
}
