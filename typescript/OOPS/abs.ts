abstract class Mammal {
    public eat(food : string) : void {
        console.log("Mammal is eating food");
    }
    abstract talk(lang: string): void;
}

interface Animal{
    //no normal method allowed inside it.
    firstname: string;
    eat(food: string): void;
    talk(lang: string): void;
}