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
    </div>

    <ErrorMessage
      text="Bad username or password!"
      propsClass="login__error"
      v-show="error"
    />
  </div>
</template>

<script>
import Button from '@/components/form/Button'
import Input from '@/components/form/Input'
import Title from '@/components/basics/Title'
import ImageCpt from '@/components/basics/Image'
import ErrorMessage from '@/components/basics/ErrorMessage'

export default {
  name: 'Login',
  components: {
    Button,
    Input,
    Title,
    ImageCpt,
    ErrorMessage,
  },
  data() {
    return {
      logoPath: require('@/assets/logo.png'),
    }
  },
  computed: {
    error: function() {
      return this.$store.state.err
    },
  },
  methods: {
    login() {
      this.$store.dispatch('login')
    },
  },
}
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

    img {
      width: 80%;
      height: auto;
    }
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

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    &__logo {
      width: 100%;
      height: 40%;
    }

    &__container {
      width: 100%;
      height: 60%;
      padding: 20px 0;

      h2 {
        margin-bottom: 30px;
      }
    }

    &__error {
      margin: 0;
    }
  }
}
</style>
