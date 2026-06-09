function DeepClone(value, seen = new WeakMap()) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (seen.has(value)) {
        return seen.get(value);
    }

    if (value instanceof Date) {
        return new Date(value.getTime());
    }

    if (Array.isArray(value)) {
        const arrClone = [];
        seen.set(value, arrClone);

        value.forEach((item, index) => {
            arrClone[index] = DeepClone(item, seen);
        });

        return arrClone;
    }

    if (value instanceof Map) {
        const mapClone = new Map();
        seen.set(value, mapClone);

        value.forEach((val, key) => {
            mapClone.set(
                DeepClone(key, seen),
                DeepClone(val, seen)
            );
        });

        return mapClone;
    }

    if (value instanceof Set) {
        const setClone = new Set();
        seen.set(value, setClone);

        value.forEach(item => {
            setClone.add(DeepClone(item, seen));
        });

        return setClone;
    }

    const objClone = {};
    seen.set(value, objClone);

    Object.keys(value).forEach(key => {
        objClone[key] = DeepClone(value[key], seen);
    });

    return objClone;
}

const obj = {
    a: 1,
    b: {
        c: new Date(),
        d: new Set([1, 2])
    },
    circular: null
};

obj.circular = obj;

const clone = DeepClone(obj);

console.log(clone);
console.log(clone !== obj);
console.log(clone.b !== obj.b);
console.log(clone.b.c instanceof Date);
console.log(clone.b.d instanceof Set);
console.log(clone.circular === clone);