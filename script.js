
// Javascript implementation of QuickSort

const output = document.getElementById("output");
const container = document.getElementById("container");
const bars = [];
const mult = 5;




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

function swapNodes(n1, n2) {

    var p1 = n1.parentNode;
    var p2 = n2.parentNode;
    var i1, i2;

    if ( !p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1) ) return;

    for (var i = 0; i < p1.children.length; i++) {
        if (p1.children[i].isEqualNode(n1)) {
            i1 = i;
        }
    }
    for (var i = 0; i < p2.children.length; i++) {
        if (p2.children[i].isEqualNode(n2)) {
            i2 = i;
        }
    }

    if ( p1.isEqualNode(p2) && i1 < i2 ) {
        i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}

// A utility function to swap two elements
function swap(arr, i, j) {
	let bar1 = bars[i];
	let bar2 = bars[j];
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
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
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

// Function to print an array
function printArray(arr, size) {
	for (let i = 0; i < size; i++){

		/*output.innerHTML += arr[i] + " ";
		output.innerHTML += "<br>";*/
	}

		
}

// Driver Code

let arr = [4,3,2,5,6,7];

let n = arr.length;



renderBars(arr, n);
quickSort(arr, 0, n - 1);
//output.innerHTML  += "Sorted array: <br>";
printArray(arr, n);


// This code is contributed by Saurabh Jaiswal
