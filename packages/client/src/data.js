// React Icons
import { BsInstagram, BsGithub } from "react-icons/bs";

export const defaultFormModal = {
  color: "red",
  msg: "Default Modal Message",
  show: false,
};

export const defaultOverlay = {
  functionUsedOnConfirmation: () => {},
  msg: "Default Overlay Message",
  show: false,
};

export const defaultPHFilters = {
  blogs: false,
  authors: false,
  favorites: false,
  category: {
    value: "",
  },
};

export const defaultBlogSettings = {
  title: "",
  category: "",
  description: "",
  author: "",
};

export const defaultProfile = {
  imgUrl:
    "https://res.cloudinary.com/birthdayreminder/image/upload/v1664019172/Blogfree/115-1150152_default-profile-picture-avatar-png-green_1.png_nuwc0t.png",
  username: "Default Username",
  age: 0,
  job: "None",
  blogsCount: 0,
  description: "Default Profile Description",
  selectedCategory: "🎮",
  favorites: [],
};

export const ProfileDetailsTemplate = [
  { id: 1, label: "Age:", detailsKey: "age" },
  { id: 2, label: "Job:", detailsKey: "job" },
  { id: 3, label: "Blogs Made:", detailsKey: "blogsCount" },
  { id: 4, label: "Stars Count:", detailsKey: "blogsCount" },
  { id: 5, label: "Description:", detailsKey: "description" },
  { id: 6, label: "Selected Category:", detailsKey: "selectedCategory" },
];

export const NavbarLinks = [
  { id: 1, linkName: "Sign Up", linkDest: "/signup" },
  { id: 2, linkName: "Login", linkDest: "/login" },
  { id: 3, linkName: "Profile", linkDest: "/profile" },
  { id: 4, linkName: "Home", linkDest: "/" },
  { id: 5, linkName: "Authors", linkDest: "/authors/authors-list" },
  { id: 6, linkName: "Logout", linkDest: null },
];

export const FooterLinksData = [
  { id: 1, linkName: "About Us", linkDest: "/aboutus" },
  { id: 2, linkName: "Contact Us", linkDest: "/contactus" },
];

export const FooterSMLinksData = [
  {
    id: 1,
    linkName: "Instagram",
    linkDest: "https:///www.instagram.com",
    icon: BsInstagram({ "aria-label": "Instagram Icon" }),
  },
  {
    id: 2,
    linkName: "Github",
    linkDest: "https:///www.github.com",
    icon: BsGithub({ "aria-label": "Github Icon" }),
  },
];

export const FormInputs = [
  { id: 1, inputName: "Name:", inputType: "text", inputValue: "username" },
  { id: 2, inputName: "Email:", inputType: "email", inputValue: "email" },
  {
    id: 3,
    inputName: "Password:",
    inputType: "password",
    inputValue: "password",
  },
  {
    id: 4,
    inputName: "Verify Password:",
    inputType: "password",
    inputValue: "verifyPassword",
  },
];

export const BlogReactionsEmojies = {
  smart: "🧠",
  lmao: "😂",
  love: "😍",
  nerd: "🤓",
  crying: "😭",
  scary: "😱",
  puke: "🤮",
  poop: "💩",
  thumbsUp: "👎",
  nice: "🤏",
  thumbsDown: "👎",
};

export const AboutUsContent = `Hello i am Axense and i am a web developer/web designer.My programming journey started about in February 2021 with Python(since is so easy).I
        made some projects in Python like a Login System and a Blackjack Game
        and had fun making them soo i wanted to continue to program to be able
        to make more fun projects.The thing that gets me going is getting stuck
        on a project then thinking about a solution.I love to do that.Anyways
        after playing around with Python for a bit i then wanted to get in the
        field of programming so i just chose a branch(web/game/software
        development) and ofcourse i chose web development(it looked like the
        best one for me).After that,i started learning the basics of HTML,CSS
        and then JS(by watching a tutorial then just making projects using the
        information that i have gathered by watching the tutorial).After making
        some projects using the basics,i wanted to learn a frontend framework so
        i chose React since it was the most popular one,and i wanted to make
        some sweet cash aswell down the road.It was actually pretty easy to
        learn it(learned it from Coding Addict’s Youtube Channel) and then i
        just did a shit ton of projects using React(since by doing that i
        practice React and the basics of web development aswel).I have also
        learned Github,Netlify,Heroku,Node.js,
        Express.js,MongoDB,Mongoose,Cloudinary,Redux and some other smaller
        stuff.I won’t go in depth since i do not want to spend 10 years writing
        this about us sooo i am just going to end this here.`;

