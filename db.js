const sqlite= require("sqlite");

const initializeDB = async () => {
    const db = await sqlite.open("./db.sqlite");

    const getUsers= async()=>{
        const rows= await db.all('Select * from users');
        return rows;
    }
    
    const addUser = async props=>{
        const {username, password} = props;
        if(!props || !username || !password){
            throw new Error('you must provide a username and password');
        }
        try{
        const addUser= await db.run(`Insert into users (username, password) values ('${username}', '${password}')`);
        return addUser.stmt.lastID;
    }
    catch(err) {
        err.message;
        console.log(err.message);
        throw new Error('this combination doesnt work');
    }};
    
    const updateUser = async (id,props)=>{
        const {username, password} = props;
        console.log("here")
        if(!props || !props.username && !props.password){
            throw new Error('you must provide a username and password');
        }
        let stmt='';
        if (username && password){
            stmt=`update users set username='${username}', password='${password}' where id= ${id}`;
            console.log(stmt);
        }
        else if(username && !password){
            stmt=`update users set username='${username}' where id= ${id}`;
        }
    
        else if(password && !username){
            stmt= `update users set password='${password}' where id= ${id}`;
        }
    
        try{
        const updateUser = await db.run(stmt);
        console.log(updateUser);
        if (updateUser.stmt.changes == 0){
            throw new Error(`users with id ${id} doesnt exist`);
        }
    
        return true;
    }
    catch(err) {
        
        throw new Error(`Could not update users with id= ${id}` + err);
    }};
    
    const deleteUser = async(id)=>{
        try{
        const del= await db.run(`Delete from users where id =${id}`);
        return del;
    }
    catch(err) {
        err.message;
        console.log(err.message);
        throw new Error('this combination doesnt work');
    }};

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

    const addFaq = async props=>{
        const {question, answer} = props;
        if(!props || !question || !answer){
            throw new Error('you must provide a question and an answer');
        }
        try{
        const addFaq= await db.run(`Insert into faqs (question, answer) values ('${question}', '${answer}')`);
        return addFaq.stmt.lastID;
    }
    catch(err) {
        err.message;
        console.log(err.message);
        throw new Error('this combination doesnt work');
    }};
    
    const updateFaq = async (faqID,props)=>{
        const {question, answer} = props;
        console.log("here")
        if(!props || !props.question && !props.answer){
            throw new Error('you must provide a question and an answer');
        }
        let stmt='';
        if (question && answer){
            stmt=`update faqs set question='${question}', answer='${answer}' where faqID= ${faqID}`;
            console.log(stmt);
        }
        else if(question && !answer){
            stmt=`update faqs set question='${question}' where faqID= ${faqID}`;
        }
    
        else if(answer && !question){
            stmt= `update faqs set answer='${answer}' where faqID= ${faqID}`;
        }
    
        try{
        const updateFaq = await db.run(stmt);
        console.log(updateFaq);
        if (updateFaq.stmt.changes == 0){
            throw new Error(`faq with faqID ${faqID} doesnt exist`);
        }
    
        return true;
    }
    catch(err) {
        
        throw new Error(`Could not update faq with faqID= ${faqID}` + err);
    }};
    
    const deleteFaq = async(faqID)=>{
        try{
        const deleteFaq= await db.run(`Delete from faqs where faqID =${faqID}`);
        return deleteFaq;
    }
    catch(err) {
        err.message;
        console.log(err.message);
        throw new Error('this combination doesnt work');
    }};


    const getSupport= async()=>{
        const support= await db.all('Select * from supports');
        return support;
    }

    const addSupport = async props=>{
        const {email, question} = props;
        if(!props || !email || !question){
            throw new Error('you must provide a question and an email');
        }
        try{
        const addSupport= await db.run(`Insert into supports (email, question) values ('${email}', '${question}')`);
        return addSupport.stmt.lastID;
    }
    catch(err) {
        err.message;
        console.log(err.message);
        throw new Error('this combination doesnt work');
    }};
    
    const updateSupport = async (questID,props)=>{
        const {email, question} = props;
        console.log("here")
        if(!props || !props.email && !props.question){
            throw new Error('you must provide a username and password');
        }
        let stmt='';
        if (email && question){
            stmt=`update supports set email='${email}', question='${question}' where questID= ${questID}`;
            console.log(stmt);
        }
        else if(email && !question){
            stmt=`update supports set email='${email}' where questID= ${questID}`;
        }
    
        else if(question && !email){
            stmt= `update supports set question='${question}' where questID= ${questID}`;
        }
    
        try{
        const updateSupport = await db.run(stmt);
        console.log(updateSupport);
        if (updateSupport.stmt.changes == 0){
            throw new Error(`users with questID ${questID} doesnt exist`);
        }
    
        return true;
    }
    catch(err) {
        
        throw new Error(`Could not update supports with questID= ${questID}` + err);
    }};
    
    const deleteSupport= async(questID)=>{
        try{
        const deleteSupport= await db.run(`Delete from supports where questID =${questID}`);
        return deleteSupport;
    }
    catch(err) {
        err.message;
        console.log(err.message);
        throw new Error('this combination doesnt work');
    }};


    const controller = {
        getReviews,
        addReview,
        deleteReview,
        getUsers,
        addUser,
        deleteUser,
        updateUser,
        getFaq,
        deleteFaq,
        addFaq,
        updateFaq,
        getSupport,
        addSupport,
        updateSupport,
        deleteSupport,

    }
    return controller;

}


module.exports= initializeDB;