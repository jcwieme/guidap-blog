<template>
  <div class="login">
    <div class="login__logo">
      <ImageCpt :src="logoPath" alt="#" />
    </div>
    <div class="login__container">
      <Title text="Login" type="h2" />
      <Input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        propsClass="input__login input__login--username"
      />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        propsClass="input__login input__login--password"
      />
      <Button text="Let's go" propsClass="button__login" :action="login" />
      <div class="login__error" v-show="error">
        Bad username or password!
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import Title from "@/components/basics/Title";
import ImageCpt from "@/components/basics/Image";

export default {
  name: "Login",
  components: {
    Button,
    Input,
    Title,
    ImageCpt,
  },
  data() {
    return {
      logoPath: require("@/assets/logo.png"),
    };
  },
  computed: {
    error: function() {
      return this.$store.state.err;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login");
    },
  },
};
</script>

<style lang="scss">
.login {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__logo {
    height: 100%;
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__container {
    height: 100%;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fbbe03;

    h2 {
      font-size: 3rem;
      margin-bottom: 50px;
      padding-bottom: 5px;
      border-bottom: 5px solid #2c3e50;
    }
  }

  &__error {
    margin: 20px 0px 40px;
    background-color: #fd4c43;
    width: 80%;
    max-width: 350px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);

    border-radius: 35px;
  }
}
</style>
