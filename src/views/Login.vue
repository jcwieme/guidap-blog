<template>
  <div class="login">
    <div class="logo login__logo">
      <img src="@/assets/logo.png" alt="#" />
    </div>
    <div class="login__container">
      <h2>Login</h2>
      <Input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        propsClass="input__login input__login--username"
      />
      <Input
        type="password"
        name="paswword"
        id="password"
        placeholder="Password"
        propsClass="input__login input__login--password"
      />
      <Button text="Let's go" propsClass="button__login" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/form/Button'
import Input from '@/components/form/Input'

export default {
  name: 'Login',
  components: {
    Button,
    Input,
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
}
</style>
