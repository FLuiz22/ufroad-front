import logo from '../../assets/logo.png';
import back from '../../assets/voltar.png';

export default {
    name: 'scriptModule',
    
    data() {
        return {
            data: {
                name: '',
                email: '',
                password: '',
                course: '',
            },

            logo,
            back
        }
    },

    methods: {
        logPage() {
            this.$router.push({name: 'Login'})
        }
    }
}