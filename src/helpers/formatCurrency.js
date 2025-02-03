export default (price) => {
  console.log(+price, '<<<<<<<helper')
  return `$${Number(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}
