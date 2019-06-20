import axios from 'axios';

// Create new instance of axios with custom headers
export const CustomizedAxios = () => {
	const tokenFromBrowser = localStorage.getItem('token');
	// Check if token exist
	const token = tokenFromBrowser ? tokenFromBrowser : false;

	const axiosInstance = axios.create({
		headers: {
			Authorization: token
		}
	});

	return axiosInstance;
};
