const { createApp, ref } = Vue;

const app = createApp({
 template: `
   <div>
     <h1>Hola Mundo en Vue desde app.js</h1>
   </div>
 `
});

app.mount('#app');