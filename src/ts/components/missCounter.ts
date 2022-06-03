export default class MissCounter {
  root:HTMLElement | null  = document.getElementById('root')
  counter:HTMLElement = document.createElement('span')
  count:number = 0
  isSmashed = false
  public createCounter() {
    const field = document.querySelector('.counter')
    this.root?.insertBefore(this.counter, field)
    this.counter.classList.add('counter')
    this.counter.insertAdjacentText('afterbegin', 'Промазал: 0 раз')

  }
  public setIsSmashed(bool: boolean) {
    this.isSmashed = bool
  }
  public setCount(value: number) {
    this.count = value
    this.counter.innerText = `Промазал: ${this.count} раз`
  }
  public increment() {
    if (!this.isSmashed) {
      this.count += 1
      this.counter.innerText = `Промазал: ${this.count} раз`
    }
  }

}
