// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Jialin-Page/";
    },
  },{id: "nav-notes",
          title: "notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Jialin-Page/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "selected publications and working papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Jialin-Page/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV. Edit the structured content in `_data/cv.yml`.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Jialin-Page/cv/";
          },
        },{id: "post-welcome",
        
          title: "Welcome",
        
        description: "A short note about how this site is organized.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/Jialin-Page/blog/2026/welcome/";
          
        },
      },{id: "news-this-website-has-been-reorganized-into-a-markdown-first-academic-site",
          title: 'This website has been reorganized into a Markdown-first academic site.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%68%69%73%69%73%79%65%6A%69%61%6C%69%6E@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Jialin-Ye", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/Jialin-Page/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
