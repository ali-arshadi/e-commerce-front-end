<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="login-page-wrapper">
      <section class="form-data-wrapper">
        <div class="form-information-wrapper">
          <form class="login-form-wrapper">
            <input
              type="text"
              placeholder="Username"
              v-model="loginInformation.username"
            />
            <input
              type="password"
              placeholder="Password"
              v-model="loginInformation.password"
            />
            <div class="login-as-admin">
              <input
                type="checkbox"
                id="login-as-admin"
                v-model="loginInformation.logInAsAdmin"
              />
              <label for="login-as-admin">Login as admin</label>
            </div>
            <button class="login-button" @click.prevent="submitLogin()">
              Login
            </button>
          </form>
          <p class="register-router">
            Don't have and account?<nuxt-link to="/register"
              >Register</nuxt-link
            >
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
      loginInformation: {
        username: '',
        password: '',
        logInAsAdmin: false,
      },
      massage: null,
    }
  },
  mounted() {
    if (
      localStorage.getItem('authToken') &&
      localStorage.getItem('role') === 'owner'
    ) {
      this.$router.push('/owner')
    }
    if (
      localStorage.getItem('authToken') &&
      localStorage.getItem('role') === 'admin'
    ) {
      this.$router.push('/admin')
    }
    if (
      localStorage.getItem('authToken') &&
      localStorage.getItem('role') === 'user'
    ) {
      this.$router.push('/user')
    }
  },
  methods: {
    async submitLogin() {
      const { username, password, logInAsAdmin } = this.loginInformation
      if (!username) {
        this.massage = 'Please enter your username'
        return
      }
      if (!password) {
        this.massage = 'Please enter your password'
        return
      }
      const data = {
        username,
        password,
        logInAsAdmin,
      }
      try {
        const res = await this.$axios.post('/login', data)
        if (res.status === 200 && res.data.role === 'user') {
          localStorage.setItem('authToken', res.data.token)
          localStorage.setItem('role', res.data.role)
          this.$router.push('/user')
          console.log(res.data)
          this.massage = res.data.msg
        }
        if (res.status === 200 && res.data.role === 'admin') {
          localStorage.setItem('authToken', res.data.token)
          localStorage.setItem('role', res.data.role)
          this.$router.push('/admin')
          console.log(res.data)
          this.massage = res.data.msg
        }
        if (res.status === 200 && res.data.role === 'owner') {
          localStorage.setItem('authToken', res.data.token)
          localStorage.setItem('role', res.data.role)
          this.$router.push('/owner')
          console.log(res.data)
          this.massage = res.data.msg
        }
      } catch (error) {
        console.log(error)
        this.massage = error.response.data.msg
      }
    },
  },
}
</script>

<style lang="scss">
.login-page-wrapper {
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
.login-form-wrapper {
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
.login-as-admin {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  input {
    width: unset;
    margin-right: 10px;
  }
}
.login-button {
  background-color: #e2c7c7;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 10px;
  width: 50%;
}
.register-router {
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
