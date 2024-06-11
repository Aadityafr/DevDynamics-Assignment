const axios = require('axios');

const baseUrl = 'https://devdynamics-assignment.onrender.com';

async function main() {
    try {
        await axios.post(`${baseUrl}/api/topics/subscribe`, { topicId: 'topic1', subscriberId: 'subscriber1' });
        await axios.post(`${baseUrl}/api/topics/subscribe`, { topicId: 'topic1', subscriberId: 'subscriber2' });

        const notifyResponse = await axios.post(`${baseUrl}/api/topics/notify`, { topicId: 'topic1' });
        console.log('Notify Response:', notifyResponse.data);

        await axios.post(`${baseUrl}/api/topics/unsubscribe`, { topicId: 'topic1', subscriberId: 'subscriber1' });

        const notifyResponseAfterUnsubscribe = await axios.post(`${baseUrl}/api/topics/notify`, { topicId: 'topic1' });
        console.log('Notify Response after Unsubscribe:', notifyResponseAfterUnsubscribe.data);
    } catch (error) {
        console.error(error.response.data);
    }
}

main();
