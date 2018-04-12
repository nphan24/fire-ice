export const fetchMembers = (members) => {
  try {
    const unresolvedMember = members.swornMembers.map(async(url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    });
    const unresolved = Promise.all(unresolvedMember);
    return unresolved;
  } catch (error) {
    throw new Error('error');
  }
};
