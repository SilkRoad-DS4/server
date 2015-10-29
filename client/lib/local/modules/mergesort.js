//Merge Sort
//Courtesy of https://en.wikipedia.org/wiki/Merge_sort
//Transposed by Jeffrey Nelson to Javascript
//October 19, 2015

function TopDownMergeSort(A){
	var B = new Array();
	TopDownSplitMerge(A,0,A.length,B);
}

function TopDownSplitMerge(A,iBegin,iEnd,B){
	if(iEnd - iBegin < 2){
		return;
	}
	var iMiddle = Math.floor((iEnd + iBegin) / 2);
	TopDownSplitMerge(A,iBegin,iMiddle,B);
	TopDownSplitMerge(A,iMiddle, iEnd, B);
	TopDownMerge(A,iBegin, iMiddle, iEnd, B);
	CopyArray(B, iBegin, iEnd, A);
}

function TopDownMerge(A,iBegin,iMiddle,iEnd, B){
	var i0 = iBegin;
	var i1 = iMiddle
	
	for(var j = iBegin; j < iEnd; j++){
		var testcase = TestCase(A[i0],A[i1], "RenderableObject");
		if(i0 < iMiddle && (i1 >= iEnd || testcase)){
			B[j] = A[i0];
			i0 = i0 + 1;
		}else{
			B[j] = A[i1];
			i1 = i1 + 1;
		}
	}
}

//Setup For RenderableObject.js
function TestCase(C,D,testMethod){
	if(typeof(C) == "undefined" || typeof(D) == "undefined"){
		return true;
	}
	var E;
	var F;
	switch(testMethod){
		case "RenderableObject":
			E = typeof(C["z"]) === "undefined" ? -999999 : C["z"];
			F = typeof(D["z"]) === "undefined" ? -999999 : D["z"];
			break;
		default:
			E = C;
			F = D;
			break;
	}
	
	return E <= F;
}
function CopyArray(B, iBegin, iEnd, A){
	for(var k = iBegin; k < iEnd; k++){
		A[k] = B[k];
	}
}