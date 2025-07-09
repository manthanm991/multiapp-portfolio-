import { API_BASE_URL } from "../../Auth";
import { CONTACT_ENDPOINT } from "../utils/constants";

export const contactForm = async (data, method='POST') => {
    try {
        const response = await fetch(`${API_BASE_URL}${CONTACT_ENDPOINT}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        if (!response.ok) { throw new Error(responseData.error || responseData.message || `Request failed with status ${response.status}`); }

        return responseData;
    } catch (error) {
        throw error;
    }
}