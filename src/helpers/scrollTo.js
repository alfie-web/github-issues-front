// direction => {top: value}
// behavior => 'auto', 'instant', 'smooth'
const scrollTo = (direction, behavior = 'auto') => { 
   window.scrollTo({
      ...direction,
      behavior,
   })
}

export default scrollTo
