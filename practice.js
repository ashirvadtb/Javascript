// // function getData(dataid,getNextData){
// //     setTimeout(()=>{
// //         console.log("data",dataid);
// //         if(getNextData){
// //             getNextData();
// //         }
// //     },2000);
// // }
// // getData(1,()=>
// // {
// //     getData(2,()=>{
// //         getData(3,()=>{
// //             getData(4);
// //         });
// //     });
// // });



// // let promise = new Promise((resolve,reject)=>{
// //     console.log  ("iam a promise");
// //     resolve("some error occured")})



//  const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("this is a promise");
//         resolve("123");
//         // reject("network error")
//     });
// };
 
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res)
// })
// promise.catch((err)=>{
//     console.log("error occured: ",err)
// })




// function asyncFunct(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }

// function asyncFunct2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }
// console.log("fetching data1")
//  asyncFunct().then((res)=>{
//     // console.log(res);
//     console.log("fethng data 2");
//     asyncFunct2().then((res)=>{
        
//     // console.log(res);
//     });

// }); 

// function getData(dataid)
// {
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataid);
//         resolve("success");
//     },3000);
//    });
// }

// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);


// }
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//         getData(3).then((res)=>{
//             console.log(res)
//         })
//     })
// });

// getData(1).then((res)=>{
//     console.log(res);
//         return getData(2);
// }).then((res)=>{
//     console.log(res);
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })


// async function hello(){
//     console.log("hello"); 
// }


// function getData(dataid)
// {
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataid);
//         resolve("success");
//     },3000);
//    });
// }

// (async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);


// })();

// console.log("a");
// let promise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("b");
//     },2000);
// });
// console.log("c")

function* generateSequence(){
    yield 1;
    yield 2;
    yield 3;
}
// let generator =generateSequence()
// let one = generator.next();
// alert(JSON.stringify(one))
// let two = generator.next();
// alert(JSON.stringify(two))
// let three = generator.next();
// alert(JSON.stringify(three))

// for( let value of  generator){
// alert(value)
// }
// let sequence=[0,...generateSequence()
// ];
// alert(sequence);

// function* generateNumber(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

//  let numbers=generateNumber();
// //  console.log(numbers.next());

//  for( let value of numbers){
//     console.log(value);
//  }

// function* forever(){
//     let i=0;
//     while(true){
//        yield i++;
//     }
// }
// const gen = forever();
// // while(true){
// gen.next().value;
// function* forever() {
//     let i = 0;
//     while (true) {
//       yield i++;
//     }
//   }
  
//   const gen = forever();
  
//   console.log(gen.next().value );
//   console.log(gen.next().value );// 0
//   console.log(gen.next().value );// 0
//   console.log(gen.next().value );// 0
//   console.log(gen.next().value );// 0
//   console.log(gen.next().value );// 0
//   console.log(gen.next().value );// 0
//   console.log(gen.next().value );// 0
//   console.log(gen.next().value );// 0
//   // 0
  // and so on...
  

//   function* digits(){
//     yield* [0,1,2];
//   }

//   function*  letters(){
//     yield* ['a','b'];
//   }

//   function* combine(){
//     yield* digits();
//     yield* letters();
//   }

//   console.log([...combine()]);


// let range={
//     from:1,
//     to:5,

//     *[Symbol.iterator](){
//         for(let value=this.from;value<=this.to;value++){
//             yield value;
//         }
//     }
// };

// alert([...range])

export function practice(user){
    alert(`hello ${user}`)
}