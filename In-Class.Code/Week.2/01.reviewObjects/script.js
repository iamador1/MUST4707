//Let's make some objects again!
const apple = {
    color: "red",
    flavorRating: 10,
    variety: "Honeycrisp",
    stolen: true,
    howTasty: function (text) {
        console.log(
            `This apple is a ${this.flavorRating} out of 10 in terms of tastiness`
        );
    },

}
