{
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase()
        }
        else {
            return input.toUpperCase()
        }

    }

    // console.log(formatString('hello',true));




    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4)

    }

    // const books = [
    //     { title: "Book A", rating: 4.5 },
    //     { title: "Book B", rating: 3.2 },
    //     { title: "Book C", rating: 5.0 },
    //     { title: "Book C", rating: 2.0 }
    // ];

    // console.log(filterByRating(books));


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const resultArray: T[] = []

        for (const array of arrays) {
            for (const item of array) {
                resultArray.push(item)
            }
        }
        return resultArray
    }



    // console.log(concatenateArrays([1, 2], [3, 4], [5]));


    class Vehicle {
        private make: string;
        public year: number

        constructor(make: string, year: number) {
            this.make = make,
                this.year = year
        }

        getInfo() {
            return (`This Car Is Built In ${this.year}  By ${this.make}`);
        }
    }


    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year)
            this.model = model
        }

        getModel() {
            return (`The Model Is ${this.model}`)
        }
    }



}