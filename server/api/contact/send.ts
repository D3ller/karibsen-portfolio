const runTime = useRuntimeConfig();
import axios from 'axios';

export default eventHandler(async (event) => {

    const {name, email, message, token}: {
        name: string,
        email: string,
        message: string,
        token: string
    } = await readBody(event);
    if (!name || !email || !message || !token) {
        throw createError({status: 400, message: 'Missing fields'});
    }

    const tk = await verifyTurnstileToken(token);
    if (!tk.success) {
        throw createError({status: 400, message: 'Invalid token'});
    }

    axios.post('https://discord.com/api/webhooks/1229152507503182004/iwPt1iI5h0Pf35OOD0IoS5nmP9_8rzhSaeyTHctq25fLXo4kzMRTISQZ-E_FOYgfFNa1', {
        content: `@everyone\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`
    })
    return {success: true};


})