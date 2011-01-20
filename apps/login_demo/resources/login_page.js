// ==========================================================================
// Project:   LoginDemo - loginPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals LoginDemo */

// This page describes a part of the interface for your application.
LoginDemo.loginPage = SC.Page.design({
  panel: SC.PanelPane.design({
    defaultResponder: 'LoginDemo.statechart',
    layout: { centerX: 0, centerY: 0, height: 150, width: 350 },
    contentView: SC.View.design({
      layout: { left: 0, right: 0, top: 0, bottom: 0},
      childViews: [
        SC.LabelView.design({
          layout: { top: 15, left: 15, width: 250, height: 25 },
          value: 'Login!'
        }),

        SC.LabelView.design({
          layout: { top: 55, left: 15, width: 100, height: 18 },
          textAlign: SC.ALIGN_RIGHT,
          value: "Username:"
        }),

        SC.TextFieldView.design({
          layout: { top: 55, left: 125, height: 20, width: 200 },
          valueBinding: "LoginDemo.loginController.username" 
        }),

        SC.LabelView.design({
          layout: { top: 85, left: 15, width: 100, height: 18 },
          textAlign: SC.ALIGN_RIGHT,
          value: "Password:"
        }),

        SC.TextFieldView.design({
          layout: { top: 85, left: 125, height: 20, width: 200 },
          valueBinding: "LoginDemo.loginController.password",
          isPassword: YES
        }),

        SC.ButtonView.design({
          titleMinWidth: 64,
          layout: { centerX: -50, height: 24, width: 90, bottom: 8 },
          isCancel: YES,
          title: "Cancel", 
          action: "cancel",
        }),

        SC.ButtonView.design({
          titleMinWidth: 64,
          layout: { centerX: 50, height: 24, width: 90, bottom: 8 },
          isDefault: YES,
          title: "Login", 
          action: "processLogin",
        })
      ]
    })
  })
});