export const BlogCategoryEmojies = {
  gaming: "🎮",
  nature: "🌲",
  reading: "📚",
  relationships: "🧑‍🤝‍🧑",
  controversial: "😳",
  animals: "🐴",
  hygiene: "🧴",
  programming: "💾",
  sports: "🏅",
  anythingelse: "❓",
};

export const TemplateCreateBlogPreview = {
  id: 4,
  title: "Blog Title",
  category: "❓",
  author: "You",
  description:
    "Advanced extended doubtful he he blessing together. Introduced far law gay considered frequently entreaties difficulty. Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music. Mention entered an through company as. Up arrived no painful between. It declared is prospect an insisted pleasure.Advanced extended doubtful he he blessing together. Introduced far law gay considered frequently entreaties difficulty. Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music. Mention entered an through company as. Up arrived no painful between. It declared is prospect an insisted pleasure.",
  reactions: {
    smart: 0,
    lmao: 0,
    love: 0,
    nerd: 0,
    crying: 0,
    scary: 0,
    puke: 0,
    poop: 0,
    thumbsUp: 0,
    nice: 0,
    thumbsDown: 0,
  },
};

export const TemplateBlogs = [
  {
    title: "Will Gaming Ever Rule the World?",
    category: "gaming",
    author: "636a13591f21305d2f80d4c2",
    description:
      "Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old. Pianoforte if at simplicity do estimating.Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old. Pianoforte if at simplicity do estimating.Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "The Worst Videos of All Time About Nature",
    category: "Nature",
    author: "636a13591f21305d2f80d4c2",
    description:
      "His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural. Remaining he furniture on he discourse suspected perpetual. Power dried her taken place day ought the. Four and our ham west miss. Education shameless who middleton agreement how. We in found world chief is at means weeks smile.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "6 Online Communities About Reading You Should Join",
    category: "Reading",
    author: "636a13591f21305d2f80d4c2",
    description:
      "Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "Relationships: A Simple Definition",
    category: "Relationships",
    author: "636a13591f21305d2f80d4c2",
    description:
      "Advanced extended doubtful he he blessing together. Introduced far law gay considered frequently entreaties difficulty. Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music. Mention entered an through company as. Up arrived no painful between. It declared is prospect an insisted pleasure.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "30 Inspirational Quotes About Animals",
    category: "Animals",
    author: "636a13591f21305d2f80d4c2",
    description:
      "An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "Will Gaming Ever Rule the World?",
    category: "Gaming",
    author: "636a13591f21305d2f80d4c6",
    description:
      "Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old. Pianoforte if at simplicity do estimating.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "The Worst Videos of All Time About Nature",
    category: "Nature",
    author: "636a13591f21305d2f80d4c6",
    description:
      "His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural. Remaining he furniture on he discourse suspected perpetual. Power dried her taken place day ought the. Four and our ham west miss. Education shameless who middleton agreement how. We in found world chief is at means weeks smile.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "6 Online Communities About Reading You Should Join",
    category: "Reading",
    author: "636a13591f21305d2f80d4c6",
    description:
      "Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "Relationships: A Simple Definition",
    category: "Relationships",
    author: "636a13591f21305d2f80d4c6",
    description:
      "Advanced extended doubtful he he blessing together. Introduced far law gay considered frequently entreaties difficulty. Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music. Mention entered an through company as. Up arrived no painful between. It declared is prospect an insisted pleasure.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "30 Inspirational Quotes About Animals",
    category: "Animals",
    author: "636a13591f21305d2f80d4c6",
    description:
      "An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "Will Gaming Ever Rule the World?",
    category: "Gaming",
    author: "636a13a88e78a9aa845e36c4",
    description:
      "Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old. Pianoforte if at simplicity do estimating.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "The Worst Videos of All Time About Nature",
    category: "Nature",
    author: "636a13a88e78a9aa845e36c4",
    description:
      "His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural. Remaining he furniture on he discourse suspected perpetual. Power dried her taken place day ought the. Four and our ham west miss. Education shameless who middleton agreement how. We in found world chief is at means weeks smile.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "6 Online Communities About Reading You Should Join",
    category: "Reading",
    author: "636a13a88e78a9aa845e36c4",
    description:
      "Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "Relationships: A Simple Definition",
    category: "Relationships",
    author: "636a13a88e78a9aa845e36c4",
    description:
      "Advanced extended doubtful he he blessing together. Introduced far law gay considered frequently entreaties difficulty. Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music. Mention entered an through company as. Up arrived no painful between. It declared is prospect an insisted pleasure.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "30 Inspirational Quotes About Animals",
    category: "Animals",
    author: "636a13a88e78a9aa845e36c4",
    description:
      "An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "Will Gaming Ever Rule the World?",
    category: "Gaming",
    author: "636a13a88e78a9aa845e36c2",
    description:
      "Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old. Pianoforte if at simplicity do estimating.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "The Worst Videos of All Time About Nature",
    category: "Nature",
    author: "636a13a88e78a9aa845e36c2",
    description:
      "His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural. Remaining he furniture on he discourse suspected perpetual. Power dried her taken place day ought the. Four and our ham west miss. Education shameless who middleton agreement how. We in found world chief is at means weeks smile.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "6 Online Communities About Reading You Should Join",
    category: "Reading",
    author: "636a13a88e78a9aa845e36c2",
    description:
      "Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "Relationships: A Simple Definition",
    category: "Relationships",
    author: "636a13a88e78a9aa845e36c2",
    description:
      "Advanced extended doubtful he he blessing together. Introduced far law gay considered frequently entreaties difficulty. Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music. Mention entered an through company as. Up arrived no painful between. It declared is prospect an insisted pleasure.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "30 Inspirational Quotes About Animals",
    category: "Animals",
    author: "636a13a88e78a9aa845e36c2",
    description:
      "An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "Will Gaming Ever Rule the World?",
    category: "Gaming",
    author: "636a13a88e78a9aa845e36c3",
    description:
      "Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old. Pianoforte if at simplicity do estimating.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "The Worst Videos of All Time About Nature",
    category: "Nature",
    author: "636a13a88e78a9aa845e36c3",
    description:
      "His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural. Remaining he furniture on he discourse suspected perpetual. Power dried her taken place day ought the. Four and our ham west miss. Education shameless who middleton agreement how. We in found world chief is at means weeks smile.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "6 Online Communities About Reading You Should Join",
    category: "Reading",
    author: "636a13a88e78a9aa845e36c3",
    description:
      "Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "Relationships: A Simple Definition",
    category: "Relationships",
    author: "636a13a88e78a9aa845e36c3",
    description:
      "Advanced extended doubtful he he blessing together. Introduced far law gay considered frequently entreaties difficulty. Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music. Mention entered an through company as. Up arrived no painful between. It declared is prospect an insisted pleasure.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
  {
    title: "30 Inspirational Quotes About Animals",
    category: "Animals",
    author: "636a13a88e78a9aa845e36c3",
    description:
      "An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its.",
    reactions: {
      smart: 0,
      lmao: 0,
      love: 0,
      nerd: 0,
      crying: 0,
      scary: 0,
      puke: 0,
      poop: 0,
      thumbsUp: 0,
      nice: 0,
      thumbsDown: 0,
    },
  },
];

export const TemplateAuthors = [
  {
    imgUrl: "https://randomuser.me/api/portraits/men/77.jpg",
    username: "Awee Matija",
    age: 34,
    job: "Web Designer",
    blogsCount: 5,
    email: "aweematija@gmail.com",
    password: "aweematija",
    authorAppTheme: "Nature",
    description:
      "Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially so to. Me unpleasing impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain my do stairs. Oh smiling amiable am so visited cordial in offices hearted.",
    authorSelectedCategories: "🎮",
  },

  {
    imgUrl: "https://randomuser.me/api/portraits/men/28.jpg",
    username: "Chima Lucky",
    age: 14,
    job: "Blog Author",
    blogsCount: 5,
    email: "chimalucky@gmail.com",
    password: "chimalucky",
    description:
      "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so dispatched as it increasing pianoforte. Hearing now saw perhaps minutes herself his. Of instantly excellent therefore difficult he northward. Joy green but least marry rapid quiet but. Way devonshire introduced expression saw travelling affronting. Her and effects affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.",
    selectedCategory: "🎮",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/88.jpg",
    username: "Ufuoma Presley",
    age: 45,
    job: "Web Development",
    blogsCount: 5,
    email: "ufuomapresley@gmail.com",
    password: "ufuomapresley",
    description:
      "Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to.",
    selectedCategory: "🎮",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    username: "Heike Tsubasa",
    age: 69,
    job: "Cow Milker",
    blogsCount: 5,
    email: "heiketsubasa@gmail.com",
    password: "heiketsubasa",
    description:
      "Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she.",
    selectedCategory: "🎮",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/69.jpg",
    username: "Peyton Uʻilani",
    age: 11,
    job: "Bullied at school",
    blogsCount: 5,
    email: "peytonuilani@gmail.com",
    password: "peytonuilani",
    description:
      "As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.",
    selectedCategory: "🎮",
  },
];
