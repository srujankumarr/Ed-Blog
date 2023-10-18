const feedbackData = [];
const roles = [
    "Software Engineer", "Data Analyst", "Cloud Engineer",
    "Product Manager", "Frontend Developer", "Backend Developer",
    "Data Scientist", "AI/ML Developer"
];
const companies = ["Google", "Amazon", "Microsoft", "Twitter", "Meta", "Apple", "Accenture", "Edwisely"];
const indianNames = [
    "Aarav Patel", "Anika Singh", "Aarush Kumar", "Diya Gupta", "Advik Sharma", "Eesha Verma",
    "Ishaan Yadav", "Kavya Kapoor", "Nandini Reddy", "Rudra Saxena", "Vanya Srivastava", "Virat Gupta",
    "Zara Khanna", "Arjun Bhat", "Vedansh Mehta", "Reva Agarwal", "Saisha Sharma", "Advait Choudhury",
    "Sara Joshi", "Aanya Bajaj", "Reyansh Seth", "Kashvi Jain", "Ruhan Srivastava", "Ahana Malhotra",
    "Vihaan Gupta", "Aahana Verma", "Rian Yadav", "Rishaan Kapoor", "Anika Singh", "Avyaan Shah",
    "Ridhi Varma", "Aanya Reddy", "Yuvaan Singh", "Ananya Malik", "Ariyaan Kapoor", "Ariya Agarwal"
];

const rounds = ["Coding Challenge", "Behavioral Interview", "Technical Interview", "HR Interview"]; // 4 rounds
const packages = [
    "₹10,00,000 per year",
    "₹8,00,000 per year",
    "₹12,00,000 per year",
    "₹9,00,000 per year",
    "₹14,00,000 per year"
]; // Add more package options

for (let id = 1; id <= 500; id++) {
    const randomRole = roles[Math.floor(Math.random() * roles.length)];
    const randomCompany = companies[Math.floor(Math.random() * companies.length)];
    const randomName = indianNames[Math.floor(Math.random() * indianNames.length)];
    const nameInLowercase = randomName.replace(/ /g, '').toLowerCase();
    const email = `${nameInLowercase}@gmail.com`;
    const cgpa = (Math.random() * 2 + 7).toFixed(1);
    const branch = id % 2 === 0 ? "Computer Science" : "Statistics";
    const pack = packages[Math.floor(Math.random() * packages.length)];
    const verdict = id % 5 === 0 ? "Selected" : "Rejected";

    const feedback = {
        id: id,
        name: randomName,
        email,
        role: randomRole,
        company: randomCompany,
        criteria: {
            cgpa: parseFloat(cgpa),
            backlogs: 0,
            branch
        },
        roundsFeedback: rounds.map(round => ({
            round,
            questions: [
                "Question 1 for " + round,
                "Question 2 for " + round
            ]
        })),
        skills: randomRole === "Software Engineer"
            ? ["JavaScript", "React", "Node.js", "Data Structures and Algorithms"]
            : (randomRole === "Data Analyst"
                ? ["Statistical Analysis", "Data Visualization", "SQL", "Excel"]
                : (randomRole === "Frontend Developer"
                    ? ["HTML", "CSS", "JavaScript", "React"]
                    : (randomRole === "Backend Developer"
                        ? ["Node.js", "Python", "SQL", "API Development"]
                        : (randomRole === "Data Scientist"
                            ? ["Machine Learning", "Python", "Data Mining", "Data Visualization"]
                            : (randomRole === "AI/ML Developer"
                                ? ["AI/ML Algorithms", "Python", "Deep Learning", "Data Processing"]
                                : (randomRole === "Cloud Engineer"
                                    ? ["DevOps", "Data Structures", "Networking", "Linux"]
                                    : (randomRole === "Product Manager"
                                        ? ["Data analytics and research", "Communication", "Strategic thinking", "Roadmapping"]
                                        : ['null']
                                    )
                                )
                            )
                        )
                    )
                )),
        package: pack, // Add the package field
        verdict,
    };

    feedbackData.push(feedback);
}

const myFeedback = [];

const generateRandomRole = () => roles[Math.floor(Math.random() * roles.length)];
const generateRandomCompany = () => companies[Math.floor(Math.random() * companies.length)];
const generateRandomPackage = () => packages[Math.floor(Math.random() * packages.length)];

for (let id = 501; id <= 507; id++) {
    const randomRole = generateRandomRole();
    const randomCompany = generateRandomCompany();
    const email = `srujankumar1409@gmail.com`;
    const cgpa = (Math.random() * 2 + 7).toFixed(1);
    const branch = id % 2 === 0 ? "Computer Science" : "Statistics";
    const pack = generateRandomPackage();
    const verdict = id % 5 === 0 ? "Selected" : "Rejected";
    const feedback = {
        id: id,
        name: 'Srujan Kumar',
        email,
        role: randomRole,
        company: randomCompany,
        criteria: {
            cgpa: parseFloat(cgpa),
            backlogs: 0,
            branch
        },
        roundsFeedback: rounds.map(round => ({
            round,
            questions: [
                "Question 1 for " + round,
                "Question 2 for " + round
            ]
        })),
        skills: randomRole === "Software Engineer"
            ? ["JavaScript", "React", "Node.js", "Data Structures and Algorithms"]
            : (randomRole === "Data Analyst"
                ? ["Statistical Analysis", "Data Visualization", "SQL", "Excel"]
                : (randomRole === "Frontend Developer"
                    ? ["HTML", "CSS", "JavaScript", "React"]
                    : (randomRole === "Backend Developer"
                        ? ["Node.js", "Python", "SQL", "API Development"]
                        : (randomRole === "Data Scientist"
                            ? ["Machine Learning", "Python", "Data Mining", "Data Visualization"]
                            : (randomRole === "AI/ML Developer"
                                ? ["AI/ML Algorithms", "Python", "Deep Learning", "Data Processing"]
                                : (randomRole === "Cloud Engineer"
                                    ? ["DevOps", "Data Structures", "Networking", "Linux"]
                                    : (randomRole === "Product Manager"
                                        ? ["Data analytics and research", "Communication", "Strategic thinking", "Roadmapping"]
                                        : ['null']
                                    )
                                )
                            )
                        )
                    )
                )
            ),
        package: pack,
        verdict,
    };

    feedbackData.push(feedback);
}
export { feedbackData, roles, companies };


