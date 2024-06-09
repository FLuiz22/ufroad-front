import logo from '../../assets/logo.png';
import back from '../../assets/voltar.png';
import { mapActions } from 'vuex';

export default {
    name: 'scriptModule',

    async mounted() {
        const a = await this.getCourses();

        console.log(a)
    },

    data() {
        return {
            logo,
            back
        }
    },

    methods: {
        ...mapActions({
            getAllCourses: 'getAllCourses'
        }),

        async getCourses() {
            const res = await this.getAllCourses();
            return res;
        }
    }
}