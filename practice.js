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




function asyncFunct(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asyncFunct2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}
console.log("fetching data1")
let p1= asyncFunct();
p1.then((res)=>{
    console.log(res);
}); 

console.log("fethng data 2")
let p2= asyncFunct2();
p2.then((res)=>{
    console.log(res);
});