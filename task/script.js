function ready(w)
{
  if(w==1)
  {
    return w+". Be Ready"
  }
}
function go(w)
{
  return w + "- to - go"
}

function wait(ready,go,w)
{
  return go(ready(w))
}
let f=wait(ready,go,1)
console.log(f)