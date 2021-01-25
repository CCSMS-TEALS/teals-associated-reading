(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"CenteredDiv",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(98)),o=a(81),s={id:"unit1",title:"Unit 1 - Introduction to Python",sidebar_label:"Unit 1 - Introduction to Python",slug:"/"},l={unversionedId:"unit1",id:"unit1",isDocsHomePage:!1,title:"Unit 1 - Introduction to Python",description:"(<div style={{",source:"@site/docs/unit1.mdx",slug:"/",permalink:"teals-associated-reading/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/unit1.mdx",version:"current",sidebar_label:"Unit 1 - Introduction to Python",sidebar:"someSidebar"},u=[{value:"1.1",id:"11",children:[{value:"Values and Types",id:"values-and-types",children:[]},{value:"Operators and Operands",id:"operators-and-operands",children:[]},{value:"Expressions and Statements",id:"expressions-and-statements",children:[]}]},{value:"1.2",id:"12",children:[{value:"Variables",id:"variables",children:[]},{value:"Variable names and keywords",id:"variable-names-and-keywords",children:[]}]},{value:"1.3",id:"13",children:[{value:"Debugging",id:"debugging",children:[]},{value:"Experimental debugging",id:"experimental-debugging",children:[]}]}],b=function(e){var t=e.children;return Object(i.b)("div",{style:{width:"50%",margin:"0 auto",textAlign:"center"}},t)},c={toc:u,CenteredDiv:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"11"},"1.1"),Object(i.b)("h3",{id:"values-and-types"},"Values and Types"),Object(i.b)("p",null,"A value is one of the basic things a program works with, like a letter or a number. The values we have seen so far are 1, 2, and 'Hello, World!'."),Object(i.b)("p",null,"These values belong to different types: 2 is an integer, and 'Hello, World!' is a string, so-called because it contains a \u201cstring\u201d of letters. You (and the interpreter) can identify strings because they are enclosed in quotation marks."),Object(i.b)("p",null,"If you are not sure what type a value has, the interpreter can tell you."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),">>> type('Hello, World!')\n<type 'str'=\"\">\n\n>>> type(17)\n<type 'int'=\"\">\n")),Object(i.b)("p",null,"Not surprisingly, strings belong to the type ",Object(i.b)("inlineCode",{parentName:"p"},"str")," and integers belong to the type ",Object(i.b)("inlineCode",{parentName:"p"},"int"),". Less obviously, numbers with a decimal point belong to a type called float, because these numbers are represented in a format called floating-point."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),">>> type(3.2)\n<type 'float'=\"\">\n")),Object(i.b)("p",null,"What about values like '17' and '3.2'? They look like numbers, but they are in quotation marks like strings."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),">>> type('17')\n<type 'str'=\"\">\n>>> type('3.2')\n<type 'str'=\"\">\n")),Object(i.b)("p",null,"They\u2019re strings. When you type a large integer, you might be tempted to use commas between groups of three digits, as in 1,000,000. This is not a legal integer in Python, but it is legal:"),Object(i.b)("p",null,"Well, that\u2019s not what we expected at all! Python interprets 1,000,000 as a comma-separated sequence of integers. This is the first example we have seen of a semantic error: the code runs without producing an error message, but it doesn\u2019t do the \u201cright\u201d thing."),Object(i.b)("h3",{id:"operators-and-operands"},"Operators and Operands"),Object(i.b)("p",null,"Operators are special symbols that represent computations like addition and multiplication. The values the operator is applied to are called operands."),Object(i.b)("p",null,"The operators +, -, , /, // and * perform addition, subtraction, multiplication, true division, floor division, and exponentiation, as in the following examples:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"20+32   hour-1   hour*60+minute   minute/60   minute//60   5**2   (5+9)*(15-7)")),Object(i.b)("p",null,"Python 3 has two division operators. The / operator, also known as true division, will always produce a floating point answer. The // operator, also known as floor division, will round the quotient down to the nearest integer:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"minute=170\n>>> minute / 60\n2.8333333333333335\n>>> minute // 60\n2\n")),Object(i.b)("h3",{id:"expressions-and-statements"},"Expressions and Statements"),Object(i.b)("p",null,"An expression is a combination of values, variables, and operators. A value all by itself is considered an expression, and so is a variable, so the following are all legal expressions (assuming that the variable x has been assigned a value):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"17\nx\nx + 17\n")),Object(i.b)("p",null,"A statement is a unit of code that the Python interpreter can execute. We have seen two kinds of statement: print and assignment. Technically an expression is also a statement, but it is probably simpler to think of them as different things. The important difference is that an expression has a value; a statement does not."),Object(i.b)("h2",{id:"12"},"1.2"),Object(i.b)("h3",{id:"variables"},"Variables"),Object(i.b)("p",null,"One of the most powerful features of a programming language is the ability to manipulate variables. A variable is a name that refers to a value."),Object(i.b)("p",null,"An assignment statement creates new variables and gives them values:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),">>> message = 'And now for something completely different'\n>>> n = 17\n>>> pi = 3.1415926535897932\n")),Object(i.b)("p",null,"This example makes three assignments. The first assigns a string to a new variable named message; the second gives the integer 17 to n; the third assigns the (approximate) value of \u03c0 to pi. A common way to represent variables on paper is to write the name with an arrow pointing to the variable\u2019s value. This kind of figure is called a state diagram because it shows what state each of the variables is in (think of it as the variable\u2019s state of mind). Figure 2.1 shows the result of the previous example."),Object(i.b)(b,{mdxType:"CenteredDiv"},Object(i.b)("img",{alt:"State Diagram",src:Object(o.a)("img/state-diagram.png")}),Object(i.b)("p",null,"State Diagram")),Object(i.b)("p",null,"The type of a variable is the type of the value it refers to."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),">>> type(message)\n<type 'str'=\"\">\n>>> type(n)\n<type 'int'=\"\">\n>>> type(pi)\n<type 'float'=\"\">\n")),Object(i.b)("h3",{id:"variable-names-and-keywords"},"Variable names and keywords"),Object(i.b)("p",null,"Programmers generally choose names for their variables that are meaningful\u2014they document what the variable is used for."),Object(i.b)("p",null,"Variable names can be arbitrarily long. They can contain both letters and numbers, but they have to begin with a letter. It is legal to use uppercase letters, but it is a good idea to begin variable names with a lowercase letter (you\u2019ll see why later)."),Object(i.b)("p",null,"The underscore character, _, can appear in a name. It is often used in names with multiple words, such as ",Object(i.b)("inlineCode",{parentName:"p"},"my_name")," or ",Object(i.b)("inlineCode",{parentName:"p"},"airspeed_of_unladen_swallow"),"."),Object(i.b)("p",null,"If you give a variable an illegal name, you get a syntax error:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),">>> 76trombones = 'big parade'\nSyntaxError: invalid syntax\n>>> more@ = 1000000\nSyntaxError: invalid syntax\n>>> class = 'Advanced Theoretical Zymurgy'\nSyntaxError: invalid syntax\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"76trombones")," is illegal because it does not begin with a letter. ",Object(i.b)("inlineCode",{parentName:"p"},"more@")," is illegal because it contains an illegal character, ",Object(i.b)("inlineCode",{parentName:"p"},"@"),". But what\u2019s wrong with class?"),Object(i.b)("p",null,"It turns out that class is one of Python\u2019s keywords. The interpreter uses keywords to recognize the structure of the program, and they cannot be used as variable names."),Object(i.b)("p",null,"Python 2 has 31 keywords:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"and       del       from      not       while\nas        elif      global    or        with\nassert    else      if        pass      yield\nbreak     except    import    print\nclass     exec      in        raise\ncontinue  finally   is        return\ndef       for       lambda    try\n")),Object(i.b)("p",null,"In Python 3, exec is no longer a keyword, but nonlocal is. You might want to keep this list handy. If the interpreter complains about one of your variable names and you don\u2019t know why, see if it is on this list."),Object(i.b)("h2",{id:"13"},"1.3"),Object(i.b)("h3",{id:"debugging"},"Debugging"),Object(i.b)("p",null,"Programming is error-prone. For whimsical reasons, programming errors are called bugs and the process of tracking them down is called debugging."),Object(i.b)("p",null,"Three kinds of errors can occur in a program: ",Object(i.b)("inlineCode",{parentName:"p"},"syntax errors"),", ",Object(i.b)("inlineCode",{parentName:"p"},"runtime errors"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"semantic errors"),". It is useful to distinguish between them in order to track them down more quickly."),Object(i.b)("h4",{id:"syntax-errors"},"Syntax errors"),Object(i.b)("p",null,"Python can only execute a program if the syntax is correct; otherwise, the interpreter displays an error message. Syntax refers to the structure of a program and the rules about that structure. For example, parentheses have to come in matching pairs, so (1 + 2) is legal, but 8) is a syntax error."),Object(i.b)("p",null,"In English, readers can tolerate most syntax errors, which is why we can read the poetry of e. e. cummings without spewing error messages. Python is not so forgiving. If there is a single syntax error anywhere in your program, Python will display an error message and quit, and you will not be able to run your program. During the first few weeks of your programming career, you will probably spend a lot of time tracking down syntax errors. As you gain experience, you will make fewer errors and find them faster."),Object(i.b)("h4",{id:"runtime-errors"},"Runtime errors"),Object(i.b)("p",null,"The second type of error is a runtime error, so called because the error does not appear until after the program has started running. These errors are also called exceptions because they usually indicate that something exceptional (and bad) has happened."),Object(i.b)("p",null,"Runtime errors are rare in the simple programs you will see in the first few chapters, so it might be a while before you encounter one."),Object(i.b)("h4",{id:"semantic-errors"},"Semantic errors"),Object(i.b)("p",null,"The third type of error is the semantic error. If there is a semantic error in your program, it will run successfully in the sense that the computer will not generate any error messages, but it will not do the right thing. It will do something else. Specifically, it will do what you told it to do."),Object(i.b)("p",null,"The problem is that the program you wrote is not the program you wanted to write. The meaning of the program (its semantics) is wrong. Identifying semantic errors can be tricky because it requires you to work backward by looking at the output of the program and trying to figure out what it is doing."),Object(i.b)("h3",{id:"experimental-debugging"},"Experimental debugging"),Object(i.b)("p",null,"One of the most important skills you will acquire is debugging. Although it can be frustrating, debugging is one of the most intellectually rich, challenging, and interesting parts of programming. In some ways, debugging is like detective work. You are confronted with clues, and you have to infer the processes and events that led to the results you see."),Object(i.b)("p",null,"Debugging is also like an experimental science. Once you have an idea about what is going wrong, you modify your program and try again. If your hypothesis was correct, then you can predict the result of the modification, and you take a step closer to a working program. If your hypothesis was wrong, you have to come up with a new one. As Sherlock Holmes pointed out, \u201cWhen you have eliminated the impossible, whatever remains, however improbable, must be the truth.\u201d (A. Conan Doyle, The Sign of Four)"),Object(i.b)("p",null,"For some people, programming and debugging are the same thing. That is, programming is the process of gradually debugging a program until it does what you want. The idea is that you should start with a program that does something and make small modifications, debugging them as you go, so that you always have a working program."),Object(i.b)("p",null,"For example, Linux is an operating system that contains thousands of lines of code, but it started out as a simple program Linus Torvalds used to explore the Intel 80386 chip. According to Larry Greenfield, \u201cOne of Linus\u2019s earlier projects was a program that would switch between printing AAAA and BBBB. This later evolved to Linux.\u201d (The Linux Users\u2019 Guide Beta Version 1)."))}p.isMDXComponent=!0}}]);