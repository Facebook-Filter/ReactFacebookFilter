const sqlite= require("sqlite");

const initializeDB = async () => {
    const db = await sqlite.open("./db.sqlite");

    const getReviews= async()=>{
        const review= await db.all('Select * from reviews');
        return review;
    }

    const addReview = async props=>{
        const {username, email, review} = props;
        if(!props || !username || !email || !review){
            throw new Error('you must provide a username, email & review');
        }
        try{
        const addReview= await db.run(`Insert into reviews (username, email, review) values ('${username}', '${email}', '${review}')`);
        return addReview.stmt.lastID;
    }
    catch(err) {
        err.message;
        console.log(err.message);
        throw new Error('this combination doesnt work');
    }};
 
    
    const deleteReview = async(id)=>{
        try{
        const deleteReview= await db.run(`Delete from reviews where id =${id}`);
        return deleteReview;
    }
    catch(err) {
        err.message;
        console.log(err.message);
        throw new Error('this combination doesnt work');
    }};
      

    const getFaq= async()=>{
        const faq= await db.all('Select * from faqs');
        return faq;
    }


    const controller = {
        getReviews,
        addReview,
        deleteReview,
        getFaq

    }
    return controller;

}


module.exports= initializeDB;