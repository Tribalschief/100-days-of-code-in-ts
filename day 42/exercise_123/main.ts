let obj = {
    value: 'Traditional value',
    identity: function() {
        return `this is ${this.value}.`;
    },
    arr: () => { 
        console.log('this is', this.value);
    }
}
console.log(obj.identity());
// identity is traditonal where arr is not ,the issue "Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature." in TypeScript is occurring because the value property is not explicitly typed, so TypeScript is inferring it as type any