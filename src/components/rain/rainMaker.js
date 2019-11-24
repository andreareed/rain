const makeItRain = () => {
  let increment = 0
  const drops = []

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1)
    //random number between 5 and 2
    const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2)
    //increment
    increment += randoFiver
    //add in a new raindrop with various randomizations to certain CSS properties

    const dropStyle = {
      left: `${increment}%`,
      bottom: `${randoFiver + randoFiver - 1 + 100}%`,
      animationDelay: `0.${randoHundo}s`,
      animationDuration: `0.5${randoHundo}s`,
    }

    const stemStyle = {
      animationDelay: `0.${randoHundo}s`,
      animationDuration: `0.5${randoHundo}s`,
    }

    const splatStyle = {
      animationDelay: `0.${randoHundo}s`,
      animationDuration: `0.5${randoHundo}s`,
    }

    drops.push({ front: { dropStyle, stemStyle, splatStyle } })
  }

  return drops.map(drop => {
    drop.back = {
      dropStyle: { ...drop.front.dropStyle },
      stemStyle: { ...drop.front.stemStyle },
      splatStyle: { ...drop.front.splatStyle },
    }
    drop.back.dropStyle.right = drop.back.dropStyle.left
    delete drop.back.dropStyle.left
    return drop
  })
}

export default makeItRain
