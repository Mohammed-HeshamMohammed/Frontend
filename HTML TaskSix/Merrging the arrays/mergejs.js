/*function mergeAndRemoveDuplicates() 
{
    const array1Input = document.getElementById('array1').value;
    const array2Input = document.getElementById('array2').value;
  
    // Convert input strings to arrays
    const array1 = array1Input.split(',').map(item => parseInt(item, 10));
    const array2 = array2Input.split(',').map(item => parseInt(item, 10));
  
    // Merge arrays and remove duplicates
    const mergedArray = mergeAndRemoveDuplicatesHelper(array1, array2);
  
    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = 'Merged array with duplicates removed: ' + mergedArray;
  }
  
  function mergeAndRemoveDuplicatesHelper(arr1, arr2) 
  {
    const merged = [...arr1, ...arr2];
    const uniqueMerged = [];
  
    for (let i = 0; i < merged.length; i++) 
    {
      let isDuplicate = false;
      for (let j = 0; j < uniqueMerged.length; j++) {
        if (merged[i] === uniqueMerged[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueMerged.push(merged[i]);
      }
    }
  
    return uniqueMerged;
  }
  */
  function mergeAndRemoveDuplicates() 
  {
    const array1Input = document.getElementById('array1').value;
    const array2Input = document.getElementById('array2').value;
  
    const array1 = array1Input.split(',').map(item => parseInt(item, 10));
    const array2 = array2Input.split(',').map(item => parseInt(item, 10));
  
    const mergedArray = mergeAndRemoveDuplicatesHelper(array1, array2);
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = 'Merged array with duplicates removed: ' + mergedArray;
  }
  
  function mergeAndRemoveDuplicatesHelper(arr1, arr2) {
    const merged = arr1.concat(arr2);
    const uniqueMerged = [];
  
    merged.forEach(item => {
      if (!uniqueMerged.includes(item)) {
        uniqueMerged.push(item);
      }
    });
  
    return uniqueMerged;
  }
  