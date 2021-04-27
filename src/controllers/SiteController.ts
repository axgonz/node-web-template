// express render paths for ejs are based in __dirname/views

class SiteController {
  home(req, res) {
    console.log(req.method, req.url);
    res.render("../src/public/views/home");
  }
  about(req, res) {
    console.log(req.method, req.url);
    res.render("../src/public/views/about");
  }
}

export default new SiteController();
