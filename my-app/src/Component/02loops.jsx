import React, { Component } from 'react';

class loops extends Component {
    render() {
        const numbers = ["demo",1,2,3,"test","Hello"]
        // console.log(numbers);

        //for
        // for(let index=0;index<numbers.length;index++)
        // {
        //     const ele = numbers[index];
        //     console.log(ele);
        // }

        //for in
        // for (const key in numbers) {
        //     if (numbers.hasOwnProperty.call(numbers, key)) {
        //         const element = numbers[key];
        //         console.log(element);
                
        //     }
        // }

        //for of
        // for (const iterator of numbers) {
        //     console.log(iterator);
        // }

        //foreach
        // numbers.forEach(element => {
        //     console.log(element);
        // });


        //map
        const data = numbers.map((res,i)=>{
            return <h1 key={i}>{res}</h1>
        })
        return (
            <div>
               {data}
            </div>
        );
    }
}

export default loops;