// ==========================================================================
// Project:   LoginDemo - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals DemoApps */

// This page describes the main user interface for your application.  
LoginDemo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'container'.w(),
    defaultResponder: 'LoginDemo.statechart',
    
    container: SC.ContainerView.design({
      layout: {left: 0, right: 0, top: 0, bottom: 0},
      nowShowing: 'loggedOut'
    })
  }),
  
  loggedOut: SC.View.design({
    layout: {left: 0, right: 0, top: 0, bottom: 0},
    childViews: 'loginButton'.w(),
    
    loginButton: SC.ButtonView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 24 },
      title: 'Login!',
      action: 'displayLoginWindow'
    })
        
  }),
  
  
  loggedIn: SC.View.design({
    layout: {left: 0, right: 0, top: 0, bottom: 0},
    childViews: 'welcome loggedInUser logoutButton'.w(),
    
    welcome: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 24 },
      value: 'Welcome to our app!',
      textAlign: SC.ALIGN_CENTER,
    }),

    loggedInUser: SC.LabelView.design({
      layout: { centerX: 0, centerY: 25, width: 200, height: 24 },
      valueBinding: 'LoginDemo.loginController.username',
      textAlign: SC.ALIGN_CENTER,
    }),

    logoutButton: SC.ButtonView.design({
      layout: { centerX: 0, centerY: 75, width: 200, height: 24 },
      title: 'Log Out',
      action: 'logout'
    })
        
  })
  

});
