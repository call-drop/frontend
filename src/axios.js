
import axios_base from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const config = {
	position: 'top-center',
	autoClose: 4000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: false,
	progress: undefined,
};

const backend = "https://call--drop.herokuapp.com";
export const showAlert = (message, type) => {
	toast.configure();
	if (type === 'error') {
		toast.error(message, config);
	} else if (type === 'warning') {
		toast.warning(message, config);
	} else if (type === 'success') {
		toast.success(message, config);
	} else {
		toast.info(message, config);
	}
};
const axios = axios_base.create({
    baseURL: backend,
    timeout: 15000,
})

axios.defaults.headers.common['username'] = localStorage.getItem('username');
axios.defaults.headers.common['password'] = localStorage.getItem('password');
axios.defaults.headers.common['isEmp'] = localStorage.getItem('isEmp');

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
        localStorage.setItem("err", JSON.stringify(error))
        if (error.response?.status === 500)
            showAlert(
                    "OOPS",
                    "error"
                )
    return Promise.reject(error);
});

export default axios
