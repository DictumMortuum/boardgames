const defaultName = name => name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'');

export {
  defaultName,
}
