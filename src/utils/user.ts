export const getPagesCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit);
}

export const normalise = (n: number, range: number[]) => {
    // should be in range!
    if(!range.includes(n)){
        throw Error('function normalise should accept "n" that is included in the given "range"!')
    }
    const coefficient = range[0];
    return {n: n - coefficient, range: range.map(i => i - coefficient) }
}

interface ObjWithLogin{
    login: string;
}
export function findByLogin<Data extends ObjWithLogin>(login: string, arr: Data[]):Data|null{
    for(let i = 0; i < arr.length; i++){
        if(arr[i].login === login){
            return arr[i];
        }
    }
    return null;
}