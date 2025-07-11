import ky from "ky";

export const apiClient = ky.create({
	prefixUrl: "https://api.escuelajs.co/api/v1",
	timeout: 10000,
	retry: {
		limit: 2,
		methods: ["get"],
	},
});
