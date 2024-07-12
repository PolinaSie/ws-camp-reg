console.log('test 1')

getData();

async function getData() {
    const url = "https://jhs-workshop-registration-c79c1968983e.herokuapp.com/registration";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }