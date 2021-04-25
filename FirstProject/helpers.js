const connectToDB = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('OK');
        }, 2000)
    });
}
module.exports = connectToDB;