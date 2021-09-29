module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("Book", {
      bookname: {
        type: Sequelize.STRING
      },
      authorname: {
        type: Sequelize.STRING
      },
      prize: {
        type: Sequelize.STRING
      }
    });
  
    return Book;
  };