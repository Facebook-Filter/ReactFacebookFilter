const sqlite = require("sqlite");

const initializeDB = async () => {
    const db = await sqlite.open("./db.sqlite");

    const getUsers = async () => {
        const rows = await db.all('Select * from users');
        return rows;
    }

    const addUser = async props => {
        const { username, password } = props;
        if (!props || !username || !password) {
            throw new Error('you must provide a username and password');
        }
        try {
            const addUser = await db.run(`Insert into users (username, password) values ('${username}', '${password}')`);
            return addUser.stmt.lastID;
        }
        catch (err) {
            err.message;
            throw new Error('Could not add user');
        }
    };

    const updateUser = async (id, props) => {
        const { username, password } = props;

        let stmt = '';
        if (username && password) {
            stmt = `update users set username='${username}', password='${password}' where id= ${id}`;
        }
        else if (username && !password) {
            stmt = `update users set username='${username}' where id= ${id}`;
        }
        else if (password && !username) {
            stmt = `update users set password='${password}' where id= ${id}`;
        }
        else {
            throw new Error('you must provide a username or password');
        }

        try {
            const updateUser = await db.run(stmt);
            console.log(updateUser);
            if (updateUser.stmt.changes == 0) {
                throw new Error(`users with id ${id} doesnt exist`);
            }
            return true;
        }
        catch (err) {
            throw new Error(`Could not update users with id= ${id}` + err);
        }
    };

    const deleteUser = async (id) => {
        try {
            const del = await db.run(`Delete from users where id =${id}`);
            return del;
        }
        catch (err) {
            err.message;
            throw new Error(`user with id ${id} does not exist`);
        }
    };

    const getReviews = async () => {
        const review = await db.all('Select * from reviews');
        return review;
    }

    const addReview = async props => {
        const { username, review } = props;
        if (!props || !username || !review) {
            throw new Error('you must provide a username, email & review');
        }
        try {
            const addReview = await db.run(`Insert into reviews (username,review) values ('${username}','${review}')`);
            return addReview.stmt.lastID;
        }
        catch (err) {
            err.message;
            console.log(err.message);
            throw new Error('Could not add review');
        }
    };


    const deleteReview = async (revID) => {
        try {
            const deleteReview = await db.run(`Delete from reviews where revID =${revID}`);
            return deleteReview;
        }
        catch (err) {
            err.message;
            throw new Error(`Review with id ${revID} does not exist`);
        }
    };


    const getFaq = async () => {
        const faq = await db.all('Select * from faqs');
        return faq;
    }

    const addFaq = async props => {
        const { question, answer } = props;
        if (!props || !question || !answer) {
            throw new Error('you must provide a question and an answer');
        }
        try {
            const addFaq = await db.run(`Insert into faqs (question, answer) values ('${question}', '${answer}')`);
            return addFaq.stmt.lastID;
        }
        catch (err) {
            err.message;
            throw new Error('Could not add faq');
        }
    };

    const updateFaq = async (faqID, props) => {
        const { question, answer } = props;

        let stmt = '';
        if (question && answer) {
            stmt = `update faqs set question='${question}', answer='${answer}' where faqID= ${faqID}`;
        }
        else if (question && !answer) {
            stmt = `update faqs set question='${question}' where faqID= ${faqID}`;
        }
        else if (answer && !question) {
            stmt = `update faqs set answer='${answer}' where faqID= ${faqID}`;
        }
        else {
            throw new Error('you must provide a question or an answer');
        }

        try {
            const updateFaq = await db.run(stmt);
            console.log(updateFaq);
            if (updateFaq.stmt.changes == 0) {
                throw new Error(`faq with faqID ${faqID} doesnt exist`);
            }
            return true;
        }
        catch (err) {
            throw new Error(`Could not update faq with faqID= ${faqID}` + err);
        }
    };

    const deleteFaq = async (faqID) => {
        try {
            const deleteFaq = await db.run(`Delete from faqs where faqID =${faqID}`);
            return deleteFaq;
        }
        catch (err) {
            err.message;
            throw new Error(`Could not delete faq with id ${faqID}`);
        }
    };


    const getSupport = async () => {
        const support = await db.all('Select * from supports');
        return support;
    }

    const addSupport = async props => {
        const { email, question } = props;
        if (!props || !email || !question) {
            throw new Error('you must provide a question and an email');
        }
        try {
            const addSupport = await db.run(`Insert into supports (email, question) values ('${email}', '${question}')`);
            return addSupport.stmt.lastID;
        }
        catch (err) {
            err.message;
            throw new Error('Could not add support');
        }
    };

    const updateSupport = async (questID, props) => {
        const { email, question } = props;

        let stmt = '';
        if (email && question) {
            stmt = `update supports set email='${email}', question='${question}' where questID= ${questID}`;
        }
        else if (email && !question) {
            stmt = `update supports set email='${email}' where questID= ${questID}`;
        }
        else if (question && !email) {
            stmt = `update supports set question='${question}' where questID= ${questID}`;
        }
        else {
            throw new Error('you must provide an email or question');
        }

        try {
            const updateSupport = await db.run(stmt);
            if (updateSupport.stmt.changes == 0) {
                throw new Error(`support with questID ${questID} does not exist`);
            }
            return true;
        }
        catch (err) {
            throw new Error(`Could not update support with id ${questID}` + err);
        }
    };

    const deleteSupport = async (questID) => {
        try {
            const deleteSupport = await db.run(`Delete from supports where questID =${questID}`);
            return deleteSupport;
        }
        catch (err) {
            err.message;
            throw new Error(`Could not delete question with id ${questID}`);
        }
    };


    const getContacts = async () => {
        const contacts = await db.all('Select * from contacts');
        return contacts;
    }

    const addContacts = async props => {
        const { nameChosen, email, message } = props;
        if (!props || !nameChosen || !email || !message) {
            throw new Error('you must provide a name, email & message');
        }
        try {
            const addContacts = await db.run(`Insert into contacts (nameChosen, email, message) values ('${nameChosen}', '${email}', '${message}')`);
            return addContacts.stmt.lastID;
        }
        catch (err) {
            err.message;
            console.log(err.message);
            throw new Error('Could not add contact');
        }
    };


    const deleteContacts = async (contID) => {
        try {
            const deleteContacts = await db.run(`Delete from contacts where contID =${contID}`);
            return deleteContacts;
        }
        catch (err) {
            err.message;
            throw new Error(`Could not delete contact with id ${contID}`);
        }
    };




    const getFeatures = async () => {
        const features = await db.all('Select * from features');
        return features;
    }

    const addFeature = async props => {
        const { title, image, description } = props;
        if (!props || !title || !image || !description) {
            throw new Error('you must provide a title, foran image and a description');
        }
        try {
            const addFeature = await db.run(`Insert into features (title, image, description) values ('${title}', '${image}', '${description}')`);
            return addFeature.stmt.lastID;
        }
        catch (err) {
            err.message;
            console.log({ title, image, description });
            throw new Error(err.message);
        }
    };

    const updateFeature = async (featID, props) => {
        const { title, image, description } = props;

        let stmt = '';
        if (title && image && description) {
            stmt = `Update features set title='${title}', image='${image}', description=${description} where featID= ${featID}`;
        }
        else if (title && !image && !description) {
            stmt = `Update features set title='${title}' where featID= ${featID}`;
        }
        else if (!title && image && !description) {
            stmt = `Update features set image='${image}' where featID= ${featID}`;
        }
        else if (!title && !image && description) {
            stmt = `Update features set description='${description}' where featID=${featID}`;
        }
        else if (title && image && !description) {
            stmt = `Update features set title='${title}', image='${image}' where featID=${featID}`;
        }
        else if (title && !image && description) {
            stmt = `Update features set title='${title}', description='${description}' where featID=${featID}`;
        }
        else if (!title && image && description) {
            stmt = `Update features set image='${image}', description='${description}' where featID=${featID}`;
        }
        else {
            throw new Error('you must provide a title, for an image or a description');
        }

        try {
            const updateFeature = await db.run(stmt);
            if (updateFeature.stmt.changes == 0) {
                throw new Error(`Feature with id ${featID} does not exist`);
            }
            return true;
        }
        catch (err) {
            throw new Error(`Could not update features with id ${featID}` + err);
        }
    };

    const deleteFeature = async (featID) => {
        try {
            const deleteFeature = await db.run(`Delete from features where featID =${featID}`);
            return deleteFeature;
        }
        catch (err) {
            err.message;
            throw new Error(`Could not delete feature with id ${featID}`);
        }
    };


    const getBlog = async () => {
        const blog = await db.all('Select * from blogs');
        return blog;
    }

    const addBlog = async props => {
        const { title, blogText } = props;
        if (!props || !title || !blogText) {
            throw new Error('you must provide a title and a text for the blog');
        }
        try {
            const addBlog = await db.run(`Insert into blogs (title, blogText) values ('${title}', '${blogText}')`);
            return addBlog.stmt.lastID;
        }
        catch (err) {
            err.message;
            throw new Error('Could not add blog');
        }
    };

    const updateBlog = async (blogID, props) => {
        const { title, blogText } = props;

        let stmt = '';
        if (title && blogText) {
            stmt = `update blogs set title='${title}', blogText='${blogText}' where blogID= ${blogID}`;
        }
        else if (title && !blogText) {
            stmt = `update blogs set title='${title}' where blogID= ${blogID}`;
        }
        else if (!title && blogText) {
            stmt = `update blogs set blogTitle='${blogText}' where blogID= ${blogID}`;
        }
        else {
            throw new Error('you must provide an title or text for the blog');
        }

        try {
            const updateBlog = await db.run(stmt);
            if (updateBlog.stmt.changes == 0) {
                throw new Error(`blog with id ${blogID} does not exist`);
            }
            return true;
        }
        catch (err) {
            throw new Error(`Could not update blog with id ${blogID}` + err);
        }
    };

    const deleteBlog = async (blogID) => {
        try {
            const deleteBlog = await db.run(`Delete from blogs where blogID =${blogID}`);
            return deleteBlog;
        }
        catch (err) {
            err.message;
            throw new Error(`Could not delete blog with id ${blogID}`);
        }
    };


    const faqSearch = async (question) => {

        let stmt = '';
        if (question) {
            stmt = `SELECT * FROM faqs WHERE question LIKE '%${question}%'`;
        }

        else {
            throw new Error('sorry gaby');
        }
        try {
            const faqSearch = await db.all(stmt);
            console.log(faqSearch);
           
            return faqSearch;
        }
        catch (err) {
            console.log(err.message);
            throw new Error(`Error question do not match ${question} `)
        }
    }




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
        getContacts,
        addContacts,
        deleteContacts,
        getFeatures,
        addFeature,
        updateFeature,
        deleteFeature,
        getBlog,
        addBlog,
        updateBlog,
        deleteBlog,
        faqSearch
    }
    return controller;
}


module.exports = initializeDB;