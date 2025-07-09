const { validationResult } = require("express-validator");
const { verifyRecaptcha } = require("../utils/recaptcha");
const Contact = require("../models/Contact");
const { sendContactToUser, sendContactToOwner } = require("../services/mailService");

exports.contactFormSubmission = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }

    const { firstName, lastName, email, phone, message, recaptchaToken } = req.body;
    const data = { firstName, lastName, email, phone, message };

    try {
        const recaptchaRes = await verifyRecaptcha(recaptchaToken);
        if (!recaptchaRes.success || recaptchaRes.score < 0.5) {
            return res.status(403).json({ error: 'reCAPTCHA verification failed' });
        }
    } catch (err) {
        return res.status(500).json({ error: 'Failed to verify reCAPTCHA' });
    }

    try {
        const newMessage = new Contact(data);

        const userRes = await sendContactToUser(data);
        if (!userRes.success) { return res.status(400).json({ success: false, message: 'Invalid email address. Message not sent.' }); }

        await newMessage.save();
        res.status(201).json({ success: true, message: 'Message submitted successfully', });
    } catch (err) {
        return res.status(500).json({ error: 'Server error. Please try again later.' });
    } finally {
        sendContactToOwner(data)
            .then(res => { if (!res.success) console.error('Failed to notify owner:', res.error); })
            .catch(err => console.error('Unexpected error in sendContactToOwner:', err.message));
    }
};