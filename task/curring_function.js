function fees(f)
{
  console.log("fees is clear")
  return function present (pp)
  {
    console.log("his present more then 75% ")
    return function exam_attempt(e)
  {
    return "yes he is eligibal to give exam"
  }
  }
}
let fee=fees(2000)
p =fee("present")
exam=p("yes")
console.log(exam)
