import axios from '../../utils/api.ts';

const actions = {
    async getAllCourses({ commit }) {
        try {
            const result = await axios({
                method: "GET",
                url: "course"
            });

            return result.data;
        } catch(err) {
            console.log(err.response.data.error);

            return err.response;
        }
    }
};

export default { actions };