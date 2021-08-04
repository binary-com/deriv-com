# Google Tag Manager Workflow

**In this document:**

-   [Introduction](#introduction)
-   [Required Information](#required-information)
-   [Custom Tag](#custom-tag)
-   [Create Custom Variable](#create-custom-variable)

## Introduction:

Google Tag Manager is a tool with a user-friendly, web-based interface that simplifies the process of working with tags. With GTM, you’re able to add, edit, and disable tags without having to touch the source code. If there's another tag that doesn't have a template in GTM, you can add your own custom code. Using Deriv’s tag manager account, you can redirect to `Default Workspace`, under `Tags` tab you will see all our customised tags that have been created.
The main point of this document is to familiarise users with how certain tags such as `Trade Deriv - Event Button Click` works and how we can add custom variables and make use of them in our tag.

## Required Information

**Tag**: A tag is a code that sends data to a system such as Google Analytics.
`Custom Tag`: Trade Deriv - Event Button Click

**Trigger**: A trigger listens for certain events, such as clicks, form submissions, or page loads. When an event is detected that matches the trigger definition, any tags that reference that trigger will fire.
`Custom Trigger`: Trade Deriv - Button Click

**Variable**: A variable is a named placeholder for a value that will change, such as a product name, a price value, or a date and in our case, we have the below variables.
`User-Defined Variables`:

-   event category da
-   event action da
-   event label da

**Data layer**: The tag manager implements a data layer to temporarily hold values in the client so that they can be used by tags, triggers, and variables.

## Custom Tag: Trade Deriv - Event Button Click

This tag is of type `Google Analytics: Universal Analytics` to track `Events` providing 4 parameters such as `Category`, `Action`, `Label`, and `Value` of that event. To make use of this tag, we simply need to add a custom Javascript data attribute namely `data-custom-events` on our clickable element which equals to a comma-separated value as below.

```js
<button data-custom-events="virtual_signup,click_button,gtm-button-trading">Click Here</button>
```

-   First value is `event-category-da` (e.g. virtual_signup) - Mandatory
-   Second value is `event-action-da` (e.g. click_button) - Mandatory
-   Third value is `event-label-da` (e.g. gtm-button-trading) - Mandatory
-   You may want to pass more comma separated variables - Optional - e.g. `event-value-da`

⚠️ If you do not intend to pass any of the variables above you can pass an empty value (e.g. data-custom-events=‘virtual_signup,,gtm-button-trading’)

⚠️ If you intend to create and use other variables, look into `Create Custom Variable` below. Upon adding a new variable you need to go to `Tag Configuration` and modify the parameters there.

⚠️ If you intend to provide more details to GTM, you can make use of `Trade Deriv GA4 Button Click` which is of type `Google Analytics: GA4 Event` and it can collect many `User Properties`.

Upon starting `Tag Manager Preview Mode`, in the website, you can click on the button with the specific data attribute, it will trigger the action event which contain the value of `click_button`, it will provide all the `Tag Details Properties` and our defined `Variables` along with their respective values.

## Create Custom Variable

To create a custom variable, you need to go to `Variables` tab in GTM and follow the steps below:

-   Click on `New` button to create a new User-Defined Variable
-   Choose `Custom javascript` as Variable Type
-   Write custom javascript code to grab the correct data. e.g. code below will return `event category da` from `data-custom-events` defined above.

```js
function () {
  var el = {{Click Element}};
  var gtmDataEvent = el.getAttribute('data-custom-events');

  if (!gtmDataEvent) {
    for (var i = 0; i < 2; i++) {
      el = el.parentNode
      gtmDataEvent = el.getAttribute('data-custom-events');

       if (gtmDataEvent) {
         break;
       }
    }
  }

  var gtmDataEventArr = gtmDataEvent.split(",");

  return gtmDataEventArr[0];
}
```
