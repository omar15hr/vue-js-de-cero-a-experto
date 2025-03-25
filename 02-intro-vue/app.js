const { createApp, ref } = Vue;

const quotes = [
  {
    quote: "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "I believe what doesn’t kill you simply makes you, stranger.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote: "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me",
    author: "Henri Ducard, Batman Begins",
  },
  {
    quote: "You either die a hero or live long enough to see yourself become the villain.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "If you’re good at something, never do it for free.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote: "Yes, father. I shall become a bat.",
    author: "Bruce Wayne/Batman, Batman: Year One",
  },
];

const app = createApp({
  //   template: `
  //    <div>
  //      <h1>{{message}}</h1>
  //      <p>Written by {{author}}</p>
  //    </div>
  //  `,
  setup() {
    const message = ref("I'm Batman");
    const author = ref("Bruce Wayne");

    const changeMessage = () => {
      message.value = "I'm Ironman";
      author.value = "Tony Stark";
    };

    return { message, author, changeMessage, quotes };
  },
});

app.mount("#app");
