# Code Companion
A graphical screen overlay system for a 'drag-and-drop' programming experience, code-companion is designed with accessibility in mind. For the neurodiverse - Code Companion is YOUR companion.

With customizable keybinds linked to a list of languages and their elements/methods/attributes/commonly-used-boilerplates, Code Companion is an ease-of-access suite designed to give the power of programming to anyone - regardless of physical or cognitive disadvantage. 

Code Companion is not a linter or an IDE: it will not make suggestions to the user about what code to use or how to use it - that's for the programmer to decide. Code Companion is an alternative input system reminiscent of macros that is independent of input device. Future versions of Code Companion will make more inclusive set-up options to allow the user a wider and more varied option of inputs and languages


# Tech Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Create Electron App](https://www.electronforge.io/) 

## Available Scripts    

In the project directory, you can run:

### `npm run dev`
Uses [Concurrently](https://github.com/kimmobrunfeldt/concurrently) to run electron ONLY after React has finished loading
Runs the app in the development mode.
No need to open localhost or a browser window, Electron will handle that for you. 


The page will not reload if you make edits, however a Ctrl+R reset will update most changes.\
You will also see any lint errors in the console.

### `npm run make`

Builds the app for production to the `out` folder.\
It currently correctly bundles React and Electron in production mode for win-32 archx64 and optimizes the build for the best performance.
MacOS, linux, and Solaris builds coming soon.


## Learn More

If you want to help contribute, feel free to drop a pull request with a json file of your language of choice, in the vein of "src/components/macros/exampleDB" following the sectioning of the language's documentation. 

If you find there is a feature that you need included for you to be more comfortable programming, reach out to me via the contact information found on the code-companion repo.


