export const EmailRegExp = (str: string) => {
    return str.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[a-z0-9-]+(\.[a-z0-9-]+)*$/i) !== null
}

export const PasswordExp = (str: string) => {
    return str.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
export const generateCode = (length: number) => {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}