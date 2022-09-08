
/*1. Írj egy függvényt, `convertToUppercase()` néven, mely paraméterként kap egy 
tömböt. A függvény visszatérési érték egy Promise.  
Amennyiben a tömb minden eleme string, és sikeresen nagybetűssé 
alakíthatók a Promise resolved lesz és visszaad egy új tömböt, ami az eredeti tömb 
összes elemét nagybetűssé alakítva tartalmazza.  
Ellenkező esetben a Promise rejected lesz, a visszatérési
 érték a következő string: 'Error: Not all items in the array are strings!'
*/





let convertToUppercase =(arr=['']) => {
 return new Promise (resolve, reject) =>{
    if (!list.some (string) typeof string !== 'string') {
        const transformlist = list.map (string => string.toUpperCase )
        resolve (transformlist);
    }else {
        reject error (Error: Not all items in the array are strings);
    };
 };
};


export default convertToUppercase;
