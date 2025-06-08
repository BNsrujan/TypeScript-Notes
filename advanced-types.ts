// 1. Intersection Types
interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

type PersonWithContact = HasName & HasAge & {
    email: string;
};

const person: PersonWithContact = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// 2. Literal Types
type Direction = "North" | "South" | "East" | "West";
type Status = "success" | "error" | "loading";

const currentDirection: Direction = "North";
const currentStatus: Status = "loading";

// 3. Mapped Types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Optional<T> = {
    [P in keyof T]?: T[P];
};

interface User {
    name: string;
    age: number;
}

const readonlyUser: Readonly<User> = {
    name: "John",
    age: 30
};
// readonlyUser.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property

// 4. Conditional Types
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">; // true
type B = IsString<123>; // false

// 5. Type Predicates
interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// 6. Index Signatures
interface StringMap {
    [key: string]: string;
}

const colors: StringMap = {
    primary: "blue",
    secondary: "red"
};

// 7. Class Features
abstract class Animal {
    protected name: string;
    private age: number;
    static count: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        Animal.count++;
    }

    abstract makeSound(): void;
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log("Woof!");
    }
}

// 8. Namespaces
namespace Geometry {
    export interface Point {
        x: number;
        y: number;
    }

    export class Circle {
        constructor(public radius: number) {}
        
        area(): number {
            return Math.PI * this.radius ** 2;
        }
    }
}

// 9. Decorators
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with:`, args);
        return originalMethod.apply(this, args);
    };
    
    return descriptor;
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

// 10. Type Declarations
declare module 'external-library' {
    export interface Config {
        apiKey: string;
        timeout: number;
    }
    
    export function initialize(config: Config): void;
    export function getData(): Promise<any>;
}

// 11. Utility Types (Additional Examples)
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 12. Template Literal Types
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`; 