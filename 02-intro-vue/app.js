const { createApp, ref } = Vue;

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
    }

    return { message, author, changeMessage };
  },
});

app.mount("#app");
