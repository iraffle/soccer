let adsSidebarVIP = `
<!--BANNER-->
          <h6>VIP</h6>
          <hr>
           <iframe width="100%" height="70" scrolling="no" src="//slowdsports.com/ads/banneradcash.php" frameborder="0"></iframe>
<!--/BANNER-->
`;
for(const ele of document.getElementsByClassName("sidebar-vip")){ele.innerHTML=(adsSidebarVIP)};

let adsSidebar1 = `
<!--BANNER-->
          <h6>Ads</h6>
          <hr>
           <iframe width="100%" height="70" scrolling="no" src="//slowdsports.com/ads/bannercash.php" frameborder="0"></iframe>
<!--/BANNER-->
`;
for(const ele of document.getElementsByClassName("sidebar-ads1")){ele.innerHTML=(adsSidebar1)};

let adsSidebar2 = `
        <!--FEATURED-->
          <h6>Featured</h6>
          <hr>
          <a href="#mlb" uk-scroll class="link-featured">
           <div class="blocker"></div>
           <iframe width="100%" height="415" scrolling="no" src="//slowdsports.com/tv" frameborder="0" allowfullscreen></iframe>
          </a>
       <!--/FEATURED-->
`;
for(const ele of document.getElementsByClassName("sidebar-ads2")){ele.innerHTML=(adsSidebar2)};

let featuredSidebar = `
        <!--FEATURED-->
          <h6>Featured</h6>
          <hr>
          <a href="#mlb" uk-scroll class="link-featured">
           <div class="blocker"></div>
           <iframe width="100%" height="415" scrolling="no" src="//slowdsports.com/tv" frameborder="0" allowfullscreen></iframe>
          </a>
       <!--/FEATURED-->
`;
for(const ele of document.getElementsByClassName("sidebar-featured")){ele.innerHTML=(featuredSidebar)};

let postSidebar = `
<!--POST-->
          <h6>App</h6>
          <hr>
           <iframe width="100%" height="670" scrolling="no" src="//slowdsports.com/app/appdl.php" frameborder="0"></iframe>
<!--/POST-->
`;
for(const ele of document.getElementsByClassName("sidebar-post")){ele.innerHTML=(postSidebar)};

let standingsSidebar = `
<!--STANDINGS-->
          <h6>Standings</h6>
          <hr>
           <iframe width="100%" height="720" scrolling="no" src="//slowdsports.com/old/soccer/table.php" frameborder="0"></iframe>
<!--/STANDINGS-->
`;
for(const ele of document.getElementsByClassName("sidebar-standings")){ele.innerHTML=(standingsSidebar)};
