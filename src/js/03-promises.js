import Notiflix from 'notiflix';

const form = document.querySelector("form.form");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  
    if (shouldResolve) {
      resolve ({position, delay});
    } else {
      reject ({position, delay});
    }
})}

function promiseRun(e){
  e.preventDefault();
  const amount = Number(e.currentTarget.elements.amount.value);
  const delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);

  function promiseCall({position, delay}) {
    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
  
  setTimeout(() => {
    for (let position = 1; position <= amount; position++) {
      
      if (position === 1) {
        promiseCall({position, delay})
      } 
      else {
        setTimeout(() => {
          promiseCall({position, delay: delay + step*(position-1)})
        }, step*(position-1));
      }
    }
  }, delay)
}

form.addEventListener("submit", promiseRun);




// import Notiflix from 'notiflix';

// const form = document.querySelector("form.form");

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//   const shouldResolve = Math.random() > 0.3;
  
//     if (shouldResolve) {
//       resolve ({position, delay});
//     } else {
//       reject ({position, delay});
//     }
  

// })}


// function promiseRun(e){
//   e.preventDefault();
//   const amount = Number(e.currentTarget.elements.amount.value);
//   const delay = Number(e.currentTarget.elements.delay.value);
//   const step = Number(e.currentTarget.elements.step.value);
//   setTimeout(() => {
//     for (let position = 1; position <= amount; position++) {
      
//       if (position === 1) {

//         createPromise(position, delay)
//         .then(({ position, delay }) => {
//           Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//           // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         })
//         .catch(({ position, delay }) => {
//           Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//           // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//         });

//       } else {
//         setTimeout(() => {
//           createPromise(position, delay)
//           .then(({ position, delay }) => {
//             Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay + step*(position-1)}ms`);
//             // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//           })
//           .catch(({ position, delay }) => {
//             Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay + step*(position-1)}ms`);
//             // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//           });
//         }, step*(position-1));

//       }
//     }
//   }, delay)
// }


// form.addEventListener("submit", promiseRun);