exports.home = (req, res) => {
    const title = "Hello World",
        subTitle = "Welcome to the world!"

    res.render("index", { title, subTitle});
}

