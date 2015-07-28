Router.configure ({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route ("/", {
  name:  "homeIndex",
  data : function() {
    return {
      message : "Welcom visitor!!!"
    }
  }
});

Router.route ("/about", {
  name : "homeAbout"
});

Router.route ("/contact", {
  name : "homeContact"
});