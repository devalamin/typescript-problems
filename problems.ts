{
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase()
        }
        else {
            return input.toUpperCase()
        }

    }

    



    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4)

    }




    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const resultArray: T[] = []

        for (const array of arrays) {
            for (const item of array) {
                resultArray.push(item)
            }
        }
        return resultArray
    }






    class Vehicle {
        private _make: string;
        public year: number

        constructor(make: string, year: number) {
            this._make = make,
                this.year = year
        }

        getInfo() {
            return (`This Car Is Built In ${this.year}  By ${this._make}`);
        }
    }


    class Car extends Vehicle {
        private _model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year)
            this._model = model
        }

        getModel() {
            return (`The Model Is ${this._model}`)
        }
    }



    function processValue(value: string | number): number {
        return typeof value === 'string' ? value.length : value * 2

    }




    interface Product {
        name: string;
        price: number
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {

        if (products.length === 0) {
            return null
        }

        const highestValue = products.reduce((max, current) => {
            return max.price > current.price ? max : current
        }, products[0])

        return highestValue

    }

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        if (day === Day.Saturday || day === Day.Sunday) {
            return 'Weekend'
        }
        else {
            return 'WeekDay'
        }

    }






    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error(`Negative number not allowed`))
                } else {
                    resolve(n * n)
                }
            }, 1000);
        })
    }



}