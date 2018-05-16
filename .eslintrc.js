const OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
    "extends": [
     "eslint:recommended",
     "plugin:react/recommended",
     "plugin:prettier/recommended",
    ],
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
        'jasmine': true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "prettier",
    ],
    "parserOptions": {
      "ecmaVersion": 2017,
       "sourceType": "module",
       "ecmaFeatures": {
           "jsx": true,
           "forOf": true,
           "blockBindings": true,
       }
    },
    "globals": {
      "localforage": true,
    },
    "rules": {
      "no-cond-assign": ERROR,          // disallow assignment in conditional expressions
      "no-debugger": ERROR, 
      "no-dupe-keys": ERROR,            // disallow duplicate keys when creating object literals
      "no-duplicate-case": ERROR,        // disallow a duplicate case label
      "no-empty": ERROR,                 // disallow empty statements
      "no-extra-boolean-cast": WARN,    // disallow double-negation boolean casts in a boolean context
      "no-extra-parens": OFF,          // disallow unnecessary parentheses (off by default)
      "no-extra-semi": ERROR,            // disallow unnecessary semicolons
      "no-func-assign": ERROR,           // disallow overwriting functions written as function declarations
      "no-inner-declarations": ERROR,    // disallow function or variable declarations in nested blocks
      "no-invalid-regexp": 0,        // disallow invalid regular expression strings in the RegExp constructor
      "no-irregular-whitespace": ERROR,  // disallow irregular whitespace outside of strings and comments
      "no-negated-in-lhs": ERROR,        // disallow negation of the left operand of an in expression
      "no-obj-calls": ERROR,             // disallow the use of object properties of the global object (Math and JSON) as functions
      "no-regex-spaces": ERROR,          // disallow multiple spaces in a regular expression literal
      "no-sparse-arrays": ERROR,         // disallow sparse arrays
      "no-unreachable": ERROR,           // disallow unreachable statements after a return, throw, continue, or break statement
      "use-isnan": ERROR,                // disallow comparisons with the value NaN
      "valid-jsdoc": ERROR,              // Ensure JSDoc comments are valid (off by default)
      "valid-typeof": ERROR,             // Ensure that the results of typeof are compared against a valid string
      "no-unexpected-multiline": ERROR,  // Avoid code that looks like two expressions but is actually one (off by default)
      
      
      ////////// Best Practices //////////
      
      "accessor-pairs": ERROR,        // enforces getter/setter pairs in objects (off by default)
      "block-scoped-var": ERROR,      // treat var statements as if they were block scoped (off by default)
      "complexity": [WARN, 9],            // specify the maximum cyclomatic complexity allowed in a program (off by default)
      "consistent-return": OFF,     // require return statements to either always or never specify values
      "curly": OFF,                 // specify curly brace conventions for all control statements
      "default-case": ERROR,          // require default case in switch statements (off by default)
      "dot-notation": ERROR,          // encourages use of dot notation whenever possible
      "eqeqeq": ERROR,                // require the use of === and !==
      "guard-for-in": ERROR,          // make sure for-in loops have an if statement (off by default)
      "no-alert": ERROR,              // disallow the use of alert, confirm, and prompt
      "no-caller": ERROR,             // disallow use of arguments.caller or arguments.callee
      "no-div-regex": ERROR,          // disallow division operators explicitly at beginning of regular expression (off by default)
      "no-else-return": ERROR,        // disallow else after a return in an if (off by default)
      "no-eq-null": ERROR,            // disallow comparisons to null without a type-checking operator (off by default)
      "no-eval": ERROR,               // disallow use of eval()
      "no-extend-native": ERROR,      // disallow adding to native types
      "no-extra-bind": ERROR,         // disallow unnecessary function binding
      "no-implied-eval": ERROR,       // disallow use of eval()-like methods
      "no-iterator": ERROR,           // disallow usage of __iterator__ property
      "no-labels": ERROR,             // disallow use of labeled statements
      "no-lone-blocks": ERROR,        // disallow unnecessary nested blocks
      "no-loop-func": ERROR,          // disallow creation of functions within loops
      "no-multi-spaces": ERROR,       // disallow use of multiple spaces
      "no-native-reassign": ERROR,    // disallow reassignments of native objects
      "no-new-func": ERROR,           // disallow use of new operator for Function object
      "no-new-wrappers": ERROR,       // disallows creating new instances of String, Number, and Boolean
      "no-new": ERROR,                // disallow use of new operator when not part of the assignment or comparison
      "no-param-reassign": ERROR,     // disallow reassignment of function parameters (off by default)
      "no-process-env": OFF,        // disallow use of process.env (off by default)
      "no-proto": ERROR,              // disallow usage of __proto__ property
      "no-redeclare": ERROR,          // disallow declaring the same variable more then once
      "no-return-assign": ERROR,      // disallow use of assignment in return statement
      "no-script-url": ERROR,         // disallow use of javascript: urls
      "no-self-compare": ERROR,       // disallow comparisons where both sides are exactly the same (off by default)
      "no-sequences": ERROR,          // disallow use of comma operator
      "no-throw-literal": 0,      // restrict what can be thrown as an exception (off by default)
      "no-unused-expressions": 0, // disallow usage of expressions in statement position
      "no-warning-comments": 0,   // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
      "no-with": ERROR,               // disallow use of the with statement
      "radix": 0,                 // require use of the second argument for parseInt() (off by default)
      "vars-on-top": 0,           // requires to declare all vars on top of their containing scope (off by default)
      "wrap-iife": ERROR,             // require immediate function invocation to be wrapped in parentheses (off by default)
      "yoda": ERROR,                  // require or disallow Yoda conditions
      
      
      ////////// Strict Mode //////////
      
      "strict": ERROR,          // controls location of Use Strict Directives
      
      
      ////////// Variables //////////
      
      "no-catch-shadow": 0,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
      "no-delete-var": ERROR,               // disallow deletion of variables
      "no-label-var": ERROR,                // disallow labels that share a name with a variable
      "no-shadow": ERROR,                   // disallow declaration of variables already declared in the outer scope
      "no-shadow-restricted-names": ERROR,  // disallow shadowing of names such as arguments
      "no-undef": ERROR,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
      "no-undef-init": ERROR,               // disallow use of undefined when initializing variables
      "no-undefined": ERROR,                // disallow use of undefined variable (off by default)
      "no-unused-vars": ERROR,              // disallow declaration of variables that are not used in the code
      "no-use-before-define": 0,        // disallow use of variables before they are defined
      
      
      ////////// Node.js //////////
      
      "handle-callback-err": 0,   // enforces error handling in callbacks (off by default) (on by default in the node environment)
      "no-mixed-requires": 0,     // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
      "no-new-require": 0,        // disallow use of new operator with the require function (off by default) (on by default in the node environment)
      "no-path-concat": 0,        // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
      "no-process-exit": 0,       // disallow process.exit() (on by default in the node environment)
      "no-restricted-modules": 0, // restrict usage of specified node modules (off by default)
      "no-sync": 0,               // disallow use of synchronous methods (off by default)
      
      
      ////////// Stylistic Issues //////////
      
      "array-bracket-spacing": ERROR,       // enforce spacing inside array brackets (off by default)
      "brace-style": ERROR,                 // enforce one true brace style (off by default)
      "camelcase": OFF,                   // require camel case names
      "comma-spacing": ERROR,               // enforce spacing before and after comma
      "comma-style": ERROR,                 // enforce one true comma style (off by default)
      "computed-property-spacing": ERROR,   // require or disallow padding inside computed properties (off by default)
      "consistent-this": ERROR,             // enforces consistent naming when capturing the current execution context (off by default)
      "eol-last": 0,                    // enforce newline at the end of file, with no multiple empty lines
      "func-names": ERROR,                  // require function expressions to have a name (off by default)
      "func-style": OFF,                  // enforces use of function declarations or expressions (off by default)
      "indent": 0,                      // this option sets a specific tab width for your code (off by default)
      "key-spacing": 0,                 // enforces spacing between keys and values in object literal properties
      "lines-around-comment": 0,        // enforces empty lines around comments (off by default)
      "linebreak-style": 0,             // disallow mixed 'LF' and 'CRLF' as linebreaks (off by default)
      "max-nested-callbacks": 0,        // specify the maximum depth callbacks can be nested (off by default)
      "new-cap": 0,                     // require a capital letter for constructors
      "new-parens": 0,                  // disallow the omission of parentheses when invoking a constructor with no arguments
      "new-parens": 0,                  // disallow the omission of parentheses when invoking a constructor with no arguments
      "newline-after-var": 0,           // allow/disallow an empty newline after var statement (off by default)
      "no-array-constructor": 0,        // disallow use of the Array constructor
      "no-continue": ERROR,                 // disallow use of the continue statement (off by default)
      "no-inline-comments": 0,          // disallow comments inline after code (off by default)
      "no-lonely-if": 0,                // disallow if as the only statement in an else block (off by default)
      "no-mixed-spaces-and-tabs": 0,    // disallow mixed spaces and tabs for indentation
      "no-multiple-empty-lines": 0,     // disallow multiple empty lines (off by default)
      "no-nested-ternary": 0,           // disallow nested ternary expressions (off by default)
      "no-new-object": 0,               // disallow use of the Object constructor
      "no-spaced-func": ERROR,              // disallow space between function identifier and application
      "no-ternary": 0,                  // disallow the use of ternary operators (off by default)
      "no-trailing-spaces": ERROR,          // disallow trailing whitespace at the end of lines
      "no-underscore-dangle": 0,        // disallow dangling underscores in identifiers
      "one-var": 0,                     // allow just one var statement per function (off by default)
      "operator-assignment": 0,         // require assignment operator shorthand where possible or prohibit it entirely (off by default)
      "operator-linebreak": 0,          // enforce operators to be placed before or after line breaks (off by default)
      "padded-blocks": 0,               // enforce padding within blocks (off by default)
      "quote-props": 0,                 // require quotes around object literal property names (off by default)
      "quotes": 0,                      // specify whether double or single quotes should be used
      "semi-spacing": 0,                // enforce spacing before and after semicolons
      "semi": 0,                        // require or disallow use of semicolons instead of ASI
      "sort-vars": 0,                   // sort variables within the same declaration block (off by default)
      "keyword-spacing": ERROR,        // require a space after certain keywords (off by default)
      "space-before-blocks": ERROR,         // require or disallow space before blocks (off by default)
      "space-before-function-paren": [ERROR, "never"], // require or disallow space before function opening parenthesis (off by default)
      "space-in-parens": ERROR,             // require or disallow spaces inside parentheses (off by default)
      "space-infix-ops": ERROR,             // require spaces around operators
      "space-return-throw-case": 0,     // require a space after return, throw, and case
      "space-unary-ops": ERROR,             // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
      "spaced-comment": 0,              // require or disallow a space immediately following the // or /* in a comment (off by default)
      "wrap-regex": 0,                  // require regex literals to be wrapped in parentheses (off by default)
      
      
      ////////// ECMAScript 6 //////////
      
      "constructor-super": ERROR,      // verify super() callings in constructors (off by default)
      "generator-star-spacing": 0, // enforce the spacing around the * in generator functions (off by default)
      "no-this-before-super": ERROR,   // disallow to use this/super before super() calling in constructors (off by default)
      "no-var": ERROR,                 // require let or const instead of var (off by default)
      "object-shorthand": 0,       // require method and property shorthand syntax for object literals (off by default)
      "prefer-const": ERROR,           // suggest using of const declaration for variables that are never modified after declared (off by default)
      
      
      ////////// Legacy //////////
      
      "max-depth": [WARN, 4],       // specify the maximum depth that blocks can be nested (off by default)
      "max-len": [WARN, 120],         // specify the maximum length of a line in your program (off by default)
      "max-statements": [WARN, 13],  // specify the maximum number of statement allowed in a function (off by default)
      "no-plusplus": 0,      // disallow use of unary operators, ++ and -- (off by default)
      
      "prettier/prettier": "error"
    }
  };
