document.querySelector("#orderForm").addEventListener("submit", event => {
  event.preventDefault();

  // get inputs from order form
  const formInputs = Array.from(event.target.elements);
  console.log(formInputs);

  // construct online order object
  const onlineOrder = formInputs.reduce((acc, curr) => {
    // if input is checked radio
    if (curr.type === "radio" && curr.checked === true) {
      acc[curr.name] = curr.value;
      return acc;
    }
    // if input is select
    if (curr.type === "select-one") {
      acc[curr.name] = curr.value;
      return acc;
    }
    // if input is checked checkbox
    if (curr.type === "checkbox" && curr.checked === true) {
      acc.toppings.push(curr.value);
      return acc;
    }
    // if input is text, telephone, or email
    if (curr.type === "text" || curr.type === "tel" || curr.type === "email") {
      acc[curr.name] = curr.value;
      return acc;
    }
    // if input doesn't fit any criteria above (unchecked inputs, fieldset, and submit button)
    return acc;
    // below: initial accumulator object
  }, {toppings: []})

  console.log("onlineOrder", onlineOrder)
})
