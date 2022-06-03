import Counter from "./components/counter";
import MissCounter from "./components/missCounter";
const root:HTMLElement | null  = document.getElementById('root')
const field = `<div class="field"></div>`
root?.insertAdjacentHTML('afterbegin', field)
const counter = new Counter()
const missCounter = new MissCounter()
let interval:any
root?.addEventListener('click', (e:MouseEvent) => {
  handleSmash(e)
})

const handleSmash = (e:MouseEvent) => {
  const target = e.target as HTMLElement
  if (target.classList.contains('goblin')) {
    missCounter.setIsSmashed(true)
    counter.increment()
    if (counter.count === 5) {
      clearInterval(interval)
      const result = confirm('Вы выйграли =) Начать заново?')
      if(result) {
        resetCounters()
        addImageToRandomCell()
      }
    }
  }
}

const cell  = (id:number) : string => {
  return `<div class="cell" data-img = ${id}></div>`
}
const addCells = () => {
  const field = document.querySelector('.field')
  for (let i = 0; i < 16; i++) {
    field?.insertAdjacentHTML('afterbegin', cell(i))
  }
}
const addImageToRandomCell = () => {
  const random = Math.ceil(Math.random() * (15));
  let target = document.querySelector(`[data-img="${random}"]`)
  const oldChild= document.querySelector('img')
  target?.insertAdjacentHTML('beforeend', '<img id="img" class="goblin" src="../../src/assets/imgs/goblin.png" alt="goblin">' )
  oldChild?.remove()
  interval = setInterval(() => {
    const random = Math.ceil(Math.random() * (15));
    let target = document.querySelector(`[data-img="${random}"]`)
    const oldChild= document.querySelector('img')
    target?.insertAdjacentHTML('beforeend', '<img id="img" class="goblin" src="../../src/assets/imgs/goblin.png" alt="goblin">' )
    oldChild?.remove()
    !missCounter.isSmashed && missCounter.increment()
    missCounter.setIsSmashed(false)
    if (missCounter.count >= 5) {
      clearInterval(interval)
      const result = confirm('Вы проиграли =( Начать заново?')
      if(result) {
        resetCounters()
        addImageToRandomCell()
      }
    }
  }, 1000)
}

const startGame = () => {
  addCells()
  addImageToRandomCell()
  counter.createCounter();
  missCounter.createCounter();
}

const resetCounters = () => {
  counter.setCount(0)
  missCounter.setCount(0)
}

startGame()
