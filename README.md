# HomeCoOwn

started on 12th of June 2024 Expected To Complete On 30th June (InshaAllah with a focus on TDD and TypeSript Integration)
Home Page (HEADER<INTRODUCTION<FILTERS<PROFILE<PROPERTIES<FOOTER)

<!-- First start with setting up relevant things for the Styling Setup theme (How to setup theme in React ) -->

In the Header stumbled upon a scenario where in the Md,Xl logo should be on left and on xs on Center how to fix it saying it is an basic element where xs md properties doesnot work One approach is to use Media queries is there any better approach
Use Grid In MUI with 2 variants


<!-- Questions -->

What is Provider ,what is Provider's Context what is with ThemeProvider one With Redux Provider 


<!-- Assumption -->
Context provider let me not import UseSelctor in every component and I can handle all by wrapping from root(_Hopefully)
Steps
#1 MAke a theme.js add theme Itenaries there  (MAke use of the Properties that MUI uses)It will have a consistent Ui across 
#2 pass to root Provider 
#3 start using colors

<!-- Linear Gradients -->
linear-gradient is a CSS function that returns an image, not a color. So, you have to set the background property (which takes an image) rather than the backgroundColor property (which takes just a color).
https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient(special Kind Of an Image)