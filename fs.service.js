const fs = require('node:fs/promises');
const path = require('node:path');

const usersPath = path.join(process.cwd(), 'users.json');


const read = async () => {
    const json = await fs.readFile(usersPath, {encoding: 'utf-8'});
    return JSON.parse(json);
}

const write = async (users) => {
    await fs.writeFile(usersPath, JSON.stringify(users));
}

module.exports = {
    read,
    write
}