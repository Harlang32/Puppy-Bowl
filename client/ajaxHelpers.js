// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2303-mt-ftb-web-pt/players';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(APIURL);
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
    return result.data.players;
  } catch (error) {
    console.error('Uh oh, trouble fetching players!', error);
  }
};
//    Single Player Cards 
export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2303-mt-ftb-web-pt/players/${playerId}`);
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
    return result.data.player;
  } catch (error) {
    console.error("Uh oh, trouble fetching player!", error);
  }
  console.log(fetchSinglePlayer);
};

//    Adds a New Player 
export const addNewPlayer = async (playerObj) => {
  const test = {
                      "id": 100,
                      "name": "Donald Duck",
                      "breed": "Chihuahua / Miniature Poodle",
                      "status": "bench",
                      "imageUrl": "http://r.ddmcdn.com/w_926/s_f/o_1/cx_42/cy_0/cw_926/ch_1389/APL/uploads/2019/12/Jack-PBXVI.jpg",
                      "createdAt": "2021-09-11T20:08:02.539Z",
                      "updatedAt": "2021-09-11T20:08:02.539Z",
                      "teamId": 1,
                      "cohortId": 1
                    }
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2303-mt-ftb-web-pt/players`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(test),
      },
    );
    const result = await response.json();
    console.log(result);
    console.log(playerObj);
  } catch (error) {
    console.error("Uh oh, trouble adding player!", error);
  }
};

//    Remove Player Button Click 
export const removePlayer = async (playerId) => {
  try{
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2303-mt-ftb-web-pt/players/${playerId}`,
  {
    method: "DELETE",
  });
  const result = await response.json();
  if (result.error) throw result.error;
  console.log(playerId);
  return;
} catch (error) {
  console.error(
    `Sorry, trouble removing player #${playerId} from the roster!`,error);
}
};
