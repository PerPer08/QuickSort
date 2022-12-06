
// Javascript implementation of QuickSort

const output = document.getElementById("output");
const container = document.getElementById("container");
const bars = [];
const anima = 0;




// this function will create bars for visual representation
function renderBars(arr, n){
	for(i = 0; i < n; i++){
		var div = document.createElement('div');
		div.id = `bar${i}`;
		div.innerHTML = `this is bar ${i}`;
		div.className = "bar";
		div.style.height = `${(arr[i]) * 20 }px`
		container.appendChild(div);
		bars.push(document.getElementById(`bar${i}`))
	}
}

 function swapNodes(nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;
	
    // Move `nodeA` to before the `nodeB`
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move `nodeB` to before the sibling of `nodeA`
    parentA.insertBefore(nodeB, siblingA);
};

// A utility function to swap two elements
function swap(arr, i, j) {
	let bar1 = bars[i];
	let bar2 = bars[j];
	let temp = arr[i];
	
	arr[i] = arr[j];
	arr[j] = temp;
	
	let tempB = bars[i];

	bars[i] = bars[j];
	bars[j] = tempB;
	
	swapNodes(bar1,bar2)

}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
function partition(arr, low, high) {

	// pivot
	let pivot = arr[high];

	// Index of smaller element and
	// indicates the right position
	// of pivot found so far
	let i = (low - 1);

	for (let j = low; j <= high - 1; j++) {

		// If current element is smaller
		// than the pivot
		if (arr[j] < pivot) {

			// Increment index of
			// smaller element
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}

/* The main function that implements QuickSort
		arr[] --> Array to be sorted,
		low --> Starting index,
		high --> Ending index
*/
function quickSort(arr, low, high) {
	if (low < high) {

		// pi is partitioning index, arr[p]
		// is now at right place
		let pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
	
		quickSort(arr, low, pi - 1)
		quickSort(arr, pi + 1, high)
	}
}

// Function to print an array
function printArray(arr, size) {
	for (let i = 0; i < size; i++){

		output.innerHTML += arr[i] + " ";
		output.innerHTML += "<br>";
	}

		
}

// Driver Code

let arr = [3,9,6,7,8,9,2,3,5];

let n = arr.length;



renderBars(arr, n);
quickSort(arr, 0, n - 1)
//setInterval("quickSort(arr, 0, n - 1)", anima);
//output.innerHTML  += "Sorted array: <br>";
printArray(arr, n);


// This code is contributed by Saurabh Jaiswal
