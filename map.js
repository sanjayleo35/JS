// Array of student objects
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 78 }
];

// Creating a new array of names
const studentNames = students.map(student => student.name);

// Creating a new array with scores increased by 10%
const updatedScores = students.map(student => ({
    name: student.name,
    score: student.score * 1.1 // Increase the score by 10%
}));

// Display the original students array
console.log('Original Students:', students);

// Display the array of names
console.log('Student Names:', studentNames);

// Display the updated scores
console.log('Updated Scores:', updatedScores);
