module PATTERN {

    export class AbstractCreator {

        constructor(private name: string) {}

        create(): WindInstrumentProduct {
            var product: WindInstrumentProduct = this.createInstrument();
            this.mark(product);

            return product;
        }

        private mark(product: WindInstrumentProduct) {
            product.setName(this.name);
        }

        createInstrument(): WindInstrumentProduct {
            return new WindInstrumentProduct();
        }

    }

    export class SaxphoneCreator extends AbstractCreator {

        createInstrument(): WindInstrumentProduct {
            return new Saxphone();
        }

    }

    export class TrumpetCreator extends AbstractCreator {

        createInstrument(): WindInstrumentProduct {
            return new Trumpet();
        }

    }

    export class WindInstrumentProduct {

        private plate: string;

        setName(name: string) {
            this.plate = name;
        }

        printPlate(): string {
            return this.plate;
        }

    }

    class Saxphone extends WindInstrumentProduct {

        play(): string {
            return 'paaaahhh';
        }

    }

    class Trumpet extends WindInstrumentProduct {

        play(): string {
            return 'poooohhh';
        }

    }

}
