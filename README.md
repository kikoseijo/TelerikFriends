
# Telerik Friends Sample App for NativeScript

<a href="https://platform.telerik.com/#appbuilder/clone/https://github.com/icenium/nativescript-sample-Friends/" target="_blank"><img src="http://docs.telerik.com/platform/samples/images/try-in-appbuilder.png" alt="Try in AppBuilder" title="Try in Telerik Platform" /></a>

<a id="top"></a>
* [Overview](#overview)
* [Screenshots](#screenshots)
* [Requirements](#requirements)
* [Configuration](#configuration)
* [Running the Sample](#running-the-sample)

# Overview

This repository contains the Telerik Friends app for NativeScript. It is a sample mobile app demonstrating how to integrate a wide range of Telerik Platform services into a native mobile application using the [NativeScript](http://github.com/nativescript/nativescript) framework.

The Telerik Friends sample app showcases these features and SDKs:

- [Cloud data](http://docs.telerik.com/platform/backend-services/javascript/data/introduction) access (Telerik Backend Services)
- Working with [files](http://docs.telerik.com/platform/backend-services/javascript/files/introduction) (Telerik Backend Services)
- User [registration](http://docs.telerik.com/platform/backend-services/javascript/users/users-register) and [authentication](http://docs.telerik.com/platform/backend-services/javascript/users/users-authenticate) (Telerik Backend Services)
- Using custom user account fields (Telerik Backend Services)
- Basic [app analytics](http://docs.telerik.com/platform/analytics/getting-started/introduction) (Telerik Analytics)
- Tracking [feature use](http://docs.telerik.com/platform/analytics/client/reports/feature-use) (Telerik Analytics)

To implement all the features listed above, the sample app utilizes the following Telerik products and SDKs:

- [Telerik Backend Services JavaScript SDK](http://docs.telerik.com/platform/backend-services/javascript/getting-started-javascript-sdk)&mdash;to connect the app to Telerik Platform
- [Telerik Analytics JavaScript SDK](http://docs.telerik.com/platform/analytics/sdk/js/)&mdash;to connect the app to Telerik Platform

# Screenshots

Login Screen|Activity Stream|Activity Details
---|---|---
![Login Screen](https://raw.githubusercontent.com/Icenium/nativescript-sample-Friends/master/screenshots/android-login-screen.png)|![Activities stream view](https://raw.githubusercontent.com/Icenium/nativescript-sample-Friends/master/screenshots/android-activities-stream.png)|![Activity details view](https://raw.githubusercontent.com/Icenium/nativescript-sample-Friends/master/screenshots/android-activity-details.png)

# Requirements

Before you begin, you need to ensure that you have the following:

- **A Telerik Platform account**
Ensure that you can log in to a Telerik Platform account. This can be a free trial account. Depending on your license you may not be able to use all app features. For more information on what is included in the different editions, check out the pricing page. All features included in the sample app work during the free trial period.

- **Telerik AppBuilder** The sample app requires Telerik AppBuilder to run. This can be the in-browser client, the desktop client, the extension for Visual Studio, or the command-line interface.

# Configuration

The Friends sample app comes fully functional, but to see it in action you must link it to your own Telerik Platform account.

1. Click the **Run in the Platform** button to clone the repository in AppBuilder.<br>
	A new Telerik Platform app is created for you. You can view the app source code on the **Code** tab.
2. Click the **Data** tab and then click **Enable and populate with sample data**.<br>
	Sample content types with data required for the app to run is automatically created for you. The button also enables the **Users** service where user accounts for the app are precreated.
3. Click the **Settings** tab.
4. Take note of your **App ID**.
5. Go back to the **Code** tab and continue setting up as explained in the next sections.

> If you happen to break the structure of the automatically generated Friends data, you can delete the app and start over.

## App ID for Telerik Platform

This is a unique string that links the sample mobile app to your Telerik Platform account where all the data is read from/saved. To set it in the app code:

1. Open the `Friends/app/app.js` file.
2. Replace `$EVERLIVE_API_KEY$` with the App ID of your Telerik Platform app.

## (Optional) Project Key for Telerik Analytics

This is a unique string that links the sample mobile app to the Analytics part of your Telerik Platform app. If you do not set this the sample will still work, but no analytics data will be collected.
	
1. In the Telerik Platform portal, go to your app.
2. Click the **Analytics** tab and then click **Enable**.
3. Go to **Analytics > Settings > Options** and take note of your **Project Key**.
4. Open the `Friends/app/views/main-page.js` file.
5. Replace `$EQATEC_PROJECT_KEY$` with the Project Key of your Friends Analytics project.

## HTTPS Connections

By default the Friends Sample is configured to use HTTP. If you want to switch to HTTPS, update the `global.BS_SCHEME` setting in  `Friends/app/app.js` to `https`.

# Running the Sample

Once the app is configured, you can run it either on a real device or a native emulator.

To run it, follow the steps in the product's documentation: [Running Apps on Devices](http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/working-with-devices).

> Ensure that the emulator or the device that you are using has Internet connectivity when running the sample.

