const { topics, subscribers } = require('../models/topicModel');

exports.subscribe = (req, res) => {
    const { topicId, subscriberId } = req.body;

    if (!topics[topicId]) {
        topics[topicId] = new Set();
    }
    topics[topicId].add(subscriberId);

    if (!subscribers[subscriberId]) {
        subscribers[subscriberId] = new Set();
    }
    subscribers[subscriberId].add(topicId);

    res.status(200).json({ message: `Subscriber ${subscriberId} subscribed to topic ${topicId}` });
};

exports.notify = (req, res) => {
    const { topicId } = req.body;

    if (topics[topicId]) {
        const notifiedSubscribers = Array.from(topics[topicId]);
        res.status(200).json({ message: 'Notified subscribers', subscribers: notifiedSubscribers });
    } else {
        res.status(404).json({ message: 'Topic not found' });
    }
};

exports.unsubscribe = (req, res) => {
    const { topicId, subscriberId } = req.body;

    if (topics[topicId] && topics[topicId].has(subscriberId)) {
        topics[topicId].delete(subscriberId);
        subscribers[subscriberId].delete(topicId);

        res.status(200).json({ message: `Subscriber ${subscriberId} unsubscribed from topic ${topicId}` });
    } else {
        res.status(404).json({ message: 'Subscription not found' });
    }
};
