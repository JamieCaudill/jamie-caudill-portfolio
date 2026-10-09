const portfolioData = [
  {
    id: "1",
    title: "Waves & Wifi",
    location: "Nicaragua",
    url: "https://www.instagram.com/p/DcyjvFIqCYX/",
    cover: require('../images/IMG_6132.jpg'),
    stills: [
      require('../images/IMG_6133.jpg'),
      require('../images/IMG_6134.jpg'),
      require('../images/IMG_6135.jpg'),
      require('../images/IMG_6136.PNG'),
      require('../images/IMG_6137.jpg'),
    ],
    metrics: [
      { label: "Views", value: "12.2K" },
      { label: "Likes", value: "597" },
      { label: "Comments", value: "57" },
      { label: "Reposts", value: "16" },
      { label: "Shares", value: "77" },
    ],
    titleLogo: {
      src: require('../images/Waves-Wifi-Logo-Final.svg').default,
      alt: "Waves & Wifi",
      invert: true,
    },
  },
  {
    id: "2",
    title: "Paddle Out for #DefendTheDeep",
    location: "Nicaragua",
    url: "https://www.instagram.com/p/DMX0-2VuxpK/?img_index=1",
    cover: require('../images/IMG_9535.JPG'),
    stills: [
      require('../images/IMG_9535.JPG'),
      require('../images/IMG_9538.JPG'),
      require('../images/IMG_9539.JPG'),
    ],
    metrics: [
      { label: "Views", value: "6.9K" },
      { label: "Likes", value: "64" },
      { label: "Comments", value: "1" },
      { label: "Shares", value: "9" },
    ],
    logos: [
      {
        src: require('../images/SF-Horizontal-Logo_RGB_Black_crop_small.webp'),
        alt: "Surfrider Foundation",
        invert: true,
      },
      {
        src: require('../images/DSCC_20_logo_blue_SocMedia_website_circle-1.svg').default,
        alt: "Deep Sea Conserve",
        invert: false,
      },
    ],
  },
]

export default portfolioData;
