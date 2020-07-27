// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];


console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}