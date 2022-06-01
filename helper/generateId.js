export function GGID() {
  let id = Date.now(Math.floor(Math.random() * 100))
    .toString(16)
    .slice(2);
  return id;
}
