$(function(){

  //nav for all pages
  var nav = '<nav class="navbar navbar-default">\
              <div class="container">\
                <div class="navbar-header">\
                  <a class="navbar-brand" href="#">Fish n Chips</a>\
                </div>\
                <ul class="nav navbar-nav">\
                  <li><a id="home" type="button" name="home">Home</a></li>\
                  <li><a id="menu" type="button" name="menu">Menu</a></li>\
                  <li><a id="contacts" type="button" name="contacts">Contacts</a></li>\
                </ul>\
              </div>\
            </nav>';

  var homePageContent = '<img src="assets/hero.png" alt="" class="center-block"><p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p><p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p><p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>';

  var menuPageContent = '<h4><span>Chef\'s Tasting</span></h4>\
  <p class="tasting-intro"> <span>Our tasting menus include 3 courses (about 3 plates per course) & dessert uniquely hand-selected by our Chef.</span></p>\
  <ul class="tasting-options">\
    <li>\
      <h5>DIEGO RIVERA—45</h5>\
      <p>Take a guided tour of our modern Mexican street food menu, featuring a variety our favorite dishes, without the tough decisions.</p>\
    </li>\
    <li>\
      <h5>FRIDA KAHLO—55</h5>\
      <p>Elevate your experience with a selection of inspired Mexican plates & original off-menu, interpretations crafted by our Chef.</p>\
    </li>\
    <li>\
      <h5>TEQUILA PAIRING—25</h5>\
      <p>A selection of tequila is expertly paired with the flavors of each course. </p>\
    </li>\
  </ul>\
  <p class="tasting-meta">(priced per person)</p>';

  var contactsPageContent = '<div class="jumbotron jumbotron-sm">\
    <div class="container">\
        <div class="row">\
            <div class="col-sm-12 col-lg-12">\
                <h1 class="h1">\
                    Contact us <small>Feel free to contact us</small></h1>\
            </div>\
        </div>\
    </div>\
</div>\
<div class="container">\
    <div class="row">\
        <div class="col-md-8">\
            <div class="well well-sm">\
                <form>\
                <div class="row">\
                    <div class="col-md-6">\
                        <div class="form-group">\
                            <label for="name">\
                                Name</label>\
                            <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />\
                        </div>\
                        <div class="form-group">\
                            <label for="email">\
                                Email Address</label>\
                            <div class="input-group">\
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>\
                                </span>\
                                <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" /></div>\
                        </div>\
                        <div class="form-group">\
                            <label for="subject">\
                                Subject</label>\
                            <select id="subject" name="subject" class="form-control" required="required">\
                                <option value="na" selected="">Choose One:</option>\
                                <option value="service">General Customer Service</option>\
                                <option value="suggestions">Suggestions</option>\
                                <option value="product">Product Support</option>\
                            </select>\
                        </div>\
                    </div>\
                    <div class="col-md-6">\
                        <div class="form-group">\
                            <label for="name">\
                                Message</label>\
                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"\
                                placeholder="Message"></textarea>\
                        </div>\
                    </div>\
                    <div class="col-md-12">\
                        <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">\
                            Send Message</button>\
                    </div>\
                </div>\
                </form>\
            </div>\
        </div>\
        <div class="col-md-4">\
            <form>\
            <legend><span class="glyphicon glyphicon-globe"></span> Our office</legend>\
            <address>\
                <strong>Twitter, Inc.</strong><br>\
                795 Folsom Ave, Suite 600<br>\
                San Francisco, CA 94107<br>\
                <abbr title="Phone">\
                    P:</abbr>\
                (123) 456-7890\
            </address>\
            <address>\
                <strong>Full Name</strong><br>\
                <a href="mailto:#">first.last@example.com</a>\
            </address>\
            </form>\
        </div>\
    </div>\
</div>';

  $('#container').append(nav);
  $('#content').append(homePageContent);

  $('#container').on('click', '#home', function(){
    $('#content').empty();
    $('#content').append(homePageContent);
  });

  $('#container').on('click', '#menu', function(){
    $('#content').empty();
    $('#content').append(menuPageContent);
  });

  $('#container').on('click', '#contacts', function(){
    $('#content').empty();
        $('#content').append(contactsPageContent);
  });

});
