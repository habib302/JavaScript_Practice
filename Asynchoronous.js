//scenario 1: synchronize block 

// const proceeOrder=()=>{
//     console.log(`processing order for customer 1`);
//     var currentTime=new Date().getTime();

//     while(currentTime+5000>=new Date().getTime()){

//     }
//     console.log(`order processed for customer 1`);
// }

// console.log(`take order for customer 1`);
// proceeOrder();
// console.log(`completed order for customer 1`);



//scenario 2: asynchronize 

// const proceeOrder=()=>{
//     console.log(`processing order for customer 1`);
//     var currentTime=new Date().getTime();

//     setTimeout(()=>{
//         console.log(`cooking complete`);
//     },5000);
//     console.log(`order processed for customer 1`);
// }

// console.log(`take order for customer 1`);
// proceeOrder();
// console.log(`completed order for customer 1`);


//scenario 3: callback function

// const takeOrder=(customer,callback)=>{
//     console.log(`take order for ${customer}`);
//     callback(customer);
// }

// const proceeOrder=(customer,callback)=>{
//     console.log(`processing order for ${customer}`);

//     setTimeout(()=>{
//         console.log(`cooking complete`);
//         console.log(`order processed for ${customer}`);
//     },3000);
    
// }

// const completeOrder=()=>{
//     console.log(`completed order for customer 1`);
// }

// takeOrder('customer 1', (customer)=>{
//     proceeOrder(customer,(customer)=>{
//         completeOrder(customer);
//     });
// });

// console.log(`hello`)



//scenario 4: Promises

// const hasMeeting=false;

// const meeting = new Promise((resolve,reject)=>{
//     if(hasMeeting){
//         const meetingDetails={
//             name:'technical meeting',
//             location:'google meet',
//             time:'2.00pm'
//         }
//         resolve(meetingDetails);
//     }
//     else{
//         reject(new Error('meeting already schedule'));
//     }
// })

// meeting.then((res)=>{
//             console.log(res);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })


//scenario 5: Promises another way to create

// const hasMeeting=true;

// const meeting = new Promise((resolve,reject)=>{
//     if(hasMeeting){
//         const meetingDetails={
//             name:'technical meeting',
//             location:'google meet',
//             time:'2.00pm'
//         }
//         resolve(meetingDetails);
//     }
//     else{
//         reject(new Error('meeting already schedule'));
//     }
// })

//general way to create promise
// const addToCalendar=(meetingDetails)=>{
//     return new Promise((resolve,reject)=>{
//         const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calendar);
//     })
// }

//another way to create promise
// const addToCalendar=(meetingDetails)=>{ 
    
//     const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calendar);
    
// }

// meeting
// .then(addToCalendar)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// console.log(`Hello`);


//scenario 6: multiple promise handle

// const promise1 = Promise.resolve(`promise 1 solved.`);
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(`promise 2 solved.`)
//     },3000)
// })

// promise1.then((res)=> console.log(res));
// promise2.then((res)=> console.log(res));


//single then for all promise.... return a single array
// Promise.all([promise1,promise2]).then((res)=>{
//     console.log(res);
// })


//jei promise ta first e habe only oita return korbe
// Promise.race([promise1,promise2]).then((res)=>{
//     console.log(res);
// })


//scenario 7: async-await

function myFunc2(){
    return `Hello 2`;
}

async function myFunc3(){
    return `Hello 3`;
}

//or arekvabe lekha jay... myFunc3 & myFunc4 duitai same
function myFunc4(){
    return Promise.resolve(`Hello 4`)
}

//hello 
console.log(myFunc2());
//akta promise return korbe... orhtat object
console.log(myFunc3());

console.log(myFunc4());



//scenario 8: async-await
const hasMeeting=false;

const meeting = new Promise((resolve,reject)=>{
    if(hasMeeting){
        const meetingDetails={
            name:'technical meeting',
            location:'google meet',
            time:'2.00pm'
        }
        resolve(meetingDetails);
    }
    else{
        reject(new Error('meeting already schedule'));
    }
})

const addToCalendar=(meetingDetails)=>{
    return new Promise((resolve,reject)=>{
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calendar);
    })
}

async function myMeeting(){
    try{
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    }
    catch{
        console.log(`meeting allready finished.`);
    }
}

myMeeting();
console.log(`hello 5`);