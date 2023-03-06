<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="register-page-wrapper">
      <section class="form-data-wrapper">
        <div class="form-information-wrapper">
          <form class="register-form-wrapper">
            <input
              type="text"
              placeholder="Email address"
              v-model="registerForm.email"
            />
            <input
              type="text"
              placeholder="Username"
              v-model="registerForm.username"
            />
            <input
              type="password"
              placeholder="Password"
              v-model="registerForm.password"
            />
            <button class="register-button" @click.prevent="submitForm()">
              Register
            </button>
          </form>
          <p class="login-router">
            Already have an acount?
            <nuxt-link to="/login">Login</nuxt-link>
          </p>
          <p class="massage" v-if="this.massage">{{ this.massage }}</p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        email: '',
        username: '',
        password: '',
      },
      massage: null,
    }
  },
  methods: {
    submitForm() {
      const { email, username, password } = this.registerForm
      const emailRegex = /\S+@\S+\.\S+/
      if (!email || !emailRegex.test(email)) {
        this.massage = 'Please provide a valid email address'
        return
      }
      if (!username) {
        this.massage = 'Please enter your user name.'
        return
      }
      if (!password) {
        this.massage = 'Please enter your password.'
        return
      }
      const data = {
        email,
        username,
        password,
      }
      this.$axios
        .post('/register', data)
        .then((res) => {
          if (res.status === 200) {
            this.massage = 'successfully registered'
            this.$router.push('/login')
          }
        })
        .catch((e) => {
          console.log(e)
          this.massage = e.response.data.msg
        })
    },
  },
}
</script>

<style lang="scss">
.register-page-wrapper {
  padding: 35px;
  background-color: #e2c7c7;
}
.form-data-wrapper {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.form-information-wrapper {
  background-color: rgba($color: white, $alpha: 0.4);
  width: 280px;
  border-radius: 3px;
  padding: 30px 15px;
}
.register-form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  input {
    border: 1px solid transparent;
    border-radius: 3px;
    outline: none;
    padding: 10px;
    width: 100%;
  }
}
.register-button {
  background-color: #e2c7c7;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 10px;
  width: 50%;
}
.login-router {
  margin-top: 40px;
  a {
    text-decoration: underline;
    margin-left: 5px;
  }
}
.massage {
  margin-top: 35px;
  text-align: center;
}
</style>
