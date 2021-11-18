import { Vue, Component } from 'vue-property-decorator';
import AuthForm from '../layouts/Auth/Form.vue'
import AuthInput from '../layouts/Auth/Input.vue'

@Component({
  components: {
    AuthForm,
    AuthInput,
  },
})
export class AuthMixin extends Vue {
  first_name: string = ''
  last_name: string = ''
  email: string = ''
  password: string = ''
  code: string = ''
  a: number = 0

  async login() {
    if (this.email.length === 0) return
    if (this.password.length === 0) return

    const { data } = await this.$axios.post('http://localhost:3000/api/v2/identity/session',
    { email: this.email, password: this.password });
    
    this.$router.push({ path: '/' })
  }
  async register() {
    if (this.first_name.length === 0) return
    if (this.last_name.length === 0) return
    if (this.first_name.length === 0) return
    if (this.email.length === 0) return
    if (this.password.length === 0) return
    try {
      const { data } = await this.$axios.post('http://localhost:3000/api/v2/identity/users',
      { 
        first_name: this.first_name, 
        last_name: this.last_name, 
        email: this.email, 
        password: this.password 
      });
      this.$router.push({ path: '/' })
    } catch (error) {
    }
    
  }
  async confirmEmail() {
    if (this.code.length === 0) return
    if (this.email.length === 0) return
    
    const { data } = await this.$axios.post('http://localhost:3000/api/v2/identity/users/confirm_code',
    { 
      email: this.email, 
      code: this.code, 
    });
    this.$router.push({ path: '/' })
  }
  
}
