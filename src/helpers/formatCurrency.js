export default (price) => {
  return `$${Number(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}
