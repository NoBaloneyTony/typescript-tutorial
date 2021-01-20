interface Link {
  description?: string;
  id?: number;
  url: string;
  [index: string]: any;
}

interface TranslatedLink extends Link {
  language: string;
}

interface IPerson {
  name: string;
  city: string;
  age: number;
  // printDetails(): void;
  printDetails(): string;

}

const link1: TranslatedLink = {
  description:
    "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
  id: 1,
  url: "www.valentinog.com/typescript/",
  language: "en"
};

function filterByTerm(input: Link[], searchTerm: string, lookupKey: string = "url"): Link[] {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("inputArr cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(function(arrayElement) {
    return arrayElement[lookupKey].match(regex);
  });
}

const obj1: Link = { url: "string1" };
const obj2: Link = { url: "string2" };
const obj3: Link = { url: "string3" };
const arrOfLinks: Array<Link> = [obj1, obj2, obj3];
// const term: string = "java";
const term: string = "string3";

filterByTerm(arrOfLinks, term);

const paolo = {
  name: "Paolo",
  city: "Siena",
  age: 44
};

const tom: IPerson = {
  name: "Tom",
  city: "Munich",
  age: 33,
  printDetails: function () {
    // console.log(`${this.name} - ${this.city}`);
    return `${this.name} - ${this.city}`
  }
};

const key = "city";

function filterPerson(arr: object[], term: string, key: string) {
  return arr.filter(function (person: any) {
    return person[key].match(term);
  });
}

filterPerson([paolo, tom], "Siena", "city");

console.log(paolo.city);
console.log(paolo["city"]);
console.log(paolo[key]);