import logo from '../../assets/logo.png';
import back from '../../assets/voltar.png';

export default {
    name: 'scriptModule',
    
    data() {
        return {
            data: {
                email: '',
                password: '',
                keeploged: Boolean,
            },

            logo,
            back
        }
    },

    methods: {
        regPage() {
            this.$router.push({name: 'Register'})
        }
    }
}