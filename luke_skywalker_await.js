function handleError(err) {
    console.log(`Request failed: ${err}`);
  }
  
  async function getLuke() {
    try {
      const response = await fetch('https://swapi.co/api/people/1/');
      const luke = await response.json();
      const responseHomeworld = await fetch(luke.homeworld);
      luke.homeworld = await responseHomeworld.json();
      console.log(`${luke.name} nació en ${luke.homeworld.name}`);
    } 
    catch (err) {
      handleError(err);
    }
  }

getLuke();