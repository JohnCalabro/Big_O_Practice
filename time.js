function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }

  logUpTo(10) 

  // Answer => O(n). Is linear with size of input be it 10 or 1000 ect.

  function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }

  logAtLeast10(20)

  // Answer = >  O(n). Is still linear


  function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }

  // Answer = >  O(1). Logs at most 10 every time never more. Difference between input
  // of 1, 9, 10 or 20 is so small because the most it can go is to 10

  logAtMost10(8)      // 1-8
  logAtMost10(15)     // 1-10


  function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

  // Answer = >   O(n)  result depends on size of input

  function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }

  subtotals([1,2,3,4,5])

    // Answer = >   O(n^2)     nested loop

    function vowelCount(str) {
        let vowelCount = {};
        const vowels = "aeiouAEIOU";
      
        for (let char of str) {
          if(vowels.includes(char)) {
            if(char in vowelCount) {
              vowelCount[char] += 1;
            } else {
              vowelCount[char] = 1;
            }
          }
        }
      
        return vowelCount;
      }

      vowelCount(a,b,c)
 
//ANSWER =>   O(n)     depends on input size
