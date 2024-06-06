import React from 'react';

export default function PopularProducts() {
    const age = 23;
    let result;

    if(age >= 18){ 
        result = <button>You are eligible</button>;
} else {
    result = <button>You are not eligible</button>;
}

return(
    <div>
        {result}
    </div>
);
}

