let quotes = [
    'Talk is cheap, show me the code - Linus Torvalds', 
    'Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelman',
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live - John Woods',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler',
    'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting. - Steve Jobs',
    'The most important property of a program is whether it accomplishes the intention of its user. - C.A.R Hoare',
    'Simplicity is prerequisite for reliability. — Edsger Dijkstra',
    'Experience is the name everyone gives to their mistakes. – Oscar Wilde',
    'Code is like humor. When you have to explain it, it’s bad. – Cory House',
    'Fix the cause, not the symptom. – Steve Maguire'
];



const ranMsg = () => {
    let n = Math.floor((Math.random() * 10) + 1);
    let m = quotes(n);
    return `Your quote today is: ${m}.`
};

ranMsg();