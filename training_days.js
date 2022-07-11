const getRandEvent = () => {
const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

const getTrainingDays = trainingEvent => {
    let days
    if (trainingEvent === 'Marathon') {
        days = 50;
    } else if (trainingEvent === 'Triathlon') {
        days = 100;
    } else if (trainingEvent === 'Pentathlon') {
        days = 200;
    }

    return days;
};


const logEvent = (athleteName, trainingEvent) => {
    console.log(`${athleteName}'s event is: ${trainingEvent}`);
};

const logTime = (athleteName, days) => {
    console.log(`${athleteName}'s time to train is: ${days} days`);
};

const trainingEvent = getRandEvent();
const days = getTrainingDays(trainingEvent);
const athleteName = 'Owen';
const trainingEvent2 = getRandEvent();
const days2 = getTrainingDays(trainingEvent2);
const athleteName2 = 'Will'; 

console.log('------------------------------------')
logEvent(athleteName, trainingEvent);
logTime(athleteName, days);
console.log('------------------------------------')
logEvent(athleteName2, trainingEvent2);
logTime(athleteName2, days2);
console.log('------------------------------------')