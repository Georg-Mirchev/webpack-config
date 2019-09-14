function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

const getData = async () => {
    const res = await fetch('../data/todos.json');
    const data = await res.json();

    await sleep(2000);
    
    return data;
};

const saveTodo = (title) => {
    return new Promise((resolve, reject) => {
        if (title) {
            resolve('save to json');
        } else {
            reject()
        }
    });
};

export { 
    getData,
    saveTodo
}