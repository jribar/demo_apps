// ==========================================================================
// Project:   CampLogic
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals LoginDemo sc_require */

sc_require('core');

/** @class

  Root Statechart
  
  @extends Ki.Statechart
*/
LoginDemo.statechart = Ki.Statechart.create({
    
  trace: YES,
    
  rootState: Ki.State.design({
    initialSubstate: 'loggedOut',
    
    /**
      @state Logged Out State
    */  
    loggedOut: Ki.State.design({
      
      enterState: function(context) {
        LoginDemo.getPath('mainPage.mainPane.container').set('nowShowing', 'loggedOut');
      },
      
      exitState: function() {
        
      },
      
      // @action Display Login Window
      displayLoginWindow: function() {
        this.gotoState('loginWindow');
      }
      
    }),

    /**
      @state Login Window State
    */  
    loginWindow: Ki.State.design({
      
      enterState: function(context) {
        var panel = LoginDemo.getPath('loginPage.panel');
        if (panel) panel.append();        
      },
      
      exitState: function() {
        var panel = LoginDemo.getPath('loginPage.panel');
        if (panel) panel.remove();
      },

      // @action Cancel Action
      cancel: function() {
        this.gotoState('loggedOut');
      },
      
      // @action Process Login Action
      processLogin: function() {
        var username = LoginDemo.getPath('loginController.username'),
            password = LoginDemo.getPath('loginController.password');

        // Here's where you'd place more advanced logic
        if (!SC.empty(username) && username === password) {
          this.gotoState('loggedIn');
        } else {
          SC.AlertPane.error("Error:", "Username and Password Must Match", "", "OK");
        }
      },
    }),

    /**
      @state Logged In State
    */  
    loggedIn: Ki.State.design({
      
      enterState: function(context) {
        LoginDemo.getPath('mainPage.mainPane.container').set('nowShowing', 'loggedIn');
      },
      
      exitState: function() {
        
      },
      
      // @action Logout
      logout: function() {
        // Reset User Information
        LoginDemo.loginController.set('username', null);
        LoginDemo.loginController.set('password', null);
        
        this.gotoState('loggedOut');
      }
      
    }),
    
    
  })

});