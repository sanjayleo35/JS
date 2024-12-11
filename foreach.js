// Array of student objects
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 78 }
];

// Array to hold names in uppercase
const uppercaseNames = [];

// Processing each student
students.forEach((student, index) => {
    // Log the student's name and index
    console.log(`Student ${index + 1}: ${student.name}`);

    // Add the uppercase name to the new array
    uppercaseNames.push(student.name.toUpperCase());

    // Increase the score by 10%
    student.score *= 1.1; // This modifies the original array
});

// Display the modified students array
console.log('Modified Students:', students);

// Display the uppercase names
console.log('Uppercase Names:', uppercaseNames);
