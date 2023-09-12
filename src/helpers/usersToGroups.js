import friends from "../friends";

function usersToGroups() {
  let i = 0;
  let j = 0;
  let groups = [];
  const friendsLength = friends.length;
  while (i < friendsLength) {
    groups.push([]);
    if (j % 2 === 0) {
      for (let k = 0; k < 3; k++) {
        groups[j].push(friends[i]);
        i += 1;
        if (i === friendsLength) {
          break;
        }
      }
    } else {
      for (let k = 0; k < 2; k++) {
        groups[j].push(friends[i]);
        i += 1;
        if (i === friendsLength) {
          break;
        }
      }
    }
    j += 1;
  }

  return groups;
}

export default usersToGroups;
