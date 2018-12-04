module.exports = {
  findXyzt: (n) => {
    const x = parseInt(Math.sqrt(n), 10);
    let y = 0;
    let z = 0;
    let t = 0;
    if ((n - x * x) > 0) {
      y = parseInt(Math.sqrt(n - x * x), 10);
      if (n - x * x - y * y > 0) {
        z = parseInt(Math.sqrt(n - x * x - y * y), 10);
        if (n - x * x - y * y - z * z > 0) {
          t = parseInt(Math.sqrt(n - x * x - y * y - z * z), 10);
        }
      }
    }
    const str = x + y + z + t;
    return str;
  },
};
