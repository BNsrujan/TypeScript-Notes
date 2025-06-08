// TypeScript Basic Types
let age: number = 20;
let year = 20; // TypeScript infers this as number

// String
let userName: string = "John";
let greeting = `Hello ${userName}`; // Template literal

// Boolean
let isActive: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana"];

// Tuple
let tuple: [string, number] = ["age", 25];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Red;

// Object
interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
}

let person: Person = {
    name: "John",
    age: 30
};

// Function
function add(x: number, y: number): number {
    return x + y;
}

// Arrow Function
const multiply = (x: number, y: number): number => x * y;

// Array Functions
const numbers2: number[] = [1, 2, 3, 4, 5];
const doubled = numbers2.map(num => num * 2);
const evenNumbers = numbers2.filter(num => num % 2 === 0);
const sum = numbers2.reduce((acc, curr) => acc + curr, 0);

// Destructuring
const [first, second, ...rest] = numbers2;
const { name: personName, age: personAge } = person;

// Type Assertion
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Union Types
let id: string | number = "abc123";
id = 123;

// Type Aliases
type Point = {
    x: number;
    y: number;
};

let point: Point = { x: 10, y: 20 };

// Generics
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirst<number>([1, 2, 3]);
const firstString = getFirst<string>(["a", "b", "c"]);

// Readonly Properties
interface Config {
    readonly apiKey: string;
    readonly endpoint: string;
}

const config: Config = {
    apiKey: "12345",
    endpoint: "https://api.example.com"
};
// config.apiKey = "new-key"; // Error: Cannot assign to 'apiKey' because it is a read-only property

// Type Guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function processValue(value: unknown) {
    if (isString(value)) {
        // TypeScript knows value is string here
        console.log(value.toUpperCase());
    }
}

// Utility Types
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Partial makes all properties optional
type PartialTodo = Partial<Todo>;

// Pick selects specific properties
type TodoTitle = Pick<Todo, "title">;

// Omit removes specific properties
type TodoWithoutDescription = Omit<Todo, "description">;

// Record creates a type with specified keys and values
type CatInfo = {
    age: number;
    breed: string;
}
type CatName = "miffy" | "boris";
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" }
};