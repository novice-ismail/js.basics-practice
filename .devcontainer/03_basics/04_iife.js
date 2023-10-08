// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
    
})(); // here the IIFE don't know where to end the context , to tell it we need to explicitly add ";"at the end

( (name) => {
    // unnamed IIFE with parameter
    console.log(`DB CONNECTED TWO ${name}`);
})(`aman`)