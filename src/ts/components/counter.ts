export default class Counter {
  root:HTMLElement | null  = document.getElementById('root')
  counter:HTMLElement = document.createElement('span')
  count:number = 0
  public createCounter() {
    const field = document.querySelector('.field')
    this.root?.insertBefore(this.counter, field)
    this.counter.classList.add('counter')
    this.counter.insertAdjacentText('afterbegin', 'Попал: 0 раз')

  }

  public setCount(value: number) {
    this.count = value
    this.counter.innerText = `Попал: ${this.count} раз`
  }

  public increment() {
    this.count += 1
    this.counter.innerText = `Попал: ${this.count} раз`
  }

}
