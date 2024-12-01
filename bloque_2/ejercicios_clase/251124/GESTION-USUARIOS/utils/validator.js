

const nameValidator =(name, res)=> {
    if( !name || typeof name !== 'string') {
        return false
    }
    return true
}

module.exports = {nameValidator}