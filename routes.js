export const routes = [
    { name: "Home", href: "/" },
    {
      name: "Our Services",
      href: "/services",
      submenu: [
        { name: "Overhead Garage Doors", href: "/overhead-garage-doors" },
        { name: "Commercial Doors", href: "/commercial-doors" },
        { name: "Openers", href: "/openers" },
          { name: "Loading Docks", href: "/loading-docks" },
          {name:"Custom Painting", href: "/custom-painting" },
      ],
    },
    { name: "Our Team", href: "/our-team" },
    { name: "Our Work", href: "/our-work" },
    { name: "Contact", href: "/contact" },
  ];
  