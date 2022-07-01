var a = 'Hello';

function hello() {
    let b = 'Hello world';
    const c = 'Hello world!';
    debugger;
}

hello();

const user = { name: 'lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

const settings = { 
    userName: 'lydiahallie',
    level: 19,
    health: 90
};

const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);