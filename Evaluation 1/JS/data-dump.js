
const usersData = [
    {
      id: 1,
      username: "Ishika Raiyani",
      email: "raiyanishika@gmail.com",
      password: "Ishika",
    },
    {
      id: 2,
      username: "Tanisha Pavecha",
      email: "tanishapavecha@gmail.com",
      password: "Tanisha",
    },
    {
        id: 3,
        username: "Supriya Tiwari",
        email: "SupriyaTiwari@gmail.com",
        password: "Supriya",
      }
  ];
  
  const blogsData = [
    {
      id: 1,
      title: "The Kashmir Dairy",
      image: "../Assests/KashmirDiaries.png",
      content: "Serene landscape of Kashmir with snow-capped mountains and Dal Lake",
      comments: [
        {
          username: "Ishika Raiyani",
          content: "It was very exciting!",
        }
      ]
    },
    {
      id: 2,
      title: "The story of Mount Everest",
      image: "../Assests/MountEverest.png",
      content: "View of Mount Everest with golden sunrise hitting the peak",
      comments: [
        {
          username: "Tanisha Pavecha",
          content: "Great blog, very informative!",
        }
      ]
    },
    {
        id: 3,
        title: "The story of Kanchenjunga",
        image: "../Assests/Kanchenjunga.png",
        content: "Sunrise over Kanchenjunga with glowing snow-covered peaks",
        comments: [
          {
            username: "Supriya Tiwari",
            content: "Highly informative!",
          }
        ]
      }
  ];

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(usersData));
  }
  if (!localStorage.getItem("blogs")) {
    localStorage.setItem("blogs", JSON.stringify(blogsData));
  }
  