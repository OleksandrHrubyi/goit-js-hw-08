import shortid from 'shortid';


export default function myshortid (name) { 
    const user = {
        id: shortid.generate(),
        name 
    }
    console.log(user)
}