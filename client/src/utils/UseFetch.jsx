export const UseFetch = async (url, option) =>{
    const result = await fetch(url);
    const json = await result.json();
    return json;
}