<template>
  <Constraint>
    <h2 style="text-align: center;">Who am I</h2>

    <div id="two-divide">
      <img id="headshot" src="../assets/luke_4.png" alt="" />
      <div id="intro">
        Hi, and welcome to my portfolio site!
        Im a software developer, I enjoy coding because it pushes
        me to keep growing my skillset and expand my knowledge.<br /><br />

        On this site you can read all about me and my activities. On here, i
        keep track of a list of my projects, and post on my blog.<br /><br />

        Want to know more about me? Contact me via luc.dewit@hotmail.nl
      </div>
    </div>

    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />

    <h2 style="text-align: center;">Contact me</h2>

    <div id="contact-form">
      <b>Your name:</b><br />
      <input v-model="form.name" placeholder="Foo Baz" id="contact-name" type="text" /><br /><br />
      <b>Your email or phone-number:</b><br />
      <input v-model="form.contactInfo" placeholder="Foo@Baz.com" id="contact-name" type="text" /><br /><br />
      <b>Your message to me:</b>
      <textarea v-model="form.message" placeholder="Foo Baz" id="contact-message" autocomplete="false"></textarea>
      <button id="contact-send" @click="submitContactForm">Send</button>
    </div>
  </Constraint>
</template>

<script>
// Import components
import Constraint from "../components/Constraint.vue"

// Import libraries
import axios from "axios";

export default {
  components: {
    Constraint
  },

  data: () => ({
    form: {
      name: "",
      contactInfo: "",
      message: ""
    }
  }),

  methods: {
    async submitContactForm() {
      if (this.form.name == "") {
        alert("You must fill in a name");
        return;
      } else if (this.form.message == "") {
        alert("You must fill in a message");
        return;
      }

      const webhookUrl = "https://discord.com/api/webhooks/947211293968961566/4VhJIgbIGASt7veWWdscfV0LGCE59xv-Zw_xadKLUhwjPae3rLUSvShp4YLe800HwnmX";
      
      await axios.post(webhookUrl, {
        content: this.form.message,
        username: `${this.form.name} (${this.form.contactInfo})`
      });

      alert("Message send succesfully");
      this.form = {
        name: "",
        contactInfo: "",
        message: ""
      }
    }
  }
}
</script>

<style scoped>
#headshot {
  border-radius: 100%;
  height: 150px;
  width: 150px;
  object-fit: cover;
}

#two-divide {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

@media only screen and (max-width: 768px) {
  #two-divide {
    display: block;
    text-align: center;
  }

  #intro {
    margin-top: 20px;
    text-align: left;
  }
}

#intro {
  color: #ccc;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
}

#contact-message {
  width: calc(100% - 10px);
  padding: 10px;
  resize: none;
  height: 200px;
  background: rgb(42, 47, 56);
  border: none;
  color: white;
  margin-bottom: 10px;
}

#contact-name {
  width: calc(100% - 10px);
  margin: 8px 0;
  padding: 10px;
  background: rgb(42, 47, 56);
  border: none;
  color: white;
}

#contact-send {
  margin: 10px 0px;
  padding: 10px 20px;
  font-weight: bold;
  background: rgb(114, 163, 172);
  border: none;
}

#contact-send:hover {
  cursor: pointer;
  background: rgb(131, 176, 184);
}
</style>