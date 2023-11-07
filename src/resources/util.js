const defaultName = name => name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'');
const isReady = col => col.every(d => d === true);

export {
  defaultName,
  isReady,
}
