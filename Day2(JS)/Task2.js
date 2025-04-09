const getFee = isMember => isMember ? '$2.00' : '$10.00';
console.log(getFee(true));
console.log(getFee(false));