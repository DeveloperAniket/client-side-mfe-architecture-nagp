/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {

  // Perform heavy computations
  const result = performHeavyComputation(data);  
  console.log(result);
  postMessage(result);
});

function performHeavyComputation(data: any) {
  // Your heavy computation logic here
  return data.PolicyPremium - ((15 / 100) * data.PolicyPremium);
}
