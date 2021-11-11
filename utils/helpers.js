module.exports = {
    // helper function to format the date
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    // helper function to make comments plural if there is two or more comments
    format_plural: (word, amount) => {
        if (amount >= 2) {
            return `${word}s`;
        }
        return word;
    }
};