function MyClassDecorator(
    target: Function // The class the decorator is declared on
) {
    console.log("MyClassDecorator called on: ", target);
}

function MyClassDecoratorParams(param1?: number, param2?: string) {
    return function(
        target: Function // The class the decorator is declared on
    ) {
        console.log("MyClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

@MyClassDecoratorParams(1, "a")
@MyClassDecoratorParams()
@MyClassDecorator
class MyClassDecoratorExercise{
    public firstName: string
    public lastName: string

    constructor(fname : string, lname : string) {
        this.firstName = fname
        this.lastName = lname
    }
}

var me = new MyClassDecoratorExercise("Sravan", "Sukhavasi")
console.log(`Name: ${me.firstName} ${me.lastName}`);
