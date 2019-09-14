function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

const getData = async () => {
    const res = await fetch('../data/people.json');
    const data = await res.json();

    await sleep(2000);
    
    return data;
}

export { 
    getData
}