import Api from "../api";

    const UserService = {
      register: (params) => Api.post("/user", params),
      login: async (params) =>{
        const response = await Api.post("/login",params);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token)
      }
    }

    export default UserService;