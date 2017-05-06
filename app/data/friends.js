// ===============================================================================
// DATA
// Below data will hold all of the user survey responses.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var userData = [
        {
            "name":"Ahmed",
            "photo":"https://www.google.com/imgres?imgurl=http%3A%2F%2Fclipart-library.com%2Fimages%2FpcodkzBri.jpg&imgrefurl=http%3A%2F%2Fcartoonsmix.com%2Fcartoons%2Fcartoon-men.html&docid=r8bDy6y1CgjLsM&tbnid=vsE77OMomJf_kM%3A&vet=10ahUKEwjnqLyCldvTAhXFx4MKHZaGBuQQMwicASgCMAI..i&w=662&h=843&bih=737&biw=1440&q=cartoon%20men&ved=0ahUKEwjnqLyCldvTAhXFx4MKHZaGBuQQMwicASgCMAI&iact=mrc&uact=8",
            "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userData;
