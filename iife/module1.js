var Module1 = (function () {
  'use strinct';

  const session = {};
  const PI = 3.14;

  function render () {
    console.log("render function called");
  }

  function printPi() {
    console.log(PI);
  }

  return {
    render: render,
    printPi: printPi
  }

}());