const { createApp, ref } = Vue;

const app = createApp({
  template: `
   <div>
     <h1>{{message}}</h1>
     <p>Written by {{author}}</p>
   </div>
 `,
  setup() {
    const message = ref("I'm Batman");
    const author = ref("Bruce Wayne");
    setTimeout(() => {
      message.value = "Soy Goku";
      author.value = "Kakaroto";
    }, 1000);
    return { message, author };
  },
});

app.mount("#app");
